document.addEventListener("DOMContentLoaded", function () {
    function initCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const images = carousel.querySelectorAll("img");
        let index = 0;

        function updateCarousel() {
            const offset = -index * 100; // Move 100% da largura
            carousel.style.transform = `translateX(${offset}%)`;
        }

        document.querySelector(`[onclick="prev('${carouselId}')"]`).addEventListener("click", function () {
            index = (index > 0) ? index - 1 : images.length - 1;
            updateCarousel();
        });

        document.querySelector(`[onclick="next('${carouselId}')"]`).addEventListener("click", function () {
            index = (index < images.length - 1) ? index + 1 : 0;
            updateCarousel();
        });
    }

    // Inicializa o carrossel para ambos os IDs
    initCarousel("carousel1");
    initCarousel("carousel2");
    initCarousel("carousel3");
    initCarousel("carousel4");
    initCarousel("carousel5");
    initCarousel("carousel6");
    initCarousel("carousel7");
    initCarousel("carousel8");
    initCarousel("carousel9");
    initCarousel("carousel10");
    initCarousel("carousel11");
});

// responsividade betinha
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const navUl = document.querySelector('nav ul');
            
            if (menuToggle) {
                menuToggle.addEventListener('click', function() {
                    navUl.classList.toggle('show');
                });
            }
        });
