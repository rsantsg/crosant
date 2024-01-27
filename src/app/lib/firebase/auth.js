import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert(process.env.FIREBASE_SECRET_KEY)
}

export function customInitApp() {
    console.log('Firebase app init')
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}

