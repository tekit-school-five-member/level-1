/**
 * 목표
 * 1. 선택된 element에 active 클래스 추가
 * 2. 선택되지 않은 element는 active클래스 제거
 */

const clickPanel = document.querySelectorAll('.panel');

function cyclePanelArray() {
  clickPanel.forEach((item) => item.addEventListener('click', clickHandler));
}

function clickHandler(event) {
  console.log(event.target);

  if (
    event.target.tagName.startsWith('H') ||
    event.target.classList.contains('active')
  ) {
    return;
    // 이미 'active' 클래스가 추가된 요소를 클릭한 경우 추가적인 동작을 방지하기 위해 함수를 종료
  }
  removeClassList();

  addClassList(event.target);
  //
}

function addClassList(node) {
  node.classList.add('active');
}

function removeClassList() {
  clickPanel.forEach((item) => item.classList.remove('active'));
}

cyclePanelArray();
