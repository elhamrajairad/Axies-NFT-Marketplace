let searchBox = document.querySelector("#search-box-form");
document
  .querySelector(".header__wallet__search")
  .addEventListener("click", function (e) {
    if (searchBox.style.display === "none") {
      searchBox.style.display = "flex";
    } else {
      searchBox.style.display = "none";
    }
  });
