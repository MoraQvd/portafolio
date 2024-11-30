function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

function copyText() {
    // Obtén el contenido del div con id "correo_autor"
    const textElement = document.getElementById("correo_autor");

    // Crea un rango y selecciona el texto
    const range = document.createRange();
    range.selectNodeContents(textElement);

    // Selecciona el texto
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Intenta copiar el texto al portapapeles
    try {
        document.execCommand('copy');

        // Muestra el mensaje de confirmación
        const confirmacion_mensaje = document.getElementById("confirmacion_mensaje");
        confirmacion_mensaje.style.display = "block";

        // Ocultar el mensaje después de 2 segundos
        setTimeout(() => {
            confirmacion_mensaje.style.display = "none";
        }, 2000);
    } catch (err) {
        console.error("No se pudo copiar el texto", err);
    }

    // Limpia la selección
    window.getSelection().removeAllRanges();
}

