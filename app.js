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
  

    socket.on('disconnect',function(socket){
        
    });

    socket.on('msgParaServidor',function(data){
        

        socket.emit('MsgParaCliente',{apelido: data.apelido,mensagem : data.mensagem,cor:data.cor});
        socket.broadcast.emit('MsgParaCliente',{apelido: data.apelido,mensagem : data.mensagem,cor:data.cor});

        if(parseInt(data.apelido_atualizado)==0){


        socket.emit('PartparaCliente',{apelido: data.apelido,mensagem:data.cor});
        socket.broadcast.emit('PartparaCliente',{apelido: data.apelido,mensagem:data.cor});
        }

       
    });


});