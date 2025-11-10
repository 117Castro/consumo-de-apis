
console.log("hola mundo")


let num = 345;

let num2 =23;

console.log (num * num2);

console.log ("hola el numero es  ", `${(num + num * num2) * 0}`);


let x = 2;
let w = 3 ;


[x, w] = [w, x]


console.log (x);
console.log(w);

 

//funcion de swap
let a = 1;

let b = 3;

let s = b;

b = a;
a = s;

//destructuring

[a, b] = [b, a]

console.log( b , a);



let p = 1;

p++;

p += 9;

p-= 6;

p *= 2 ;




console.log(p);


let saludo = 'buenos dias';

let nombre = 'Patrick';

let edad = 23;

saludo += ' ';
saludo += nombre;
saludo += ' ';
saludo += edad; 


console.log (saludo)


//prueba de if else en el uso de laterminal de aja .....



let a1 = 5;
let b1 = 20;
let c1 = 12;
let d1 = 25;



// ------------a-----------c----------b----------------d------------


let solape = ((c1 < b1) && (a1 < c1)) && ((d1 > b1) && (b1 > c1));

console.log(solape);

 
// estrutura de objetos de js

let array = [1, 2, [2, 3], "string"]

let objeto = {
    clave : "valor",
    nombre : "usuario",
    metodo : function(){
        this.nombre 
    }
}

console.log(objeto);


let clavesobjeto = objeto.metodo;
console.log(clavesobjeto);






console.log(array[2][1]);


//arreglo para consuntal su pocicion

let arreglo = ["usuario", 23, "modalidad", 46, ['user', 87], 'protocolo de arreglo', { nombre : 'valor', apellido : "vsalor"}] ;



console.log(arreglo[6]);




console.log(typeof(arreglo));




let valor1 = 25;
let valor2 = 2;

 let residuo = valor1 % valor2;



if ( residuo == 0 ) {

    console.log(`${valor1} es multiplo de; ${valor2 } `);
}else{

    console.log(`no es multiplo de ${valor2} `)
};




//ejersicios hacien uso de if else


    //Pide tres números y muestra cuál es el mayor.
function numeroMayor(){

    let num1 = parseFloat(document.getElementById("primerNumero").value);
    let num2 = parseFloat(document.getElementById("segundoNumero").value);
    let num3 = parseFloat(document.getElementById("tercerNumero").value);



    if (isNaN(num1) || isNaN(num2)|| isNaN(num3)){
        document.getElementById("mostrarNumero").innerHTML = `Debe ingresar tres numeros` ;
        return;

    }


    
    if(num1 === num2 && num2 === num3){

        document.getElementById("mostrarNumero").innerHTML = `Los tres numeros son iguales` ;

    }else if (num1 > num2 &&  num1 > num3) {
        
        document.getElementById("mostrarNumero").innerHTML = `El numero ${num1} es el mayor de los tres.` ;
        
    } else if( num2 > num3 && num2 > num1 ) {
        
        document.getElementById("mostrarNumero").innerHTML = `El numero ${num2} es el mayor de los tres` ;

    } else {
        document.getElementById("mostrarNumero").innerHTML = `El numero ${num3} es el mayor de los tres` ;

    }; 

}


function clearNumero(){

    let num1 = document.getElementById("primerNumero");
    let num2 = document.getElementById("segundoNumero");
    let num3 = document.getElementById("tercerNumero");
    let text = document.getElementById("mostrarNumero");

    num1.value = ""; 
    num2.value = ""; 
    num3.value = ""; 
    document.getElementById("mostrarNumero").innerHTML = `Vuelve a ingresar los numeros a comparar.` ;
    



}







// Pregunta si el usuario tiene dinero (true o false) y si hay gasolina (true o false).
    // Solo si ambas condiciones son verdaderas, muestra “Puedes salir en carro 🚗”.



function viaje(){

    let dinero = document.getElementById("onMony").checked;
    let nodinero = document.getElementById("offMony").checked;
    let gas = document.getElementById("gas").checked;
    let nogas = document.getElementById("nogas").checked;


    if (dinero && gas){
        
        document.getElementById("decicion").innerHTML = "tienes dinero y gasolina para el viaje, puedes irte";
    } else if (dinero && nogas){
        document.getElementById("decicion").innerHTML = "tienes dinero pero no gasolina para el viaje";
        
    } else if (nodinero && gas){
        
        document.getElementById("decicion").innerHTML = "no tienes dinero para el viaje, ahorra gasolina";
    } else if ( nodinero && nogas){
        document.getElementById("decicion").innerHTML = "ni plata ni gasolina, ponete a chambear";

    }

    if (!dinero && !nodinero && !gas && !nogas){

        document.getElementById("decicion").innerHTML=  "Debes seleccionar dos opciones..."
    }
    
    //document.getElementById("decicion").innerHTML = dinero;
}




