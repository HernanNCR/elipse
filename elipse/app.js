document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    document.getElementById('coordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const foco1x = parseInt(document.getElementById('foco1x').value);
        const foco1y = parseInt(document.getElementById('foco1y').value);
        const foco2x = parseInt(document.getElementById('foco2x').value);
        const foco2y = parseInt(document.getElementById('foco2y').value);
        const a = parseInt(document.getElementById('a').value);
        const b = parseInt(document.getElementById('b').value);

        drawEllipse(foco1x, foco1y, foco2x, foco2y, a, b);
    });

    function drawEllipse(foco1x, foco1y, foco2x, foco2y, a, b) {
        // Limpiar el lienzo
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Cambiar la escala (puedes ajustar estos valores según tus necesidades)
        const scaleX = 10;
        const scaleY = 10;
    
        ctx.fillStyle = 'rgb(255, 0, 0)'; // Color rojo para el punto
    
        // Dibujar elipse
        ctx.beginPath();
        ctx.ellipse(foco1x * scaleX, canvas.height - foco1y * scaleY, a * scaleX, b * scaleY, 0, 0, 2 * Math.PI);
        ctx.fill();

        // Dibujar ejes x e y
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - foco1y * scaleY);
        ctx.lineTo(canvas.width, canvas.height - foco1y * scaleY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(foco1x * scaleX, 0);
        ctx.lineTo(foco1x * scaleX, canvas.height);
        ctx.stroke();
    }
});


function cerrar(){
    window.location.href = "";
}