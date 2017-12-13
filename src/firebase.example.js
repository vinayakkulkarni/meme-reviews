import Firebase from 'firebase';

const config = {
  apiKey: 'XXXXX',
  authDomain: 'XXXXX',
  databaseURL: 'XXXXX',
  projectId: 'XXXXX',
  storageBucket: 'XXXXX',
  messagingSenderId: 'XXXXX',
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export { db as default };
