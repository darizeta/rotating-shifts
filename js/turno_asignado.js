const turnoAsignadoDiv = document.getElementById('turno_asignado');
const nombreUsuario = sessionStorage.getItem('nombreUsuario') || 'Usuario';
const html=
`<div style="color: #010006; text-align: center; font-size: 3rem; display: flex; flex-direction: column; align-items: center;"><h2> <span id="nombre">${nombreUsuario}</span></h2>
    <span><h3 style="margin-top:-2rem; font-size:2.5rem; color:#733F3F">Tu turno es:</h3></span>
    <div id="turn" style="border-radius:50%; margin-top:-30px; border:2px solid red; width: 280px; height: 280px; background-color: #f5eeee"></div>
    <button id="aceptarTurno" type="submit" style="margin-top: 10px; padding: 10px 50px; background-color: #3813cdff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1.2rem;
    font-family: 'monospace';">Iniciar</button>
</div>
`;

// Insertar el HTML en el div turno_asignado
turnoAsignadoDiv.innerHTML = html;
const h3 = document.querySelector('h3');
h3.style.fontFamily = 'monospace';
h3.style.color = '#210d6d';

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
    turnDiv.style.border = '2px solid red';
    turnDiv.style.animation = 'girar 5s ease-out';
    turnDiv.style.borderLeftColor = 'transparent';
    turnDiv.style.borderRightColor = 'transparent';
    turnDiv.style.display = 'flex';
    turnDiv.style.justifyContent = 'center';
    turnDiv.style.alignItems = 'center';
    turnDiv.style.width = '300px';
    turnDiv.style.height = '300px';
    const textoTurno = document.getElementById('aceptarTurno');
    textoTurno.textContent = 'Generando turno...';
    const aceptar = 'Aceptar'
    // Detener la animación después de 3 segundos y mostrar el turno asignado
    setTimeout(function() {
        const puesto=['Puesto 1', 'Puesto 2', 'Puesto 3', 'Puesto 4', 'Puesto 5', 'Puesto 6', 'Puesto 7', 'Puesto 8'];
        // Generar un índice aleatorio para seleccionar un turno del arreglo
        const turnoNumero = document.createElement('span');
        if (puesto.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * puesto.length);
            const turnoAsignado = puesto[indiceAleatorio];  
            turnoNumero.textContent = turnoAsignado;
            turnoNumero.style.fontSize = '2rem';
            turnoNumero.style.borderRadius = '5px';
            turnoNumero.style.borderBottom = '2px solid #000000';
            turnoNumero.style.backgroundColor = '#ffffff';
            turnoNumero.style.color = 'rgb(228, 14, 121)';
            turnoNumero.style.padding = '10px 10px';
            turnoNumero.style.fontWeight = 'bold';
            // Detener la animación y mostrar el turno asignado
            turnDiv.style.display = 'flex';
            turnDiv.style.justifyContent = 'center';
            turnDiv.style.alignItems = 'center';
            turnDiv.style.animation = 'none';
            turnDiv.style.border = '1px solid #f10808';
            turnDiv.style.backgroundColor = '#f5eeee';
            textoTurno.textContent = `${aceptar}`;
            textoTurno.style.backgroundColor = '#4CAF50'; // Cambiar color a verde
            
        
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
    // Redirigir a la página principal después de 1 segundo
    setTimeout(function() {
        window.location.href = 'https://darizeta.github.io/rotating-shifts/index.html';  
    }, 1000);
    
}