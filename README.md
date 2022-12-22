# Lista-de-Itens

Por mais simples que seja o código eu via alguns desenvolvedores fazendo esse projeto pequeno, eu nunca tinha feito algo parecido, então me desafiei a 
tentar desenvolver um projeto desses também, aonde se consiste em adicionar um item a lista e conseguir limpá-la depois.

#Lógica

Foi adicionado um elemento input e um botão, aonde foi colocado um evento para que a cada clique no botão ele iria adicionar um elemento li em outra div com elemento ul,
o valor que sera adicionar no li sera o do input que o usuário poderá escrever. <br>
Cada elemento principal (input, button e ul) recebeu um id para poder ser chamado no JavaScript e montar a lógica 
de pegar o valor do input ao clique do botão e a adicionar um li ao elemento ul.

#Elementos capturador pelo querySelector/#id

const texto = document.querySelector("#texto");<br>
const botao = document.querySelector("#botao");<br>
const lista = document.querySelector("#lista");<br>
const botaoLimpar = document.querySelector("#botaoLimpar")<br>

Com  esses elementos capturador foram adicionados evento ao botão de adicionar (botao) e o botão de limpar (botaoLimpar), para adicionar
um elemento a cada click o pegamos a var lista.innerHTML e atribuímos o valor do input, porem com um adicionar 
de elemento li com classe -> < li class=list-group-item > .... < / li >, e o mesmo se aplica para o botão de limpar, nele temos somente ao clicar
limpar todo histórico do ul e do input.
