import { initializeApp, type FirebaseApp } from 'firebase/app';

let app: FirebaseApp | null = null;

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export function initFirebase(): void {
  if (app) return;
  if (!config.apiKey) return;
  app = initializeApp(config);
  if (!import.meta.env.PROD || !config.measurementId) return;
  // Analytics se carga lazy: pesa ~70KB y no es crítico para el primer render.
  void import('firebase/analytics').then(({ getAnalytics, isSupported }) => {
    isSupported()
      .then((supported) => {
        if (supported && app) getAnalytics(app);
      })
      .catch(() => {});
  });
}

export function getFirebaseApp(): FirebaseApp | null {
  return app;
}
