# HTML 요소 - Interactive Content

Interactive content는 기존에 Javascript를 활용해 구현해야했던 컴포넌트를 HTML 기본 요소로 제공하는 요소들이다.

비교적 최신 스펙이 많아 브라우저가 지원하지 않는 경우가 많기 때문에 브라우저 지원율을 꼭 살펴보아야 한다.

브라우저 지원율을 확인할 때는 <a href="https://caniuse.com">caniuse.com</a>을 참고하면 좋다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Interactive content</title>
  </head>
  <body>
    <!-- Interactive content -->
    <!-- details, summary -->
    <style>
      details > summary {
        transition: color 1s;
        color: black;
      }
      details[open] > summary {
        color: red;
      }
    </style>
    <details>
      <summary>Loading...</summary>
      <p>이미지 다운로드 중...</p>
      <p>사운드 다운로드 완료</p>
    </details>

    <!-- dialog -->
    <button id="dialog-button" type="button">Dialog 열기</button>
    <dialog open>
      <h1>Add to cart</h1>
      <p>상품을 장바구니에 담으시겠습니까?</p>
    </dialog>

    <script>
      const button = document.querySelector("#dialog-button");
      const closeBtn = document.querySelector("#close-button");
      const dialog = document.querySelector("dialog");

      button.addEventListener("click", (event) => dialog.showModal();)

      closeBtn.addEventListener("click", (event) => dialog.close();)
    </script>
  </body>
</html>
```

- <b>details</b>요소는 특정한 제목이 있고, 그 제목에 대한 상세 내용을 펼쳤다 접었다 하는 UI(아코디언 형태)에서 많이 활용된다.

  - 기본 상태는 닫힌 상태이며, open 속성을 넣어주면 열린상태로 보여준다.

  <br>

- <b>summary 요소</b>는 details 요소 내부에서 요약본을 보여주기 위해 사용하는 요소이다.</br>

- 위의 예시에서는 Loading 중이라는 것을 요약해서 보여주고, 상세 열기를 열어 보면 실제 progress를 보여줌으로써 좀 더 명시적으로 실제 상태를 알 수 있게 한다.

- <b>dialog 요소</b>는 브라우저 내부에서 노출시키는 dialog를 나타낼 때 사용한다.

  - dialog는 유저가 버튼을 눌렀을 때 열리고, 다시 눌렀을 때 닫히는 어플리케이션 내에서 박스나 모달이 노출되는 것을 말한다.

  - dialog는 기본적으로 노출되지 않기 때문에 open이라는 속성을 넣은 상태에만 보여진다.

  - <u>Javascript를 함께 사용해야한다.</u>

  - dialog는 현재 지원율이 낮다는 것을 유의!

  - 만약 dialog를 사용할 경우 미지원 브라우저를 위한 fallback을 사용한다.

  ```html

  ```

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
