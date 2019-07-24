module.exports.IniciaChat = function(application,req,res){
    var dados = req.body;
    req.assert('apelido','USERNAME CANNOT BE EMPTY').notEmpty();

    var erros = req.validationErrors();
    if(erros){
        res.render('index',{validacao : erros});
        return;
    }

    

    application.get('io').emit('MsgParaCliente',{apelido : dados.apelido ,mensagem:"Acabou de entrar no chat"});

    res.render('chat',{dados:dados});
}