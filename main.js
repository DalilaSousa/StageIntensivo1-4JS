// 1. Exibir "Hello World!" em um alerta no navegador
alert("Hello World!");

// 2. Declarar duas variáveis e exibir o resultado da soma
var a = 5;
var b = 10;
var soma = a + b;
console.log("Resultado da soma: " + soma);

// 3. Verificar se o valor é um número
var valor1 = 15;
if (typeof valor1 === 'number') {
    alert("É um número");
} else {
    alert("Não é um número");
}

// 4. Verificar se o valor é uma string
var valor2 = "Olá";
if (typeof valor2 === 'string') {
    console.log("É uma string");
} else {
    console.log("Não é uma string");
}

// 5. Verificar se o valor é um booleano
var valor3 = true;
if (typeof valor3 === 'boolean') {
    alert("É um booleano");
} else {
    alert("Não é um booleano");
}

// 6. Exibir o resultado da subtração entre duas variáveis
var x = 20;
var y = 8;
var subtracao = x - y;
console.log("Resultado da subtração: " + subtracao);

// 7. Exibir o resultado da multiplicação entre duas variáveis
var multiplicacao = a * b;
console.log("Resultado da multiplicação: " + multiplicacao);

// 8. Exibir o resultado da divisão entre duas variáveis
var divisao = a / b;
console.log("Resultado da divisão: " + divisao);

// 9. Verificar se o valor é um número par
var numeroPar = 16;
if (numeroPar % 2 === 0) {
    alert("É um número par");
} else {
    alert("Não é um número par");
}

// 10. Verificar se o valor é um número ímpar
var numeroImpar = 21;
if (numeroImpar % 2 !== 0) {
    console.log("É um número ímpar");
} else {
    console.log("Não é um número ímpar");
}
