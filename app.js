let amigos = [];
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    // Obtener el valor del input y dividirlo por comas
    let nombres = inputAmigo.value.split(',').map(nombre => nombre.trim());

    nombres.forEach(nombre => {
        if (!nombre) {
            alert("No puedes ingresar un nombre vacío.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert(`El nombre "${nombre}" ya ha sido agregado.`);
            return;
        }

        amigos.push(nombre);
        
        // Crear un elemento de lista para mostrar el nombre
        let li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });

    inputAmigo.value = '';
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Primero, ingresa al menos un nombre para poder sortear.");
        return;
    } else if (amigos.length === 1) {
        alert("Sólo hay un amigo, no se puede sortear, agrega al menos 3 nombres.");
        return;
    } else if (amigos.length < 3) {
        alert("¡Necesitas al menos 3 amigos para sortear!");
        return;
    }
    
    // Seleccionar un nombre al azar
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoGanador = amigos[indiceSorteado];

    // Mostrar el resultado en el HTML
    resultado.innerHTML = `¡Felicidades! 🎉 El amigo secreto es: <strong>${amigoGanador}</strong>`;
}

function reiniciar() {
    amigos = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    inputAmigo.value = '';
}