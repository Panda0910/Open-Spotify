// Khai báo các biến cần dùng
let userLogin = document.querySelector(".user-login");
let passLogin = document.querySelector(".pass-login");
let btnLogin = document.querySelector(".btn-lg");

// Định nghĩa login object
const login = {
  isValid() {
    let textValue = this.value;
    let isPattern = new RegExp(this.pattern);
    let textWarm = this.getAttribute("aria-textwarm");
    let warmSelectorEl = `#${this.getAttribute("aria-loginvalid")}`;

    if (!textValue) {
      document.querySelector(warmSelectorEl).textContent =
        "You have not entered your login information";
    } else {
      console.log(textValue);
      console.log(isPattern.test(textValue));
      if (isPattern.test(textValue)) {
        document.querySelector(warmSelectorEl).textContent = "";
      }

      if (!isPattern.test(textValue)) {
        document.querySelector(warmSelectorEl).textContent = textWarm;
      }
    }
  },
  loginValidation() {
    // Lắng nghe sự kiện
    userLogin.onblur = this.isValid;
    passLogin.onblur = this.isValid;
    btnLogin.onclick = function () {
      this.setAttribute("href", "./home.html");
    };
  },
  method() {
    // Kiểm tra đăng nhập
    this.loginValidation();
  },
  start() {
    // Thực thi các chức năng có trong login object
    this.method();
  },
};

login.start();
