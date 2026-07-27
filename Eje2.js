import readline  from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})

rl.question("Ingrese la base: ", function(base){
    rl.question("Ingrese la altura: ", function(altura){
        
        const area = Number(base) * Number(altura);

        console.log(`El area del rectangulo es: ${area}`);
        rl.close();

    })

})