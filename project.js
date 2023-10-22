const toggleBtn = document.querySelector('.toggle-btn');
const sideBar = document.querySelector('.side-bar');
const videoContainer = document.getElementById("video-container");

// Écoutez le clic sur le bouton de bascule
toggleBtn.addEventListener('click', function () {
    sideBar.classList.toggle('open'); // Ajoutez ou supprimez la classe "open" pour ouvrir/fermer la sidebar
    videoContainer.classList.toggle('shifted'); // Décalez le contenu des vidéos pour laisser de la place pour la sidebar
});

const projects = [
    {
        title: "Chat",
        imageUrl: "chat.png",
        description: "Description du projet 1",
        // Autres informations du projet
    },
    {
        title: "Random Color",
        imageUrl: "color.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Hyrule Castle",
        imageUrl: "hyrule.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Aminy",
        imageUrl: "render3.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Tic Tac Toe",
        imageUrl: "tic.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Website TAC.cie",
        imageUrl: "tac.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Space Attack",
        imageUrl: "space.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Dashboard",
        imageUrl: "Dashboard.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "3D plan hospital",
        imageUrl: "gnn2.jpg",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Maquettes Figma",
        imageUrl: "mchq2.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Roc, Paper, Scisors",
        imageUrl: "rps.png",
        description: "Description du projet 2",
        // Autres informations du projet
    }
    // Ajoutez d'autres projets
];

// Fonction pour afficher les miniatures d'images de projets
function displayProjectThumbnails(projects) {
    videoContainer.innerHTML = "";

    projects.forEach((project) => {
        const projectTitle = project.title;
        const projectImageUrl = project.imageUrl;
        const projectDescription = project.description;

        const projectThumbnail = document.createElement("div");
        projectThumbnail.className = "project-thumbnail";
        projectThumbnail.innerHTML = `
            <img src="${projectImageUrl}" alt="${projectTitle}">
            <h3>${projectTitle}</h3>
            <p>${projectDescription}</p>
        `;

        videoContainer.appendChild(projectThumbnail);
    });
}

// Appel de la fonction pour afficher les miniatures d'images de projets
displayProjectThumbnails(projects);
