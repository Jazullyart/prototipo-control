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

var categoria_actual = 0

var columnas_categoria_1 = [1,2,3];

var columnas_categoria_2 = [4,5,6];

var columnas_categoria_3 = [7,8,9];

var indices = { 1: 0, 2: 0, 3: 0 };

var bandera = false

document.getElementById("Categoria1").addEventListener("click", () => {
  categoria_actual = 1;
  indices[categoria_actual] = 0; 
  enviar("composition/columns/" + columnas_categoria_1[0] + "/connect");
});

document.getElementById("Categoria2").addEventListener("click", () => {
  categoria_actual = 2;
  indices[categoria_actual] = 0; 
  enviar("composition/columns/" + columnas_categoria_2[0] + "/connect");
});

document.getElementById("Categoria3").addEventListener("click", () => {
  categoria_actual = 3;
  indices[categoria_actual] = 0; 
  enviar("composition/columns/" + columnas_categoria_3[0] + "/connect");
});

document.getElementById("Adelante").addEventListener("click", () => {
  let columnas;

  switch(categoria_actual){
    case 1:
      columnas = columnas_categoria_1;
      break;
    case 2:
      columnas = columnas_categoria_2;
      break;
    case 3:
      columnas = columnas_categoria_3;
      break;
  }

  enviar("composition/columns/" + columnas[indices[categoria_actual]] + "/connect");

  indices[categoria_actual] = (indices[categoria_actual] + 1) % columnas.length;

  console.log("Elemento actual:", columnas[indices[categoria_actual]]);
})

document.getElementById("Atras").addEventListener("click", () => {
  let columnas;

  switch(categoria_actual){
    case 1:
      columnas = columnas_categoria_1;
      break;
    case 2:
      columnas = columnas_categoria_2;
      break;
    case 3:
      columnas = columnas_categoria_3;
      break;
  }

  enviar("composition/columns/" + columnas[indices[categoria_actual]] + "/connect");

  indices[categoria_actual] = (indices[categoria_actual] - 1 + columnas.length) % columnas.length;

  console.log("Elemento actual:", columnas[indices[categoria_actual]]);
})

document.getElementById("OnOff").addEventListener("click", () => {
  if(bandera == false){
    enviar("composition/columns/1/connect")
    bandera = true
  }
  else{
    enviar("composition/columns/10/connect")
    bandera = false
  }
})