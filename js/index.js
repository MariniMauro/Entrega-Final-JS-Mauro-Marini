const container = document.querySelector("div.container#container")

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

function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.button.button-outline")
          for (let button of botones) { 
                button.addEventListener("click", (e)=> { 
                   const mangaElegido = arraysMangas.find((manga)=> manga.codigo === parseInt(e.target.id))
                    carritoMangas.push(mangaElegido)
                    mensajetoast(`${mangaElegido.nombre} se agrego correctamente`)
                    localStorage.setItem("miCarrito", JSON.stringify(carritoMangas))
                    
                    
                })  
          }
}

function mensajetoast(mensaje) {
    Toastify({
    text: mensaje,
    duration: 3000,
    close: true,
    gravity: "top", 
    position: "right",
    stopOnFocus: true,
    style: {
      background: "red",
    }
  }).showToast();
}


function obtenerProductos() {
  fetch(URL)
      .then((response)=> response.json() )
      .then((datos)=> arraysMangas.push(...datos) )
      .then(()=> cargarMangas())
}
obtenerProductos()