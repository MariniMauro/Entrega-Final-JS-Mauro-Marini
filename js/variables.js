const recuperarCarritoDeLocalStorage = ()=> {
    if (localStorage.getItem('miCarrito')) {
        return JSON.parse(localStorage.getItem('miCarrito'))
    } else {
        return []
    }
}
const carritoMangas = recuperarCarritoDeLocalStorage()

const URL= "js/mangas.json"

const arraysMangas = []

