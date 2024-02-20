const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let body = document.querySelector(".white")
let btn = document.querySelector(".btn-icon")

btn.addEventListener("click", () => {
    if (body.className === "white") {
        body.classList.replace("white", "dark")
        btn.style.rotate = "180deg"
    } else {
        body.classList.replace("dark", "white")
        btn.style.rotate = "0deg"
    }
})