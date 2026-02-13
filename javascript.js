// Seleccionamos todos los botones que abren modales
const openButtons = document.querySelectorAll(".info-button button");
// Seleccionamos todos los botones de cerrar
const closeButtons = document.querySelectorAll(".close-button");
// Seleccionamos todos los modales
const modals = document.querySelectorAll(".modal");

// Función para abrir el modal correcto
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Obtenemos el ID del modal desde el contenedor padre (el div .info-button)
        const modalId = button.parentElement.id.replace("info-button_", "modal-").toLowerCase();
        const targetModal = document.getElementById(modalId);
        
        if (targetModal) {
            targetModal.style.opacity = "1";
            targetModal.style.pointerEvents = "auto";
            document.body.style.overflow = "hidden"; // Evita el scroll de fondo
        }
    });
});

// Función para cerrar los modales
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        modal.style.opacity = "0";
        modal.style.pointerEvents = "none";
        document.body.style.overflow = "auto"; // Devuelve el scroll
    });
});

// Cerrar al hacer click fuera de la tarjeta (en el fondo oscuro)
window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.opacity = "0";
            modal.style.pointerEvents = "none";
            document.body.style.overflow = "auto";
        }
    });
});