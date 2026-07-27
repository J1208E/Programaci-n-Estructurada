import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

}) 

rl.question("Ingrese una cantidad de horas: ", function(horas){

     const minutos = Number(horas) * 60
     console.log(`Las horas a minutos son: ${minutos}`)
     rl.close();
})