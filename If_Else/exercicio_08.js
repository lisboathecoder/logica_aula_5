let num1 = 5
let num2 = 10
let num3 = 100

let MenorNum = num1

if (num2 < MenorNum) {
    MenorNum = num2;
} else if (num3 < MenorNum) {
    MenorNum = num3
}

console.log(`O menor número é ${MenorNum}`)