// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreIntroducido = document.getElementById('amigo').value;
    //console.log(typeof(nombreIntroducido));

    if (nombreIntroducido == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreIntroducido);
        //console.log(amigos);
        document.getElementById('amigo').value = '';
        mostrarLista();
    }
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (i=0; i<amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No ingresaste amigos para el sorteo");
    } else {
        let nombreSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo sorteado es: ${nombreSorteado}`;
        let limpieza = document.getElementById('listaAmigos');
        limpieza.innerHTML = " ";
    }
}
