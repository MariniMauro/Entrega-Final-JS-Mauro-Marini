function stock() {
    console.log("Stock displible de todas las figuras.")

}

function mostrarPrecio(codigo) {
    switch (parseInt(codigo)) {
        case 1:
            alert("La figura de Batman cuesta $ 6000")
            break;
        case 2:
            alert("La figura de Goku cuesta $ 2500")
            break;
        case 3:
            alert("La  figura de Iron Man cuesta $ 3600")
            break;
        case 4:
            alert("La figura de Pikachu cuesta $ 1900")
            break;
        case 5:
            alert("La figura de Naruto cuesta $ 7000")
            break;
        default:
            alert("⛔Error al seleccionar un codigo , vuelva a intentarlo.")
    }
}

function consultarFigura() {
    let respuesta = confirm("¿Estas interesado en alguna figura?")
    if (respuesta) {
        let codigo = prompt("Ingresa el código numérico de la figura que deseas:")
            if (codigo) {
                mostrarPrecio(codigo)
                stock()
            }
    } else {
        console.warn("Vuelve cuando quieras😊.")
    }
}

