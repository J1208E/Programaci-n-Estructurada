import { stdin } from "node:process";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Nombre del producto: ", function(producto){
    rl.question("Precio: ", function(precio){
        rl.question("Cantidad: ", function(cantidad){

            precio = Number(precio)
            cantidad = Number(cantidad)
            
            const pago = precio * cantidad

            console.log(`Producto: ${producto}`)
            console.log(`Precio: ${precio}`)
            console.log(`Cantidad: ${cantidad}`)
            console.log(`Total a pagar: ${pago}`)
            rl.close()

        })
    })

})