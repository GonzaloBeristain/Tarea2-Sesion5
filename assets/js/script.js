class Computador {
    constructor(marca, modelo, precio, imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let dell = new Computador ("Dell", "Xtreme 270", 3990, "./assets/img/dell.jpg");
let apple = new Computador ("Apple", "MacBook Air", 999, "./assets/img/macbook.jpg")
let boton = document.getElementById("boton");
let body = document.querySelector("body");

function mostrar () {
    document.getElementById("fullname").innerHTML = dell.marca + " " + dell.modelo;
    document.getElementById("price").innerHTML = "$" + dell.precio;
    document.getElementById("imagen").setAttribute("src", dell.imagen);
}

function alternative () {
    document.getElementById("fullname").innerHTML = apple.marca + " " + apple.modelo;
    document.getElementById("price").innerHTML = "$" + apple.precio;
    document.getElementById("imagen").setAttribute("src", apple.imagen);
}

boton.addEventListener("click", alternative);
body.addEventListener("click", mostrar, true);


