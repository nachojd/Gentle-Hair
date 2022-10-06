const inputTexto = document.querySelector(".input-texto");
const rango = document.getElementById("rango");
const mensaje = document.querySelector(".mensaje");

let salida = "";
let encriptacionExitosa = "TEXTO ENCRIPTADO:";
let desencriptacionExitosa = "TEXTO DESENCRIPTADO:";

/* REGLAS DE ENCRIPTADO POR TRANSPOSICIÓN

 Consiste en intercambiar la posición de las letras de una palabra o frase siguiendo siempre un esquema bien definido.

 El cifrado con forma de columna. En él, el mensaje original estará limitado a un rectángulo, de izquierda a derecha y de arriba hacia abajo. Después, se escoge una clave para asignar un número a cada columna del rectángulo para determinar el orden.

 primero borramos los espacios que tiene la frase, si son mas de una palabra:
 hola como estas quedaría: holacomoestas

 seguidamente elegimos la clave, por ejemplo: 4
 luego separamos la palabra formada sin espacios cada 4 caracteres 
 
 (la cantidad de caracteres a contar depende justamente de la clave. si nuestra clave es de  3 se contaría de 3 en 3)

 luego vamos colocando las palabras una debajo de la otra:

 hola
 como
 esta
 s

 ahora transcribimos las letras por columnas:

 hcesooslmtaoa

 y de esta manera ya lo tenemos cifrado
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
    rango.value = "10";
    document.getElementById("titulo-resultado").innerHTML = encriptacionExitosa;
    document.getElementById("resultado").innerHTML = mensaje;
    resultado(si);
  }
}

/*
 * @param {string} textoEncriptado
 * @param {number} clave
 * @return {string}
 */
function encriptar(textoEncriptado, clave) {
  textoEncriptado = textoEncriptado.toLowerCase(); //transforma el texto a minúscula
  const vec = [];
  let sin_espacios = textoEncriptado.replaceAll(' ', '');
  let salida = '';

  //recorre el texto separando cada (numero de la clave) caracteres, y los agrega al vector
  for (let i = 0; i < sin_espacios.length; i += parseInt(clave) ) {
      vec.push(sin_espacios.substring(i, i + clave));
  }console.log(vec)

  //recorre la tabla del vec y coloca las teras por columnas
  for (let i = 0; i < clave; i++) {
      for (let j = 0; j < vec.length; j++) {
          const s = vec[j][i];
          if (s) {
            salida += s;
          }
      }
  }
  textoEncriptado = salida;
  salida = "";
  return textoEncriptado;
}

/* REGLAS DE DESENCRIPTADO 

 El descifrado con forma de columna. 

 Elegimos la clave, por ejemplo: 4

 luego se calcula la extención del texto cifrado ejemplo: hcesooslmtaoa = 13
 
 seguidamente se multiplica la clave a cantidad que habilite un cuadrado que contenga esa extención. en este caso 4 * 4 = 16 

 seguidamente se calculan los espacios 16 - 13 = 3

 luego se calcula de manera que de mayor a menor se ubicaran las letras desde 4 hasta 3. es decir en este ejemplo: la primer fila iran 4 letras y en las restantes iran solo 3 porque?

 porque se deben ir colocando de manera equitativa.

 otro ejemplo sería que nuesto texto tenga longitud de 15 entonces se repartirian 4 en las 3 primeras y solo 3 en la ultima obteniendo 15.

 luego vamos colocando las palabras una debajo de la otra:

 hces
 oos
 lmt
 aoa

 ahora transcribimos las letras por columnas:

 holacomoestas

 y de esta manera ya lo tenemos descifrado, pero sin espacios

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
    rango.value = "10";
    document.getElementById("titulo-resultado").innerHTML = desencriptacionExitosa;
    document.getElementById("resultado").innerHTML = mensaje;
    resultado(si);
  }
}

/*
 * @param {string} textoEncriptado
 * @param {number} clave
 * @return {string}
 */
function desencriptar(textoDesencriptado, clave) {
  textoDesencriptado = textoDesencriptado.toLowerCase(); //transforma el texto a minúscula
  const vec = [""];
  let num_col = Math.trunc(textoDesencriptado.length / parseInt(clave)) + 1; //console.log(num_col);
  let num_fil = clave; //console.log(num_fil)
  let celdas_vacias = num_col * num_fil - textoDesencriptado.length; //console.log(celdas_vacias);
  let col = 0;
  let fil = 0;

  // recorre el texto agregando las divisiones de palabras para luego devolver el texto desencriptado
  for (let caracter of textoDesencriptado) {
    vec[col] ||= ""; console.log(vec)
    vec[col] += caracter;
    col++;
    if (
      col == num_col ||
      (col == num_col - 1 && fil >= num_fil - celdas_vacias)
    ) {
      col = 0;
      fil += 1;
    }
  }
  
  for (let elemento of vec) {
    salida += elemento;
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
