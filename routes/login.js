module.exports = (app)=>{
    //abrir o arquivo login.ejs, toda a requisição começa por /
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })

    //validar o usuário e a senha
    app.post('/login',async(req,res)=>{
        
        //recuperar as informações digitados no formulário
        var dados = req.body

        //conectar com o banco de dados
        var database = require('../config/database')()

        //selecionar a model usuários
        var usuarios = require('../models/usuarios')

        //verificar se o email está cadastrado
        var verificar = await usuarios.findOne({email:dados.email})
        if(!verificar){
            return res.send("E-mail não cadastrado!")
        }
        var cript = require('bcryptjs')

        var comparar = await cript.compare(dados.senha, verificar.senha)
        if(!comparar){
            return res.send("Senha Inválida!")
        }
        
        //redirecionar para a rota atividades (PRECISA ENVIAR O ID)
        res.redirect('/atividades?id='+verificar._id)
    })
}