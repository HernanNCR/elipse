document.getElementById('ellipseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de entrada
    const centerX = parseFloat(document.getElementById('centerX').value);
    const centerY = parseFloat(document.getElementById('centerY').value);
    const focus1X = parseFloat(document.getElementById('focus1X').value);
    const focus1Y = parseFloat(document.getElementById('focus1Y').value);
    const focus2X = parseFloat(document.getElementById('focus2X').value);
    const focus2Y = parseFloat(document.getElementById('focus2Y').value);

    // Calcular el semieje mayor (distancia entre los focos)
    const a = Math.sqrt(Math.pow(focus2X - focus1X, 2) + Math.pow(focus2Y - focus1Y, 2)) / 2;

    // Calcular el semieje menor (distancia entre el centro y uno de los focos)
    const c = Math.sqrt(Math.pow(centerX - focus1X, 2) + Math.pow(centerY - focus1Y, 2));

    // Calcular el semieje menor mediante la relación de los semiejes
    const b = Math.sqrt(Math.pow(a, 2) - Math.pow(c, 2));

    const canvas = document.getElementById('ellipseCanvas');
    const ctx = canvas.getContext('2d');

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el elipse
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, a, b, 0, 0, 2 * Math.PI);
    ctx.stroke();
});
