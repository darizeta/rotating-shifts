const turnoAsignadoDiv = document.getElementById('turno_asignado');
const nombreSpan = document.getElementById('nombre');

const nombreUsuario = sessionStorage.getItem('nombreUsuario') || 'Usuario';
const html=
`<div style="color: #6A52CB; text-align: center; font-size: 2rem; display: flex; flex-direction: column; align-items: center;"><h2>Hola : <span id="nombre">${nombreUsuario}</span></h2>
    <span><h2 style="margin-top:-2rem; font-size:2.5rem; color:#733F3F">Tu turno es:</h2></span>
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
        const puesto=['ADM=F1','VD=F2','APOYO ARCO=F3','CTR.Z.AIRE=F4','ARCO=F5','DESARMADOR=F6','DESEMBARQUE=F7','VOR=F8','CA.NORTE=F9','CA.SUR=F10',
        'MA. RAYOS X=F11','DET.METALES=F12','RADAR=F13','ARMADOR=F14','SÓTANO=F15','INGR.AREAS.REST=F16','SENDA.PLANEO=F17','A.SALA=F18','A.ARE.RESTRI=F19','PARQUEADERO=F20',
        'DISPONIBLE=F21','A.PARQUEADERO=F23','A.C.SUR=24','A.PARQUE=F25','A.NORTE=F26','A.RADAR=F27'];
        // Generar un índice aleatorio para seleccionar un turno del arreglo
        const turnoNumero = document.createElement('span');
        if (puesto.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * puesto.length);
            const turnoAsignado = puesto[indiceAleatorio];  
            turnoNumero.textContent = turnoAsignado;
            turnoNumero.style.fontSize = '2rem';
            turnoNumero.style.padding = '10px 20px';
            turnoNumero.style.marginBottom = '20px';
            turnoNumero.style.borderRadius = '5px';
            turnoNumero.style.backgroundColor = '#ffffff';
            turnoNumero.style.color = 'rgb(228, 14, 121)';
            turnoNumero.style.fontWeight = 'bold';
            // Detener la animación y mostrar el turno asignado
            turnDiv.style.animation = 'none';
            turnDiv.style.border = 'none';
            turnDiv.style.display = 'flex';
            turnDiv.style.justifyContent = 'center';
            turnDiv.style.alignItems = 'center';
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