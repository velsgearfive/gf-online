const cards = document.querySelectorAll(".card-custom");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
});
const sky = document.getElementById("sky");

// Create stars
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";

  sky.appendChild(star);
}

// Blinking randomly
setInterval(() => {
  const stars = document.querySelectorAll(".star");

  stars.forEach(star => {
    if (Math.random() > 0.7) {
      star.classList.add("twinkle");

      setTimeout(() => {
        star.classList.remove("twinkle");
      }, 2000);
    }
  });
}, 1500);
