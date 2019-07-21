/* importando as configuracoes do servidor*/

var app = require('./config/server');

/* paramentrizando porta */

var server = app.listen(80, function(S){
    console.log('Servidor ON')
});

require('socket.io').listen(server);