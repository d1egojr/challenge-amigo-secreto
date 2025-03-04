// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreIntroducido = document.getElementById('amigo').value;
    console.log(typeof(nombreIntroducido));

    if (nombreIntroducido == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreIntroducido);
        console.log(amigos);
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}