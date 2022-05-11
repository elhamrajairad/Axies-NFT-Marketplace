var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// load more button...
const loadmore = document.querySelector("#loadmore");
let currentItems = 4;
loadmore.addEventListener("click", (e) => {
  const elementList = [...document.querySelectorAll(".picks__cards .card")];
  for (let i = currentItems; i < currentItems + 4; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "block";
    }
    console.log(elementList)
  }
  currentItems += 4;

  // Load more button will be hidden after list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = "none";
  }
});
