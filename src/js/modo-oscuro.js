// const head = document.querySelector(".carrusel");
// let grandeC = document.querySelector(".grande");
// const puntos = document.querySelector(".puntos")
// const frutas = document.querySelector(".frutas")
// const footer = document.querySelector("footer");
// const navMenu = document.querySelector(".menu-nav")
// const videoC = document.querySelector(".video")
// const reproduccion = document.querySelector(".reproduccionVideo")
// const verduras = document.querySelector(".verduras")
// const btnServicios = document.querySelector(".btnServicios")
// const titleReservas = document.querySelector(".titleR")


const boton = document.querySelector(".clarOscuro");

accion =(e) =>{
    e.preventListener;

        // head.classList.toggle("verde-dark");
        // grandeC.classList.toggle("verde-dark");
        // puntos.classList.toggle("verde-dark");
        // frutas.classList.toggle("verde-dark")
        // footer.classList.toggle("verde-dark");
        document.body.classList.toggle("verde-dark")
        boton.classList.toggle("active")
        // navMenu.classList.toggle("blanco")
        // videoC.classList.toggle("verde-pino");
        // reproduccion.classList.toggle("verde-pino")
        // verduras.classList.toggle("verde-pino")
        // btnServicios.classList.toggle("btnServices")

        if(document.body.classList.contains('verde-dark')){
            localStorage.setItem('dark-mode', 'true')
            console.log('trueeee')
        }
        else{
            localStorage.setItem('dark-mode', 'false');
            console.log('falsee')
        }
    
        // titleReservas.classList.toggle("verde-pino")
    

}
if(localStorage.getItem('dark-mode') ==='true'){
    document.body.classList.add("verde-dark")
}
else{
    document.body.classList.remove("verde-dark")
}

boton.addEventListener("click", accion);

