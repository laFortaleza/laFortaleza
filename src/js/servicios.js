//-----------------//
/*Inicia Carrusel*/
const fila = document.querySelector('.contenedor-carousel');
const Imagenes = document.querySelectorAll('.fortalezaNos');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/*Flechas*/
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

/* Numero de indicadores*/
const numeroPaginas = Math.ceil(Imagenes.length / 4);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

/*Animacion Imagenes*/ 
Imagenes.forEach((fortalezaNos) => {
	fortalezaNos.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			Imagenes.forEach(fortalezaNos => fortalezaNos.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	Imagenes.forEach(fortalezaNos => fortalezaNos.classList.remove('hover'));
});

/*Finaliza Carrusel*/

//-----------------//

/*Inicia Tab*/
const li        = document.querySelectorAll('.li')
const bloque    = document.querySelectorAll('.bloque')

li.forEach( ( cadaLi , i )=>{
    li[i].addEventListener('click',()=>{

        li.forEach( ( cadaLi , i )=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('activo')

    })
})
/*Finaliza Tab*/

//-----------------//

/*Inicia Tab Vertical*/
const tabli         = document.querySelectorAll('.tabli')
const tBloque    = document.querySelectorAll('.tBloque')

tabli .forEach( ( cadatabli  , i )=>{
    tabli [i].addEventListener('click',()=>{

        tabli .forEach( ( cadatabli , i )=>{
            tabli [i].classList.remove('active')
            tBloque[i].classList.remove('active')
        })

        tabli [i].classList.add('active')
        tBloque[i].classList.add('active')

    })
})

/*Finaliza Tab Vertical*/
