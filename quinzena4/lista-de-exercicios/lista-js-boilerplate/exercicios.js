//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui

     return array.reverse()

}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let resultadoDoArray = []
   for (numero of array) {
      if (numero % 2 === 0){
         resultadoDoArray.push(numero ** 2)
      }
   }

  return resultadoDoArray
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui

    let arrayPar = []
    for (numero of array) {
    if (numero % 2 === 0) {
   arrayPar.push(numero)
    }
   }
      return arrayPar

}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui]
   let maiorNumero = array[0];
   for(let i = 0; i < array.length; i++) {
   if(maiorNumero < array[i]) {
         maiorNumero = array[i]
       }
     }
   return maiorNumero
   }
   



//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const respostas = [false, false, true, true, true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const novoArray = [];
   for(let number = 0; novoArray.length < n; number++) {
    if(number % 2 === 0) {
      novoArray.push(number)
    }
   }
   return novoArray
  }

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if (a !== b && b !== c) {
     return"Escaleno"
  } else if(a === b && b === c){
     return"Equilátero"
  } else {
     return"Isósceles"
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maiorNumero;
   let menorNumero;
   let maiorDivisivelporMenor;

   if (num1 > num2){
      maiorNumero = num1;
      menorNumero = num2;
   } else {
      maiorNumero = num2;
      menorNumero = num1;
   }
   maiorDivisivelporMenor = maiorNumero % menorNumero === 0;
   const diferenca = maiorNumero - menorNumero;

   return {
      maiorNumero:maiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca: diferenca
   }
}
// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let menor = Infinity
   let maior = 0
   let segundoMenor = Infinity
   let segundoMaior = 0
   let indiceMaior = 0
   let novoArray = []

   for(let i of array) {
      if(i < menor) {
         menor = i
         indiceMenor = array.indexOf(menor)
      } 
      if(i > maior) {
         maior = i
         indiceMaior = array.indexOf(maior)
         }
      }
       array.splice(indiceMaior, 1)
       array.splice(indiceMenor, 1)
    
      for(let i of array) {
       if(i < segundoMenor) {
         segundoMenor = i
      }
      if(i > segundoMaior) {
         segundoMaior = i
      }
     }
      novoArray.push(segundoMaior)
      novoArray.push(segundoMenor)
    
      return novoArray
    } 

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui

}


// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
  
   return filme
  }

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido pOr ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  }

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2* (lado1 + lado2),
      area: lado1 * lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   return {
      ... pessoa,
      nome: 'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui

   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
   })
     return novoArray
}     
// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui

   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
      })
     return novoArray

    }
// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   const novoArray = array.map((num) =>{
      return num *2
   })
   return novoArray
     }


// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  const novoArray = array.map((num) =>{
     return(num *2).toString()
  })
  return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   const novoArray = array.map((num) => {
      if (num % 2 === 0){
         return `${num} é par`
      } else {
         return `${num} é ímpar`
      }
   })

   return novoArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   let pessoasAutorizadas = [];
   for(const pessoa of pessoas) {
     if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
       pessoasAutorizadas.push(pessoa)
     }
   }
   return pessoasAutorizadas;
 }


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let pessoasNaoAutorizadas = [];
   for(const pessoa of pessoas) {
      if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
       pessoasNaoAutorizadas.push(pessoa)
     }
   }
   return pessoasNaoAutorizadas;
 }


//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {

  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 return consultasData.map((consulta) => {
    let emailFinal = "Olá, "

    if (!consulta.cancelada) {
       if (consulta.genero === "femino"){
          emailFinal += "Sra. "
       } else {
          emailFinal += "Sr. "
       }

       emailFinal += consulta.nome + ". "
       emailFinal += "Estamos enviando esta mensagem para "

       if (consulta.genero === "feminino"){
          emailFinal += "lembrá-la "
       } else {
          emailFinal += "lembrá-lo "
       }

       emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
       emailFinal += "Por favor, acuse o recebimento deste e-mail."
    } else {
       if (consulta.genero === "feminino") {
          emailFinal += "Sra. "
       } else {
          emailFinal += "Sr. "
       }

       emailFinal += consulta.nome + ". "
       emailFinal += "Infelizmente sua consulta marcada para o dia "
       emailFinal += consulta.dataDaConsulta + " foi cancelada. "
       emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
    }
    return emailFinal
 })
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui

contas.forEach((conta) => {
    let totalDeCompras = 0
    conta.compras.forEach((valor) => {
      totalDeCompras += valor
    })
    conta.saldoTotal -= totalDeCompras
  })
  return contas
}