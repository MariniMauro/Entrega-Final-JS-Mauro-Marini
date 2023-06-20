const tbody = document.querySelector("tbody")


function retornarTablaHTML(mangaCarrito, index) {
    return `<tr id="fila-${index}">
                <td>${mangaCarrito.codigo}</td>
                <td>${mangaCarrito.nombre}</td>
                <td>${mangaCarrito.precio}</td>
                <td class="button-eliminar-item">⛔️</td>
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


document.addEventListener('click', function(e) {
    if (e.target.classList.contains('button-eliminar-item')) {
      const filaId = e.target.closest('tr').id;
      const index = parseInt(filaId.split('-')[1])
      carritoMangas.splice(index, 1)
      localStorage.setItem('miCarrito', JSON.stringify(carritoMangas))
      e.target.closest('tr').remove()
    }
  })
