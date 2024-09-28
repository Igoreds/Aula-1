// Programa 1: Declaração de nome e idade
let nome = "Igor"; // 
let idade = 25; // 
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

// Programa 2: Nome e cidade
let cidade = "Recife"; 
console.log(`${nome} é de ${cidade}.`);

// Programa 3: 
let num1 = 10;
let num2 = 5;
console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);

// Programa 4: Cálculo de área de um triângulo
let base = 10;
let altura = 5;
let area = (base * altura) / 2;
console.log(`A área do triângulo é ${area}`);

// Programa 5: Cálculo de média
let nota1 = 8;
let nota2 = 7.5;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`O resultado da média é ${media.toFixed(2)}`);

// Programa 6: Cálculo de desconto
let precoOriginal = 100;
let desconto = 10; 
let valorFinal = precoOriginal - (precoOriginal * desconto / 100);
console.log(`O valor final com desconto é R$ ${valorFinal.toFixed(2)}`);

// Programa 7: Cálculo simplificado de imposto de renda
let salarioBruto = 3000;
let aliquota = 0.15; 
let imposto = salarioBruto * aliquota;
console.log(`O valor do imposto de renda é R$ ${imposto.toFixed(2)}`);

// Programa 8: Conversor de moedas
let valorEmReais = 500;
let taxaCambio = 5.25; 
let valorConvertido = valorEmReais / taxaCambio;
console.log(`O valor convertido em dólares é $ ${valorConvertido.toFixed(2)}`);

// Programa 9: Convertendo Celsius para Fahrenheit
let temperaturaCelsius = 30;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(`${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit.toFixed(2)}°F`);

// Programa 10: Calculadora de IMC
let peso = 70; 
let alturaPessoa = 1.75; 
let imc = peso / (alturaPessoa * alturaPessoa);
console.log(`O IMC é ${imc.toFixed(2)}`);
