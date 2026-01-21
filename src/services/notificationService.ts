
import { messaging } from '@/lib/firebase';
import { getToken, onMessage } from 'firebase/messaging';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

export const notificationService = {
  // Request permission and get token
  async requestPermission(): Promise<string | null> {
    if (!messaging) {
      console.warn('Firebase messaging not initialized.');
      return null;
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        });
        console.log('FCM Token:', token);
        
        // Save token to Supabase
        if (token) {
          await this.saveTokenToDatabase(token);
        }
        
        return token;
      } else {
        console.warn('Notification permission denied.');
        return null;
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return null;
    }
  },

  // Save FCM token to Supabase
  async saveTokenToDatabase(token: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('fcm_tokens')
        .upsert(
          { token, device_type: 'web' },
          { onConflict: 'token' }
        );
      
      if (error) {
        console.error('Error saving FCM token:', error);
      } else {
        console.log('FCM token saved to database');
      }
    } catch (error) {
      console.error('Error saving FCM token:', error);
    }
  },

  // Listen for foreground messages
  onForegroundMessage(callback: (payload: any) => void) {
    if (!messaging) return;
    onMessage(messaging, (payload) => {
      console.log('Foreground message received:', payload);
      toast.info(payload.notification?.title || '알림', {
        description: payload.notification?.body,
      });
      callback(payload);
    });
  },

  // Test Notification (Local)
  sendTestNotification(title: string, body: string) {
    if (!("Notification" in window)) {
      toast.error("이 브라우저는 알림을 지원하지 않습니다.");
      return;
    }

    const send = () => {
      new Notification(`[테스트 발송] ${title}`, {
        body: body,
        icon: '/pwa-192x192.png' // Ensure this icon exists or use default
      });
      toast.success('알림이 발송되었습니다 (로컬 테스트)');
    };

    if (Notification.permission === "granted") {
      send();
      return;
    }

    if (Notification.permission === "denied") {
      toast.warning('알림 권한이 필요합니다. 설정에서 권한을 허용해주세요.');
      return;
    }

    // Request permission when it's in "default" state
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          send();
        } else {
          toast.warning('알림 권한이 필요합니다. 설정에서 권한을 허용해주세요.');
        }
      })
      .catch((error) => {
        console.error('Error requesting notification permission:', error);
        toast.warning('알림 권한이 필요합니다. 설정에서 권한을 허용해주세요.');
      });
  },

  // Send real push notification to all registered users via Edge Function
  async sendPushToAll(title: string, body: string): Promise<{ success: boolean; sent?: number }> {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      const response = await fetch(`${supabaseUrl}/functions/v1/send-notification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({ title, body }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success(`알림이 ${result.sent}명에게 발송되었습니다!`);
        return { success: true, sent: result.sent };
      } else {
        console.error('Push notification failed:', result);
        toast.error('알림 발송 실패');
        return { success: false };
      }
    } catch (error) {
      console.error('Error sending push notification:', error);
      toast.error('알림 발송 중 오류 발생');
      return { success: false };
    }
  }
};
