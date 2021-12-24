$(document).ready(()=>{
    obtenerDatos();
})

const URLGET = "https://api.thedogapi.com/v1/breeds";
let razas= [];
$("#breed_select").change(()=>{
    let razaSeleccionada = $(`select[id=breed_select]`).val();
    console.log(razaSeleccionada);
    mostrarRaza(razaSeleccionada);
})

function obtenerDatos(){
    $.get(URLGET , (respuesta, estado)=>{
        if(estado == "success"){
            razas = respuesta;

            console.log(estado);
            console.log(razas);
            console.log(razas.length);

            for (const raza of razas) {
                $("#breed_select").append(
                    `<option id="${raza.id}" value="${raza.name}">${raza.name}</option>`
                )                
            }
        }
    })
}

function mostrarRaza(id){
    
    let parametro = (nombre) => nombre.name === id;
    let encontrado = razas.findIndex(parametro)
    console.log(encontrado);
    let imagen = razas[encontrado].image;
    let peso =razas[encontrado].weight;
    let altura =razas[encontrado].height;
    $("#breed_image").attr(`src`, imagen.url );
    $("#breed_data_table").html(
        `<caption class="tituloDeTabla">Informacion de la raza:<br>${razas[encontrado].name}</caption>
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
