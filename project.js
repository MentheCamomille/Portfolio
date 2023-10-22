const toggleBtn = document.querySelector('.toggle-btn');
const sideBar = document.querySelector('.side-bar');
const videoContainer = document.querySelector('.video-container');

// Écoutez le clic sur le bouton de bascule
toggleBtn.addEventListener('click', function () {
    sideBar.classList.toggle('open'); // Ajoutez ou supprimez la classe "open" pour ouvrir/fermer la sidebar
    videoContainer.classList.toggle('shifted'); // Décalez le contenu des vidéos pour laisser de la place pour la sidebar
});

