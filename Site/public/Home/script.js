let currentImageIndex = 0;
const images = [
    '../images/civic_armelin1.jpg',
    '../images/civic_armelin2.jpg',
    '../images/civic_thales1.jpg',
    '../images/civic_thales2.jpg',
    '../images/civic_thales3.jpg',
    '../images/civic_thales4.jpg',
    '../images/civic_mirella1.jpg',
    '../images/civic_gabi1.jpg'
];

function updateImage() {
    const carImage = document.getElementById('carImage');
    carImage.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}
