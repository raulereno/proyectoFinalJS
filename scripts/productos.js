//Creacion de la clase producto
class Producto{
    constructor(nombre,precio,codigo,linkFoto){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.codigo = parseInt(codigo);
        this.linkFoto = linkFoto;
        this.cantidad = 1 ;
    }
}
//Comprobacion de que el DOM esta listo para usarse
$( document ).ready(function() 
{
   console.log( "El DOM esta listo" );

   $("#agregarProductos").hide();
   //Comprueba si hubo una carga de productos nuevos y reemplaza el valor del array de objetos con el valor que hay guardado en el localStorage
   if (localStorage.getItem("listaDeProductos") != null){
       listaDeProductos =JSON.parse(localStorage.getItem('listaDeProductos')) 
    }
    //Cuando el DOM este listo crea las cards
   crearCards();
});

//Lista de productos vacia
let listaDeProductos = []; 
//Tomando elemento padre
let divPadreCards = document.getElementById("cards_productos");
//Creacion de lo productos
listaDeProductos.push(new Producto("Pelota de Goma",300,1,"https://lh3.googleusercontent.com/pw/AM-JKLXbTM_f-Ylm-Bu7MTuVSSqZva_x6mfWFmUFBsRGK7k8FSlr17-NDUbIdBVJTCe2uUZpueDgAZ7gfGWDx-75ODjCfJvdULS0WrvN8nKpXUX2wbPihSx1B1x0xvJaupglsik3VGzsjU-85KIqf5gZoyH07A=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Cepillo de Dientes",150,2,"https://lh3.googleusercontent.com/pw/AM-JKLXJMzTGldW5xNwaZKGWSSD4KjgHq49BVjiWq6yUElFkUmFW5O7t8NgW4vBDFEq1HdyLPcc2vh-oq_Y6IuA5AfUIL79ZiJDBEInkTFK5SURbNqVjV-qT7eVIxH1sjDFX1jX6XbH8Kl9hZ09EYTLDdAwFiA=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Hueso Grande",250,3,"https://lh3.googleusercontent.com/pw/AM-JKLXxP49wJrl7G5UjuZ3bG6ISTQT9jDtLYS7VwnyMy0e6e4q0YptNwC6WwMEMQMjyxXUJvcjnquzLzCYsYhCbg1YtRp2ZySygdRNdN6wNUUf1NDaz7BUJ0FehIl_ENO7On0rr7A0Z7Mp8Ozi2IYFTYatdCw=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Shampoo Antiparasitario",350,4,"https://lh3.googleusercontent.com/pw/AM-JKLUS2SUqsr_lZF5n3VoPD3LUEiuj9GsgygozagdHEoKZlxIK-22NLhT2i-zYbIDS4-06vQF6rQ1NqZQ0XwC8jacGYRf3jzrTELO6FnF5aBc8I7K2KW4gnPTr-UqgmD6HCKbEMqZ7JK3Xq4r7Ipr9E5g2ug=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Corta Uñas",500,5,"https://lh3.googleusercontent.com/pw/AM-JKLVHhTENPzao2Jk5HkDFtOKCsOZWQfTmHqeUofR0E5VYOLjfPuusHpji24jFmVb3LQlTeAnSPHonIjq5mDY3dDEB7fpTUZah4I7DEJQpTWWL3EHFpPiC_pAdm9NiK5PBTjqQo8cFIdOyIWL18wdct0TxOw=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Collar con Cascabel",400,6,"https://lh3.googleusercontent.com/pw/AM-JKLWwUguxM2pSyJ01XsdzOJ4fKLcBCegfAQfMWIS9oNn6wEU-ODgUURwa2d4uNXKt7NUSt06wIENX-M89Zw71oY4-Wq1ZHgAy1-xVBmhgvvmqBeiroZLzhKGZ5XMjRrT5xDaH7zhJSvwDxzvgXC8y59oUaA=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Espuma Seca",550,7,"https://lh3.googleusercontent.com/pw/AM-JKLW2ghuLjF1W-3BSF87ylCDv60Fte5wxH-ODkfDLMARCA-C2ViBCJpmawhsALf1tETFG-GDsyBxY3WAQUK90aF_WrHieDxL2HfU96UwPdoOwhI_LfLWRRL0kB-hW0m_A7dedRVwhJ6-1nh98A3MJOZyxFg=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Cepillo para pelos",550,8,"https://lh3.googleusercontent.com/pw/AM-JKLU9Ryt-ZH6KBgxcxNp8nw9qyWyeiuxr668CQGDKeYcL3ViNioGcEEfXzLKufQ-SD6ti3x0EwGkXLij1XqCTsb3WCaN3TUU5LY-KKDNpohIEPWgv59CAjnUDWuZCRd9QZO86I5V5fE-sgaETZUDs9pHgww=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Comederos",280,9,"https://lh3.googleusercontent.com/pw/AM-JKLXRuPMHnuG0RSEp9ifIwXLEQ9IQHoeKoIDTkANIS3LekNd9HcdxZ_ihiawsTdfbETbuLhwu_vJuMxNC9PZ-kcvQvH4IIz15WIz_faMUnMSWx5XK3X4LIDVW7BzjZCdWufGZx4pYQ2YnzLQ76rUbsf3ijA=w469-h625-no?authuser=0"));

function crearCards(){
    //For...of que recorre la lista de objetos y va creando las cards correspondientes
    for(const producto of listaDeProductos){
        let card = document.createElement("div");
        //Agregando atributos al nuevo elemento
        card.setAttribute("class", "card");
        card.setAttribute("style","width: 15rem;");
        //Utilizacion de plantillas literales para crear la estructura interna que va a tener el elemento
        card.innerHTML =
        ` <img src="${producto.linkFoto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio:$${producto.precio}</p>
            <button class="btn btn-primary" id="${producto.codigo}">Agregar a carrito</button>
        </div>`;
        //Asignacion del nodo hijo al nodo padre
        divPadreCards.appendChild(card);
        //Tomo el elemento por codigo y le ponemos un evento onClick para agregar al carro, enviando por parametro el producto entero 
        $(`#${producto.codigo}`).click((e) => {agregarAlCarro(producto);});
    }
}
//Capturo el evento del boton Agregar Productos Nuevos
$("#cargaProdNuevo").click((e)=>{obtenerDatosProdNuevo()});

//Se obtiene los datos ingresados, se llama a una funcion nueva mandando los datos como parametros
function obtenerDatosProdNuevo(){
    $("#formularioDeCarga").submit((e)=>{
        e.preventDefault();
        let datos = $(e.target).children().children(".datosProdNuevo");
        console.log(datos);
        agregarProdNuevo(datos);
    })
}
//Se usa la clase para crear el producto nuevo y se lo pushea al array de objetos
function agregarProdNuevo(productoNuevo){
    listaDeProductos.push(new Producto(productoNuevo[0].value,productoNuevo[1].value,(listaDeProductos.length+1),productoNuevo[2].value ));
    console.log(listaDeProductos);
    localStorage.setItem('listaDeProductos',JSON.stringify(listaDeProductos))
    listaDeProductos = JSON.parse(localStorage.getItem('listaDeProductos'));
    Swal.fire({
        icon:'success',
        title:'Producto agregado correctamente',
        confirmButtonText:'Ok',
    });
    //Reseteamos el form para agregar nuevos productos. Utilizo el selector de JS puro debido a que no encontre un equivalente del reset en JQuery
    document.getElementById("formularioDeCarga").reset();
    crearCards();
}
//Funcion que muestra el boton de carga de productos nuevos
function aparecerBotonDeCarga(){
    $("#agregarProductos").show();
}