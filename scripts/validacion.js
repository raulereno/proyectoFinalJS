//Capturamos el evento click del boton submit y llamamos a la funcion validarForm
$("#botonIngresar").click((e) => {
    validadForm();
});

function validadForm() {
    $("#formularioIngreso").submit((e) => {
        e.preventDefault();
        //Contrasea predeterminada
        let usuario = "admin";
        let contraseña = 1234;

        //Capturo los datos del submit
        let datosIngresados = $(e.target).children().children(".ingresoAdmin");

        if ((datosIngresados[0].value == usuario) && (parseInt(datosIngresados[1].value) == contraseña)) {
            console.log("ingreso correcto");
            //Agrego una imagen de carga, un fadeout con un callback que hace aparecer un texto
            $('#bodyModal').html('<div class="loading"><img src="../images/loader.gif" alt="loading" /></div><p>Procesando datos...</p>').fadeOut(2000, () => {
                $('#bodyModal').html(`<p class="accesoConcedido">Acceso autorizado... Bienvenido</p>`).fadeIn(1000);
            });
            //Agrego un retraso de 3sg al llamado de la funcion
            setTimeout(aparecerBotonDeCarga, 3000)
        } else {
            //Sino se ingresa correctamente el usuario y la contraseña, hago aparecer un texto
            $('.parrafoErrorIngreso').html('Usuario y/o contraseña equivocadas')

        }
    })
}