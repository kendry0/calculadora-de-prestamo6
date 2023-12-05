const btn = document.getElementById("bo");

function mostrar() {
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let n3 = document.getElementById("n3");
    let n4 = document.getElementById("si");
    let resultadoDiv = document.getElementById("resultado");

    // Obtener los valores numéricos de los campos de entrada
    let principal = parseFloat(n1.value);
    let tasaInteres = parseFloat(n2.value);
    let tiempo = parseFloat(n3.value);

    // Calcular el interés simple
    let interesSimple = (principal * tasaInteres * tiempo) / 100;

    // Mostrar el resultado en el elemento con id "si"
    n4.textContent = "El interés simple es: " + interesSimple.toFixed(2);

    // Mostrar la alerta
    resultadoDiv.style.display = "block";
}

btn.addEventListener("click", mostrar);