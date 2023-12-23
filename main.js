/**
 * 목표
 * 1. 선택된 element에 active 클래스 추가
 * 2. 선택되지 않은 element는 active클래스 제거
 */

const container = document.querySelector(".container");
const panelList = Array.from(container.children);

function handleClick(e) {
  const target = e.target;
  const panel = target.closest(".panel");

  // forEach 사용하여 active 클래스 제거하기
  /*  panelList.forEach((li) => {
    li.classList.remove("active");
  });*/

  // for of 문 사용하여 active 클래스 제거하기
  for (let li of panelList) {
    li.classList.remove("active");
  }

  // 선택한 노드에 active 클래스 추가하기
  if (!panel) return;
  panel.classList.add("active");
}
container.addEventListener("click", handleClick);
