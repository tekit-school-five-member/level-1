/**
 * 목표
 * 1. 선택된 element에 active 클래스 추가
 * 2. 선택되지 않은 element는 active클래스 제거
 */

const photoAlbum = document.querySelector(".container");

function changePanel(e) {
  e.preventDefault();

  const panelList = [...photoAlbum.children];
  const panel = e.target.closest("div");

  toggleClass(panelList, panel, "active");
}

const toggleClass = (arr, el, className) => {
  arr.forEach((el) => el.classList.remove(className));
  el.classList.add(className);
};

photoAlbum.addEventListener("click", changePanel);
