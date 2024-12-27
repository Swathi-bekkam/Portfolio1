const track = document.querySelector(".carousel-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pauseButton = document.getElementById("pause");

let currentIndex = 0;
let isPaused = false;
const itemWidth = 170; // Width of one item + gap
const autoScrollInterval = 3000;
let autoScroll;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function startAutoScroll() {
  autoScroll = setInterval(() => {
    if (!isPaused) {
      currentIndex = (currentIndex + 1) % track.children.length;
      updateCarousel();
    }
  }, autoScrollInterval);
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + track.children.length) % track.children.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % track.children.length;
  updateCarousel();
});

pauseButton.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "▶" : "❚❚";
});

startAutoScroll();

document.addEventListener("DOMContentLoaded", function () {
    const educationItems = document.querySelectorAll(".education-item");

    function handleScroll() {
        educationItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load in case elements are already in view
});




