document.addEventListener("keydown", function (event) {

    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;
    if (key === "F1") {
        document.querySelector("#texto").innerHTML = "F1 pulsada.";
        if (key) {
            document.querySelector("#texto").innerHTML = "Se borrará el texto."
            timeOut();
        }
    }
    
    if (key !== "F1") {
        document.querySelector("#texto").innerHTML = "Pulsa F1 para ayuda.";
    }
});

function timeOut() {
    setTimeout(function () { document.querySelector("#texto").innerHTML = "" }, 1000);
}