# One Next Education

Este Repositorio contiene todas las actividades realizadas en el Curso "One Next Education", desarrollado en conjunto por la Empresa Oracle y Alura Latam que es el brazo online de Caelum, una reconocida escuela de tecnología e innovación en Brasil.

En el #challengeonecodificador3 debemos realizar un encriptador:

**Requisitos:**
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

Para ello decidí ya que poseo conocimientos relacionados a la encriptación.
Crear no una, sinó 4 paginas que permitan encriptar y desencriptar textos de diferentes maneras.

## Encriptador Alura:

Las "llaves" de encriptación que utilizé son las siguientes:

`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

Permitiendo intercambiar cada vez que se encuentre una letra por su texto correspondiente.

## Encriptador Cesar

Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto. 

 Es decir por ejemplo la palabra hola y la clave 6

 `La letra "H" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "N".`
 `La letra "O" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "U".`
` La letra "L" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "R".`
 `La letra "A" en el alfabeto se encuentra en la posición: 8  a ese 8 se le suma la clave es decir 14 y se intercambia por la letra en esa posición, en este caso la "G".`

 Por lo tanto la palabra "hola" en el cifrado cesar de clave 6 pasa a ser "nurg"

## Encriptador Murcielago

La clave MURCIELAGO es una sencilla clave, que como Boy Scout aprender debes. Es fácil de realizar por su ventaja de cambiar las letras por símbolos numéricos, trabajando con la siguiente tabla de conversión:

Clave: `MURCIELAGO`

`M=0, U=1, R=2, C=3, I=4, E=5. L=6. A=7, G=8, O=9`

De manera que si nuestro texto original fuera BOLIVIA 
el resultado de la codificación sería: B964V47

Entrada
La entrada consiste en las N líneas que contiene una cadena.

Salida
Imprimir N líneas con las cadenas convertidas.


## Encriptador por Transposición

Consiste en intercambiar la posición de las letras de una palabra o frase siguiendo siempre un esquema bien definido.

El cifrado con forma de columna. En él, el mensaje original estará limitado a un rectángulo, de izquierda a derecha y de arriba hacia abajo. Después, se escoge una clave para asignar un número a cada columna del rectángulo para determinar el orden.

primero borramos los espacios que tiene la frase, si son mas de una palabra:
hola como estas quedaría: holacomoestas

seguidamente elegimos la clave, por ejemplo: 4
luego separamos la palabra formada sin espacios cada 4 caracteres 

(la cantidad de caracteres a contar depende justamente de la clave. si nuestra clave es de  3 se contaría de 3 en 3)

luego vamos colocando las palabras una debajo de la otra:

`hola`
`como`
`esta`
`s`

ahora transcribimos las letras por columnas:

hcesooslmtaoa

y de esta manera ya lo tenemos cifrado


## Insignia Recibida

![onenexteducation](https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F10224%2F1659462746Badge_Sharer_Alura_ChallengeOracleONE_2000x2000_V3.png?utm_campaign=alura_latam_-_challenge_email_projeto_1_esp&utm_medium=email&utm_source=RD+Station)
