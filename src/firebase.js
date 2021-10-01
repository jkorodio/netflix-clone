import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCZVs3rA09DU1sM_gpo9rjUHtR93XY0sJo',
  authDomain: 'netflix-clone-1169c.firebaseapp.com',
  projectId: 'netflix-clone-1169c',
  storageBucket: 'netflix-clone-1169c.appspot.com',
  messagingSenderId: '1060049452020',
  appId: '1:1060049452020:web:15a92bc250067091b417a1'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
