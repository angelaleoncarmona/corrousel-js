// Variables

const imagenes = ['img/foto-uno.jpeg', 'img/foto-dos.jpeg', 'img/foto-tres.jpeg'];
const objetoImg = document.querySelector('#imagen');
const botonRetroceder = document.querySelector('#retroceder');
const botonAvanzar = document.querySelector('#avanzar');
const templateCiruclo = document.querySelector('#template-circulo').content.firstElementChild;
const circulos = document.querySelector('#circulos');
let pagina = 1;



// Funciones
// vincularemos esto con cada circulo
function cambiarPagina(nuevaPagina) {
    pagina = nuevaPagina;
    render();
}
// Avanzar con boton
function avanzarFoto() {
    pagina = pagina + 1;
    // Verificamos que no hemos alcanzado el límite, en caso de tenerlo, restaurarlo
    if (imagenes.length + 1 <= pagina) {
        pagina = 1;
    }
    render();
}
// Retroceder con boton
function retrocederFoto() {
    pagina = pagina - 1;
    // Verificamos que no hemos alcanzado el límite, en caso de tenerlo, restaurarlo
    if (0 === pagina) {
        pagina = imagenes.length;
    }
    render();
}


function render() {
    // Imagen
    objetoImg.setAttribute('src', imagenes[pagina - 1]);
    // Circulitos
    circulos.textContent = '';
    imagenes.forEach(function (imagen, indice) {
        // Creamos
        const nuevoCirculo = templateCiruclo.cloneNode(true);
        // Anyadimos Eventos
        nuevoCirculo.addEventListener('click', function () {
            cambiarPagina(indice +1);
        });
        // Marcamos el que coincide con la página
        if (pagina === indice +1) {
        nuevoCirculo.setAttribute('checked', true);
        }
        // Mostramos
        circulos.appendChild(nuevoCirculo);
    });

}


// Eventos
botonAvanzar.addEventListener('click', avanzarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);



// Inicio

render();