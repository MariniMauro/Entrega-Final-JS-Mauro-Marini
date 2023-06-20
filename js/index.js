const container = document.querySelector("div.container#container")
const inputSearch = document.querySelector("input#inputSearch")

function retornoCardHTML(manga) {
    return `<div class="div-card">
                <div class ="imagen"><img src="${manga.imagen}"></div>
                <div class="manga"><p>${manga.nombre}</p></div>
                <div class="precio"><p>$ ${manga.precio}</p></div>
                <div class="comprar"><button id="${manga.codigo}" class="button button-outline">agregar</button></div>
            </div>`
}


function cargarMangas() {
    container.innerHTML = ''
     arraysMangas.forEach((manga) => {
        container.innerHTML += retornoCardHTML(manga)
     })                
    activarClickEnBotones()
}
cargarMangas()

const filtrarMangas = ()=> {
    let arrayResultado = arraysMangas.filter((manga)=> manga.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (arrayResultado.length > 0) {
        cargarMangas(arrayResultado)
    }
}
inputSearch.addEventListener("search", filtrarMangas)



function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.button.button-outline")
          for (let button of botones) { 
                button.addEventListener("click", (e)=> { 
                   const mangaElegido = arraysMangas.find((manga)=> manga.codigo === parseInt(e.target.id))
                    carritoMangas.push(mangaElegido)
                    mostrarMensaje(`El manga ${mangaElegido.nombre} se agrego correctamente`, "red")
                    localStorage.setItem("miCarrito", JSON.stringify(carritoMangas))
                    
                    
                })  
          }
}


