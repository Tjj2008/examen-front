let botonesActivados = []; 
let nivel = 1; 

function subiropacidad() {
    let botones = document.querySelectorAll('.conteiner button');
    let botonAleatorio = botones[Math.floor(Math.random() * botones.length)];

    
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove('encendido');
    }

    
    botonAleatorio.classList.add('encendido');
}

function botoncolor(boton) {
    
    if (boton.classList.contains('encendido')) {
        
        for (var i = 0; i < 2 * nivel; i++) {
            subiropacidad();
        }
        nivel++; 
    } else {
        
        alert("no era ese boton bro");
    }
}