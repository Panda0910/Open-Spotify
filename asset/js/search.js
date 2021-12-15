const searchContent = [
  {
    dataSearch: "podcast",
    searchItemBg: "#27856A",
    searchImgSrc: "../asset/img/search/podcast.jfif",
  },
  {
    dataSearch: "dành cho bạn",
    searchItemBg: "#1E3264",
    searchImgSrc: "../asset/img/search/danh-cho-ban.png",
  },
  {
    dataSearch: "bảng xếp hạng",
    searchItemBg: "#8D67AB",
    searchImgSrc: "../asset/img/search/bang-xep-hang.jpg",
  },
  {
    dataSearch: "mới phát hành",
    searchItemBg: "#E8115B",
    searchImgSrc: "../asset/img/search/moi-phat-hanh.jfif",
  },
  {
    dataSearch: "khám phá",
    searchItemBg: "#8D67AB",
    searchImgSrc: "../asset/img/search/kham-pha.jpeg",
  },
  {
    dataSearch: "concerts",
    searchItemBg: "#1E3264",
    searchImgSrc: "../asset/img/search/concerts.jfif",
  },
  {
    dataSearch: "nhạc việt",
    searchItemBg: "#C3F0C8",
    searchImgSrc: "../asset/img/search/nhac-viet.jpeg",
  },
  {
    dataSearch: "k-pop",
    searchItemBg: "#148A08",
    searchImgSrc: "../asset/img/search/k-pop.jfif",
  },
  {
    dataSearch: "pop",
    searchItemBg: "#8D67AB",
    searchImgSrc: "../asset/img/search/pop.jfif",
  },
  {
    dataSearch: "thư giãn",
    searchItemBg: "#477D95",
    searchImgSrc: "../asset/img/search/thu-gian.jfif",
  },
  {
    dataSearch: "tâm trạng",
    searchItemBg: "#8D67AB",
    searchImgSrc: "../asset/img/search/tam-trang.jfif",
  },
  {
    dataSearch: "không gian lãng mạng",
    searchItemBg: "#8C1932",
    searchImgSrc: "../asset/img/search/khong-gian-lang-man.jfif",
  },
  {
    dataSearch: "hip hop",
    searchItemBg: "#BA5D07",
    searchImgSrc: "../asset/img/search/hip-hop.jfif",
  },
  {
    dataSearch: "nhạc điện tử",
    searchItemBg: "#DC148C",
    searchImgSrc: "../asset/img/search/nhac-dien-tu.jfif",
  },
  {
    dataSearch: "sức khỏe",
    searchItemBg: "#A56752",
    searchImgSrc: "../asset/img/search/suc-khoe.png",
  },
  {
    dataSearch: "pride",
    searchItemBg: "#509BF5",
    searchImgSrc: "../asset/img/search/pride.jpeg",
  },
  {
    dataSearch: "equal",
    searchItemBg: "#148A08",
    searchImgSrc: "../asset/img/search/equal.jfif",
  },
  {
    dataSearch: "indie",
    searchItemBg: "#608108",
    searchImgSrc: "../asset/img/search/indie.jfif",
  },
  {
    dataSearch: "ở nhà",
    searchItemBg: "#477D95",
    searchImgSrc: "../asset/img/search/o-nha.jfif",
  },
  {
    dataSearch: "chơi game",
    searchItemBg: "#E8115B",
    searchImgSrc: "../asset/img/search/choi-game.jfif",
  },
  {
    dataSearch: "alternative",
    searchItemBg: "#B49BC8",
    searchImgSrc: "../asset/img/search/alternative.jpeg",
  },
  {
    dataSearch: "ngủ ngon",
    searchItemBg: "#1E3264",
    searchImgSrc: "../asset/img/search/ngu-ngon.jfif",
  },
  {
    dataSearch: "nhạc không lời",
    searchItemBg: "#477D95",
    searchImgSrc: "../asset/img/search/nhac-khong-loi.jfif",
  },
  {
    dataSearch: "tập trung",
    searchItemBg: "#503750",
    searchImgSrc: "../asset/img/search/tap-trung.jfif",
  },
  {
    dataSearch: "radar",
    searchItemBg: "#F037A5",
    searchImgSrc: "../asset/img/search/radar.png",
  },
  {
    dataSearch: "tập luyện",
    searchItemBg: "#777777",
    searchImgSrc: "../asset/img/search/tap-luyen.jfif",
  },
  {
    dataSearch: "league of legends",
    searchItemBg: "#148A08",
    searchImgSrc: "../asset/img/search/league-of-legends.jfif",
  },
  {
    dataSearch: "fresh finds",
    searchItemBg: "#9CF0E1",
    searchImgSrc: "../asset/img/search/fresh-finds.jpeg",
  },
  {
    dataSearch: "rnB",
    searchItemBg: "#DC148C",
    searchImgSrc: "../asset/img/search/rnb.jfif",
  },
  {
    dataSearch: "rock",
    searchItemBg: "#E61E32",
    searchImgSrc: "../asset/img/search/rock.jfif",
  },
  {
    dataSearch: "chuyên gia định hướng",
    searchItemBg: "#EB1E32",
    searchImgSrc: "../asset/img/search/chuyen-gia-dinh-huong.jpeg",
  },
  {
    dataSearch: "tiệc tùng",
    searchItemBg: "#AF2896",
    searchImgSrc: "../asset/img/search/tiec-tung.jfif",
  },
  {
    dataSearch: "jazz",
    searchItemBg: "#1E3264",
    searchImgSrc: "../asset/img/search/jazz.jfif",
  },
  {
    dataSearch: "thịnh hành",
    searchItemBg: "#F59B23",
    searchImgSrc: "../asset/img/search/thinh-hanh.jpeg",
  },
  {
    dataSearch: "dân gian & acoustic",
    searchItemBg: "#1E3264",
    searchImgSrc: "../asset/img/search/dan-gian-va-acoustics.jfif",
  },
  {
    dataSearch: "thập niên",
    searchItemBg: "#BA5D07",
    searchImgSrc: "../asset/img/search/thap-nien.jfif",
  },
  {
    dataSearch: "cổ điển",
    searchItemBg: "#8D67AB",
    searchImgSrc: "../asset/img/search/co-dien.jfif",
  },
  {
    dataSearch: "đồng quê",
    searchItemBg: "#E13300",
    searchImgSrc: "../asset/img/search/dong-que.jfif",
  },
  {
    dataSearch: "nghỉ lễ vui vẻ",
    searchItemBg: "#8C1932",
    searchImgSrc: "../asset/img/search/nghi-le-vui-ve.jpeg",
  },
  {
    dataSearch: "anime",
    searchItemBg: "#8D67AB",
    searchImgSrc: "../asset/img/search/anime.jpeg",
  },
  {
    dataSearch: "tv & điện ảnh",
    searchItemBg: "#AF2896",
    searchImgSrc: "../asset/img/search/tv-va-dien-anh.jfif",
  },
  {
    dataSearch: "du lịch",
    searchItemBg: "#2D46B9",
    searchImgSrc: "../asset/img/search/du-lich.png",
  },
  {
    dataSearch: "karaoke",
    searchItemBg: "#FF6437",
    searchImgSrc: "../asset/img/search/karaoke.jpeg",
  },
  {
    dataSearch: "nấu nướng & ăn uống",
    searchItemBg: "#BA5D07",
    searchImgSrc: "../asset/img/search/nau-an-va-an-uong.jfif",
  },
  {
    dataSearch: "higher ground",
    searchItemBg: "#A0C3D2",
    searchImgSrc: "../asset/img/search/higher-ground.jfif",
  },
  {
    dataSearch: "bollywood",
    searchItemBg: "#FF4632",
    searchImgSrc: "../asset/img/search/bollywood.jpeg",
  },
  {
    dataSearch: "soul",
    searchItemBg: "#DC148C",
    searchImgSrc: "../asset/img/search/soul.jfif",
  },
  {
    dataSearch: "metal",
    searchItemBg: "#777777",
    searchImgSrc: "../asset/img/search/metal.jfif",
  },
  {
    dataSearch: "caribe",
    searchItemBg: "#0D73EC",
    searchImgSrc: "../asset/img/search/caribe.jfif",
  },
  {
    dataSearch: "la-tinh",
    searchItemBg: "#E1118B",
    searchImgSrc: "../asset/img/search/la-tinh.jfif",
  },
  {
    dataSearch: "blue",
    searchItemBg: "#1E3264",
    searchImgSrc: "../asset/img/search/blues.jfif",
  },
  {
    dataSearch: "punk",
    searchItemBg: "#1E3264",
    searchImgSrc: "../asset/img/search/punk.jfif",
  },
  {
    dataSearch: "funk",
    searchItemBg: "#E61E32",
    searchImgSrc: "../asset/img/search/funk.jfif",
  },
  {
    dataSearch: "trẻ em và gia đình",
    searchItemBg: "#8D67AB",
    searchImgSrc: "../asset/img/search/tre-em-va-gia-dinh.png",
  },
  {
    dataSearch: "nhạc sĩ sáng tác",
    searchItemBg: "#8C1932",
    searchImgSrc: "../asset/img/search/nhac-si-sang-tac.jfif",
  },
  {
    dataSearch: "ambient",
    searchItemBg: "#477D95",
    searchImgSrc: "../asset/img/search/ambient.png",
  },
  {
    dataSearch: "stop asian hate",
    searchItemBg: "#1E3264",
    searchImgSrc: "../asset/img/search/stop-asian-hate.jfif",
  },
  {
    dataSearch: "frequency",
    searchItemBg: "#0D73EC",
    searchImgSrc: "../asset/img/search/frequency.png",
  },
  {
    dataSearch: "Christian & Gospel",
    searchItemBg: "#509BF5",
    searchImgSrc: "../asset/img/search/chistian.jpeg",
  },
];

const searchContentList = document.querySelector(".search-content_list");

searchContent.forEach((content) => {
  // create search box
  const searchBox = document.createElement("a");
  searchBox.setAttribute("href", "./search-podcast.html");
  searchBox.classList.add("search-box");
  searchBox.style.backgroundColor = `${content.searchItemBg}`;

  searchBox.innerHTML = `
        <h5 class="search-box_heading text-24-700 text-capitalize">
            ${content.dataSearch}
        </h5>
        <div class="search-box_img">
            <img src="${content.searchImgSrc}" alt="" />
        </div>
    `;

  searchContentList.appendChild(searchBox);
});
