var socket = io(); // viene de la libreria "socket.io/socket.io.js"

// on -> escuchar sucesos
socket.on('connect', function() {
    console.log('conectado al servidor'); // consola navegador
});

socket.on('disconnect', function() {
    console.log('conexión con el servidor perdida');
});

//* Emitir un mensaje desde el cliente al servidor *//
// emit -> enviar información
socket.emit('enviarMensaje', {
    usuario: 'Judith',
    mensaje: 'asdfasdf'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});