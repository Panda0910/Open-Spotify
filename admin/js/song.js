// Khai bao bien
let songName = document.querySelector("#songName");
let songArtist = document.querySelector("#songArtist");
let songGenre = document.querySelector("#songGenre");
let editSongname = document.querySelector("#editSongname");
let editSongartist = document.querySelector("#editSongartist");
let editSonggenre = document.querySelector("#editSonggenre");

let addSongBtn = document.querySelector("#addSongBtn");
let editSongBtn = document.querySelector("#editSongBtn");

let songTable = document.querySelector("#songTable tbody");

// Khai bao ham
let getData = (item) => {
  let data = localStorage.getItem(item);
  let dataObj = data != null ? JSON.parse(data) : [];

  return dataObj;
};

let showSong = () => {
  songTable.innerHTML = "";

  // Lay dl tu local storage
  let songDataArr = getData("songs");

  // Hien thi du lien ra bang
  if (songDataArr.length > 0) {
    songDataArr.forEach(({ name, artist, genre }, index) => {
      let songTableTr = document.createElement("tr");
      songTableTr.innerHTML = `
              <td>${index + 1}</td>
              <td>${name}</td>
              <td>${artist}</td>
              <td>${genre}</td>
              <td>
                  <button class="btn btn-secondary" onclick="songModalInfo(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <ion-icon name="create"></ion-icon>
                  </button>
                  <button class="btn btn-danger" onclick="delSong(${index})">
                      <ion-icon name="trash-bin"></ion-icon>
                  </button>
              </td>
          `;
      songTable.appendChild(songTableTr);
    });
  } else {
    songTable.innerHTML = `
        <tr>
            <td colspan="5">
                <p class="fs-4 mb-0 text-white">No song datas</p>
            </td>
        </tr>
      `;
  }
};

let addSong = (e) => {
  e.preventDefault();
  // Lay dl tu local storage
  let songDataArr = getData("songs");

  if (songName.value && songArtist.value && songGenre.value) {
    // Them dl vao mang
    songDataArr.push({
      name: songName.value,
      artist: songArtist.value,
      genre: songGenre.value,
    });

    // Cap nhat dl len localstorage
    localStorage.setItem("songs", JSON.stringify(songDataArr));

    // Lam moi phan nhap thong tin
    songName.value = "";
    songArtist.value = "";
    songGenre.selectedIndex = 0;

    // Hien thi lai bang dl song
    showSong();
  } else {
    alert("Please enter enough information");
    songName.focus();
  }
};

let delSong = (index) => {
  // Lay du lieu tu local storage
  let songDataArr = [...JSON.parse(localStorage.getItem("songs"))];

  // Xoa dl va cap nhat lai len localstorage
  songDataArr.splice(index, 1);
  localStorage.setItem("songs", JSON.stringify(songDataArr));

  // Hien thi lai bang dl song
  showSong();
};

let editSong = (index) => {
  // Lay du lieu tu local storage
  let songDataArr = [...JSON.parse(localStorage.getItem("songs"))];

  // Cap nhat dl user len phan tu co vi tri index tren mang;
  songDataArr[index].name = editSongname.value;
  songDataArr[index].artist = editSongartist.value;
  songDataArr[index].genre = editSonggenre.value;

  // Cap nhat dl len localstorage
  localStorage.setItem("songs", JSON.stringify(songDataArr));
};

let songModalInfo = (index) => {
  // Lay du lieu tu local storage
  let songDataArr = [...JSON.parse(localStorage.getItem("songs"))];

  // Lay dl user tu vi tri index
  let { name, artist, genre } = songDataArr[index];

  // Cap nhat dl user len modal
  editSongname.value = name;
  editSongartist.value = artist;
  editSonggenre.value = genre;

  // Lang nghe su kien
  editSongBtn.addEventListener("click", function () {
    // Cap nhat dl
    editSong(index);
    // Hien thi lai bang dl song
    showSong();
  });
};

// Goi ham
showSong();

// Lang nghe su kien
addSongBtn.addEventListener("click", (e) => {
  addSong(e);
});
