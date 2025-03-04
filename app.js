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
        limpiarCaja();
        mostrarLista();
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
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