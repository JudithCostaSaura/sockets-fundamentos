const { io } = require('../server');

io.on('connection', (client) => {
    console.log('conectado al servidor'); //consola interna

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'bienvenido a la appjj'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //* Escuchar el cliente *//
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // envía msj a TODO el mundo
        client.broadcast.emit('enviarMensaje', data);

        /* if (mensaje.usuario) {
            callback({
                resp: 'todo okk'
            });
        } else {
            callback({
                resp: 'todo malllllll'
            });
        } */

    });

});