// Variables

const imagenes = ['img/foto-uno.jpeg', 'img/foto-dos.jpeg', 'img/foto-tres.jpeg'];
const objetoImg = document.querySelector('#imagen');
const botonRetroceder = document.querySelector('#retroceder');
const botonAvanzar = document.querySelector('#avanzar');
let pagina = 1;

// Funciones

function avanzarFoto() {
    pagina = pagina + 1;
    // Verificamos que no hemos alcanzado el límite, en caso de tenerlo, restaurarlo
    if (imagenes.length + 1 <= pagina) {
        pagina = 1;
    }
    render();
}

function retrocederFoto() {
    pagina = pagina - 1;
    // Verificamos que no hemos alcanzado el límite, en caso de tenerlo, restaurarlo
    if (0 === pagina) {
        pagina = imagenes.length;
    }
    render();
}

function render() {
    objetoImg.setAttribute('src', imagenes[pagina - 1])
}


// Eventos
botonAvanzar.addEventListener('click', avanzarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);



// Inicio

render();