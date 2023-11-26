# Lista de Itens

Este é um projeto simples de lista de itens, onde você pode adicionar e limpar itens da lista. Mesmo que o código seja bastante simples, é um excelente exercício para praticar o uso de eventos e manipulação do DOM em JavaScript.

## Funcionalidades

- **Adição de Itens:** Um campo de entrada (input) e um botão permitem que você adicione itens à lista. Ao clicar no botão, o valor digitado no campo de entrada é adicionado como um novo item na lista.

- **Limpeza da Lista:** Existe um botão dedicado para limpar toda a lista, oferecendo uma maneira rápida de reiniciar o histórico de itens.

## Lógica do Projeto

Foi implementado um campo de entrada e um botão, com um evento de clique no botão para adicionar um item à lista e outro botão para limpar a lista.

### Elementos Capturados por `querySelector` e `#id`

```javascript
const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");
const lista = document.querySelector("#lista");
const botaoLimpar = document.querySelector("#botaoLimpar");
```

### Adição de Itens

Ao clicar no botão, o valor do campo de entrada é capturado e adicionado como um novo item à lista utilizando a estrutura de um elemento `li`.

### Limpeza da Lista

O botão de limpar (`botaoLimpar`) possui um evento que limpa todo o histórico da lista e do campo de entrada.
