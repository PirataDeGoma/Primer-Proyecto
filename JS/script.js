// const texto = 'Es sencillo tu me das las respuestas de los siguientes ejercios y yo te entrego datos muy interesantes sobre cultura general que posiblemente nunca los hubieses conocido'

// function escribirTexto() {
//     const espacioTexto = document.getElementById('containerTexto');
//     let index = 0;

//     function escribirCaracter() {
//         espacioTexto.textContent += texto[index];
//         index++;

//         if(index < texto.length) {
//             setTimeout(escribirCaracter, 30);
//         }
//     }
//     escribirCaracter();
// }
// escribirTexto();

// INICIO DE LA HOME
let ejercicio = document.getElementById('ejercicio');
let alternativa = document.getElementById('alternativas');
let tarjeta = document.getElementById('tarjeta');
let carga = document.getElementById('loading');

fetch('facil.json')
  .then(response => response.json())
  .then(data => {
    const ejercicios = data.ejercicios;
    const randomIndex = Math.floor(Math.random() * ejercicios.length);

    const ejercicioAleatorio = ejercicios[randomIndex];
    ejercicio.textContent = ejercicioAleatorio.ejercicio;

    function tarjetaCulturaGeneral() {
        let dato = document.createElement('p');
        dato.innerHTML = ejercicioAleatorio.datoCurioso + '<img src="' + ejercicioAleatorio.imagen + '">';
        let imagen = dato.querySelector('img');
        imagen.style.width = '200px';
        imagen.style.height = 'auto';
        tarjeta.appendChild(dato);
        tarjeta.classList.toggle('mostrar');
    }
    tarjetaCulturaGeneral()

    for(let item in ejercicioAleatorio.alternativas) {
        let unaLista = document.createElement('li');
        unaLista.textContent = ejercicioAleatorio.alternativas[item];
        unaLista.addEventListener('click', function() {
            if(item === ejercicioAleatorio.respuestaCorrecta) {
                carga.style.display = 'block';
                setTimeout(function() {
                    
                    
                    carga.style.display = 'none';
                }, 3000)
                
            } else {
                carga.style.display = 'block';
                setTimeout(function() {
                     console.log('Incorrecto!');
                    carga.style.display = 'none';
                }, 3000)
               
            }
            alternativa.style.pointerEvents = 'none';
        })
        alternativa.appendChild(unaLista);
        
        
    }
    }
  )
  .catch(error => console.error(error));


  