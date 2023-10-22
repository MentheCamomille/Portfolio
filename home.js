// Sélectionnez le bouton de recherche et le champ de texte
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

// Écoutez le clic sur le bouton de recherche
searchButton.addEventListener("click", performSearch);

// Écoutez l'événement "keydown" sur le champ de texte
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

// Fonction pour effectuer la recherche (à personnaliser selon vos besoins)
function performSearch() {
    const searchInputValue = searchInput.value.toLowerCase();

    switch (searchInputValue) {
        case "project":
        case "projects":
        case "projet":
        case "projets":
            window.location.href = "project.html";
            break;

        case "about me":
        case "aboutme":
            window.location.href = "about.html";
            break;

        case "compétences":
        case "competence":
        case "skills":
        case "skill":
            window.location.href = "skills.html";
            break;

        case "contact":
        case "contacts":
            window.location.href = "contact.html";
            break;

        default:
            window.location.href = "default.html";
    }
}



// Sélectionnez le bouton de personnalisation
const customizeButton = document.getElementById("change-background");

// Sélectionnez le champ de téléchargement d'image
const customBackgroundInput = document.getElementById("custom-background-input");

// Fonction pour changer le fond d'écran à partir de l'image téléchargée
function changeBackgroundFromImage(imageFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
        document.body.style.backgroundImage = `url("${e.target.result}")`;

        // Réinitialisez le champ de téléchargement d'image
        customBackgroundInput.value = "";
    };

    reader.readAsDataURL(imageFile);
}

// Écoutez le clic sur le bouton de personnalisation
customizeButton.addEventListener("click", function () {
    customBackgroundInput.click();
});

// Écoutez le changement dans le champ de téléchargement d'image
customBackgroundInput.addEventListener("change", function () {
    const selectedFile = customBackgroundInput.files[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
        changeBackgroundFromImage(selectedFile);
    }
});

const userLogo = document.getElementById("user-logo");
const contactPopup = document.getElementById("contact-popup");
const closeButton = document.getElementById("close-popup");

userLogo.addEventListener("click", function () {
    contactPopup.classList.add("show"); // Ajoute la classe "show" pour afficher la pop-up avec une transition
});

closeButton.addEventListener("click", function () {
    contactPopup.classList.remove("show"); // Supprime la classe "show" pour cacher la pop-up avec une transition
});

