const yourEmail = document.querySelector("#email");
const yourReemail = document.querySelector("#reEmail");
const yourPassword = document.querySelector("#password");
const yourName = document.querySelector("#name");
const dayBirth = document.querySelector("#day");
const monthBirth = document.querySelector("#month");
const yearBirth = document.querySelector("#year");
const dayWarm = document.querySelector("#dayWarm");
const monthWarm = document.querySelector("#monthWarm");
const yearWarm = document.querySelector("#yearWarm");

function validateEmail(email) {
  let emailReg = /\S+(@gmail.com)$/;

  return emailReg.test(email);
}

function isNumber(number) {
  let numberReg = /^[0-9]+$/;

  return numberReg.test(number);
}

let trueEmail = true;

// DOM Events
yourEmail.onblur = function () {
  if (this.value === "") {
    this.style.borderColor = "#f00";
    this.parentNode.querySelector(".register-warm").textContent =
      "Bạn cần nhập email của bạn.";
  } else {
    if (trueEmail) {
      this.style.borderColor = "var(--grey)";
      this.parentNode.querySelector(".register-warm").textContent = "";
    }
  }
};

yourEmail.oninput = function () {
  if (!validateEmail(this.value)) {
    trueEmail = false;
    this.style.borderColor = "#f00";
    this.parentNode.querySelector(".register-warm").textContent =
      "Email này không hợp lệ. Hãy đảm bảo rằng email được nhập dưới dạng example@email.com";
  } else {
    trueEmail = true;
    this.style.borderColor = "var(--grey)";
    this.parentNode.querySelector(".register-warm").textContent = "";
  }
};

yourReemail.onblur = function () {
  if (this.value === "") {
    this.style.borderColor = "#f00";
    this.parentNode.querySelector(".register-warm").textContent =
      "Bạn cần xác nhận email của bạn.";
  } else {
    if (trueEmail) {
      this.style.borderColor = "var(--grey)";
      this.parentNode.querySelector(".register-warm").textContent = "";
    }
  }
};

yourReemail.oninput = function () {
  if (this.value != yourEmail.value) {
    trueEmail = false;
    this.style.borderColor = "#f00";
    this.parentNode.querySelector(".register-warm").textContent =
      "Địa chỉ email không khớp.";
  } else {
    trueEmail = true;
    this.style.borderColor = "var(--grey)";
    this.parentNode.querySelector(".register-warm").textContent = "";
  }
};

yourPassword.onblur = function () {
  if (this.value === "") {
    this.style.borderColor = "#f00";
    this.parentNode.querySelector(".register-warm").textContent =
      "Bạn cần nhập mật khẩu.";
  } else {
    this.style.borderColor = "var(--grey)";
    this.parentNode.querySelector(".register-warm").textContent = "";
  }
};

yourName.onblur = function () {
  if (this.value === "") {
    this.style.borderColor = "#f00";
    this.parentNode.querySelector(".register-warm").textContent =
      "Nhập tên cho hồ sơ của bạn.";
  } else {
    this.style.borderColor = "var(--grey)";
    this.parentNode.querySelector(".register-warm").textContent = "";
  }
};

dayBirth.onblur = function () {
  if (this.value === "") {
    this.style.borderColor = "#f00";
    dayWarm.textContent = "Nhập một ngày hợp lệ trong tháng.";
  } else {
    if (isNumber(this.value)) {
      this.style.borderColor = "var(--grey)";
      dayWarm.textContent = "";
    } else {
      this.style.borderColor = "#f00";
      dayWarm.textContent = "Nhập một ngày hợp lệ trong tháng.";
    }
  }
};

monthBirth.onclick = function () {
  if (this.value <= 0) {
    this.style.borderColor = "#f00";
    monthWarm.textContent = "Chọn tháng sinh của bạn.";
  } else {
    this.style.borderColor = "var(--grey)";
    monthWarm.textContent = "";
  }
};

yearBirth.onblur = function () {
  if (this.value === "") {
    this.style.borderColor = "#f00";
    yearWarm.textContent = "Nhập một năm hợp lệ.";
  } else {
    if (isNumber(this.value)) {
      this.style.borderColor = "var(--grey)";
      yearWarm.textContent = "";
    } else {
      this.style.borderColor = "#f00";
      yearWarm.textContent = "Nhập một năm hợp lệ.";
    }
  }
};
