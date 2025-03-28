let idade = 17;

switch (true) {
    case idade <= 70:
        console.log(`Pode votar`);
        break;
    case idade < 16:
        console.log(`Não pode votar`);
        break;
    default:
        console.log(`Não pode votar`)

}