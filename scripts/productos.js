//Creacion de la clase producto
class Producto{
    constructor(nombre,precio,stock,codigo,nombreFoto){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.codigo = parseInt(codigo);
        this.nombreFoto = nombreFoto;
        this.cantidad = 1 ;
    }
}
//Comprobacion de que el DOM esta listo para usarse
$( document ).ready(function() 
{
   console.log( "El DOM esta listo" );
   crearCards();
});

//Lista de productos
const listaDeProductos = []; 
//Tomando elemento padre
let divPadreCards = document.getElementById("cards_productos");
//Creacion de lo productos
listaDeProductos.push(new Producto("Pelota de Goma",300,6,1,"https://lh3.googleusercontent.com/P0UME3gu_7ZERZ9sfhNsFvR2eDunX0K6ukhjXpp0Nia4c0jpmOiQmEgKtTBSvmVBibxSML6halmqhpgrmlaX1nyfXvuU9oN9CiqDod_k7W80Pg7QGLiYiU914L_tzgUzbIIu0OQC1e8dBvZObx26JMQyqBAGXxbAJihxADs-FUgOm2Ibo51MvC_DCqahXsEmyWe1cGIX0UQvU3I4vA1B_mg2HNiochd_i6TAb9xJ-bDk4o0TTziuQriCE1XKKSquoOeDjhBEH880Ss6K-n5rkNJo7JEhq0AYJzHEMK8nAIbb-ugslVnhshr3c8c5B7gT2akq0P-heLwY8H6RU5mcD407_CGnYnWNRttezujDJTgj4lbqEjMYQvjbm1eVP448DPRS6iiFHw-jDemsNzi7NaF3QL09a9F_f1blOyV6jPxx07S_6WMZq8EkyshQ-BbnljSrxLE5rEWbER4-fW_foP9-qsjzQGj2DvSGTjXsOiC42Kl0ShuBWtbwuYhdkwe-NbjF8CC6r7Xt6WHs9OmpInSPu2rEKXh2ap9RrvJeRbL_8Y5c6HNC_BrEx2mAcIWIBlXPJXgcd3UlRpm_-wVlQzT0quLmFn7kTb5bvetJMEFMhr54-Q-rYTCtI9Nu-s-_Hx2A2nHq4PstqqhUR1pwZZBQRvmQAilPLbRF-nFX2CtczynEaOvWACRpdM3DUwtcR2jIfMCCqw2Oe4-3mKkvv-M=w164-h219-no?authuser=0"));
listaDeProductos.push(new Producto("Cepillo de Dientes",150,10,2,"https://lh3.googleusercontent.com/CJ1ERZ8E-d_OdCj79D1A1faEIkMbM0qyjG4gw3OgrCRA6YOGGGPdvxW_wML58Q5vQlW5X5ebjXQVn-7MIretTzDSgCzfry7qUdyPzVEC-7Q2ZDzK6o5WtKjke-owzbs6q1Y47bJR4B77Lk2o76K5w3cGqy8v5nn_zhmm7bdMFQu1mpvZPAnJ2IKlpq-8K2z3BcDmPkN0OnaG9KWbJD2lxo2w9gGwwYbzIsauDTXWIvYVprCjuoAo15-3OeldpsG3ZklRulZLX5pjOOlX-15jgNnni9TAgtPmgWtokM4lBE08ZBTwjK8HIJkwYLegNzNfO9kBVk5p2D-Y4_iMJpo-k0cnLoBuTRcWSLT3_3Bu7htp4KV-YQ276mgRHR57-TxHfEXa9dDQ4fhvWHwOp8zxZwwplfeuuDrSSBMdyb9Rj7Ivp_XVpMq1zCdQf7b4fvyLL_moeqZ-m_3bod7cXDJYqxDDo4GgPs8BlixltD3SpUxGlcRMv8J9IaqAB6a1PvrjpUU4zDWNbhs5ACrLANSES_pZVildzwW-DGkSx6ULLRew5qhBr2dz0H9MGjGSiuqamHsJLcl8M02kBl8tgvwmS9J-TBTed9MajyZUuxvGBjTvYUxHdeqUVVcgeCvvAnCA5FrH3EV8uAK5o88OqB7KMHW3CBYMxbu5mvRRnWcaKhkiuv1aQgtv6it1xDHxUaEpvcG6mp-Rcs3S9P29GwRyrrQ=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Hueso Grande",250,8,3,"https://lh3.googleusercontent.com/Q7AChrLGdnuizdBFwANQ2_3zt0MLN-ro41hiZHATONRfO2Sa3y7gtNgrq_k_6SriYiHJjqGkSSqgXyOSbWUkIMsW87TCJyZbAkM0I6bvB2LATzDC_Wh04BGI0TbNEmMLYG3nTAQmbbBWvi79340lk476usWOmADsCK5Un5my5dJkqWwnzAmTHf87_O1YU-Ujr3wFR3ZznXP6SJv4gvufTXIcQ4_NWUpY5hlVXuc4y3xfrKhMTlvKC6MRyyFn5RmE1fH2j5i_aYL92c_iQnF_xfbGZd9hUgtBrrLIx5y64yIzvk3j-fGFnSuZ5Beypz0jsvyEH6rzUvumvpLSFpyDYAVV8dv6CvgiG0WCOv36O9n_BIiy5OJpbXm38acqYLmKpzj47y9sjTaBz14Hts-vEdkfSGDhYRmcKHQ12TgOtCTI7RDc8PQrqxvI-0moRQ3Z2ur1OGh_nWPU1UcaRBfQZ9oPtNAYk1tC4FRQUEtd-1JstbddbLsVygwugcQx8s0aBgjJnqaUJSM2dZ3uPG67kS2QPHBChpuXhmkFFKu5Y9H9qrhaQ17sHpHaq8I_dVS97G0G4gX091uYjR6mPBgJ05knippY_hS64PAgBR2kuWhLcn5keayk5eVT3OhyyM5CKTH_JnXhIhCGzvyqzJLyRGWdTkmak31px4Zgp6KBnkSvfE9H3tF6TKBhhyzYeNtX0YZ9MMfe6_yuOx4vLL8TClE=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Shampoo Antiparasitario",350,10,4,"https://lh3.googleusercontent.com/nIEXVst2w6HZJsC7L47_JFptZrlmCir4BrzSHsKK3hCLt-xqomqV_p1qXzK1O7COxEqfhy-S2qOTVeHMApwoTpzTFAPzXSkclYFZ3VmjQ-IXKFtFs9k8WvDjRJW5Ht4vMPMCdnNjyKWIdjfswM_--uyDwuKCSKzUaXwCSZAdkgEsuLK4su1Nl7i12wkWObGnKHuP2IumgpmaIJNQBLuYPGQsedmvQ4_1PTxN2XeZYVsAyrbpxxItQBa2Tm6QLvdVjLoDTkpNrtOb1iXgJFcCK4DnfkzEVqQpmCcvvOf68Tiic5yfPH9_dBLx35de2vccQTtCEgBh1nuQT2SYUNNJ39YqSz6xecf1yHiKysVohtPyAr0tF0WiDX00wH1nl1eEiGNtJGkWJOWRkGW7HDdTUCvod4ly3ZQXHQkUcQwtEetVy2z6doXTSwS-4xYsR1NRHpbbCFyNp4RMBR-figgRKLc33fgb0PDwT0IfeifUx4BieV20meFEIRR8FDTf60q1oEG57syeSYdoO16_CkxN7_0h4EHqahbv0adElDrk9PJTuYWASVd3qCDxLDZmFVOGib10Yj156T2phcN0eZ5AmnLCZNLR3gJBOp4kHJusIU1z6L8rsqsmrUuheGV2zFZCErSEPn7XHlPCvHKPMbCy0-7mtobeWl_g0t0Jz094bigfQ4zvF36IJMj1JoGwsod4URbLDxkiDcq2jUAu4a055bg=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Corta Uñas",500,5,5,"https://lh3.googleusercontent.com/7xAWQiyp0Ufoy3kKW7WjFSrmeTrDIohOfacRERsmZCWQ9qn8h7_utj-TXEu2Mmg58U8RZ9gN8fihMbbcsOv2NGZUy-dRqyCEE3f6EE0BHj-DoCLYrphDrWS4tYnQnyLPpcYILSu2NAn_sd5P00kKX29uE_-Nk1xNHD_pJegkDOnWGox74LKayIpduiDBh7HCDMpJLKRiSx1w38dueFw4lEjQf2i656dVUzb8sk6YU6Fm3Xbm_ZOmTAUtju9YpBTCljjFk3hM6kp7Zi6IDtRWIy_Yr9Aha2D-ixPYcXn5WNMmezaQJTGpE09DdMcZpBVYT-4XQ0BPy_53jBixXrUnjdiHWMA0jhjONXREi30CtAGnao-__NaQr71buP7gEJDOtenhSSaeQS-fL1RueELMlDvcP12koDI4x8Pm-3AZoGQumOj-zaC-T1uzVywkV5caXdFmGJJffM42JhqQtXqwISCY-GTmN4os6ecVg1wnkCG2dAStLp_dR5CLbM2qlz-VE2DG3HUp6Mz7JklX5iaT0WsffOB6PF4CbIwnH-ieGdxJtMSE1jz4EPp179jD8us7ddo2pHiuRmjUj0mAuiHcnptUOnJvd1njV7u6ukYaTi8Lfs46hqVETLijRw_snZOfCBPuMKEvy5pl5QMa124hIrxOEsdHlI12LbwgKQ0JggjwsBwwnkuz1TLxj3PXdBT2U0fmpuS3Yjm8oPuPqVeJxgI=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Collar con Cascabel",400,11,6,"https://lh3.googleusercontent.com/dpYJxLSj9cbTu1TxG6b46k8V-3_EilQv1YI3YeU5B1oRofhaizexLLKIOzDDh6bocxOjfb0QzQafc8gN68imToBwtWMZxxsBpF9nCtK0nQhyWICo_UGPU3nNV4ZQQv5OUigb1X6FssWG0FqB9GLGCvz5wzSXGXZuVDrA6grhkkCSrhIOJvC1vdq9CV_OFgWPHBit65JXVgjaZunbUqnvDXMhr7rcXhzuzQmyYWgZAxVUI1ett8Km_pKq7o6djTqVt6zSfNzkuEQomyQoxrPCGQZpRRltLmfdy5ihTguDrQdb5-dNTAtFn_unJwXEYlDY1lB_9QspbkcPI06a2lIejhK64DZjrWgWgerdWpAYaHPs8c_u-kmkw2YgcYoeOthm36uwp_SY6JkIsxvy1p3wGy9wauUg_nt9YesBSb7XnpjZ35rzkugrA1nWSAaLtJTMrgIuiEaei6xVvtztqbjEQqBa5QI9Ona8ph9fCGN7b-oudFQ1DdaNpGzNavOPae8BgLMfF1jrkWOXjNfgGIgWlMAUW5yGoKC-mSLLrEZ0ng65VZmgUIYRH7uGO1G4-fI6QMItJThcQY0VcAcUSZR0lK9-70XnKo2ZB789kjnJbxBahzwJ2q3WRWDSnPmAA4mAG5YExKLiQfcqoht4YKheL6qydil2Um8HghljrQ-jeTgYFoFvCm2__qm5189TWn5mDB2Yhi-xXsBz6ps2S5gSfH8=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Espuma Seca",550,6,7,"https://lh3.googleusercontent.com/1c5e9wsfzAQEhLWPVIXSN3a6hVcgSEHg15jMRszFEVt7Hrp2GSZPkMacTe1n8tD_25zb-pzUbv1FUMzj33uqffMtK71wOJWlCreZ8QUCEZgg3o-vCfml9ox5CKNn1y7lF9yIz0_2Zlj2FoD_uXTfD6WkEsm5wB_8CdLsDBobpB1rSgU0jLZ2KbVfv_TvZ6Jpsv_vSdaKkOA1U5VbBfLr03qhh5Uy_8VsPlUXRxm1lp6WRZhyxMnBwQ6d8wylIoAuLb5_VywGOFHlM10EhJcPPZH20hVkOLIJJyGjC4l-g9rRAc2ACc_c4aG2Wql2DuMtY3fePnejzqZTXUVbjkHvLGvmOkuboMOOZzTox1gA4r_CUkMJslRxJt5-bgO0DgDGas1RtkTEsYM3w3OuFFLIAfaJsYDYHxs385ELgdw68QMfCVdGboIl1XZ1tt9awRSZP59CcordIieOssxhNJY7mQ-ADT3ylng83rgJtPO60gDly6nC2bOCJMuklYW6jKE4emGNQsynLWiXjNfPl1dteMdFMUQ0adE901GknO4HwudquyxDJ_mAzoAgMrZWjvrlXoYxAai5Nhymtrbq7qeSu6wYGmPT_ZRd21NgsZpUEmcTpJy2HObOBU8aD3PjvpQpACpfm-hr2oIyXnahNd62uzyEXga98lvHMCOxAz5bCKv3fcMfTN3QeBLQpXskioXMJgshkZ8wyB1uXiyRKZ82zbE=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Cepillo para pelos",550,15,8,"https://lh3.googleusercontent.com/pkOV0hR3LMooaAW_xuhLpGf8VJjNgCzSudZWtImSXoBUWQgzE5RSH-_775HSnfpSTms8UddamUoFTwixBsTPWzi7rhqqSoDSfLxom6voFKR0yvYMX6VxaqY-Kj7lNxbPTCQt09hIwKmhmlgZHwg2eRwxHaBMcpBTZlOJXZK990x28QoCq478c76g0FhjPtrrBiiMXAlrIyCWOMHWn-lNwIfa1piHM93LMJa4lNOVxtwXHkMhK7HG1jnzmAsyVzlGv1EdDjJ9YMyXD4jjA1lvwaV8N4vtYZBkq-Bj0OGfg310hP4rwEhpI6bfWxKkm1Jt2DSi6su89Hv6cSVs0AJnHJvyIOJWoteqg31jCK0zV8hl4ljI5ms9Vp95BT-g1Yt1XZLJ8Roi_0FE2LAWiRMXdarXGhKXpZd62XSbPEOvXNBPmM3UWqRUabtJnf9JwY85x1surZSoglxWEjlkKtV3QcDarjoge7rxVu7bhZ-Kplr-8ehFxieD7r3ajZJLDZroQB4hVXTHzRpC7jLmJLGVZE4N2GFkT2E3rJxX1Mh9d8caPF860SccngCaRJFnTWs7t6V3Dj3FcWZ9dqUsAMKJcNzx27OKy76rvTN8eS5PvnwceEX4wDGUrTtjXBZQfv__tA9bwvmowgb_IPheyzO_Db5zpLAWe1_NnxO9dT_2Ux45O9VyrEjcDrgwBF6gT2f85ev1oAShcaQjB6OeCgwCdys=w469-h625-no?authuser=0"));
listaDeProductos.push(new Producto("Comederos",280,18,9,"https://lh3.googleusercontent.com/HeFS0QBa4jBCqBxMJsnAopg4w9_0MvCqkllHgLS9B_vuonKqsrGzgn5Kmfreik_omjAJ_A4UVfG5iZkJUJtaU5Q194jjRiASlJ3i0iasJpwFkMPQ1RJX4T7OhQFlaz-ebnRXYuxSghhQPK1Tf0PIANJm0Le8eFxJREuCWGpIzKxNX0wTacExt5YV0u4DqvebK8ZcyLG5A_WyMqL2JRLexCBO3lEaiC7gVRdEzSw47fRuaYpRuybsB6nyXqu6tQ2ZRx58Mqimll-9Ceg2NUNVilCRmsjJ34f7n5xuO4WWrvwlg8QP_SDx-RlYdVBYirlg8WQxXAfwvcjAX7fjh79ee_1J6quKxk4KJUscTIZBuCc0RyOo2Z3L4pxqnm6ouKOvNFPcykD3ZeHn_AlO9uf_rtTIwhLaQ8nc5uaPvhmmssxlwkwnAQv9Yg-HYLl_SRAlYltbvyDrxPGAxmTjVvQ8P_I8W9ZXWnt6U8hnxW5KlyOVMoCWX42eeRQ-GCVSsLMGVkKiLKnrzwivo6eNML5aiZBcyfFxTS4YB9A6Yst1-kHRrCec6IYtd0kx2CKrAe0Z-kSDoJvfE_j30zUCfPhqJ_Idm2GIq2cOOnjmQmRag7o5d71zazlUo7hTWl0d2fKQB5_FizqIbwu_hp9vJTmqLgdnFhaGaBd4zhslwvkBdeSyyF4HiVSwyZv8kYn82IB6Ey0dr_uLQCMMeNykKWbPQOM=w165-h220-no?authuser=0"));

