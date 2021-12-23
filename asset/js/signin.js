const username = document.querySelector("#username");
const password = document.querySelector("#password");

let userEntered = true;

// DOM Events
username.onblur = function () {
  if (this.value === "") {
    this.style.borderColor = "#f00";
    this.parentNode.querySelector(".register-warm").textContent =
      "Vui lòng nhập tên người dùng Spotify hoặc địa chỉ email của bạn.";
  } else {
    this.style.borderColor = "var(--grey)";
    this.parentNode.querySelector(".register-warm").textContent = "";
  }
};

password.onblur = function () {
  if (this.value === "") {
    this.style.borderColor = "#f00";
    this.parentNode.querySelector(".register-warm").textContent =
      "Xin hãy điền mật khẩu.";
  } else {
    this.style.borderColor = "var(--grey)";
    this.parentNode.querySelector(".register-warm").textContent = "";
  }
};
