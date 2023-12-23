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
  elem.parentElement
    .querySelectorAll(`.${className}`)
    .forEach((child) => child.classList.remove(className));
  elem.classList.add(className);
}

// click 이벤트 함수
function handleClick(e, targetElem) {
  e.preventDefault();
  const clickedElem = e.target.closest(targetElem);
  if (!clickedElem) return;

  toggleClass(clickedElem, ACTIVE_CLASS);
}

container.addEventListener("click", (e) => handleClick(e, ".panel"));
