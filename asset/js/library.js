const libraryTypeSearch = [
  {
    libraryType: "playlist",
    libraryIcon: '<ion-icon class="text-96" name="musical-notes"></ion-icon>',
    libraryHeading: "Tạo playlist đầu tiên của bạn",
    libraryDesc: "Thật dễ dàng, chúng tôi sẽ giúp bạn.",
    libraryBtnContent: "Tạo playlist",
    libraryBtnSrc: "#!",
  },
  {
    libraryType: "podcast",
    libraryIcon: '<ion-icon class="text-96" name="radio"></ion-icon>',
    libraryHeading: "Theo dõi podcast đầu tiên của bạn",
    libraryDesc:
      "Theo dõi podcast bạn yêu thích bằng cách nhấn vào nút theo dõi.",
    libraryBtnContent: "Tìm podcast",
    libraryBtnSrc: "./search-podcast.html",
  },
  {
    libraryType: "singer",
    libraryIcon: '<ion-icon class="text-96" name="accessibility"></ion-icon>',
    libraryHeading: "Theo dõi nghệ sĩ đầu tiên của bạn",
    libraryDesc:
      "Theo dõi nghệ sĩ bạn yêu thích bằng cách nhấn vào nút theo dõi.",
    libraryBtnContent: "Tìm nghệ sĩ",
    libraryBtnSrc: "./search-user.html",
  },
  {
    libraryType: "album",
    libraryIcon: '<ion-icon class="text-96" name="albums"></ion-icon>',
    libraryHeading: "Theo dõi album đầu tiên của bạn",
    libraryDesc: "Lưu album bằng cách nhấn vào biểu tượng trái tim.",
    libraryBtnContent: "Tìm album",
    libraryBtnSrc: "./search-user.html",
  },
];

function showLibraryContent(content) {
  const libraryIcon = document.querySelector(".library-icon");
  const libraryHeading = document.querySelector(".library-heading");
  const libraryDesc = document.querySelector(".library-desc");
  const libraryBtn = document.querySelector(".library-btn");

  libraryIcon.innerHTML = content.libraryIcon;
  libraryHeading.innerText = content.libraryHeading;
  libraryDesc.innerText = content.libraryDesc;
  libraryBtn.innerText = content.libraryBtnContent;
  libraryBtn.setAttribute("href", content.libraryBtnSrc);
}

showLibraryContent(libraryTypeSearch[0]);

const libraryItems = document.querySelectorAll(".library-item");

libraryItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // remove active background
    libraryItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    // for show data when choose type
    libraryTypeSearch.forEach((type) => {
      if (e.target.getAttribute("data-type") == type.libraryType) {
        showLibraryContent(type);
      }
    });
  });
});
