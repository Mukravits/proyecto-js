
// ejercio de matriz para localizar un determinado objeto
//ejemplo con herramientas, MI primer algoritmo!


let Tool0 = ["martillo", "pinzas", "machete"];
let Tool1 = ["desarmador", "taladro", "navaja"];
let Tool2 = ["cinta", "tijeras", "mazo"];

    let matrizH = [Tool0, Tool1, Tool2];


    for (let i=0; i<matrizH; i++) {
     console.log(matrizH[i]);

    } 
    console.log (matrizH);

    var respuesta = window.prompt("ingresa la herramienta que buscas: ");
        alert ("Su respuesta fue: " + respuesta);

     let  index = respuesta; 

     for (let f=0; <=2; f++) {
        console.log(matrizH[f]);
     for (let N=0; <2; N++) {
            console.log(matrizH[N]);

if(matrizH [f][N]==index){
    alert("La herramienta fue encontrada en pasicion:  " + index);

}

        }
       } 



          
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
        
        



