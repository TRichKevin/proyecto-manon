const tiempoCoccionEstándar = 40; // Tiempo de cocción estándar en minutos

function calcularTiempo() {
    const capas = parseInt(prompt("Ingrese el número de capas:"));
    const tiempoHorno = parseInt(prompt("Ingrese el tiempo actual en el horno (minutos):"));

    // Validar entradas
    if (isNaN(capas) || isNaN(tiempoHorno) || capas < 0 || tiempoHorno < 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const tiempoRestante = tiempoCoccionEstándar - tiempoHorno;
    const tiempoPreparacion = capas * 2; // 2 minutos por capa
    const tiempoTotal = tiempoPreparacion + tiempoHorno + tiempoCoccionEstándar; // Sumar tiempo en horno al total

    // Mostrar resultados en el contenedor
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Resultados</h2>
        <p><strong>Tiempo restante en el horno:</strong> ${tiempoRestante} minutos</p>
        <p><strong>Tiempo total de preparación:</strong> ${tiempoPreparacion} minutos</p>
        <p><strong>Tiempo total de trabajo:</strong> ${tiempoTotal} minutos</p>
    `;
}