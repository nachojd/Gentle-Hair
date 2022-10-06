const inputTexto = document.querySelector("#input_murcielago");
const clave = document.querySelector("#clave_murcielago");
const mensaje = document.querySelector(".mensaje");
const abecedario = "abcdefghijklmnopqrstuvwxyz";

let salida = "";
let encriptacionExitosa = "TEXTO ENCRIPTADO:";
let desencriptacionExitosa = "TEXTO DESENCRIPTADO:";
console.log(inputTexto);
console.log(clave);
/* REGLAS DE ENCRIPTADO MURCIELAGO

La clave MURCIELAGO es una sencilla clave, que como Boy Scout aprender debes. Es fácil de realizar por su ventaja de cambiar las letras por símbolos numéricos, trabajando con la siguiente tabla de conversión:

Clave: MURCIELAGO

M=0, U=1, R=2, C=3, I=4, E=5. L=6. A=7, G=8, O=9

De manera que si nuestro texto original fuera BOLIVIA 
el resultado de la codificación sería: B964V47

Entrada
La entrada consiste en un entero N que es el número de casos de prueba, seguido de las N líneas que contiene una cadena escrita totalemente en letras mayúsculas.

Salida
Imprimir N líneas con las cadenas convertidas.

Ejemplo Entrada             Ejemplo Salida
BOLIVIA                     B964V47
UNIVERSITARIO               1N4V52S4T7249
ENTRADA                     5NT27D7

*/

let si = "";
let no = "none";

//resultado permite mostrar u ocultar los elementos en su interior
function resultado(ver) {
  document.getElementById("titulo-resultado").style.display = ver;
  document.getElementById("btn-copy").style.display = ver;
  document.getElementById("resultado").style.display = ver;
}

resultado(no);

//Compara dos string para saber si un caracter de la cadena1 se encuentra en la cadena2
function compare(str1, str2) {
  let contains = false;
  for (const letter of str2) {
    if (letter != " " && str1.includes(letter)) contains = true;
  }
  return contains;
}

//ENCRIPTAR MENSAJE

function btnEncriptar() {
  const caracteres =
    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüŠšŸÿýŽž";
  if (inputTexto.value == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Ingrese el texto a Encriptar",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (compare(inputTexto.value, caracteres) == true) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Ingrese el texto sin acentos ni caracteres especiales",
      showConfirmButton: false,
      timer: 1500,
    });
    inputTexto.value = ""; /*borramos el texto*/
  } else {
    document.getElementById("toy").style.display = "none";
    const encriptado = encriptar(inputTexto.value, clave.value);
    mensaje.value = encriptado;
    inputTexto.value = ""; /*borramos el texto*/
    clave.value = ""; /*borramos el texto*/
    document.getElementById("titulo-resultado").innerHTML = encriptacionExitosa;
    document.getElementById("resultado").innerHTML = mensaje;
    resultado(si);
  }
}

function encriptar(textoEncriptado, clave) {
  //recorremos el texto reemplazando las letras por la posición correspondiente en la clave
  textoEncriptado = textoEncriptado.toLowerCase(); //transforma el texto a minúscula
  clave = clave.toLowerCase();

  for (let caracter of textoEncriptado) {
    if (!clave.includes(caracter)) salida += caracter;
    //compruebo que cada caracter esté en la clave
    //agregamos cada letra a la salida luego de la comprobacion
    else salida += clave.indexOf(caracter); //si no está se agrega la misma letra
  }
  textoEncriptado = salida;
  salida = "";
  return textoEncriptado;
}

/* REGLAS DE DESENCRIPTADO 

La clave MURCIELAGO es una sencilla clave, que como Boy Scout aprender debes. Es fácil de realizar por su ventaja de cambiar las letras por símbolos numéricos, trabajando con la siguiente tabla de conversión:

Clave: MURCIELAGO

M=0, U=1, R=2, C=3, I=4, E=5. L=6. A=7, G=8, O=9

De manera que si nuestro texto original fuera: B964V47 
el resultado de la codificación sería: BOLIVIA

Entrada
La entrada consiste en un entero N que es el número de casos de prueba, seguido de las N líneas que contiene una cadena escrita totalemente en letras mayúsculas.

Salida
Imprimir N líneas con las cadenas convertidas.

Ejemplo Entrada             Ejemplo Salida
B964V47                     BOLIVIA
1N4V52S4T7249               UNIVERSITARIO
5NT27D7                     ENTRADA

*/

//DESENCRIPTAR MENSAJE

function btnDesencriptar() {
  const caracteres =
    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüŠšŸÿýŽž";
  if (inputTexto.value == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Ingrese el texto a Desencriptar",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (compare(inputTexto.value, caracteres) == true) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Ingrese el texto sin acentos ni caracteres especiales",
      showConfirmButton: false,
      timer: 1500,
    });
    inputTexto.value = ""; /*borramos el texto*/
  } else {
    document.getElementById("toy").style.display = "none";
    const textoEncriptado = desencriptar(inputTexto.value, clave.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = ""; /*borramos el texto*/
    clave.value = ""; /*borramos el texto*/
    document.getElementById("titulo-resultado").innerHTML =
      desencriptacionExitosa;
    document.getElementById("resultado").innerHTML = mensaje;
    resultado(si);
  }
}

function desencriptar(textoDesencriptado, clave) {
  //recorremos el texto reemplazando las letras por la posición correspondiente en la clave
  textoDesencriptado = textoDesencriptado.toLowerCase(); //transforma el texto a minúscula
  clave = clave.toLowerCase();

  for (let caracter of textoDesencriptado) {
    if (caracter === " ") { //compruebo si el caracter es un espacio lo agrego y continuo
      salida += caracter;
      continue;
    }
    const charNumber = Number(caracter);
    const isCharNumber = isNumber(charNumber);
    if (isCharNumber) {
      salida += clave[caracter];
    //compruebo que cada caracter esté en la clave
    //agregamos cada letra a la salida luego de la comprobacion
    }else {salida += caracter; //si no está se agrega la misma letra
    }
  }
  textoDesencriptado = salida;
  salida = "";
  return textoDesencriptado;
}

//funcion que comprueba si el caracter es un numero
function isNumber(charNumber) {
  return typeof charNumber === "number" && isFinite(charNumber);
}

// COPIAR TEXTO

function btnCopiar() {
  mensaje.select(); //selecciona el texto
  navigator.clipboard.writeText(mensaje.value); //guarda en el porta papeles el texto seleccionado
  mensaje.value = "";
  mensaje.style.backgroundImage = "";
  document.getElementById("titulo-resultado").innerHTML = "";
  document.getElementById("toy").style.display = "";
  resultado(no);
  Swal.fire({
    //luego de copiar aparece un pop up de exito
    position: "center",
    icon: "success",
    title: "Copiado Exitosamente",
    showConfirmButton: false,
    timer: 1500,
  });
}
