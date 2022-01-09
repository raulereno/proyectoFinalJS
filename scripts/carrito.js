$(document).ready(()=>{
    console.log("DOM READY");
    console.log("Usuario: admin / Contraseña: 1234");
    comprobarLocalStorage();
})

//Defino variable carrito y la inicio como array vacio 
let carrito =[];
console.log(carrito);
//Variables que toman elementos del DOM
let botonFinalizar = $("#finalizarCompra").click((e) => {finalizarCompra();})
let montoTotalAPagar = $("#montoTotal");
let cantidadDeProductos = $("#cantProductos");
let cantidadDeProductos2= $("#prodTotalesVentana");

let cantidad=0;

//funcion que comprueba local storage
function comprobarLocalStorage(){
    if (localStorage.getItem("carritoPersistencia") != null) { 
        carrito=JSON.parse(localStorage.getItem("carritoPersistencia"));
        calcularTotal();
        console.log(carrito);

        for(const producto of carrito){
        $("#tablaBody").append(`
            <tr id="fila${producto.codigo}"> 
            <th scope="row"><img src="${producto.linkFoto}" class="imgCarrito"></th> 
            <td>${producto.nombre}</td> 
            <td>$${producto.precio}</td> 
            <td id="cantidad${producto.codigo}">${producto.cantidad}</td> 
            <td><button class="btn btn-light" id="basura${producto.codigo}"><img src="../images/trash.png" class="basureroCarrito"></button></td> </tr>`);
            //Agrego evento para poder eliminar el producto al refrescar pagina
            $(`#basura${producto.codigo}`).click((e)=>{eliminarProducto(producto.codigo)});  
        }
        cantidad = parseInt(localStorage.getItem("cantidadEnCarrito"));
        montoTotalAPagar.html(`$${localStorage.getItem("totalEnCarrito")}`) ;   
        cantidadDeProductos.html (`${localStorage.getItem("cantidadEnCarrito")}`);
        cantidadDeProductos2.html(`${localStorage.getItem("cantidadEnCarrito")}`);
        
    }
}
//Funcion que agrega productos al carrito, es llamada desde el archivo scripts linea 72. 
function agregarAlCarro(producto){
    let encontrado = carrito.find( e => e.codigo == producto.codigo);
    console.log(encontrado);
    cantidad++;
   //Condicionales para comprobar si ya ese producto en el carrito y le va sumando a la cantidad 
    if(encontrado == undefined){
        carrito.push(producto);
        console.log(carrito);
        localStorage.setItem("carritoPersistencia",JSON.stringify(carrito));
        
        $("#tablaBody").append(`
        <tr id="fila${producto.codigo}"> 
        <th scope="row"><img src="${producto.linkFoto}" class="imgCarrito"></th> 
        <td>${producto.nombre}</td> 
        <td>$${producto.precio}</td> 
        <td id="cantidad${producto.codigo}">${producto.cantidad}</td> 
        <td><button class="btn btn-light" id="basura${producto.codigo}"><img src="../images/trash.png" class="basureroCarrito"></button></td> </tr>`);
        //Evento click para eliminar producto
        $(`#basura${producto.codigo}`).click((e)=>{eliminarProducto(producto.codigo)});    
    }
    else{
        let posicion = carrito.findIndex(e => e.codigo == producto.codigo);
        console.log(posicion);
        carrito[posicion].cantidad +=1;
        localStorage.setItem("carritoPersistencia",JSON.stringify(carrito));
        $(`#cantidad${producto.codigo}`).html(carrito[posicion].cantidad);
    }
    //Llamado a funcion para ir actualizando el DOM
    cantidadYTotalProds();
    //Animaciones concatenadas para efecto de agregar al carrito
    $(`#${producto.codigo}`).css("background","green").fadeOut(800, () =>{
        $(`#${producto.codigo}`).html("Agregado ✔️")
     } ).fadeIn(800).fadeOut(800,() =>{
        $(`#${producto.codigo}`).html("Agregar a carrito")}).fadeIn(800, () =>{ 
            $(`#${producto.codigo}`).css("background", "#0d6efd")
        } );

}

//Función que calcula el total de los precios
function calcularTotal(){
    let total = 0;
    for(let prodEnCarro of carrito){
        total += (prodEnCarro.precio*prodEnCarro.cantidad);
   } 
    return total;
}
//Funcion que limpia el localStorage y reestablece los valores de precio total, y cantidad de productos
function finalizarCompra(){
    Swal.fire({
        icon:'success',
        showDenyButton: true,
        title:'Pedido procesado,desea continuar?',
        html:'Cantidad de productos: '+localStorage.getItem("cantidadEnCarrito") +'<br>Total:$'+localStorage.getItem("totalEnCarrito"),
        denyButtonText:'Cancelar compra',
        confirmButtonText:'<a href="finalizarCompra.html" class="finalizarCompra">Envio y metodos de pago</a>',
        reverseButtons:true,
    });
    //Remuevo los items para no eliminar los productos nuevos que hayan sido agregados
    // localStorage.removeItem("carritoPersistencia");
    // localStorage.removeItem("cantidadEnCarrito");
    // localStorage.removeItem("totalEnCarrito");

    montoTotalAPagar.html ("$" + 0);
    cantidadDeProductos.html ( 0 );
    cantidadDeProductos2.html( 0 );
    cantidad=0;
    $(`#tablaBody`).html("");
}

function eliminarProducto(codigo){
    let encontrado = carrito.findIndex((elemento)=>elemento.codigo == codigo);
    
    if(carrito[encontrado].cantidad > 1){
        carrito[encontrado].cantidad = carrito[encontrado].cantidad -1;
        console.log(carrito[encontrado].cantidad);
        $(`#cantidad${codigo}`).html(carrito[encontrado].cantidad);
        
        //Actualizo el localStorage con la nueva cantidad
        localStorage.setItem("carritoPersistencia",JSON.stringify(carrito));
    }
    else{
        carrito.splice(encontrado, 1)
        $(`#basura${codigo}`).closest(`tr`).remove();
        localStorage.setItem("carritoPersistencia",JSON.stringify(carrito));
    }
    cantidad = cantidad - 1;
    cantidadYTotalProds();
}
//Funcion que actualiza la cantidad de productos en carrito y el total a pagar
function cantidadYTotalProds(){
    //Guardo la cantidad de productos y el total a pagar en el Local Storage
    localStorage.setItem("cantidadEnCarrito",cantidad);
    localStorage.setItem("totalEnCarrito",calcularTotal());
    //Actualizacion de variables para que aparezca cantidad de productos y total a pagar
    montoTotalAPagar.html(`$${calcularTotal()}`)    
    cantidadDeProductos.html (cantidad);
    cantidadDeProductos2.html(cantidad);
    console.log(cantidad);
}