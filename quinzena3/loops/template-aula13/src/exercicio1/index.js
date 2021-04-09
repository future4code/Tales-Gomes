/* let condicao = true
let somaAtual = 0

// laço
while(condicao) {
    let valor = Number(prompt("insira um número: "))

    if (valor === 0){
        condicao = false
    }

    somaAtual += valor
}

console.log(somaAtual) */

// Exercício Teste

let valor = 0 // valor = 0 vai para for
for(let i = 0; i < 5; i++) { // depois ele vai para o valor embaixo e volta, assim subindo o valor de i, pois a ideia é ele ficar maior que 5
  valor += i // Cada vez que o i=0 descer e subir, ele vai somar o valor que for pegar do valor += i, ele faz isso 5 vezes
}
console.log(valor) // Sendo assim, o valor vai ser 10.


