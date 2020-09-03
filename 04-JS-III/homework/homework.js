// No cambies los nombres de las funciones.

const { nuevoBool, suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  //var array = [1,2,3,4,5];
  //arrayNuevo = [0]
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  //var array = [1,2,3,4]
  //array.length = 4
   return array[array.length - 1]; //toma el largo de la lista y le resta una asi da cómo ultima posición del arreglo.
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var n = array.length;
  return n;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  /* var sumandoUno = [];
   for (var n = 0; n < array.lenght; n ++){
      sumandoUno[n] = array[n] + 1;
   }

   return sumandoUno; */

   var nuevoArray = [];
   for(var n = 0; n < array.length; n++){
     nuevoArray.push(array[n] + 1);
   }
   return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   /* array[array.lenght] = elemento;
   return array; */
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var nuevoString = palabras.join(' ');
  return nuevoString;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //var array 
  for(var  n = 0; n < array.length; n++){
    if(array[n] ===  elemento){
      return true;
    }
  }
  return false;
}
  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
   //var array = [1,2,3,4];
   // var element = 3
   //arrayContiene(array, element) --->  true;
   for(var n = 0; n < array.length; n++){
     if(array[n] == elemento){ //array[2] == 3
       return true;
     }
  
  }
  return false;
}

 function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
    var suma = 0;
    for(var n = 0; n < numeros.length; n++){
      suma = suma + numeros[n];
    }
    return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //var arreglo = [1,2,3]
  var prom  = 0;
  var suma  = 0;
  var contador = 0;
  for(var n = 0; n < resultadosTest.length; n++){
    suma = suma + resultadosTest[n]; 
    contador++ 
  }
  prom = suma / contador;
  return prom;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMayor = Number.MIN_VALUE;
  for(var n = 0; n < numeros.length; n++){
    if(numeros[n] > numeroMayor) {
       numeroMayor = numeros[n];
    }
  }
  return numeroMayor;

}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var producto = 1;
  if(arguments.length < 1){
    return 0;
  }
  else{
    for(var n = 0; n < arguments.length; n++){
        producto = producto * arguments[n];
      } 
    }
    return producto;
  }
  
 

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};


