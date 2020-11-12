const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

//*  Para que app trabaje en base a un servidor que definiremos
const http = require('http');
const { info } = require('console');
const app = express();
let server = http.createServer(app);



const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO (inputs y outputs) -> es la comunicación del backend
module.exports.io = socketIO(server);

// saber cuándo se conecta un usuario al servidor
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});