const searchButton = document.getElementById("search-button");

// Écoutez le clic sur le bouton de recherche
searchButton.addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    
    
    switch (searchInput) {
        case "project":
            case "projects":
            case "Project":
            case "Projects":
            case "Projet":
            case "projet":
            case "projets":
            case "Projets":
            // Redirigez l'utilisateur vers la page des projets
            window.location.href = "project.html";
            break;

            case "about me":
                case "aboutme":
                case "About Me":
                case "about Me":
            // Redirigez l'utilisateur vers la page "About Me"
            window.location.href = "about.html";
            break;

            case "compétences":
                case "compétence":
                case "Compétences":
                case "Compétence":
                case "skills":
                case "skill":
                case "Skills":
                case "Skill":
            // Redirigez l'utilisateur vers la page "Skills"
            window.location.href = "skills.html";
            break;

        case "contact":
        case "contacts":
        case "Contact":
        case "Contacts":
            // Redirigez l'utilisateur vers la page des contacts
            window.location.href = "contact.html";
            break;

        default:
            // Redirigez l'utilisateur vers une page par défaut si le terme de recherche n'est pas valide
            window.location.href = "default.html";
    }
});


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
