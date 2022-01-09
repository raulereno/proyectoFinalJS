$(document).ready(()=>{
    console.log("DOM READY");
    for(const producto of carrito){
            $("#tablaFinalizar").append(`
                <tr id="fila${producto.codigo}"> 
                <th scope="row"><img src="${producto.linkFoto}" class="imgCarrito"></th> 
                <td>${producto.nombre}</td> 
                <td>$${producto.precio}</td> 
                <td id="cantidad${producto.codigo}">${producto.cantidad}</td>`);
    }
})

$('#formularioFinalizarCompra').submit((e)=>{
    e.preventDefault();
    //Remuevo los items para no eliminar los productos nuevos que hayan sido agregados
    Swal.fire({
        icon:'success',
        title:'En breve nos comunicaremos por los medios ingresados para comunicarle el procedimiento para pagar el pedido, muchas gracias por su compra.Lo enviaremos a la pagina principal',
        html:'Cantidad de productos: '+localStorage.getItem("cantidadEnCarrito") +'<br>Total:$'+localStorage.getItem("totalEnCarrito"),
        confirmButtonText:'<a href="../index.html" class="finalizarCompra">Ir a principal</a>',
    })
    localStorage.removeItem("carritoPersistencia");
    localStorage.removeItem("cantidadEnCarrito");
    localStorage.removeItem("totalEnCarrito");
})