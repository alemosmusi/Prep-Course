// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoarra = Object.entries(objeto);
  return nuevoarra
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var devolver = {}
  var contador = 0
  for (i = 0 ; i < string.length ; i++){
        for(j = 0 ; j < string.length ; j++){
      if(string[i] == string[j]){
        contador = contador + 1
      }
    }
    var aaa = string[i]
    devolver[aaa] = contador
    contador = 0
  }
  return devolver
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = s.toUpperCase()
  var nuevamayu = ""
  var nuevamin = ""
  for(i = 0 ; i < s.length ; i++){
    if(s[i] == mayusculas[i]){
      nuevamayu = nuevamayu + s[i]
    }else {
      nuevamin = nuevamin + s[i]
    }
  }
  return nuevamayu+nuevamin
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var separar = str.split(" ")
  console.log(separar)
  var reves = []
  var palabra = ""
  var palabrita = ""
  var constr = []
  for (i = 0 ; i < separar.length ; i++){
     palabra = separar[i]
     palabrita = ""
    for (j = palabra.length - 1; j>-1 ; j--){
      palabrita = palabrita + palabra[j]
      
    }constr.push(palabrita)
   
  }
  return constr.join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var separar = String(numero).split("")
  var reves = separar.reverse()
  var palabra = ""
  for (i = 0 ; i < separar.length ; i++){
    var j = separar.length - 1 - i
    if (separar[i] == reves[j]){
      return "Es capicua"
    }else {
      return "No es capicua"
    }
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var eliminar = /a/g ;
  var palabra = cadena.replace(eliminar,"")
eliminar = /b/g;
palabra = palabra.replace(eliminar,"")
eliminar = /c/g;
palabra = palabra.replace(eliminar,"")
return palabra
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nuevoarra = arr.sort(function(a,b){
    return a.length - b.length
  })
  return nuevoarra
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoarra = []
  for (i = 0 ; i < arreglo1.length ; i++){
    for (j = 0 ; j < arreglo2.length ; j++){
      if(arreglo1[i] == arreglo2[j] ){
              nuevoarra.push(arreglo1[i])
            }
        }
      }
  var asd = nuevoarra;
  var contador = asd.length
  console.log(asd.length)
  console.log(asd)
  for (h = 0 ; h < asd.length ; h++){
    for (r = 1 ; r < asd.length-1 ; r++){
      if (asd[h] === asd[r]){
        console.log(asd)
        asd.splice(r, 1)
      }
    }
  }
return asd
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

