


const color = prompt("De qué color quiere la página? (solo puede elejir entre rojo azul rosa verde amarillo y morado)");
console.log(color);

const bo = document.getElementById("bo");

function mostrar(colorFondo) {
    document.body.style.background = colorFondo;
}

if (color.toLowerCase() === "rojo") {
    bo.addEventListener("click", function () {
        mostrar("red");
    });
} else if (color.toLowerCase() === "azul") {
    bo.addEventListener("click", function () {
        mostrar("blue");
    });
} else if (color.toLowerCase() === "rosa") {
    bo.addEventListener("click", function () {
        mostrar("pink");
    });
} else if (color.toLowerCase() === "verde") {
    bo.addEventListener("click", function () {
        mostrar("green");
    });
} else if (color.toLowerCase() === "amarillo") {
    bo.addEventListener("click", function () {
        mostrar("yellow");
    });
} else if (color.toLowerCase() === "morado") {
    bo.addEventListener("click", function () {
        mostrar("purple");
    });
} else {
    console.log("Color no reconocido");
}
