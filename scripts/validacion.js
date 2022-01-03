$("#botonIngresar").click((e)=>{validadForm();});
//NO FUNCIONA , BUSCAR EN GOOGLE O EN LAS CLASES. La clase donde enseñan el preventDefault.
function validadForm(){
    $("#formularioIngreso").submit((e)=>{
        e.preventDefault();
        let usuario = "admin";
        let contraseña = 1234;


        let datosIngresados =$(e.target).children().children(".ingresoAdmin");
        
        if((datosIngresados[0].value == usuario) && (parseInt(datosIngresados[1].value) == contraseña) ){
            console.log("ingreso correcto");
            aparecerBotonDeCarga();
            $('.parrafoErrorIngreso').html('')
        }
        else{
            let mensajeError = $('.parrafoErrorIngreso')
                                .html('Usuario y/o contraseña equivocadas')
                         
        }
    })
}
/*Mañana utilizar el mismo sistema que para la entradas de productos, almacenar en variables 
la contraseña y usuario y compararlo con lo ingresado en los inputs. Acordarse que al validarlas tiene que
aparecer el boton agregar productos. Fijarse si puedo agregar un boton para eliminar las cards con los productos */