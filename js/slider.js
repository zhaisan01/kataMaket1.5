let mediaQuerySize = window.screen.width;
const minimizerList = document.querySelector(".brands__container");
const btnShowMoreBrands = document.querySelector(".brands__button");

function sliderEnable() {
  if (mediaQuerySize <= 768) {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    btnShowMoreBrands.style.display = "none";
  } else {
    let deleteClassNemeSwiperSlide = document.querySelectorAll(".swiper-slide");
    deleteClassNemeSwiperSlide.forEach((e) => {
      e.classList.toggle("swiper-slide");
    });
  }
}

sliderEnable();

btnShowMoreBrands.addEventListener("click", showMoreBrands);
function showMoreBrands() {
  minimizerList.classList.toggle("brands__minimized");
  btnShowMoreBrands.classList.toggle("brands__button--active");

  if (minimizerList.classList.contains("brands__minimized")) {
    btnShowMoreBrands.textContent = "Скрыть";
  } else {
    btnShowMoreBrands.textContent = "Показать все";
  }
}
