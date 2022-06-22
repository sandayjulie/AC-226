module.exports = (app)=>{
    //abrir o arquivo registro.ejs, toda a requisição começa por /
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    //gravar as informações digitadas no mongoAtlas
    app.post('/registro',async(req,res)=>{
        //recuperar as informações digitadas
        var dados = req.body

        //importar as configurações do database
        var database = require ('../config/database')()

        //definir em qual coleção vamos gravar informações digitadas
        var usuarios = require('../models/usuarios')

        //verificar se o email já está cadastrado
        var verificar = await usuarios.findOne({email:dados.email})
        if(verificar){
            return res.send('E-mail já cadastrado.')
        }

        //criptografar a senha
        var cript = require("bcryptjs")
        var senhasegura = await cript.hash(dados.senha, 10)

        //gravar o documento
        var documento = await new usuarios({
            nome:dados.nome,
            email:dados.email,
            senha:senhasegura                                          
        }).save()
        res.redirect('/login')
    })
}