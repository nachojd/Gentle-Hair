const inputTexto = document.querySelector(".input-texto");
const rango = document.getElementById("rango");
const mensaje = document.querySelector(".mensaje");
const abecedario = "abcdefghijklmnopqrstuvwxyz";

let salida = "";
let encriptacionExitosa = "TEXTO ENCRIPTADO:";
let desencriptacionExitosa = "TEXTO DESENCRIPTADO:";

/* REGLAS DE ENCRIPTADO CESAR

 Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto. 

 Es decir por ejemplo la palabra hola y la clave 6

 La letra "H" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "N".
 La letra "O" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "U".
 La letra "L" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "R".
 La letra "A" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "G".

 Por lo tanto la palabra "hola" en el cifrado cesar de clave 6 pasa a ser "nurg"
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
    const encriptado = encriptar(inputTexto.value, rango.value);
    mensaje.value = encriptado;
    inputTexto.value = ""; /*borramos el texto*/
    document.getElementById("titulo-resultado").innerHTML = encriptacionExitosa;
    document.getElementById("resultado").innerHTML = mensaje;
    resultado(si);
  }
}

function encriptar(textoEncriptado, clave) {
  //recorremos el texto reemplazando las letras por sus correspondientes en el abecedario sumado el rango/clave
  textoEncriptado = textoEncriptado.toLowerCase(); // transforma el texto a minúscula
  for (let caracter of textoEncriptado) {
    let posicion = abecedario.indexOf(caracter); //la posicion de la letra en el abcd
    if (abecedario.indexOf(caracter) != -1) {
      //compruebo que cada caracter esté en el abecedario
      salida += abecedario[(posicion + parseInt(clave)) % 26]; //agregamos cada letra en salida
    } else {
      //si el caracter no está en el abecedario entonces lo agrego directo
      salida += caracter;
    }
  }
  textoEncriptado = salida;
  salida = "";
  return textoEncriptado;
}

/* REGLAS DE DESENCRIPTADO 

 Por ejemplo la palabra nurg y la clave 6

 La letra "N" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "H".
 La letra "U" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "O".
 La letra "R" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "L".
 La letra "G" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "A".

 Por lo tanto la palabra "nurg" en el cifrado cesar de clave 6 pasa a ser "hola"

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
    const textoEncriptado = desencriptar(inputTexto.value, rango.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = ""; /*borramos el texto*/
    document.getElementById("titulo-resultado").innerHTML = desencriptacionExitosa;
    document.getElementById("resultado").innerHTML = mensaje;
    resultado(si);
  }
}

function desencriptar(textoDesencriptado, clave) {
  //recorremos el texto reemplazando las letras por sus correspondientes en el abecedario sumado el rango/clave
  textoDesencriptado = textoDesencriptado.toLowerCase();

  for (let caracter of textoDesencriptado) {
    posicion = abecedario.indexOf(caracter); //la posicion de la letra en el abcd
    if (abecedario.indexOf(caracter) != -1) {
      //compruebo que cada caracter esté en el abecedario
      let newPosicion = (posicion - parseInt(clave)) % 26;
      if (newPosicion < 0) { //si newPosicion es menor a 0 entonces le sumo 26 para que de esta manera se tenga en cuenta todas las letras
        newPosicion += 26;
      }
      salida += abecedario[newPosicion]; //agregamos cada letra en salida
    } else {
      //si el caracter no está en el abecedario entonces lo agrego directo
      salida += caracter;
    }
  }
  textoDesencriptado = salida;
  salida = "";
  return textoDesencriptado;
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
