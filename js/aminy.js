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
