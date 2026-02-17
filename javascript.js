
const openButtons = document.querySelectorAll(".info-button button");

const closeButtons = document.querySelectorAll(".close-button");

const modals = document.querySelectorAll(".modal");

const detailButton = document.getElementById("btn-detalles")

openButtons.forEach(button => {
    button.addEventListener("click", () => {
      
        const modalId = button.parentElement.id.replace("info-button_", "modal-").toLowerCase();
        const targetModal = document.getElementById(modalId);
        
        if (targetModal) {
            targetModal.style.opacity = "1";
            targetModal.style.pointerEvents = "auto";
            document.body.style.overflow = "hidden"; // Evita el scroll de fondo
        }
    });
});


closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        modal.style.opacity = "0";
        modal.style.pointerEvents = "none";
        document.body.style.overflow = "auto"; 
    });
});

detailButton.addEventListener("click", (e) => {
        e.preventDefault(); 
        const targetModal = document.getElementById("modal-detalles");
        
        targetModal.style.opacity = "1";
        targetModal.style.pointerEvents = "auto";
        document.body.style.overflow = "hidden"; 

    });

window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.opacity = "0";
            modal.style.pointerEvents = "none";
            document.body.style.overflow = "auto";
        }
    });
});