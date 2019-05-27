const express = require('express');

const app = express();


//settings

app.set('port', process.env.PORT || 5000);


//Start the Server

app.listen(app.get('port'), () => {

console.log('Servidor Activado en Puerto', app.get('port'));


}