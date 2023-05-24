function changeName(evento) {
    if (evento.innerText == "Login") {
        evento.innerText = "Logout";
    } else {
        evento.innerText = "Login";
    }
}

function eliminar(parentElement) {
    parentElement.remove();
}