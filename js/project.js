const toggleBtn = document.querySelector('.toggle-btn');
const sideBar = document.querySelector('.side-bar');
const filters = document.querySelector('.filters');
const videoContainer = document.getElementById("video-container");

toggleBtn.addEventListener('click', function () {
    sideBar.classList.toggle('open');
    filters.classList.toggle('open');
    videoContainer.classList.toggle('open');

    // Ajouter ou supprimer les styles en fonction de l'état de la barre latérale
    if (sideBar.classList.contains('open')) {
        // Si la barre latérale est ouverte, rétablir les styles par défaut
        filters.style.flex = "0 0 250px";
        videoContainer.style.marginLeft = "250px";
    } else {
        // Si la barre latérale est fermée, ajuster les styles pour prendre l'espace disponible
        filters.style.flex = "1"; // Les filtres occupent tout l'espace disponible
        videoContainer.style.marginLeft = "120px"; // Aucun décalage à gauche
    }
});


const projects = [
    {
        title: "Chat",
        imageUrl: "img/chat.png",
        description: "Description du projet 1",
        // Autres informations du projet
    },
    {
        title: "Random Color",
        imageUrl: "img/color.png",
        description: "Description du projet 2",
        videoUrl: "color.html"
        // Autres informations du projet
    },
    {
        title: "Hyrule Castle",
        imageUrl: "img/hyrule.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Aminy",
        imageUrl: "img/render3.png",
        description: "Description du projet 2",
        videoUrl: "aminy.html"
        // Autres informations du projet
    },
    {
        title: "Tic Tac Toe",
        imageUrl: "img/tic.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Website TAC.cie",
        imageUrl: "img/tac.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Space Attack",
        imageUrl: "img/space.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Dashboard",
        imageUrl: "img/Dashboard.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "3D plan hospital",
        imageUrl: "img/gnn2.jpg",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Maquettes Figma",
        imageUrl: "img/mchq2.png",
        description: "Description du projet 2",
        // Autres informations du projet
    },
    {
        title: "Roc, Paper, Scisors",
        imageUrl: "img/rps.png",
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

projects.forEach((project) => {
    const projectTitle = project.title;
    const projectImageUrl = project.imageUrl;
    const projectDescription = project.description;

    const projectThumbnail = document.createElement("div");
    projectThumbnail.className = "project-thumbnail";
    projectThumbnail.innerHTML = `
        <a class="project-link" href="${project.videoUrl}">
            <img src="${projectImageUrl}" alt="${projectTitle}">
            <h3>${projectTitle}</h3>
            <p>${projectDescription}</p>
        </a>
    `;

    videoContainer.appendChild(projectThumbnail);
});
