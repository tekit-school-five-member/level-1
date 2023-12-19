/**
 * 목표
 * 1. 선택된 element에 active 클래스 추가
 * 2. 선택되지 않은 element는 active클래스 제거
 */

// 변수 선언
const container = document.querySelector(".container");
const ACTIVE_CLASS = "active";

// 클래스 추가 및 제거 함수
function toggleClass(elem, className) {
  const parent = elem.parentElement;
  [...parent.children].forEach((child) => child.classList.remove(className));
  elem.classList.add(className);
}

// click 이벤트 함수
function handleClick(e) {
  e.preventDefault();
  const panel = e.target.closest("div");
  if (!panel) return;

  toggleClass(panel, ACTIVE_CLASS);
}

container.addEventListener("click", handleClick);
