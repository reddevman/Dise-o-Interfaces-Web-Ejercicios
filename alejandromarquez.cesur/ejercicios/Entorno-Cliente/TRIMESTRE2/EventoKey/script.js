var keyTwice = false;

window.addEventListener("keydown", function (event) {

    event.preventDefault();

    var key = event.key || event.keyCode;
    if (key === "F1") {
        document.querySelector("#texto").innerHTML = "F1 PULSADA. Pulsa F1 para eliminar el mensaje.";
        if (keyTwice) {
            document.querySelector("#texto").innerHTML = "";
        }
        keyTwice = true;
        setTimeout(function () {
            keyTwice = 0;
        }, 1000);
    }

    if (key !== "F1") {
        document.querySelector("#texto").innerHTML = "Pulsa F1 para ayuda.";
    }
});

// window.addEventListener("keyup", function (event)
// {
//     if (event.defaultPrevented) {
//         return;
//     }

//     var key = event.key || event.keyCode;
//     if (key === "F1") {
//         document.querySelector("#texto").innerHTML = "";
//     }
// });

var twice_37 = 0;

$(document).on('keyup', function (e) {

    if (e.which === 37) { // If left arrow    

        if (twice_37 === 1) { // (remember that twice_37 is 0 initially)
            alert('Do something! (you pressed Left twice!)');
        }

        twice_37 = 1; // Set to 1 and...
        setTimeout(function () { // ...reset to 0 after 1s
            twice_37 = 0;
        }, 1000);

    }

});