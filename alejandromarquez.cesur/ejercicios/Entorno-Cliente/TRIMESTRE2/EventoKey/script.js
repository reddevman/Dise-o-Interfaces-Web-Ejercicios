document.addEventListener("keydown", function (event) {

    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;
    if (key === "F1") {
        document.querySelector("#texto").innerHTML = "F1 pulsada, pulsa otra tecla para borrar mensaje.";
    } else {
        document.querySelector("#texto").innerHTML = "Pulsa F1 para ayuda.";
    }

});