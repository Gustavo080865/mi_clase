
function verPDF(ruta, titulo) {
    const frame = document.getElementById('pdf-frame');
    const placeholder = document.getElementById('placeholder');
    const titleHeader = document.getElementById('pdf-title');
    const downloadBtn = document.getElementById('download-btn');

    // Cambiar el título
    titleHeader.innerText = titulo;

    // Mostrar el iframe y cargar el PDF
    frame.src = ruta;
    frame.style.display = 'block';
    placeholder.style.display = 'none';

    // Configurar el botón de descarga
    downloadBtn.href = ruta;
    downloadBtn.style.display = 'inline-block';
}
