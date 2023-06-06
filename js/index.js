const carrito = []
const mangas = [
    { codigo: 1, nombre: "Bleach", precio: 3500 },
    { codigo: 2, nombre: "Alice in Borderland", precio: 2600 },
    { codigo: 3, nombre: "Blue Lock", precio: 2300 },
    { codigo: 4, nombre: "Chainsaw Man", precio: 2100 },
    { codigo: 5, nombre: "Dragon ball", precio: 1800 },
    { codigo: 6, nombre: "Monster", precio: 4000 },
    { codigo: 7, nombre: "One piece", precio: 1700 },
    { codigo: 8, nombre: "Slam Dunk", precio: 4500 },
    { codigo: 9, nombre: "Vagabond", precio: 3200 },

]

function listaDePrecios(){
    const arrayProyeccion = mangas.map((manga) => {
        return{
            nombre:manga.nombre,
            precio:manga.precio,
            incremento10: parseFloat((manga.precio * 1.10).toFixed(2)),
            descuento5: parseFloat((manga.precio * 0.95).toFixed(2))
        }
    })
    console.table(arrayProyeccion)
}

function buscarMangas(codigo) {
   let resultado = mangas.find((manga)=> manga.codigo === parseInt(codigo) )
   return resultado 
}

function finalizarCompra() {
    const comprando = new Compra(carrito)
   alert("Total de la compra $ " + comprando.obtenerSubtotal())
   console.log("Total de la compra $ " + comprando.obtenerSubtotal())
}


function comprar(){
    let codigo = prompt("Ingresa el codigo del manga deseado")
    let mangaElegido = buscarMangas(codigo)
    if (mangaElegido !== undefined) {
        carrito.push(mangaElegido)
        alert(mangaElegido.nombre + " a sido agregado correctamente")
        let respuesta = confirm("Quieres agregar mas productos?")
        if (respuesta === true) {
            comprar()
         } else {
            finalizarCompra()
         }
    } else {
        alert("erro al elegir codigo, actuliza la pagina para volver a comprar")

    }
}
