const path = require('path');
const express = require('express');
const app = express();

const SocketIO = require('socket.io');
const io = SocketIO(server);


//settings

app.set('port', process.env.PORT || 3000);


//static files

app.use(express.static(path.join(__dirname,'Public')));


//Start the Server

const server = app.listen(app.get('port'), () => {

console.log('Servidor Activado en Puerto', app.get('port'));


});