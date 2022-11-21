//1320/(160)
//30 dias => x horas
//30*8 = 240 h

//6 * 4 = 24 dias

//24 * 8 = 192 horas/mês

//1320/192

//lanche com refri = 120

var nSemanas = 4;
var diasSemanas = 5;
var horasDia = 8;
var salarioMes = 1320;
var gastoComLanche = 120;

var diasMes = nSemanas * diasSemanas;
var horasTrabalhadasMes = diasMes * horasDia;

var salarioHora = salarioMes / horasTrabalhadasMes;
var horasTrabalhadasParaGastos = gastoComLanche / salarioHora;

console.log(
  `Juliana ganha R$ ${salarioHora} por hora e para 
  ela lanchar precisa trabalhar 
  ${horasTrabalhadasParaGastos} horas`
);


