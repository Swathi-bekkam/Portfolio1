const track = document.querySelector(".carousel-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pauseButton = document.getElementById("pause");

let isPaused = false;
const itemWidth = 220; 
const autoScrollInterval = 2000;
let autoScroll;

// Duplicate items for infinite loop effect
const items = [...track.children];

// Clone the items to create an infinite loop effect
items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
});

// Set initial position
track.style.transform = `translateX(-${itemWidth}px)`;

function updateCarousel() {
    if (isPaused) return; // Prevent scrolling when paused

    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${2 * itemWidth}px)`;

    setTimeout(() => {
        track.style.transition = "none"; // Disable transition for smooth infinite scrolling
        track.appendChild(track.children[0]); // Move first item to the end
        track.style.transform = `translateX(-${itemWidth}px)`;
    }, 500); // Wait for transition to finish before resetting position
}

function startAutoScroll() {
    autoScroll = setInterval(updateCarousel, autoScrollInterval);
}

// Move to previous slide
prevButton.addEventListener("click", () => {
    track.style.transition = "none";
    track.prepend(track.lastElementChild); // Move last element to the front
    track.style.transform = `translateX(-${2 * itemWidth}px)`;

    setTimeout(() => {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${itemWidth}px)`;
    }, 50); // Small delay for smooth effect
});

// Move to next slide
nextButton.addEventListener("click", () => {
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${2 * itemWidth}px)`;

  setTimeout(() => {
      track.style.transition = "none"; // Disable transition for smooth effect
      track.appendChild(track.children[0]); // Move first item to the end
      track.style.transform = `translateX(-${itemWidth}px)`;
  }, 500); // Ensure delay matches transition time
});
// Pause / Resume functionality
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
            if (rect.top <= window.innerHeight * 1) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load in case elements are already in view
});




