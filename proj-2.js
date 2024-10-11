//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
//valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem 
//que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem 
//avisando se o número informado pertence ou não a sequência.

//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;



let num1 = 0
let num2 = 1
let num3 = 0
let fib = []

fib += num1 + " " + num2

for (let i = 1; i<= 10; i++){
    num3 = num1 + num2
    fib += " " + num3
    num1 = num2
    num2 = num3
}
console.log(fib)

let separa = fib.split(' ')

let valor = 13

console.log("Valor escolhido: " + valor)

const procura = separa.find((e) => {
    if(e == valor){
        console.log("O valor " + valor + " é um numero fibonacci")
    }
})






