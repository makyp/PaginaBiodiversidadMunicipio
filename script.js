//Para que aparezca el footer
window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    // Calcula la distancia entre el tope de la ventana y el footer
    var footerOffset = bodyHeight - windowHeight;

    // Comprueba si el usuario ha llegado al final de la página
    if (scrollPosition >= footerOffset) {
        footer.style.display = 'block'; // Muestra el footer
    } else {
        footer.style.display = 'none'; // Oculta el footer
    }
});


//para el carrusel
let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const cardsPerSlide = {
  large: 3,
  medium: 2,
  small: 1
};

function showSlides() {
    const windowWidth = window.innerWidth;
    let cardsToShow = cardsPerSlide.large; // Por defecto, mostrar 3 tarjetas
    
    if (windowWidth <= 992 && windowWidth > 600) {
      cardsToShow = cardsPerSlide.medium; // Si la pantalla es mediana, mostrar 2 tarjetas
    } else if (windowWidth <= 600) {
      cardsToShow = cardsPerSlide.small; // Si la pantalla es pequeña, mostrar 1 tarjeta
    }
    
    // Oculta todas las tarjetas
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    
    // Muestra las tarjetas correspondientes
    for (let i = slideIndex; i < slideIndex + cardsToShow; i++) {
      const adjustedIndex = i % slides.length; // Índice ajustado para envolver al principio
      slides[adjustedIndex].style.display = 'block';
    }
  }
  

function prevSlide() {
  slideIndex--; // Retrocede una tarjeta
  if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Vuelve al final si es necesario
  }
  showSlides();
}

function nextSlide() {
  slideIndex++; // Avanza una tarjeta
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Vuelve al principio si es necesario
  }
  showSlides();
}

// Mostrar las tarjetas al cargar la página
showSlides();

// Volver a mostrar las tarjetas al cambiar el tamaño de la ventana
window.addEventListener('resize', showSlides);
