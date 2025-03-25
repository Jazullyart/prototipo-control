let CambioDeVista = {
    "composition/columns/1/connect": "composition/columns/1/connect",
    "composition/columns/2/connect": "composition/columns/2/connect",
    "composition/columns/3/connect": "composition/columns/3/connect",
    "composition/columns/4/connect": "composition/columns/4/connect",
    "composition/columns/5/connect": "composition/columns/5/connect",
    "composition/columns/6/connect": "composition/columns/6/connect",
    "composition/columns/7/connect": "composition/columns/7/connect",
    "composition/columns/8/connect": "composition/columns/8/connect",
    "composition/columns/9/connect": "composition/columns/9/connect",
    "composition/columns/10/connect": "composition/columns/10/connect"
  };

  
const datos_display = document.getElementById("txt_cm");

firestore
.collection("comandos_receptor")
.doc("comando_captado")
.onSnapshot((doc) => {
  console.log(`Detalles: ${doc.data().espacio}`);
  al_cambiar_el_comando(doc.data().espacio);
});

function al_cambiar_el_comando(el_comando_recibido) {
if (CambioDeVista[el_comando_recibido] != undefined) {
  console.log("El comando es: " + CambioDeVista[el_comando_recibido]);
  datos_display.innerHTML = el_comando_recibido
  sendCommand(el_comando_recibido);
} else {
  alert("Lo que se envio no es un comando reconocido");
}
}
