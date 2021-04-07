// exerícico 01 - interpretando códigos

/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.") //A porcentagem representa o restante da divisão, logo, se todo o resto da divisão for igual a 0, vai imprimir como if.
}
} else {
  console.log("Não passou no teste.") //se acontecer do restante da divisão for um número quebrado ou além de zero, vai ser imprimido else.
} */

// Exercício 2 - 

/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
 // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

// A) A primeira linha está armazenando o dado que o usuário colocar e enviar a resposta para o Switch, dependendo do que for respondido

// B) Se tu digitar "maçã", o valor da fruta vai ser R$ 2.25

// C) Se retirar o Break do item C, o valor da Pêra vai ser R$ 5, porque o break serve como um corte no código para poder controlar
// Logo, se for removido o Break, o default acaba interfirindo o código da "Pêra" e ao invés dela ter o valor de R$ 5.5, o valor cobrado será R$ 5

// Exercício 3 -

/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"

    console.log(mensagem)
} */

// A) A primeira linha está fazendo uma pergunta para poder armazenar a respota

// B) Ao digitar 10, apareceu a mensagem que o número passou no teste, quando digitei -10, aconteceu um erro.

// C) O console.log estava fora das chaves, o que fez com que ele ficasse de fora do bloco e não conseguisse buscar a informão da "mensagem"
// Pois ao colocar ele dentro da chave, a mensagem apareceu no código


// Exercício 4 - 

/* let idade = Number(prompt("Quantos anos você tem?"))

if (idade >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
} */

// Exercício 5 -

/* let turnoDeEstudo = prompt("Qual turno você estuda? ")

let turnoMatutino = ("M")
let turnoVespertino = ("V")
let turnoNoturno = ("N")

if (turnoDeEstudo === turnoMatutino) {
    console.log("Bom dia!")
} else if (turnoDeEstudo === turnoVespertino) {
    console.log("Boa Tarde!")
} 
  else if (turnoDeEstudo === turnoNoturno) {
    console.log("Boa noite!")
}
 */

//M de Matutino || V de Vespertino || N de Noturno

// Exercício 6 -

/* let turnoDeEstudo = prompt("Qual turno você estuda? ")
switch (turnoDeEstudo) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
} */

//M de Matutino || V de Vespertino || N de Noturno

// Exercício 7 -

/* const filmeParaAssistir = prompt ("Qual gênero de filme vocês vão assistir? ")
const valorDoingresso = prompt("Quanto custa o ingresso? ")
const snackParaComer = prompt("Qual snack você gostaria de comprar?") //Desafio 1

switch (filmeParaAssistir){
    case "Fantasia":
    break
    case "Romance":
    break
    case "Ação":
    break
    default:
        console.log ("Gênero não encontrado")

switch (snackParaComer){
    case "Pipoca":
        break
    case "Chocolate":
        break
    case "Algodão Doce":
        break
    default:
        console.log("Snack não encontrado")
}

} if (filmeParaAssistir, valorDoingresso <= 15, snackParaComer) {
    console.log("O valor cobre o gênero", filmeParaAssistir, ", aproveitem a(o) ", snackParaComer)
} else 
    console.log("Vocês vão ter que procurar outro filme para assistir") */

//Desafio 2 -

/* const nomeDoCliente = prompt("Por favor, insira o seu nome completo")
const tipoDoJogo = prompt("Qual o jogo que tu gostaria de assistir?")
const etapaDoJogo = prompt("Qual seria a etapa do jogo?")
const categoriasDoJogo = prompt("Por favor, nos informe a categoria do jogo: ")
const quantidadeDeIngresso = prompt("Quantos ingressos tu gostaria de comprar?")

switch (tipoDoJogo){
    case "IN": //Internacional
    break
    case "DO": //Doméstico
    break
        console.log("Informação não disponível")
}

switch (etapaDoJogo){
    case "SF - Semifinais":
        break
    case "DT - Decisão do 3° lugar":
        break
    case "FI - Final":
        break
    default:
        console.log("Informação não disponível")
}

switch (categoriasDoJogo){
    case "Etapa 1":
        break
    case "Etapa 2":
        break
    case "Etapa 3":
        break
    case "Etapa 4":
        break
}
if (nomeDoCliente === "IN"){
    console.log("O ingresso escolhido vai ser Internacional")
} else if
    console.log("O ingresso escolhido vai ser Doméstico") // Aqui vai ser feito a escolha do tipo de ingresso que o cliente vai querer
 else if (nomeDoCliente, etapaDoJogo === "SF") {
    console.log("Você decidiu assistir a semifinais")
} else if (etapaDoJogo[0] === "DT") {
    console.log("Você decidiu assistir no 3° lugar")
} else if (etapaDoJogo[1] === "FI") {
    console.log("Você decidiu assistir a final") // Neste código o cliente vai escolhar qual etapa do jogo vai querer assistir
} */
