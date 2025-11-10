let  listarick = document.querySelector("#listaRick")

let URL = "https://rickandmortyapi.com/api/character";


	
// funcion no necesaria de despliegue, ".map y forEach" metodos de recorrido de arreglos 

function metodosRecorrido () {
    let miArreglo = [1, 2, 3, 4, 5];
    
    //alert(miArreglo.length);
    
    
    //.forEach es un metodo que recorre el arreglo pero no me devuelve un valor
    miArreglo.forEach((elemento)=>{
    
    alert(elemento);
    
    })
    
    
    //.map recorre el arrego y me devuelve un valor que puedo introducir dentro de un arreglo basio. 
    let misPares = [];
    
    misPares = miArreglo.map((elemento) => 
         elemento % 2 === 0 ? 'Par' : 'Ímpar'
    );
    
    alert(misPares)

}






