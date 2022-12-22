const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");
const lista = document.querySelector("#lista");
const botaoLimpar = document.querySelector("#botaoLimpar")

botao.addEventListener("click", Falar = () =>{
    console.log(texto.value)
    lista.innerHTML += "<li class=list-group-item>"+ texto.value + "</li>"
    texto.value = ""
})

botaoLimpar.addEventListener("click", Limpar = () =>{
    lista.innerHTML = ""
    texto.value = ""
})