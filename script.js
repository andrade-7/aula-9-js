// DADO A LISTA DE USUÁRIOS
// [
// ["Joao", "joao@email.com", "123456"],
// ["Maria", "maria25@email.com", "deusefiel"],
// ["Ana", "anaJulia@email.com", "456789"],
// ["pedro", "ped@email.com", "pedrimDaTuf"],
// ["AbeL", "abel.jr@email.com", "10081995"],
// ["Amanda", "amandKaroline@email.com", "1ate8"],
// ]
// FAÇA UM FORMULÁRIO DE LOGIN (INPUTS E UM BOTÃO) QUE AO PREENCHER OS DADOS E CLICAR NO BOTÃO VOCÊ IRÁ VERIFICAR SE O USUÁRIO INSERIDO É VÁLIDO NO SISTEMA SE FOR VOCÊ MOSTRA UMA MENSAGEM NA PRÓPRIA PÁGINA INDICANDO QUE O LOGIN FOI REALIZADO COM SUCESSO, SE NÃO MOSTRE UMA MENSAGEM DE ERRO INDICANDO QUE ALGUM DADO ESTÁ ERRADO. (CUSTOMIZE UMA CLASSE PARA A MENSAGEM DE ERRO E OUTRA PARA A DE SUCESSO)




// const email = document.querySelector("#email")
// const senha = document.querySelector("#senha")

// const botao = document.querySelector("#botao")

// const erro = document.querySelector("#erro")
// const sucesso = document.querySelector("#sucesso")

// function somar(n1,n2){
//     return n1+n2
// }

// botao.addEventListener("click", ()=>{
//     const lista_de_usuarios = [
//         ["Joao", "joao@email.com", "123456"],
//         ["Maria", "maria25@email.com", "deusefiel"],
//         ["Ana", "anaJulia@email.com", "456789"],
//         ["pedro", "ped@email.com", "pedrimDaTuf"],
//         ["AbeL", "abel.jr@email.com", "10081995"],
//         ["Amanda", "amandKaroline@email.com", "1ate8"],
//         ]
//     let deuCerto = false
//     for(usuario_da_vez of lista_de_usuarios){
//         if(usuario_da_vez[1] === email.value && usuario_da_vez[2] === senha.value){
//             sucesso.textContent = "Login efetuado com sucesso"
//             sucesso.className = "deuBom"
//             deuCerto = true
//             erro.textContent = ""
//             erro.className = ""
//             email.value = ""
//             senha.value = ""
//         }
//     }
//     if(!deuCerto){
//         erro.textContent = "Email ou Senha Inválidos"
//         erro.className = "deuRuim"
//         sucesso.textContent = ""
//         sucesso.className = ""
//     }
// })






// CLASS LIST
//    if(usuario_da_vez[1] === email.value && usuario_da_vez[2] === senha.value){
//             sucesso.textContent = "Login efetuado com sucesso"
//             // sucesso.className = "deuBom"
//             sucesso.classList.add("deuBom")
//             deuCerto = true
//             erro.textContent = ""
//             erro.classList.remove("deuRuim")
//             // erro.className = ""
//             email.value = ""
//             senha.value = ""
//         }






// EVENTOS DE MOUSE
// // EVENTOS DE MOUSE
// const botao = document.querySelector("#botao")
// const caixinha_do_cep = document.querySelector("#cep")

// botao.addEventListener("click", ()=> console.log("Clicou no botão"))
// caixinha_do_cep.addEventListener("click", ()=> console.log("Clicou na caixinha"))


// botao.addEventListener("dblclick", ()=> console.log("Clicou duas vezes no botão"))

// botao.addEventListener("mousedown", ()=> console.log("Pressionou o botao pra baixo"))

// botao.addEventListener("mouseup", ()=> console.log("Soltou o botão do click"))

// botao.addEventListener("mousemove", ()=> console.log("Movimentando o mouse"))

// botao.addEventListener("mouseenter", ()=> console.log("Cursor do mouse entrou"))
// // botao.addEventListener("mouseover", ()=> console.log("Cursor2 do mouse entrou"))

// botao.addEventListener("mouseleave", ()=> console.log("Cursor do mouse saiu"))




// EVENTOS DE TECLADO
// const caixinha_do_cep = document.querySelector("#cep")

// caixinha_do_cep.addEventListener("keydown", (evento)=> {
//     const tecla_apertada = evento.key
//     if(tecla_apertada === "Enter"){
//         console.log("Apertou o Enter");
//     }
// })


// // EVENTOS DE TECLADO
// const caixinha_do_cep = document.querySelector("#cep")

// caixinha_do_cep.addEventListener("keydown", (evento)=> console.log("Evento pra baixo",evento.key))
// caixinha_do_cep.addEventListener("keyup", (evento)=> console.log("Evento pra cima",evento.key))
// caixinha_do_cep.addEventListener("keypress", (evento)=> console.log("Evento de pressão",evento.key))




// // EVENTOS DE TECLADO
// const caixinha_do_cep = document.querySelector("#cep")

// caixinha_do_cep.addEventListener("input", (evento)=> {
//     const cep = evento.target.value
//     if(cep.length === 8){
//         console.log("To indo checar o CEP")
//     }
// })




// // EVENTOS DE TECLADO
// const caixinha_do_cep = document.querySelector("#cep")

// caixinha_do_cep.addEventListener("input", (evento)=> console.log(evento.target.value))

// caixinha_do_cep.addEventListener("change", (evento)=> console.log(evento.target.value))

// caixinha_do_cep.addEventListener("blur", (evento)=> console.log(evento.target.value))











// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Eventos</title>
//     <link rel="stylesheet" href="./style.css">
// </head>
// <body>  
//     <form id="formulario">
//         <label for="cep">CEP</label>
//         <input type="text" name="cep" id="cep" placeholder="Digite seu CEP">
//         <br><label for="cpf">CPF</label>
//         <input type="text" name="cpf" id="cpf" placeholder="Digite seu cpf">
//         <button>Buscar</button>
//     </form>

//     <script src="./script.js"></script>

// </body>
// </html>




// // EVENTOS DE FORMULÁRIO
// const formulario = document.querySelector("#formulario")

// formulario.addEventListener("submit", (evento)=>{
//     evento.preventDefault()
//     console.log("Submitou")
// })



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Eventos</title>
//     <link rel="stylesheet" href="./style.css">
// </head>
// <body>  
//     <form id="formulario">
//         <label for="nome">Nome</label>
//         <input type="text" name="nome" id="nome" placeholder="Digite seu nome">
//         <button>Cadastrar</button>
//     </form>

//     <ul id="lista_de_nomes"></ul>
    
//     <script src="./script.js"></script>

// </body>
// </html>




// const formulario = document.querySelector("#formulario")
// const nome = document.querySelector("#nome")
// const lista_de_nomes = document.querySelector("#lista_de_nomes")


// formulario.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     const novo_elemento = document.createElement("li")
//     novo_elemento.textContent = nome.value
//     lista_de_nomes.append(novo_elemento)

//     nome.value = ""
//     nome.focus()
// })




