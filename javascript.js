// --- LÓGICA DE MODALES ---
const openButtons = document.querySelectorAll(".info-button button");
const closeButtons = document.querySelectorAll(".close-button");
const modals = document.querySelectorAll(".modal");
const detailButton = document.getElementById("btn-detalles");

const openModal = (modalId) => {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.style.opacity = "1";
        targetModal.style.pointerEvents = "auto";
        document.body.style.overflow = "hidden";
    }
};

const closeModal = (modal) => {
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
};

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.parentElement.id.replace("info-button_", "modal-").toLowerCase();
        openModal(modalId);
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => closeModal(button.closest(".modal")));
});

if(detailButton) {
    detailButton.addEventListener("click", (e) => {
        e.preventDefault();
        openModal("modal-detalles");
    });
}

window.addEventListener("click", (e) => {
    modals.forEach(modal => { if (e.target === modal) closeModal(modal); });
});

// --- LÓGICA DE IDIOMAS ---
const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');
const langTexts = document.querySelectorAll('.lang-text');

function changeLanguage(lang) {
    // 1. Botones activos
    if (lang === 'es') {
        btnEs.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        btnEn.classList.add('active');
        btnEs.classList.remove('active');
    }

    // 2. Filtrar textos
    langTexts.forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
    
    // Guardar preferencia (opcional)
    localStorage.setItem('preferredLang', lang);
}

btnEs.addEventListener('click', () => changeLanguage('es'));
btnEn.addEventListener('click', () => changeLanguage('en'));

// Cargar idioma guardado al iniciar
const savedLang = localStorage.getItem('preferredLang') || 'es';
changeLanguage(savedLang);