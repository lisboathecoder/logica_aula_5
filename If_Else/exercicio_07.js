let salario = 2000;
let desconto;

if (salario >= 2000) {
    desconto = salario * 0.10;
} else {
    desconto = salario * 0.05;
}

let SalarioReal = salario - desconto;
console.log(`O salário final é ${SalarioReal}R$.`);