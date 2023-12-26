/**
 * 목표
 * 1. 선택된 element에 active 클래스 추가
 * 2. 선택되지 않은 element는 active클래스 제거
 */

// 변수 지정
const container = document.querySelector(".container");

// 이벤트 함수
function handleClick(e) {
  const panel = e.target.closest(".panel"); // container태그 안에 div class panel을 불러온 변수 지정
  if (!panel) return; // ing이외에 클릭시 값 반환이 없다.
  const list = Array.from(container.children); // container태그 안에 자식요소를 불러오기 위해 .children을 사용했다.
  // const list = [...container.children]; // Array.from대신에 전개연산자로 써도 된다. (그러면 이거가 배열로 쓰여져서 대신에 써도 되는거 같은데 map도 써도 되는지..)
  removeClass(list);
  addClass(panel);
}

// removeClass함수
function removeClass(elem) {
  elem.forEach((panel) => panel.classList.remove("active")); // container.children이 유사배열이기 때문에 forEach를 사용해서 remove를 만들었다.
}

// addClass함수
function addClass(elem) {
  elem.classList.add("active");
}

// 이벤트 클릭
container.addEventListener("click", handleClick);
