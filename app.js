/* importando as configuracoes do servidor*/

var app = require('./config/server');

/* paramentrizando porta */

var server = app.listen(80, function(S){
    console.log('Servidor ON')
});

var io = require('socket.io').listen(server);

app.set('io',io);

/* Criando conexao para o websocket */
io.on('connection',function(socket){
    console.log('conctado');

    socket.on('disconnect',function(socket){
        console.log('dsfs');
    });

    socket.on('msgParaServidor',function(data){
        socket.emit('MsgParaCliente',{apelido: data.apelido,mensagem : data.mensagem});
        socket.broadcast.emit('MsgParaCliente',{apelido: data.apelido,mensagem : data.mensagem});

        if(parseInt(data.apelido_atualizado)==0){

        socket.emit('PartparaCliente',{apelido: data.apelido});
        socket.broadcast.emit('PartparaCliente',{apelido: data.apelido});
        }

       
    });


});