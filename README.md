# level-1

프론트엔드스쿨 5조 level 1

<br />

## 🖥️ 프로젝트 소개
* 이 문제는 https://github.com/bradtraversy/50projects50days?tab=readme-ov-file 를 참고해 만들었습니다.

<br>

* [노션 링크 바로가기](https://www.notion.so/Level-1-74f926ef86434afa88595fdb7309f5c2)

* [데모 보기](https://50projects50days.com/projects/expanding-cards/)

* 개발 기간: 2023.12.20(목) ~ 2023.12.20(목)

<br />

## 🎯 목표

- [X] 선택된 element에 active 클래스 추가

```js
elem.classList.add("active");
```

<br>

- [X] 선택되지 않은 element는 active클래스 제거

```js
elem.classList.remove("active");
```

<br />

## 📌 기능 구현

- **변수 선언**
  ```js
  const container = document.querySelector(".container");
  const ACTIVE_CLASS = "active";
  ```
<br />

- **클래스 추가 및 제거 함수**
  ```js
  function toggleClass(elem, className) {
    elem.parentElement
      .querySelectorAll(`.${className}`)
      .forEach((child) => child.classList.remove(className));
    elem.classList.add(className);
  }
  ```
  - `elem`의 부모요소 내에서, `className` 클래스를 가진 모든 자식 요소들에게 해당 클래스를 제거
  - 타겟인 `elem`에만 클래스 추가

<br />

- **click 이벤트 함수**
  ```js
  function handleClick(e, targetElem) {
    e.preventDefault();
    const clickedElem = e.target.closest(targetElem);
    if (!clickedElem) return;

    toggleClass(clickedElem, ACTIVE_CLASS);
  }

  // 이벤트리스너 등록
  container.addEventListener("click", (e) => handleClick (e, '.panel'));
  ```