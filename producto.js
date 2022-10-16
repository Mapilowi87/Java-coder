class Producto{
    constructor(nombre,talle,precio,cantidad){
        this.nombre = nombre;
        this.talle= talle;
        this.precio = parseFloat (precio);
        this.cantidad = cantidad;
    }
    
    //metodo del objeto para sumar el iva
    sumaIva(){
        return this.precio * 1.21;
    }

}

    //instanciamos (creamos)objetos

let arrayProductos = [];

const producto0 = new Producto ("bersuit","s",500,200);
const producto1 = new Producto ("amelie","m",300,50);
const producto2 = new Producto ("oxford","l",400,20);
const producto3 = new Producto ("orange","xs",1000,80);

arrayProductos.push(producto0);
arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);

console.log(arrayProductos);

// creo un (array vacio)que contiene los objetos 
const carrito =[];

// creo una funcion
function mostrarSeleccion(){
    const productoUsuario = prompt(`Que producto desea comprar: ¿bersuit ameli oxford u orange?`).toLocaleLowerCase();
    const productoElegido = arrayProductos.find(producto => producto.nombre === productoUsuario);

//Creamos nuestro carrito y medoto push
    carrito.push(productoElegido);

    const continuarComprando = confirm("¿Quiere comprar otra cosa?");
    if(continuarComprando){
        mostrarSeleccion();
    }else{
        calcularPrecioTotal();
    }
}
mostrarSeleccion();


//creamos una funcion

function calcularPrecioTotal(){
    const total = carrito.reduce ( (acc, elemento ) => acc += elemento.precio, 0 );
    alert ("El precio total es :"+total);
}

