
let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    listaAmigos.push(nombreAmigo);

    let listaElement = document.getElementById('listaAmigos');
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreAmigo;
    listaElement.appendChild(nuevoElemento);

    inputAmigo.value = '';
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p style="color: green; font-weight: bold;">El amigo secreto sorteado es: ${amigoSorteado}</p>`;
}
