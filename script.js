

const RESOLUME_API_URL = "http://localhost:8080/api/v1";

async function sendCommand(endpoint) {
  try {
    const response = await fetch(`${RESOLUME_API_URL}/${endpoint}`, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    console.log(`Comando enviado: ${endpoint}`);
  } catch (error) {
    console.error("Error al enviar el comando:", error);
  }
}

let CambioDeVista = {
  Categoria_1_Opcion_1: "composition/columns/1/connect",
  Categoria_1_Opcion_2: "composition/columns/2/connect",
  Categoria_1_Opcion_3: "composition/columns/3/connect",
  Categoria_2_Opcion_1: "composition/columns/4/connect",
  Categoria_2_Opcion_2: "composition/columns/5/connect",
  Categoria_2_Opcion_3: "composition/columns/6/connect",
  Categoria_3_Opcion_1: "composition/columns/7/connect",
  Categoria_3_Opcion_2: "composition/columns/8/connect",
  Categoria_3_Opcion_3: "composition/columns/9/connect"
}

const datos_display = document.querySelector("#txt_cm")

function enviar(comando) {
  if(comando == ""){
      referencia.update({
          espacio: CambioDeVista[1]
      })
  }
  else{
      referencia.update({
          espacio: comando
      })
  }

  return comando
}

var categoria = 0;

document.getElementById("Categoria1").addEventListener("click", () => {
  sendCommand(enviar(CambioDeVista.Categoria_1_Opcion_1));
  categoria = 1;
  console.log(categoria);
});

document.getElementById("Categoria2").addEventListener("click", () => {
  sendCommand(enviar(CambioDeVista.Categoria_2_Opcion_1));
  categoria = 2;
  console.log(categoria);
});

document.getElementById("Categoria3").addEventListener("click", () => {
  sendCommand(enviar(CambioDeVista.Categoria_3_Opcion_1));
  categoria = 3;
  console.log(categoria);
});

var opcion = 1;

document.getElementById("Adelante").addEventListener("click", () => {
  switch (categoria) {
    case 1:
      switch (opcion) {
        case 1:
          sendCommand(enviar(CambioDeVista.Categoria_1_Opcion_1));
          opcion = 2;
          break;

        case 2:
          sendCommand(enviar(CambioDeVista.Categoria_1_Opcion_2));
          opcion = 3;
          break;

        case 3:
          sendCommand(enviar(CambioDeVista.Categoria_1_Opcion_3));
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    case 2:
      switch (opcion) {
        case 1:
          sendCommand(enviar(CambioDeVista.Categoria_2_Opcion_1));
          opcion = 2;
          break;

        case 2:
          sendCommand(enviar(CambioDeVista.Categoria_2_Opcion_2));
          opcion = 3;
          break;

        case 3:
          sendCommand(enviar(CambioDeVista.Categoria_2_Opcion_3));
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    case 3:
      switch (opcion) {
        case 1:
          sendCommand(enviar(CambioDeVista.Categoria_3_Opcion_1));
          opcion = 2;
          break;

        case 2:
          sendCommand(enviar(CambioDeVista.Categoria_3_Opcion_2));
          opcion = 3;
          break;

        case 3:
          sendCommand(enviar(CambioDeVista.Categoria_3_Opcion_3));
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
});

document.getElementById("Atras").addEventListener("click", () => {
  switch (categoria) {
    case 1:
      switch (opcion) {
        case 1:
          sendCommand("composition/columns/3/connect");
          opcion = 2;
          break;

        case 2:
          sendCommand("composition/columns/1/connect");
          opcion = 3;
          break;

        case 3:
          sendCommand("composition/columns/2/connect");
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    case 2:
      switch (opcion) {
        case 1:
          sendCommand("composition/columns/6/connect");
          opcion = 2;
          break;

        case 2:
          sendCommand("composition/columns/4/connect");
          opcion = 3;
          break;

        case 3:
          sendCommand("composition/columns/5/connect");
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    case 3:
      switch (opcion) {
        case 1:
          sendCommand("composition/columns/9/connect");
          opcion = 2;
          break;

        case 2:
          sendCommand("composition/columns/7/connect");
          opcion = 3;
          break;

        case 3:
          sendCommand("composition/columns/8/connect");
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
});
