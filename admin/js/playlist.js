// Variables
let showPlaylistBtn = document.querySelector("#showPlaylistBtn");
let createPlaylistBtn = document.querySelector("#createPlaylistBtn");
let playlistName = document.querySelector("#playlistName");
let playlistGenre = document.querySelector("#playlistGenre");
let playlistDesc = document.querySelector("#playlistDesc");

let playlistTable = document.querySelector("#playlistTable tbody");

let modalBody = document.querySelector("#playlistModal .modal-body");

// Functions
const getData = (type) => {
  let data = localStorage.getItem(type);
  let dataObj = data != null ? JSON.parse(data) : [];

  return dataObj;
};

const resetInput = () => {
  playlistName.value = "";
  playlistGenre.selectedIndex = 0;
  playlistDesc.value = "";
};

const showPlaylist = (playlistArr) => {
  playlistTable.innerHTML = "";

  if (playlistArr.length > 0) {
    playlistArr.forEach((playlist, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${playlist.name}</td>
        <td>${playlist.genre}</td>
        <td>${playlist.desc}</td>
        <td>${playlist.songs.length}</td>
      `;
      playlistTable.appendChild(tr);
    });
  } else {
    playlistTable.innerHTML = `
        <tr>
            <td colspan="5">
                <p class="fs-4 mb-0 text-white">No playlists datas</p>
            </td>
        </tr>
    `;
  }
};

const showPlaylistModal = (genre) => {
  modalBody.innerHTML = "";
  let modal = new bootstrap.Modal(document.querySelector("#playlistModal"));
  modal.show();

  let dataPlaylistSongs = dataSongs.filter((song) => song.genre == genre);

  dataPlaylistSongs.forEach(({ name, artist }, index) => {
    let modalBodySong = document.createElement("div");
    modalBodySong.innerHTML = `
        <input type="checkbox" id="${index}">
        <label for="${index}">
            <span>${name} - </span>
            <span>${artist}</span>
        </label>
      `;
    modalBody.appendChild(modalBodySong);
  });
};

const createNewPlaylist = (playlistList) => {
  let playlistObj = {
    name: playlistName.value,
    desc: playlistDesc.value,
    genre: playlistGenre.value,
    songs: playlistList,
  };

  dataPlaylists.push(playlistObj);
  localStorage.setItem("playlist", JSON.stringify(dataPlaylists));
  dataPlaylists = getData("playlist");

  resetInput();
  showPlaylist(dataPlaylists);
};

// Get data
let dataSongs = getData("songs");
let dataPlaylists = getData("playlist");

// Call function
showPlaylist(dataPlaylists);

// DOM events
showPlaylistBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!playlistName.value || !playlistDesc.value) {
    alert("Please enter enough information");
    playlistName.focus();
  } else {
    showPlaylistModal(playlistGenre.value);
  }
});

createPlaylistBtn.addEventListener("click", () => {
  let dataPlaylistSongs = dataSongs.filter(
    (song) => song.genre == playlistGenre.value
  );
  let playlistSongsChoose = [];
  document
    .querySelectorAll("#playlistModal .modal-body div input")
    .forEach((item) => {
      item.checked && playlistSongsChoose.push(dataPlaylistSongs[`${item.id}`]);
    });

  createNewPlaylist(playlistSongsChoose);
});
