//Crear un algoritmo simple.
/*
//1. solicitar un precio de un producto e informar el precio final con IVA incluido
// Declaracion de constantes
const IVA =0.21;
// Declaracion de variables
let precio;
let precioFinal;
//prompt para entrada de datos
precio=prompt ("Ingrese el precio de lista");
//calculos
// aqui no hace falta el parseint porque en la operacion que se hace a continuacion hay una muntiplicacion, entonces reconoce a esas variables como tipo numericas
precioFinal=parseFloat(precio * (1+IVA));

//alert para salida de datos
alert("El precio final es: "+precioFinal);

//Crear un algoritmo con un condicional.

//Prompt para entrada de datos
let usuario =prompt("Ingrese nombre del producto");
if(usuario=="estampado"){
    console.log("producto en promociòn");
}else{
    console.log("producto sin stock");
}

//Crear un algoritmo con un condicional.
let nombreProducto=prompt("Ingrese nombre del producto");
if (nombreProducto=="oxford"){
    alert("producto con descuento");
}else{
    alert("producto de temporada"+nombreProducto);
}


//Crear un algoritmo utilizando un ciclo
//algoritmo if...else if... else//funciòn sin parametros

function descuento(){
    alert("productos en promocion");
}
descuento();
for (let i=1; i<=3; i++){
    let palGanadora = prompt("Ingrese la palabra que define la temporada y tendra un descuento");
    if(palGanadora=="flores"){
        alert("Tienes un descuento del 20% en articulos de la nueva colecciòn");
    }else if(palGanadora=="primavera"){
        alert("Tienes un descuento del 50% en articulos de la temporada pasada");
        break;
    }else{
        alert("sigue participando! restan"+(3-i)+"intentos" );
    }
    }

//Crear un algoritmo utilizando un ciclo
    for (let i=1; i<=10; i++){
        let codProducto=prompt ("Ingresa codigo de producto");
        if (codProducto/2 == 60){
        continue;
        }
        alert("Producto en promociòn"+codProducto);
    }
    

// funciones
function descuento(){
    alert("productos en promocion");
}
descuento();

    
//Funcion con parametro/ algoritmo if...else if... else//ciclo for
    function armarFrase(palabra1, palabra2) {
        for (let i = 1; i <= 3; i++) {
            let palGanadora = prompt(
                "Ingrese la palabra que define la temporada y tendra un descuento",
            );
            if (palGanadora == palabra1) {
                alert("Tienes un descuento del 20% en articulos de la nueva colecciòn");
            } else if (palGanadora == palabra2) {
                alert("Tienes un descuento del 50% en articulos de la temporada pasada");
                break;
            } else {
                alert("sigue participando! restan" + (3 - i) + "intentos");
            }
        }
    }
    armarFrase("primavera", "flores");
    

//Algoritmo con funcion sin parametros/ condicional/ciclo

alert("Carrito de compras!");
let precioFinal = 0;

function calculadora() {

    let producto = prompt("Ingresa el producto y te dire el precio final (salir para finalizar)")

    while (producto != "salir") {
        switch (producto) {
            case "Buso oxford":
                let precioBuzo = 399
                precioFinal = precioFinal + precioBuzo;
                console.log("Precio final buso oxford " + precioFinal);
                break;
            case "Buso Tejido":
                let precioBuzoTejido = 295
                precioFinal = precioFinal + precioBuzoTejido;
                console.log("Precio final buso tejido" + precioFinal);
                break;
                case "Buso Amelie":
            let precioBuzoAmelie =300
            precioFinal =precioFinal+precioBuzoAmelie;
            console.log("Precio final buso amelie"+precioFinal);
            break; 
            case "estampado":
            case "bersuit":
                let precioEstampado=499
            precioFinal =precioFinal+precioEstampado;
            console.log("Precio final de estampado o bersuit"+precioFinal);
            break;
            default:
                console.log("Producto sin stock");
                break;

        }
        producto = prompt("Ingresa el producto y te dire el precio final (salir para finalizar)");
    }

    alert("Precio final: " + precioFinal)

}

calculadora();
*/

