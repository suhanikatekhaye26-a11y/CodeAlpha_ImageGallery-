let images = document.querySelectorAll('.gallery-item');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    showImage();
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Show Image
function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

// Next Image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

// Previous Image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

// Filter Function
function filterImages(category) {
    images.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}