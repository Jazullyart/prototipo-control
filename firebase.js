
const firebaseConfig = {
  apiKey: "AIzaSyBdkuiSFVnQVpbLTqYs4CMc9ZHQa1g8X-s",
  authDomain: "control-c016c.firebaseapp.com",
  projectId: "control-c016c",
  storageBucket: "control-c016c.firebasestorage.app",
  messagingSenderId: "822758387080",
  appId: "1:822758387080:web:59d2beac9a4a06b7b15e3d",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
window.firestore = firestore;

const referencia = firestore
  .collection("comandos_receptor")
  .doc("comando_captado");