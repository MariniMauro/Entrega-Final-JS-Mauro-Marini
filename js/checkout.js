const tbody = document.querySelector("tbody")
const botonComprar = document.querySelector("#carritoComprar");

function retornarTablaHTML(mangaCarrito, index) {
    return `<tr >
                <td>${mangaCarrito.codigo}</td>
                <td>${mangaCarrito.nombre}</td>
                <td>${mangaCarrito.precio}</td>
            </tr>`
            
}

if (carritoMangas.length > 0) {
    carritoMangas.forEach((mangaCarrito)=> {
        tbody.innerHTML += retornarTablaHTML(mangaCarrito)

    })
    
    const total = carritoMangas.reduce((acc, manga)=> acc + manga.precio,0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-contenido";
    totalCompra.innerHTML = `total a pagar $ ${total}`;
    tbody.append(totalCompra);

}

const completarCompra = ()=> { 
    localStorage.clear()
    mensajetoast("Compra realizara con exito, click aqui para seguir comprando")

}

botonComprar.addEventListener("click", completarCompra)


function mensajetoast(mensaje) {
    Toastify({
    text: mensaje,
    duration: 3000,
    destination: "index.html",
    gravity: "top", 
    position: "center",
    stopOnFocus: true,
    style: {
      background: "red",
    }
  }).showToast();
}
