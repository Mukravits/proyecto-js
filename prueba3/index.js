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

var valor1 = window.prompt("Ingrese el primer numero: ");
var valor2 = window.prompt("Ingrese el otro valor: ");

    if (valor1>valor2) {
        alert("El valor mayor es: " + valor1);

    }
    else {
        alert("El segundo valor es mayor: " + valor2);
    }


