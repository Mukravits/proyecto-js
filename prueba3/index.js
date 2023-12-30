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

// ejercicio de condicionales

var num1 = prompt ("ingrese el numero 1");
var num2 = prompt ("ingrese el numero 2");

var resta = num1-num2;

    if (resta>0) {
        console.log("Es mayor a 0");
 let imparpar = resta % 2;   //  division de resta por dos modulo para obterner valor 0 o mayor a 0 

        if (imparpar==0) {
        console.log("Es par");

        }else {
            console.log("Es impar");
        }

    }else {
        console.log("es menor o igual a 0");   
    }