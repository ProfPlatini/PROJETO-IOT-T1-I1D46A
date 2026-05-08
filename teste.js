let alunos = [
    {nome:"Platini", time:"Palmeiras"},
    {nome:"Kauan", time:"Corinthians"},
    {nome:"Pedro", time:"Corinthians"},
    {nome:"João", time:"SP"},
    {nome:"Felipe", time:"Santos"}
];

const posicaoProcurada = "Eduardo"; //3
const index = alunos.findIndex(s => s.nome === posicaoProcurada);
console.log(index);