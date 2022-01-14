// Khai bao bien
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
let userPhone = document.querySelector("#userPhone");
let userCountry = document.querySelector("#userCountry");
let userTable = document.querySelector("#userTable tbody");
let addUserBtn = document.querySelector("#addUserBtn");

let editUsername = document.querySelector("#editUsername");
let editUseremail = document.querySelector("#editUseremail");
let editUserpassword = document.querySelector("#editUserpassword");
let editUserphone = document.querySelector("#editUserphone");
let editUsercountry = document.querySelector("#editUsercountry");
let showPassBtn = document.querySelector("#showPassBtn");
let editUserBtn = document.querySelector("#editUserBtn");

// Khai bao ham
let getData = (item) => {
  let data = localStorage.getItem(item);
  let dataObj = data != null ? JSON.parse(data) : [];

  return dataObj;
};

let showUser = () => {
  userTable.innerHTML = "";

  // Lay dl tu local storage
  let userDataArr = getData("user");

  // Hien thi du lien ra bang
  if (userDataArr.length > 0) {
    userDataArr.forEach(
      ({ username, email, password, phone, country }, index) => {
        let userTableTr = document.createElement("tr");
        userTableTr.innerHTML = `
            <td>${index + 1}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${country}</td>
            <td>
                <button class="btn btn-secondary" onclick="userModalInfo(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <ion-icon name="create"></ion-icon>
                </button>
                <button class="btn btn-danger" onclick="delUser(${index})">
                    <ion-icon name="trash-bin"></ion-icon>
                </button>
            </td>
        `;
        userTable.appendChild(userTableTr);
      }
    );
  } else {
    userTable.innerHTML = `
        <tr>
            <td colspan="6">
            <p class="fs-4 mb-0 text-white">No user datas</p>
            </td>
        </tr>
    `;
  }
};

let addUser = (e) => {
  e.preventDefault();
  // Lay dl tu local storage
  let userDataArr = getData("user");

  if (
    userName.value &&
    userEmail.value &&
    userPassword.value &&
    userPhone.value &&
    userCountry.value
  ) {
    // Them dl vao mang
    userDataArr.push({
      username: userName.value,
      email: userEmail.value,
      password: userPassword.value,
      phone: userPhone.value,
      country: userCountry.value,
    });

    // Cap nhat dl len localstorage
    localStorage.setItem("user", JSON.stringify(userDataArr));

    // Lam moi phan nhap thong tin
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    userPhone.value = "";
    userCountry.value = "";

    // Hien thi lai bang dl user
    showUser();
  } else {
    alert("Please enter enough information");
    userName.focus();
  }
};

let delUser = (index) => {
  // Lay du lieu tu local storage
  let userDataArr = [...JSON.parse(localStorage.getItem("user"))];

  // Xoa dl va cap nhat lai len localstorage
  userDataArr.splice(index, 1);
  localStorage.setItem("user", JSON.stringify(userDataArr));

  // Hien thi lai bang dl user
  showUser();
};

let editUser = (index) => {
  // Lay du lieu tu local storage
  let userDataArr = [...JSON.parse(localStorage.getItem("user"))];

  // Cap nhat dl user len phan tu co vi tri index tren mang;
  userDataArr[index].username = editUsername.value;
  userDataArr[index].email = editUseremail.value;
  userDataArr[index].password = editUserpassword.value;
  userDataArr[index].phone = editUserphone.value;
  userDataArr[index].country = editUsercountry.value;

  // Cap nhat dl len localstorage
  localStorage.setItem("user", JSON.stringify(userDataArr));
};

let userModalInfo = (index) => {
  // Lay du lieu tu local storage
  let userDataArr = [...JSON.parse(localStorage.getItem("user"))];

  // Lay dl user tu vi tri index
  let { username, email, password, phone, country } = userDataArr[index];

  // Cap nhat dl user len modal
  editUsername.value = username;
  editUseremail.value = email;
  editUserpassword.value = password;
  editUserphone.value = phone;
  editUsercountry.value = country;

  editUserBtn.setAttribute("data-index", index);
};

// Goi ham
showUser();

// Lang nghe su kien
addUserBtn.addEventListener("click", (e) => {
  addUser(e);
});

showPassBtn.addEventListener("click", function () {
  // Thay doi gia tri type cua editUserpassword input
  let typeInput =
    editUserpassword.getAttribute("type") === "password" ? "text" : "password";
  editUserpassword.setAttribute("type", typeInput);
});

editUserBtn.addEventListener("click", function () {
  // Cap nhat dl
  editUser(this.getAttribute("data-index"));
  // Hien thi lai bang dl user
  showUser();
});
