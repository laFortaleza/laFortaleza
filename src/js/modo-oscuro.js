
const boton = document.querySelector(".clarOscuro");

accion =(e) =>{
    e.preventListener;

        document.body.classList.toggle("verde-dark")
        boton.classList.toggle("active")

        if(document.body.classList.contains('verde-dark')){
            localStorage.setItem('dark-mode', 'true')
            console.log('trueeee')
        }
        else{
            localStorage.setItem('dark-mode', 'false');
            console.log('falsee')
        }
    
}
if(localStorage.getItem('dark-mode') ==='true'){
    document.body.classList.add("verde-dark")
}
else{
    document.body.classList.remove("verde-dark")
}

boton.addEventListener("click", accion);

