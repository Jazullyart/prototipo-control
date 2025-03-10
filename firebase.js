
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

const referencia = firestore
  .collection("comandos_receptor")
  .doc("comando_captado");

firestore
  .collection("comandos_receptor")
  .doc("comando_captado")
  .onSnapshot((doc) => {
    console.log(`Detalles: ${doc.data().espacio}`);
    al_cambiar_el_comando(doc.data().espacio);
  });

function al_cambiar_el_comando(eL_comando_recibido) {
  if (CambioDeVista[eL_comando_recibido] != undefined) {
    console.log("El comando es: " + CambioDeVista[eL_comando_recibido]);
  } else {
    alert("Lo que se envio no es un comando reconocido");
  }
}
