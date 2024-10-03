const nome = "Gengis Kahn";
let quantidadeXp = 2001;

switch (true) {
    case (quantidadeXp === 1000):
        console.log(`seu heroi ${nome} é nivel Ferro`);
        break;

    case (quantidadeXp > 1000 && quantidadeXp <= 2000):
        console.log(`seu heroi ${nome} é nivel Bronze`);
        break;

    case (quantidadeXp > 2000 && quantidadeXp <= 5000):
        console.log(`seu heroi ${nome} é nivel Prata`);
        break;

    case (quantidadeXp > 5000 && quantidadeXp <= 7000):
        console.log(`seu heroi ${nome} é nivel Ouro`);
        break;

    case (quantidadeXp > 7000 && quantidadeXp <= 8000):
        console.log(`seu heroi ${nome} é nivel Platina`);
        break;

    case (quantidadeXp > 8000 && quantidadeXp <= 9000):
        console.log(`seu heroi ${nome} é nivel Ascendente`);
        break;

    case (quantidadeXp > 9000 && quantidadeXp <= 10000):
        console.log(`seu heroi ${nome} é nivel Imortal`);
        break;

    case (quantidadeXp > 10000):
        console.log(`seu heroi ${nome} é nivel Radiante`);
        break;

    default:
        console.log("Treine mais !!");
}