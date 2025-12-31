/* ================================
   IMAGE CAROUSEL (Vanilla JS)
================================ */

// Select elements
const images = document.querySelectorAll(".carousel-images img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let interval;

// Show image based on index
function showImage(index) {
    images.forEach((img) => {
        img.style.display = "none";
    });
    images[index].style.display = "block";
}

// Next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // loop back to first
    }
    showImage(currentIndex);
}

// Previous image
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // loop to last
    }
    showImage(currentIndex);
}

// Auto slideshow
function startSlideshow() {
    interval = setInterval(nextImage, 3000);
}

// Stop slideshow
function stopSlideshow() {
    clearInterval(interval);
}

// Event listeners
if (nextBtn && prevBtn && images.length > 0) {
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);

    images.forEach((img) => {
        img.addEventListener("mouseenter", stopSlideshow);
        img.addEventListener("mouseleave", startSlideshow);
    });

    showImage(currentIndex);
    startSlideshow();
}

/* ================================
   jQuery Smooth Scroll
================================ */

$(document).ready(function () {
    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();
        const target = $(this.getAttribute("href"));

        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                800
            );
        }
    });
});
