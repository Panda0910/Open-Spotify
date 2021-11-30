const hamburger = document.querySelector("#hamburger");

// open sidebar when click hamburger icon
hamburger.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.add("open");
});

// close sidebar when click sidebar-link
document.querySelectorAll(".sidebar-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.remove("open");
  });
});

// close sidebar when click outside of sidebar
window.addEventListener("mousedown", function (event) {
  var box = document.querySelector(".sidebar");
  if (event.target != box && event.target.parentNode != box) {
    box.classList.remove("open");
  }
});
