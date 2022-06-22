const senha = document.getElementById("senha")
const senha2 = document.getElementById("senha2")

//para fazer os olhinhos de revelação de senha nas 2 areas
const revelar = document.getElementById("revelar")
const revelar2 = document.getElementById("revelar2")

//função para comparar se ambas as senhas estão corretas.
function comparar(){
    if(senha.value != senha2.value){
        senha2.setCustomValidity("TÁ ERRADO, BURRA!! >:(")
    }
    else {
        senha2.setCustomValidity('')
    }                                                                          
}

//fazendo a coisa acontecer no campo de senha 1
function revelarSenha(){
    
    const tipo = senha.getAttribute('type')

    if(tipo == "password"){
        senha.setAttribute('type','text')
    }
    else {
        senha.setAttribute('type','password')
    }
    revelar.classList.toggle('bi-eye')
}

//fazendo a coisa acontecer no campo de senha 2
function revelarSenha2(){
    
    const tipo = senha2.getAttribute('type')

    if(tipo == "password"){
        senha2.setAttribute('type','text')
    }
    else {
        senha2.setAttribute('type','password')
    }
    revelar2.classList.toggle('bi-eye')
}

//comparando a senha on real time
senha.onchange = comparar
senha2.onkeyup = comparar

//revelando a senha on click
revelar.onclick = revelarSenha
revelar2.onclick = revelarSenha2