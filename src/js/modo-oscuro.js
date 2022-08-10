const head = document.querySelector(".carrusel");
let grandeC = document.querySelector(".grande");
const puntos = document.querySelector(".puntos")
const frutas = document.querySelector(".frutas")
const footer = document.querySelector("footer");
const navMenu = document.querySelector(".menu-nav")
const videoC = document.querySelector(".video")
const reproduccion = document.querySelector(".reproduccionVideo")
const verduras = document.querySelector(".verduras")
const btnServicios = document.querySelector(".btnServicios")
const titleReservas = document.querySelector(".titleR")


const boton = document.querySelector(".boton");

accion =(e) =>{
    e.preventListener;
    if(e.target){
        head.classList.toggle("verde-dark");
        grandeC.classList.toggle("verde-dark");
        puntos.classList.toggle("verde-dark");
        frutas.classList.toggle("verde-dark")
        footer.classList.toggle("verde-dark");
        navMenu.classList.toggle("verde-dark")
        videoC.classList.toggle("verde-pino");
        reproduccion.classList.toggle("verde-pino")
        verduras.classList.toggle("verde-pino")
        btnServicios.classList.toggle("btnServices")
    }
        // titleReservas.classList.toggle("verde-pino")

   
    

}

boton.addEventListener("click", accion);

