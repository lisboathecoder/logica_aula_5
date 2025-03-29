let num1 = 10
let num2 = 20
let calculo = "multiplicação"

switch (calculo) {
    case "soma":
        console.log(`O resultado da soma é ${num1 + num2}`);
        break;
    case "divisão":
        console.log(`O resultado da divisão é ${num1 / num2}`);
        break;
    case "multiplicação":
        console.log(`O resultado da multiplicação é ${num1 * num2}`);
        break;
    case "subtração":
        console.log(`O resultado da subtração é ${num1 - num2}`);
        break;
    default:
        console.log(`Operação inválida`);
}
