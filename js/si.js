document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcularBtn").addEventListener("click", function () {
        // Obtener los valores de entrada
        var principal = parseFloat(document.getElementById("n1").value);
        var tasaInteres = parseFloat(document.getElementById("n2").value);
        var tiempoMeses = parseFloat(document.getElementById("n3").value);

        // Calcular la cuota mensual y el total de intereses
        var tasaInteresDecimal = tasaInteres / 100;
        var cuotaMensual = (principal * tasaInteresDecimal * Math.pow(1 + tasaInteresDecimal, tiempoMeses)) /
            (Math.pow(1 + tasaInteresDecimal, tiempoMeses) - 1);
        var totalInteres = cuotaMensual * tiempoMeses - principal;

        // Mostrar los resultados
        document.getElementById("cuotaMensual").textContent = "Cuota mensual estimada es: DOP " + cuotaMensual.toFixed(2);
        document.getElementById("totalInteres").textContent = "Total de intereses pagados es: DOP " + totalInteres.toFixed(2);

        // Mostrar el resultado div
        document.getElementById("resultado").style.display = "block";
    });
});