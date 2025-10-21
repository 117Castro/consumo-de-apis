let  listarick = document.querySelector("#listaRick")

let URL = "https://rickandmortyapi.com/api/character";



function mostrarinfo(rick){

    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // listarick.append(div)
        // const personaes = data.results;
        // document.getElementById("listaRick").innerHTML = personaes;
})}

mostrarinfo();












// <div class="contenido">
//     <h1 class="nombre">Rick</h1>
//     <img src="imagenes/personaje de rick.jpg" alt="personaje de rick" class="img-peersonage">
//     <p class="status">Ebrio</p>
//     <p class="species">humano</p>
    

// </div>