//ejercicios haciendo uso de switch


    //Pide al usuario que elija una opción del menú:

        // a → “Ver perfil”

        // b → “Editar perfil”

        // c → “Cerrar sesión”

        // Otro → “Opción inválida”


function eleccion(opcion){

    let accion = "";


    switch(opcion){

        case "perfil":
           accion = document.getElementById("showOpcion").innerHTML = `Carga la opcion de ver el perfil`;
            break;
            
        case "editar perfil":
            accion = document.getElementById("showOpcion").innerHTML = `Carga la opcion editar perfil`;
            break;

        case "close":
            accion = document.getElementById("showOpcion").innerHTML = `Carga la opcion cerrar cesion`;

            break;
        case "otros":
            accion = document.getElementById("showOpcion").innerHTML = `Mas opciones de menu`;

            break;

        default:
            accion = document.getElementById("showOpcion").innerHTML = `Elige una opocion del menu`;
            
            break;  
            
        }

}

    //  Pide el nombre de un producto y usa switch para mostrar su precio.



    function productosCotizar(precio){

        switch (precio){

            case "tomate":
                document.getElementById("productosIngresar").value = "Tomate";
                document.getElementById("presioProducto").value = 0.35;
                break;
            case "chile":
                document.getElementById("productosIngresar").value = "Chile";
                document.getElementById("presioProducto").value = 0.25;
                break;
            case "sal":
                document.getElementById("productosIngresar").value = "Sal";
                document.getElementById("presioProducto").value = 0.40;
                break;
            case "fresas":
                document.getElementById("productosIngresar").value = "Caja de fresas";
                document.getElementById("presioProducto").value = 1.00;
                break;
                
            default:
                document.getElementById("productosIngresar").value = "Elija un producto";
                document.getElementById("presioProducto").value = 0.00;
                break;


           
                
            
        }

    }

    function eleccionProducto(){


        let product = document.getElementById("productosIngresar").value;
        let costo = document.getElementById("presioProducto").value;
        let cantidad = document.getElementById("cantidadingresada").value;
        


        let cotizacion = undefined;

        cotizacion =  cantidad * costo ;

        result = cotizacion.toFixed(2);

        document.getElementById("cotizado").innerHTML = 
        `El producto a comprar es ${product} por la cantidad de ${cantidad} y el costo total es : $ ${result}`;
    }


    function clearProduct(){

    let num1 = document.getElementById("productosIngresar");
    let num2 = document.getElementById("presioProducto");
    let num3 = document.getElementById("cantidadingresada");

    num1.value = ""; 
    num2.value = ""; 
    num3.value = ""; 
    document.getElementById("cotizado").innerHTML = `Vuelve a ingresar productos` ;
    



}


    //continuacion conotros ejerficios 






    //bucles en ejecucion de consola. 

console.log("a ver que pedo con esta termial")


let cont = 0 ;
let n = 50;
// let n = -50;

// while(cont < n ){
//     // cont+=1;
//     // cont++;
//     // cont--;
//     console.log(cont);
// };


// do{
//     cont++;
//     // console.log(cont);
//     console.log(`es la repeticion numero ${cont}`)

// }while(cont < n);


   

let usuario = ["carlos", "eduardo", 43]


for(let i = 0; i < usuario.length ; i++){
    console.log(`datos de usuario ${i + 1}: ` + usuario[i]);
}



for(let i = 0; i <= 3; ++i){

    console.log(i)


}




let estudiantes = [

    {
        nombre: "paola",
        apellido: "esmeralda",
        nota: 10 
    },
    {
        nombre: "pastor",
        apellido: "wef",
        nota: 8 
    },
    {
        nombre: "mento",
        apellido: "eto",
        nota: 9 
    },
    {
        nombre: "mario",
        apellido: "fern",
        nota: 7 
    },
    {
        nombre: "paoralonla",
        apellido: "mantis",
        nota: 4 
    }


]


for(let i =0; i < estudiantes.length; i++){
    
    if (estudiantes[i].nota %2 == 0){
        console.log(estudiantes[i].nombre, estudiantes[i].apellido, estudiantes[i].nota)
        
    }else{
        console.log("no pasaron", estudiantes[i].nombre, estudiantes[i].apellido, estudiantes[i].nota)
        // console.log("no pasaron");
    }
}



  const df = document.getElementById("text");

    for(let i = 0; i <= 34; i++){

        const item = document.createElement("li");
        item.textContent = "prueba " + i +" texto";

        df.appendChild(item);
    }




    







