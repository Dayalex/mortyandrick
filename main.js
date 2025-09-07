const url = 'https://rickandmortyapi.com/api/character';
   const respuesta = fetch(url)
                     .then(respuesta => respuesta.json())
                     .then(data =>{ return data.results})
                     .catch (error => console.log(error))
                     .finally(() => console.log("proceso terminado"));
console.log(respuesta);

// obtener personajes

const obtenerpersonajes = async() =>  {
    respuesta.map(
    (personajes) => {
        return {
            id:personajes.id,
            name:personajes.name,
            status: personajes.status,
            species: personajes.species,
            sex:personajes.gender,
            image:personajes.image
        }
    }
)
}

async function mostrarpersonajes() {
const personajes = await respuesta;

const section = document.getElementById("contenedor");
let html=``;
personajes.forEach(personajes => {
    html +=`
    <div class="card" id=${personajes.name}>
        <img src=${personajes.image} alt=${personajes.name}>
        <h2> ${personajes.name}</h2>
        <p>Estato: ${personajes.status}</p>
        <p>Especie:${personajes.species} </p>
        

         </div>` 

})
    console.log(personajes)
    section.innerHTML=html;
}
 mostrarpersonajes();   