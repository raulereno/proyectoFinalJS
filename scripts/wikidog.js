$(document).ready(()=>{
    obtenerDatos();
})
//Guardamos el link para consumir la API
const URLGET = "https://api.thedogapi.com/v1/breeds";
//Declaro un array vacio
let razas= [];
//Detectamos si hay o no un cambio en el selector
$("#breed_select").change(()=>{
    let razaSeleccionada = $(`select[id=breed_select]`).val();
    console.log(razaSeleccionada);
    mostrarRaza(razaSeleccionada);
})
//Se obtiene los datos de la API
function obtenerDatos(){
    $.get(URLGET , (respuesta, estado)=>{
        if(estado == "success"){
            razas = respuesta;

            console.log(estado);
            console.log(razas);
            console.log(razas.length);
            //Con los datos ponemos en un select el nombre de las razas que da la API
            for (const raza of razas) {
                $("#breed_select").append(
                    `<option id="${raza.id}" value="${raza.name}">${raza.name}</option>`
                )                
            }
        }
    })
}
//Funcion que muestra la imagen de la raza, y agrega una tabla con las caracteristicas mas importantes de la raza
//Muchas cosas se encuentran en ingles ya que no encontre la solución para traducir datos consumidos de una API
function mostrarRaza(id){
    
    let parametro = (nombre) => nombre.name === id;
    let encontrado = razas.findIndex(parametro)
    console.log(encontrado);
    let imagen = razas[encontrado].image;
    let peso =razas[encontrado].weight;
    let altura =razas[encontrado].height;
    $("#breed_image").attr(`src`, imagen.url );
    $("#breed_data_table").html(
        `<caption class="tituloDeTabla">Informacion de la raza: ${razas[encontrado].name}</caption>
        <tbody>
        <tr class="nombreDeRaza">
            <td>Nombre</td>
            <td>${razas[encontrado].name}</td>
        </tr>
        <tr class="criadoPara">
            <td>Criado para:</td>
            <td>${razas[encontrado].bred_for}</td>
        </tr>
        <tr class="temperamento">
            <td>Temperamento:</td>
            <td>${razas[encontrado].temperament}</td>
        </tr>
        <tr class="esperanzaDeVida">
            <td>Esperanza de vida:</td>
            <td>${razas[encontrado].life_span} (años)</td>
        </tr>
        <tr class="peso">
            <td>Peso promedio:</td>
            <td>${peso.metric} kg</td>
        </tr>
        <tr class="altura">
            <td>Altura promedio:</td>
            <td>${altura.metric} cm</td>
        </tr>
        </tbody>`

    );
}
