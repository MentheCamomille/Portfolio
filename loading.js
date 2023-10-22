const video = document.querySelector("iframe");
const progressBar = document.querySelector("#progress-bar");

video.addEventListener("loadeddata", () => {
  progressBar.style.display = "none";
  window.location.href = "project.html";
});
