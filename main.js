const headerBtn = document.getElementById("header-btn");
const navbar = document.getElementById("navbars");

headerBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
  headerBtn.classList.toggle("close-btn");
});

var elBuyBtn = document.querySelector(".btnsss");
var elCartCount = document.querySelector(".num");
var count = 0;

elBuyBtn.addEventListener("click", function () {
  count += 1;
  elCartCount.textContent = count;
});
