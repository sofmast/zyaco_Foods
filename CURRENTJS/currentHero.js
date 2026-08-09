document.addEventListener("DOMContentLoaded", () => {

    const slides =
        document.querySelectorAll(".hero-slide");

    const dots =
        document.querySelectorAll(".hero-dot");

    const nextButton =
        document.getElementById("heroNext");

    const prevButton =
        document.getElementById("heroPrev");


    if (!slides.length) return;


    let currentSlide = 0;

    let autoPlay;


    function showSlide(index) {

        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === index
            );

        });


        dots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        });


        currentSlide = index;

    }


    function nextSlide() {

        const next =
            (currentSlide + 1) % slides.length;

        showSlide(next);

    }


    function previousSlide() {

        const previous =
            (currentSlide - 1 + slides.length)
            % slides.length;

        showSlide(previous);

    }


    function startAutoPlay() {

        clearInterval(autoPlay);

        autoPlay = setInterval(
            nextSlide,
            5500
        );

    }


    function resetAutoPlay() {

        startAutoPlay();

    }


    nextButton?.addEventListener(
        "click",
        () => {

            nextSlide();

            resetAutoPlay();

        }
    );


    prevButton?.addEventListener(
        "click",
        () => {

            previousSlide();

            resetAutoPlay();

        }
    );


    dots.forEach((dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                showSlide(index);

                resetAutoPlay();

            }
        );

    });


    /* Pause while user is interacting */

    const slider =
        document.getElementById("heroSlider");


    slider?.addEventListener(
        "mouseenter",
        () => clearInterval(autoPlay)
    );


    slider?.addEventListener(
        "mouseleave",
        startAutoPlay
    );


    /* Start */

    showSlide(0);

    startAutoPlay();

});