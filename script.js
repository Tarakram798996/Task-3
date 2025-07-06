
const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg"
];
let currentImageIndex = 0;

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('carouselImage').src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('carouselImage').src = images[currentImageIndex];
}

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            document.getElementById("joke-output").innerText = `${data.setup} - ${data.punchline}`;
        });
}

function submitAnswer(answer) {
    const message = answer === "4" ? "Correct!" : "Try again!";
    alert(message);
}

document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
