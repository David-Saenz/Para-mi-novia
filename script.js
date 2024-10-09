document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const yesScreen = document.getElementById("yesScreen");
    const container = document.querySelector(".container");

    // Cuando se presiona el botón "Sí"
    yesBtn.addEventListener("click", function() {
        container.style.display = "none";
        yesScreen.classList.remove("hidden");
    });

    // Comportamiento del botón "No" (se mueve al azar)
    noBtn.addEventListener("mouseover", function() {
        const maxWidth = window.innerWidth - noBtn.offsetWidth;
        const maxHeight = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