console.log(listaDeProductos)

function crearCards(){
    //For...of que recorre la lista de objetos y va creando las cards correspondientes
    for(const producto of listaDeProductos){
        let card = document.createElement("div");
        //Agregando atributos al nuevo elemento
        card.setAttribute("class", "card");
        card.setAttribute("style","width: 15rem;");
        //Utilizacion de plantillas literales para crear la estructura interna que va a tener el elemento
        card.innerHTML =
        ` <img src="${producto.nombreFoto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio:$${producto.precio}<br>Stock: ${producto.stock}</p>
            <button class="btn btn-primary" id="${producto.codigo}">Agregar a carrito</button>
        </div>`;
        //Asignacion del nodo hijo al nodo padre
        divPadreCards.appendChild(card);
        //Tomo el elemento por codigo y le ponemos un evento onClick para agregar al carro
        $(`#${producto.codigo}`).click((e) => {agregarAlCarro(producto);});
    }
}
$("#cargaProdNuevo").click((e)=>{obtenerDatosProdNuevo()});

function obtenerDatosProdNuevo(){
    $("#formularioDeCarga").submit((e)=>{
        e.preventDefault();
        let datos = $(e.target).children().children(".datosProdNuevo");
        agregarProdNuevo(datos);
    })
}

function agregarProdNuevo(productoNuevo){
    listaDeProductos.push(new Producto(productoNuevo[0].value,productoNuevo[1].value,productoNuevo[2].value,(listaDeProductos.length+1),productoNuevo[3].value ));
    console.log(listaDeProductos);
    crearCards();
}