/**
 * 목표
 * 1. 선택된 element에 active 클래스 추가
 * 2. 선택되지 않은 element는 active클래스 제거
 */

const container = document.querySelector(".container");
const div = container.querySelectorAll("div");

function handleClick(e) {
  e.preventDefault();
  div.classList.toggle("active");
}

container.addEventListener("click", handleClick);
