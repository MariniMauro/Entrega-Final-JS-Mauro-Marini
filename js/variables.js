const recuperarCarritoDeLocalStorage = ()=> {
    if (localStorage.getItem('miCarrito')) {
        return JSON.parse(localStorage.getItem('miCarrito'))
    } else {
        return []
    }
}
const carritoMangas = recuperarCarritoDeLocalStorage()

const arraysMangas = [
    { imagen: 'img/bleachremix01.jpg',codigo: 1, nombre: "Bleach", precio: 3500 },
    { imagen: 'img/aliceinborderland01.jpg',codigo: 2, nombre: "Alice in Borderland", precio: 2600 },
    { imagen: 'img/bluelock01.jpg',codigo: 3, nombre: "Blue Lock", precio: 2300 },
    { imagen: 'img/chainsawman01.jpg',codigo: 4, nombre: "Chainsaw Man", precio: 2100 },
    { imagen: 'img/dragonballsuper01.jpg',codigo: 5, nombre: "Dragon ball", precio: 1800 },
    { imagen: 'img/monster01.jpg',codigo: 6, nombre: "Monster", precio: 4000 },
    { imagen: 'img/onepiece01.jpg',codigo: 7, nombre: "One piece", precio: 1700 },
    { imagen: 'img/slamdunk01.jpg',codigo: 8, nombre: "Slam Dunk", precio: 4500 },
    { imagen: 'img/vagabond01.jpg',codigo: 9, nombre: "Vagabond", precio: 3200 },
]


const mostrarMensaje = (msg, bgcolor)=> {
    const divMsg = document.querySelector('div.toast-msg')
    divMsg.textContent = msg || ''
    divMsg.style.background = bgcolor || 'darkslateblue;'
}

