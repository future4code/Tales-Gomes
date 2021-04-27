/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// Aperte "OK" para começar a partida
const partidaBlackJack = confirm("Quer Iniciar uma nova partida?")

// Aqui é onde vai ficar o número das cartas para enviar pro console.log
if (partidaBlackJack) {
    console.log("verificando as cartas...")
    const jogadorSaqueCarta1 = comprarCarta()
    const jogadorSaqueCarta2 = comprarCarta()
    const pcSaqueCarta1 = comprarCarta()
    const pcSaqueCarta2 = comprarCarta()

    // Os números vão cair aqui para mostrar quais são as cartas
    let usuarioSaque = jogadorSaqueCarta1.valor + jogadorSaqueCarta2.valor
    let pcSaque = pcSaqueCarta1.valor + pcSaqueCarta2.valor
    console.log(`Jogador - cartas: ${jogadorSaqueCarta1.texto}`)
    console.log(`Computador - cartas: ${pcSaqueCarta1.texto} ${pcSaqueCarta2.texto} - ${pcSaque}`)

    // Confirme no "ok" para pedir uma nova carta
    let jogo = confirm("Quer iniciar uma nova rodada?")

    if (jogo) {
        console.log(`Usuário - cartas: ${jogadorSaqueCarta2.texto} - ${usuarioSaque}`)
    } else {
        console.log("processando númeo de cartas, aguarde um momento...") //Se apertar em "Cancelar" o jogo vai analisar o número de cartas
    }

// Aqui vai ter os dados sobre o resultado do jogo!
    if (usuarioSaque > pcSaque) {
        console.log("O usuário ganhou!")
    } else if (pcSaque > usuarioSaque) {
        console.log("O computador ganhou!")
    } else if (pcSaque === usuarioSaque) {
    console.log("Deu empate!")
    }



    // Mensagem de Fim do jogo    
} else {
    console.log("O jogo acabou")
}
