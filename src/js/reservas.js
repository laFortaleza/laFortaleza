let checkInt, checkout, personas, servicio, id, button, myReserva;
const d= document;

checkInt = d.getElementById("checkIn");
checkout = d.getElementById("checkOut");
personas = d.getElementById("people");
servicio = d.getElementById("services");
id = d.getElementById("id");
myReserva = d.querySelector(".miReserva")
button = d.querySelector(".button");

button.addEventListener("click", mostrarReserva);

function mostrarReserva(e){
    e.preventListener;
    if (e.target){
        let container= d.createElement("div");
        let titulo = d.createElement("div");
        let informacion = d.createElement("div");
        let btnEliminar = d.createElement("div");
        container.append(titulo, informacion, btnEliminar);
        container.className = "informacion";
        btnEliminar.className = "eliminar"
        titulo.innerHTML = "<h3>MI RESERVA</h3>"
        informacion.innerHTML= `<p> ${services.value} </p> <br> Desde ${checkInt.value} hasta ${checkout.value} <br> Para ${personas.value} personas`
        
        btnEliminar.innerHTML= "Eliminar";
        myReserva.appendChild(container);
        
        btnEliminar.addEventListener("click", (e)=>{
            e.preventListener;
            if(e.target){
                myReserva.removeChild(container)
            }
        })
    }
}
