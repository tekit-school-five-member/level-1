/**
 * 목표
 * 1. 선택된 element에 active 클래스 추가
 * 2. 선택되지 않은 element는 active클래스 제거
 */

const clickPanel = document.querySelectorAll('.panel');

function cyclePanelArray() {
  clickPanel.forEach(clickPanelArray);
}

function clickPanelArray(panel) {
  panel.addEventListener('click', clickHandler);
}

function clickHandler(event) {
  removeClassList();
  addClassList(event.target);
}

function addClassList(node) {
  node.classList.add('active');
}

function removeClassList() {
  clickPanel.forEach((item) => item.classList.remove('active'));
}

cyclePanelArray();
