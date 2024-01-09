
// ejercio de matriz para localizar un determinado objeto
//ejemplo con herramientas, MI primer algoritmo!


let Tool0 = ["martillo", "pinzas", "machete"];
let Tool1 = ["desarmador", "taladro", "navaja"];
let Tool2 = ["cinta", "tijeras", "mazo"];

    let matrizH = [Tool0, Tool1, Tool2];

    console.log (matrizH);

    var respuesta = window.prompt("ingresa la herramienta que buscas: ");
        alert ("Su respuesta fue: " + respuesta);
        // para mostrar los datos por separado se usara length
 for (let N=0;N<matrizH.length; N++) {
    for (let M=0;M<matrizH[N].length; M++) {
   
    console.log(matrizH[N][M]);// mostrara la interseccion de la posicion que se busca

    if (matrizH[N][M]===respuesta) {

        console.log("Estoy en la herraminta", "y su posicion es: ");
              //console.log(matrizH[N][M]);

    }
} 
 } 

//para crear una matriz vacia seria
// let matriz = new Array (3);
//     for (let i=0;i<3;i++) {

//         matriz[i] = new Array (3);
//     }









//      let  index = respuesta; 

//      for (let f=0; <=2; f++) {
//         console.log(matrizH[f]);
//      for (let N=0; <2; N++) {
//             console.log(matrizH[N]);

// if(matrizH [f][N]==index){
//     alert("La herramienta fue encontrada en pasicion:  " + index);

// }

//         }
//        } 



          
// for (let i=0; i<matrizH; i++) {
//             console.log(matrizH[i]);

//         if (matrizH==i) {
//             console.log("la herramienta que buscas esta en la pocision: ", +i);

//         } 

//            } 
//         } 
//         else {
//             alert("La herramienta es: " + respuesta);
//         }
        
        



