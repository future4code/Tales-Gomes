// exercício 1

/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */

// A) Vai ser impresso o valor do console.log 10 e 50
// B) Ao colocar function minhafuncao(2) e (10), deu erro, mas acredito que não iria aparecer nada
// já que o valor poderia só ser guardado

// exercício 2

/* let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes) */

// A) O array vai para const outraFuncao que está com um fuction no array, o let i = 0 está no Darvas, por ele ser o 0 do array
// como ele tem que pegar o valor de i duas vezes, na primeira vez ele vai imprimir Darvas que é o primeiro e depois o Caios que é o número 1

// B) Se o array de nomes mudasse para Amanda, Caio, iria ser impresso Amanda, Caio no console

//Exercício 3

/* const metodo = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
      if (x % 2 === 0) {
          arrayFinal.push(x * x)
      }
    }

  
    return arrayFinal;
  } */
    // Metodo do array vai para o for, o resto de x é zero, já que ele não tem valor, por ser igual a zero, o return deveria mandar o valor zero
    // Da para colocar metodoDoArray e o arrayFinal, dava pra colocar arrayDeX

    // Exercício 4

/*     function informacoesSobreMim () {
        console.log("Meu nome é Tales, tenho 24 anos, moro Em Rio Grande do Sul e sou estudante")
    }

    informacoesSobreMim() */
/* 
    function quemSouEu () {
        if (estudo === "sim") {
            console.log("Meu nome é " + nome, ", Tenho " + idade, ", moro em " + cidade,",", estudo, ", eu sou um estudante")
        } else if (estudo === "não") {
            console.log("Meu nome é " + nome, ", Tenho " + idade, ", moro em " + cidade,",", estudo, "sou um estudante ")
        }
    }
    
    const nome = prompt("Qual é o seu nome? ")
    const idade = (prompt("Quantos anos você tem?"))
    const cidade = prompt("Em qual cidade você mora?")
    const estudo = prompt("Você estuda?") 


    quemSouEu() */


    // Exercício 5

    // A)

/*     function somaDasAreas(altura, largura) {
        const area = altura + largura
        console.log(area)
    }

     somaDasAreas(5, 8) */


     // B)    

/*      function colocarNumeros(){
         if (num1 => num2) {
             console.log("O primeiro número é maior")
         } else if (num1 <= num2) {
             console.log("O segundo número é maior")        
        }
         const num1 = 8
         const num2 = 5
    }
    colocarNumeros() */

    // C)

/*     function mensagem(texto){
    for (let i = 0; i<10; i++) {
        console.log("Bom dia, boa tarde, boa noite")
    }
}
mensagem() */

// Exercício 6 

// A)  
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function numberOfArray () {
    console.log("No meu array tem", array.length, "números")
}

numberOfArray()

//B)

function numeroParArray () {
    for(let i = 0; i < array; i++) { 
        if(i % 2 === 0 ) {
       array.push(numeroParArray)
       console.log("Números pares do array: ", i)
        }
    }
}
numeroParArray () 





/* function numeroParArray () {
    for(let i = 0; i < array; i++) { 
        if(i % 2 === 0 ) {
       array.push(numeroParArray)
       console.log("Números pares do array: ", i)
        }
    }
}
numeroParArray () */