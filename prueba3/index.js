// var totalcomida = 2800 + 1300;
// var totalbebida = 900 + 650;

// var total = totalcomida + totalbebida;

// console.log("El total de comida es: " + totalcomida);
// console.log("El total de bebida es: " + totalbebida);
// console.log("El total de la cuenta es: " + total);

// ejemplo de if & else 

// s

// // nuevo ejemplo switch
// condicionale switch, que condiciona
// varias opciones

// prompt, permite ingresar valores por teclado

// var color = prompt("Ingrese un color");

//     switch(color) {

//         case "rojo":
//             console.log("es rojo");
//         break;

//         case "azul":
//             console.log("es azul");
//         break;

//         case "verde":
//             console.log("es verde");
//         break;

//         default:
//                 console.log(" El color no es valido");
//         break;

//     }

// ejercicio de condicionales con resta y modulo para determinar si es mayor o igual a 0

// var num1 = prompt ("ingrese el numero 1");
// var num2 = prompt ("ingrese el numero 2");

// var resta = num1-num2;

//     if (resta>0) {
//         console.log("Es mayor a 0");
//  let imparpar = resta % 2;   //  division de resta por dos modulo para obterner valor 0 o mayor a 0 

//         if (imparpar==0) {
//         console.log("Es par");

//         }else {
//             console.log("Es impar");
//         }

//     }else {
//         console.log("es menor o igual a 0");   
//     }

// Ejercicios de Estructuras repetitivas while 
// cierta cantidad de codiga de codigo se repite segun n cantidad de vueltas o por contador 
// la condicion se evalua al princio del bucle 

// var contador = 0;
// while (contador <10) {
    
//     console.log("vuelta Numero: " + contador);
//     contador ++;

// }

// Ejercisio con ciclo for 
// el ciclo for, es un cicle controlado por un contador, que esta implicito en su sintaxis
// la variable i, se utiliza como referencia a indice


// for (var i=1;i<10; i++) {
//     console.log("vuelta NUMERO: " + i);

// }


// estructura do while, lo que hace es que la condicion se evalua despues, se ejecuta unicamente 1 vez y despues verifica si cumple la condicion
// esta codicion permite acceder o ejecutar una vez y despues, en caso de no cumplir detener el bucle.

// Estructura do {
    
// } while (condition);

// var contador = 0;
// do {
//     console.log("vuelta Numero: " + contador);
//     contador ++;
 
// while (contador<10);

// Ejercicios, estructura repetitiva para mostrar numeros del 1 al 35 
// ejercicio 2, realizar cuenta regresiva de 10 a 0, mostrar mensaje Feliz año.Ejercicios
// ejercicio2 

// for(var i=10;i>=0;i--) {
//     console.log(i);
    
// }
// alert ("Feliz aÑo Nuevo");
    // console.log("feliz aÑo Nuevo");


// var contador = 0;
// while (contador <10) {
    
//     console.log("vuelta Numero: " + contador);
//     contador ++;

// Nuevos conceptos, funciones predefinidas en javascript
// prompt, es una de las fuciones 

// ejemplo
// var respuesta = window.prompt("ingresa una texto");

// alert ("Su respuesta fue: " + respuesta);
 
// ventanas de confirmacion

// var confirmacion = window.confirm("Quieres suscribirte al canal");

//     if (confirmacion == true) {
//         alert ("Muchas gracias por suscribirte, sos un crack!");

//     } else {
//         alert (" los siento, sigue intentando: ");
//     }


// manejo de constrir o manejo de fechas
// ejemplo con funciones Date es la fecha actual automaticamente
// para las fechas enero sera el mes 0

// var fecha =  new Date(1984, 01, 07);
// var fecha = new Date ("05/25/2023"); // en formato texto los meses si corresponden a su numero
//alert("La fecha de hoy es: " + fecha);

//funciones especiales para agregar fechas con metodos
// var fecha = new Date (1984, 1, 7);

//     var dia = fecha.getDate
//     var mes = fecha.getMonth
//     var anio = fecha.getFullYear

//     alert("Dia: " + dia + "Mes: " + (mes+1) + "Año: "  + anio);
//     console.log(dia + mes + anio);


//ejercicio, sobre prompt para ingresar texto e informar por medio de un alert
// el comando o metodo parseInt conviete un string a numero como valor entero, asi el resultado al obtenerlo 
// sera un caracter numero y no una cadena de caracteres.


// var valor1 = parseInt(window.prompt("Ingrese el primer numero: "));
// var valor2 = parseInt(window.prompt("Ingrese el otro valor: "));

//     if (valor1>valor2) {
//         alert("El valor mayor es: " + valor1);

//     }
//     else {
//         alert("El segundo valor es mayor: " + valor2);
//     }

//Ejercicios para comparar fechas y determinar cual de ellas es y a que dia de la semana corresponde

// var fechaingreso = window.prompt("ingrese la fecha actual", "mm/dd/yyyy"); //la variable fechaingreso guarda en texto ingresado

//     var fecha = new Date (fechaingreso); //obtenemos un Date que la pc puede leer y se guarda en la var fecha y le asiganamos el contenido de fechaingreso 
//         var dia = fecha.getDay(); // esta variable extrae la informacion del solo el dia en el formato fecha en numero
//         var diasemana; //almacenara el resultado del la operacion de la funcion switch, que alfinal sera utilizada
       
//         switch (dia) {
// // dia sera la variable intercambiada por un string en base a su valor segun el formato de numeracion automatico. 
//             case 0:
//                 diasemana = "Domingo";
//             break;

//             case 1:
//                 diasemana = "Lunes";
//             break;

//             case 2:
//                 diasemana = "Martes";
//             break;

//             case 3:
//                 diasemana = "Miercoles";
//             break;

//             case 4:
//                 diasemana = "Jueves";
//             break;

//             case 5:
//                 diasemana = "Viernes";
//             break;

//             case 6:
//                 diasemana = "Sabado";
//             break;
//         }

//     alert("El dia de la semana es: " + diasemana);

//Nuevo ejercicio, ARRAYS (Vectore y Matrices)

// Un Array puede almacenar varias variables o tener varios contenedores siendo estructuras fijas que no podran cambiar
// su tamaño, podaran ser unidimensionales uno sobre otra o bidimencionales varias filas o varias columnas.
// los vectores unidimensionales, matrices bidimencionales.
// un array en una especie de contenedor, ya sea en vector o matriz para varios datos
let miVector = [1,2,3,4,5,6];
    console.log(miVector);

let miMatriz = [[1,2,3],[4,5,6],[7,8,9]];
    console.log(miMatriz);

