// Supabase Edge Function: Send FCM Push Notification
// Deploy with: supabase functions deploy send-notification

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const FIREBASE_PROJECT_ID = 'example-ver';

// Service Account for Firebase Admin SDK
const SERVICE_ACCOUNT = {
  type: "service_account",
  project_id: "example-ver",
  private_key_id: "ac54e74d121ef7ea3dfcc75b3dceb42b84b8336a",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpooRYJMhQFkx0\nM8iJExw4hd/qEdDt9attLarR7/5ZlD0QEhsbweg3SnO/2jfmLwb3wyuJgG0XjWe2\nCTU03fNJB2W0xb6+iDggxsArVFhhrppCGZ5Epiq9jAhe+Y0JRDHGY7WlHYFMUnKh\nvr2qS32HjCl89404yNdLFgTGXk4IvehnOb+Ct50cVYlP4kiLnKnwRFxtJDnQsYHE\nBA5FJWFDJ2qfYG3V+ml8wHof00CJAnDJWq+Wa+8xTP7jbkEiUhmrFPoVGgRAyHaY\nzlCgmqHo6wslaAKfsVG9XlKvAAVW5UeRi8oJRneLju7IfbwYHCDaktC9RQvQTTZE\nprQPDx9BAgMBAAECggEAO5rzTdV+3UU4kAwyBphEbkf8Kc8gzrxoA/Dr+OCPSwKf\ngioahGJaKjNrAJq40ZTsqdpWTfZmXsQ9EOWjYHQsrBiBUEe7gk9zCXFMzOzSMWCc\nq2U9C3onwnqV5mlheUQRCVi31tDLQfomdVcEZfYooZxKZ7LEWJOZsrSF8P3qBX/C\neOMFLtdlUP3PDPyRkk0EzyNYgjJtIm9kfEQrE2EbQSR2P5L8EnC9Gk3sJoNlyw2L\nF/oM2cZiSrRZbPNPVlW0zt1Nc90Hv0lauZWimjHJcpPcWXquBPlDoWT4klb4UICC\nE1BlskaPe1qKIDfoCAcH7V3n5MC4lyEnJ8LgYpVCEQKBgQDgA+B9rScJKk4Pf3wk\n9nA361Fak9m3Arh7HSbEkMwuVTZuoA3urSCdfvPQEQzHH3mtGs+jVn9OU7grmE1a\nY73v3P+aALh4HO1Os4gBF0GWnnEI3XGJPTbvOHR65jrHx0TaLTscuKf5LJ7OadHB\n+AqfolyVnbuz6kMwHq4htnlGYwKBgQDB2vMuVjP+nnCYxuMb5wJ6VUGKewgVcvx2\nRPCBVqc11t2l0ZiJgTLqPXGF2zKpGUcP1oG+szzCHX8USmirOn+VlpCAqVHmLvXy\ni9imyKpVucO0Ivn+H9Q/RXOU6aMatE2k+nRq8IWSfk9FSq7ovToxcLW0n6QNrw7N\nFhLOUQ1TCwKBgF0NXzf1MAzflNNdOl1EPPMNfZqpZbtelvEU9+CY4Sex381uELt/\nENg7Pt3D51HjYjCkvXF04abQoeUB+8e7PM+hNk9rUzUZlv2lF66UUXtWT0/GZH4E\nfog6JDBU6D/KJ3CVb0OL9MJNZZ4KWMZA2XDcCadggPLIMaaQZ/a7DH9PAoGBAIma\nmbPyjMXYQaSwyNUtjZy4l+Vsn7hZ/ssU9INatyaIdp0VwmkYxMNxCfwyNCvEPaUI\nZuCu6hoARgxpJRMmWxob3kb16aSzAPJCQm9hUUe4rSpZCYtRnJ+s9PZnQdfa1KKf\nBbRDNw1di3dsI+whJgWiM9ka2KC9+oupd3/sGMExAoGAMwpfNq+73RCCriXGze7Q\n96nm7iH4VbkNs3U4uFmemPS4hfPSdkERx+ONAWPABnoIKE/T+cCrRvxHb9DAH3sV\nguW8B/U9HBpyD9DnAT9owv/sWC4KzUuWfxkAntKyJLWZoEK0Hwo4B0l/IkBJJ62f\nxS11XUp+vB2FsF4JDlSdqk0=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@example-ver.iam.gserviceaccount.com",
  client_id: "106474726442633495050",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40example-ver.iam.gserviceaccount.com",
};

// Generate JWT for Firebase authentication
async function getAccessToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: SERVICE_ACCOUNT.client_email,
    sub: SERVICE_ACCOUNT.client_email,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
  };

  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  // Import the private key and sign
  const pemHeader = '-----BEGIN PRIVATE KEY-----';
  const pemFooter = '-----END PRIVATE KEY-----';
  const pemContents = SERVICE_ACCOUNT.private_key.replace(pemHeader, '').replace(pemFooter, '').replace(/\n/g, '');
  const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryDer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(unsignedToken)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const jwt = `${unsignedToken}.${encodedSignature}`;

  // Exchange JWT for access token
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

// Send FCM notification
async function sendFCMNotification(token: string, title: string, body: string, accessToken: string) {
  const message = {
    message: {
      token: token,
      notification: { title, body },
      webpush: {
        notification: {
          icon: '/pwa-192x192.png',
          badge: '/pwa-192x192.png',
        },
      },
    },
  };

  const response = await fetch(
    `https://fcm.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/messages:send`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }
  );

  return response.json();
}

Deno.serve(async (req) => {
  try {
    // CORS headers
    if (req.method === 'OPTIONS') {
      return new Response('ok', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        },
      });
    }

    const { title, body } = await req.json();

    if (!title || !body) {
      return new Response(JSON.stringify({ error: 'title and body are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get all FCM tokens from database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: tokens, error } = await supabase
      .from('fcm_tokens')
      .select('token');

    if (error) {
      throw new Error(`Failed to fetch tokens: ${error.message}`);
    }

    if (!tokens || tokens.length === 0) {
      return new Response(JSON.stringify({ message: 'No tokens registered' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get Firebase access token
    const accessToken = await getAccessToken();

    // Send notification to all tokens
    const results = await Promise.allSettled(
      tokens.map((t) => sendFCMNotification(t.token, title, body, accessToken))
    );

    const successCount = results.filter(r => r.status === 'fulfilled').length;

    return new Response(
      JSON.stringify({ 
        success: true, 
        sent: successCount, 
        total: tokens.length 
      }),
      {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
