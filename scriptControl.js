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
  enviar(CambioDeVista.Categoria_1_Opcion_1);
  categoria = 1;
  console.log(categoria);
});

document.getElementById("Categoria2").addEventListener("click", () => {
  enviar(CambioDeVista.Categoria_2_Opcion_1);
  categoria = 2;
  console.log(categoria);
});

document.getElementById("Categoria3").addEventListener("click", () => {
  enviar(CambioDeVista.Categoria_3_Opcion_1);
  categoria = 3;
  console.log(categoria);
});

var opcion = 1;

document.getElementById("Adelante").addEventListener("click", () => {
  switch (categoria) {
    case 1:
      switch (opcion) {
        case 1:
          CambioDeVista.Categoria_1_Opcion_1;
          opcion = 2;
          break;

        case 2:
          enviar(CambioDeVista.Categoria_1_Opcion_2);
          opcion = 3;
          break;

        case 3:
          enviar(CambioDeVista.Categoria_1_Opcion_3);
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    case 2:
      switch (opcion) {
        case 1:
          enviar(CambioDeVista.Categoria_2_Opcion_1);
          opcion = 2;
          break;

        case 2:
          enviar(CambioDeVista.Categoria_2_Opcion_2);
          opcion = 3;
          break;

        case 3:
          enviar(CambioDeVista.Categoria_2_Opcion_3);
          opcion = 1;
          break;

        default:
          break;
      }
      break;

    case 3:
      switch (opcion) {
        case 1:
          enviar(CambioDeVista.Categoria_3_Opcion_1);
          opcion = 2;
          break;

        case 2:
          enviar(CambioDeVista.Categoria_3_Opcion_2);
          opcion = 3;
          break;

        case 3:
          enviar(CambioDeVista.Categoria_3_Opcion_3);
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

