let images = [
  'https://placekitten.com/600/300',
  'https://picsum.photos/600/300',
  'https://placekitten.com/600/300',
];

let imageElement = document.getElementById('image');
let previousBtn = document.getElementById('previousBtn');
let nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Відображення поточного зображення
function showImage() {
  let currentImage = images[currentIndex];
  imageElement.src = currentImage;
}

// Перемикання на попереднє зображення
function previousImage() {
  currentIndex--;
  if (currentIndex === 0) {
    previousBtn.disabled = true;
  }
  nextBtn.disabled = false;
  showImage();
}

// Перемикання на наступне зображення
function nextImage() {
  currentIndex++;
  if (currentIndex === images.length - 1) {
    nextBtn.disabled = true;
  }
  previousBtn.disabled = false;
  showImage();
}

// Додавання обробників подій для кнопок
previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);

// Показуємо початкове зображення
showImage();