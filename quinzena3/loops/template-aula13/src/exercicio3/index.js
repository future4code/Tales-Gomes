/* const vetorDePalavras = ["Oi", "Sumido", "Como", "Vai?", "Saudades"]
let frase = ""

for (palavra of vetorDePalavras) {
    frase = frase + palavra + " " // Poderia ser também frase += palavra + " "
}

console.log(frase) */

 // Exercício 3 - Array

 // A)
  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

 for (const numero of arrayOriginal) {
     console.log("Número do meu array", numero)
 };

// B)
for (const numero of arrayOriginal) {
    console.log("Número do array divido por 10: ", numero/10)
};

// C)

 const novoArray = [];
 for(const numero of arrayOriginal) { 
     if(numero % 2 === 0 ) {
    novoArray.push(numero)
 }
};
console.log("Array de números pares: ", novoArray);

// D)
const arrayDeStrings = [];
for (let i= 0; i <arrayOriginal.length; i++) {
    const string = `o elemento do index ${i} é: ${arrayOriginal[i]}`
    arrayDeStrings.push(string);
};
console.log("array de stringss:", arrayDeStrings);


// E) 
let menorValor = arrayOriginal[0];
let maiorValor = arrayOriginal[0];

for(let i=0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] > maiorValor){
        maiorValor = arrayOriginal[i]
    }
      if(arrayOriginal[i] < menorValor){
        menorValor = arrayOriginal[i]
    }
}
console.log(`O menor número do array é ${menorValor} e o maior é ${maiorValor}`);