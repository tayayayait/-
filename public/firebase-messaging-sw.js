
// Scripts for firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
// Note: We cannot use import.meta.env here as it's outside the build process usually, 
// unless processed by a bundler. For a simple public file, we arguably need to hardcode it 
// or use a build step. 
// However, for MVP and standard Firebase Setup, we can try to fetch config or just handle background messages 
// if the main app registers it correctly.
//
// STANDARD APPROACH: 
// The main app registers the SW. Firebase SDK in main app handles the config validation.
// In the SW, we often just need to initialize default app if we want to handle background events manually.
// But standard `firebase-messaging-sw.js` often needs the full config if we want `onBackgroundMessage`.

// For now, let's setup a basic placeholder that expects configuration.
// CAUTION: This might fail if variables aren't replaced. 
// A common pattern in Vite is to NOT use env vars in public/ files without a build step.
// We will write a defensive SW.

const firebaseConfig = {
  apiKey: "AIzaSyCMKKFBzC4FAF_nFUAiuxr3-Zwg83k0FQA",
  authDomain: "example-ver.firebaseapp.com",
  projectId: "example-ver",
  storageBucket: "example-ver.firebasestorage.app",
  messagingSenderId: "270084843540",
  appId: "1:270084843540:web:f85a6f4778da6368df1f01",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// For this MVP step, since we can't inject keys easily, we'll create a minimal valid SW 
// that doesn't crash, but document that it needs config.
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
});
