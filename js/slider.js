var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function myFunction() {
  var element = document.getElementById("deleteclass");
  element.classList.remove("mySwiper");
  element.classList.remove("swiper");
  element.classList.add("brands__desktop");

  let el = document.getElementById("deleteclass2");
  el.classList.remove("swiper-wrapper");
  console.log(`el`, el);
  el.classList.add("brands__desktop2");

  let el2 = document.getElementById("deleteclass3");
  el2.classList.remove("swiper-slide");
  console.log(`el`, el);
  el2.classList.add("brands__desktop3");

  let el3 = document.querySelectorAll("#deleteclass2 .swiper-slide");

  console.log(typeof el3);
  for (key in el3) {
    el3[key].classList.remove("swiper-slide");
    el3[key].classList.add("brands__desktop3");
  }
}

let btnShower = document.querySelector(".section-content__btn");
btnShower.addEventListener("mouseover", (e) => {
  document.getElementsByClassName("brands__desktop")[0].style = "height: 150px";
  document.getElementsByClassName("section-content__img")[0].style =
    "transform: rotate(0deg)";
  document.getElementById("closeTxt").innerHTML = "Показать все";
});

btnShower.addEventListener("click", () => {
  document.getElementsByClassName("brands__desktop")[0].style =
    "height: max-content";
  document.getElementsByClassName("section-content__img")[0].style =
    "transform: rotate(-180deg)";

  document.getElementById("closeTxt").innerHTML = "Скрыть";
});

const screenWidth = window.screen.width;

if (screenWidth >= 365) {
  console.log("good job");
  document.getElementsByClassName("show_more")[0].style = "display: flex";
  myFunction();
}
