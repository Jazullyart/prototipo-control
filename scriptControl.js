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
};

const datos_display = document.getElementById("txt_cm");

function enviar(comando) {
  if (comando == "") {
    referencia.update({
      espacio: datos_display.value,
    });
  } else {
    referencia.update({
      espacio: comando,
    });
  }

  return comando;
}

var categoria = 0;

document.getElementById("Categoria1").addEventListener("click", () => {
  enviar("composition/columns/1/connect");
  categoria = 1;
  console.log(categoria);
});

document.getElementById("Categoria2").addEventListener("click", () => {
  enviar("composition/columns/4/connect");
  categoria = 2;
  console.log(categoria);
});

document.getElementById("Categoria3").addEventListener("click", () => {
  enviar("composition/columns/7/connect");
  categoria = 3;
  console.log(categoria);
});

var opcion = 1;

document.getElementById("Adelante").addEventListener("click", () => {
  switch (categoria) {
    case 1:
      switch (opcion) {
        case 1:
          enviar("composition/columns/1/connect")
          opcion = 2;
          break;

        case 2:
          enviar("composition/columns/2/connect");
          opcion = 3;
          break;

        case 3:
          enviar("composition/columns/3/connect");
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    case 2:
      switch (opcion) {
        case 1:
          enviar("composition/columns/4/connect");
          opcion = 2;
          break;

        case 2:
          enviar("composition/columns/5/connect");
          opcion = 3;
          break;

        case 3:
          enviar("composition/columns/6/connect");
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    case 3:
      switch (opcion) {
        case 1:
          enviar("composition/columns/7/connect");
          opcion = 2;
          break;

        case 2:
          enviar("composition/columns/8/connect");
          opcion = 3;
          break;

        case 3:
          enviar("composition/columns/9/connect");
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

