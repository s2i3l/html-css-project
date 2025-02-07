function toggleMenu() {
    let menu = document.querySelector('.menu');
    let hamburger = document.querySelector('.hamburger');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        hamburger.innerHTML = "&#9776;";
    } else {
        menu.classList.add('show');
        hamburger.innerHTML = "&times;";
    }
}







let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, i)=> {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
}, 5000);
