function encenderBotonAleatorio() {
    let botones = document.querySelectorAll('.conteiner button');
    let botonAleatorio = botones[Math.floor(Math.random() * botones.length)];

    
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove('encendido');
    }

    
    botonAleatorio.classList.add('encendido');
}