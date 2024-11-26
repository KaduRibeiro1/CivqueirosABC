let currentImageIndex = 0;
const images = [
    'images/civic_armelin1.jpg',
    'images/civic_armelin2.jpg',
    'images/civic_thales1.jpg',
    'images/civic_thales2.jpg',
    'images/civic_thales3.jpg',
    'images/civic_thales4.jpg',
    'images/civic_mirella1.jpg',
    'images/civic_gabi1.jpg'
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

// Adicionar imagens enviadas pelo usuário
/*const form = document.getElementById('uploadForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('carPhoto');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target.result; // URL da imagem enviada
            images.push(imageUrl); // Adiciona a imagem ao array de imagens
            alert("Imagem adicionada com sucesso!");
        };
        reader.readAsDataURL(file);
    }
});

function adicionarIntegrante() {
    div_integrantes.innerHTML += `Nome do carro: <br>
                <input type="text" id="input_nomeCarro"> <br>
                Instagram: <br>
                <input type="text" id="input_instagram"> <br>
                Modelo e Cor: <br>
                <input type="text" id="input_modelo"> <br>
                Motor: <br>
                <input type="text" id="input_motor"> <br>`

}*/