const listaPokemon = document.querySelector("#listapokemon");
const botonesHeader = document.querySelectorAll(".btn-header");


let URL = "https://pokeapi.co/api/v2/pokemon/";



//esta funcion me permite ordenar los poquemones, despues de hacer una peticion asincrona
async function obtenerPokemon(){

const promes =[];
    
    for( let i = 1; i <= 151; i++){
        promes.push(fetch(URL + i)//peticion desde la endpoint
            .then((response) => response.json()));
              
        };

    const pokemon = await Promise.all(promes);

    pokemon.sort((a, b) => a.id - b.id);


    pokemon.forEach(poke => mostrarpokemon(poke));
}

obtenerPokemon(); //llamado de la funcion




//funcion de consumo de api y muestra de la interfaz. 
function mostrarpokemon (poke){


    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo"> ${type.type.name}</p>`);
    tipos = tipos.join('');


    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML= `
    
        <div class="pokemon-info">
            <p class="pokemon-id-back">#${poke.id}</p>
            <p class="nombre-pokemon">${poke.name}</p>

        </div>
            

        <img class="img-pokemon" src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
            
        <div class="pokemon-tipo">
            ${tipos}

        </div>
       
    `;
    listaPokemon.append(div);

}


// funcion de accion del boton


botonesHeader.forEach(boton => boton.addEventListener("click", async (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    const promes = [];

    for (let i = 1; i <= 151; i++) {
        const respuest = fetch(URL + i)
            .then((response) => response.json())
            promes.push(respuest);
            
          
     };



     const pokemon = await Promise.all(promes);
     pokemon.sort((a, b) => a.id - b.id);

     pokemon.forEach(poke => {
        if (botonId === "ver-todos"){
            mostrarpokemon(poke);
        }else{
            const tipos = poke.types.map(tipo => tipo.type.name);
            if (tipos.includes(botonId)) mostrarpokemon(poke);
        }
     });

}));









