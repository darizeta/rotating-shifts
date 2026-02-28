const turnoAsignadoDiv = document.getElementById('turno_asignado');
const nombreSpan = document.getElementById('nombre');

// Obtener el nombre del usuario desde el span en index.html
sessionStorage.setItem('nombreUsuario', nombreSpan ? nombreSpan.textContent : 'Usuario');
const nombreUsuario = sessionStorage.getItem('nombreUsuario') || 'Usuario';

const html=
`<div  style="color: #6A52CB; text-align: center; font-size: 2rem; display: flex; flex-direction: column; align-items: center;"><h2>Hola : <span id="nombre">${nombreUsuario}</span></h2>
    <span><h2 style="margin-top:-3rem; font-size:1.9rem; color:#733F3F">Tu turno es:</h2></span>
    <div id="turn" style="border-radius:50%; border:1px solid red; width: 250px; height: 250px;"></div>
    <button id="aceptarTurno" type="submit" style="margin-top: 20px; padding: 15px 50px; background-color: #3813cdff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem;
    transition: background-color 0.3s;">Iniciar</button>
    

</div>

`;


// Insertar el HTML en el div turno_asignado
turnoAsignadoDiv.innerHTML = html;

// Agregar evento para cambiar el color del botón al pasar el mouse
const botonTurnos = document.getElementById('aceptarTurno');
//div principal 
const turnDiv = document.getElementById('turn');
//controlar el estado del boton
let turnoGenerado = false;
let turnoAceptado = null;

//Gnerar un clic y que el div gire
botonTurnos.addEventListener('click', function() {
    if (!turnoGenerado) {
        generarTurno();
    }else{
        aceptarTurno();
    }
});

function generarTurno() {
    // Deshabilitar el botón durante la animación
    botonTurnos.disabled = true; 
    turnDiv.style.border='None'
    turnDiv.style.borderBottom = '4px solid red';
    turnDiv.style.animation = 'girar 5s linear infinite';
    turnDiv.style.width = '250px';
    turnDiv.style.height = '250px';
    turnDiv.style.borderRadius = '50%';
    const textoTurno = document.getElementById('aceptarTurno');
    textoTurno.textContent = 'Generando turno...';
    const aceptar = 'Aceptar'
    // Detener la animación después de 3 segundos y mostrar el turno asignado
    setTimeout(function() {
        const puesto=['F= 1','F= 2','F= 3','F= 4','F= 5','F= 6','F= 7','F= 8','F= 9','F= 10',
        'F=11','F= 12','F= 13','F= 14','F= 15','F= 16','F= 17','F= 18','F= 19','F= 20',
        'F= 21','F= 23','F= 24','F= 25','F= 26','F= 27'];
        const turnoNumero = document.createElement('span');
        if (puesto.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * puesto.length);
            const turnoAsignado = puesto[indiceAleatorio];  
            turnoNumero.textContent = turnoAsignado;
            turnoNumero.style.fontSize = '4rem';
            turnoNumero.style.color = '#3813cdff';
            turnoNumero.style.fontWeight = 'bold';
            // Detener la animación y mostrar el turno asignado
            turnDiv.style.animation = 'none';
            turnDiv.style.border = 'none';
            turnDiv.style.display = 'flex';
            turnDiv.style.justifyContent = 'center';
            turnDiv.style.alignItems = 'center';
            textoTurno.textContent = `${aceptar}`;
            textoTurno.style.backgroundColor = '#4CAF50'; // Cambiar color a verde
            turnDiv.style.backgroundColor = '#E0E0E0';
        
            turnDiv.appendChild(turnoNumero);
            turnoGenerado = true;
            turnoAceptado = turnoAsignado;
            botonTurnos.dataset.turno = turnoAsignado; // Almacenar el turno en un atributo data-
            // Habilitar el botón nuevamente
            botonTurnos.disabled = false;

        }
        // Redirigir a la página principal después de 4 segundos    
    }, 4000);
    
}

// Funcion aceptar y redirigir
function aceptarTurno() {
    const botonAceptar = document.getElementById('aceptarTurno');
    const turnoAsignado = botonAceptar.dataset.turno;
    botonAceptar.textContent = 'Turno Aceptado';
    console.log('Turno aceptado:', turnoAsignado);
    alert(`Has aceptado tu turno: ${turnoAsignado}`);
    // Redirigir a la página principal después de 2 segundos
    setTimeout(function() {
        window.location.href = './index.html';  
    }, 2000);
    
}