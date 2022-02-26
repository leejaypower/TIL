# HTML 요소 - Grouping content

Grouping content는 무언가를 grouping하는 목적으로 쓰인다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Grouping content</title>
  </head>
  <body>
    <!-- HTML P 요소, Paragraph -->
    <h1>HTML Grouping Content</h1>
    <h2>HTML P요소</h2>
    <p>HTML의 p요소는 Paragraph를 나타내는 요소이다.</p>

    <!-- HTML Blockquote 요소 -->
    <blockquote>
      <p>
        HTML은 문서를 표현하기 위해 만들어진 언어지만, 현재는 웹
        어플리케이션에도 활용됩니다.
        <cite>MDN</cite>
      </p>
    </blockquote>

    <!-- ol, ul, menu, li -->
    <!-- ol, ul -->
    <!-- ol: ordered list, 순서있는 목록 -->
    <!-- ul: unordered list, 순서없는 목록 -->
    <!-- li: list item -->
    <ol>
      <li>HTML Grouping Content</li>
      <li>HTML Text-level semantics</li>
    </ol>

    <h1>HTML의 요소들</h1>
    <ul>
      <li>span</li>
      <li>div</li>
    </ul>

    <!-- menu 요소 -->
    <menu>
      <li><button type="button">굵게하기</button></li>
      <li><button type="button">밑줄</button></li>
    </menu>

    <!-- dl, dt, dd 요소 -->
    <!-- dt: 정의 대상, dd:정의 설명 -->
    <dl>
      <div>
        <dt>마늘</dt>
        <dd>알싸한 맛이 나는 채소이다.</dd>
        <dd>한국인들이 많이 찾는 채소 중 하나이다.</dd>
      </div>
      <div>
        <dt>상추</dt>
        <dd>고기를 먹을 때 자주 곁들여 먹는 채소이다.</dd>
      </div>
    </dl>

    <!-- figure, figcaption -->
    <p>우주에 관한 내용 ~</p>
    <figure>
      <img src="nasa.jpg" alt="" />
      <figcaption>
        NASA는 미항공우주연구소로 우주 관련 연구를 하는 기관이다.
      </figcaption>
    </figure>
    <p>NASA에 관한 내용 ~</p>

    <!-- main 요소 -->
    <main>
      <!-- 메인 콘텐츠 -->
    </main>
    <!-- hidden 속성이 들어간 main은 여러개 존재 가능 -->
    <main hidden></main>
    <main hidden></main>
    <main hidden></main>

    <!-- div 요소 -->
    <div></div>
  </body>
</html>
```

- <b>단순한 문장이나 텍스트를 나타낼 때는 언제나 p요소를 활용</b>할 수 있다.

- p 요소 아래에 p 요소가 들어갈 수는 없다.

- <b>Blockquote 요소</b>는 block quotation의 약자로 외부에서 인용구를 가져올 때 블록 단위로 가져오겠다는 것을 의미한다.

- <b>ol 요소는</b> 순서가 있어서 순서대로 무언가를 해야되는 (조립과정, 강의커리큘럼 등) 상황에서 활용된다.

- <b>li 요소</b>는 list item의 약자로, ol, ul, menu 아래에서 리스트를 표현할 때 사용된다.

  - ol, ul 요소의 자식 요소는 항상 li요소여야 한다.

  <br>

- <b>menu 요소</b>는 버튼 여러개를 가지고 있는 목록을 나타낼 때 명시적으로 이것이 메뉴라는 것을 나타낼 때 사용한다.

  - menu 요소 내에 버튼으로 <b>클릭 가능한 버튼</b>이 있어야 한다.

  - <u>firefox에서만 지원하고 있다.</u>

  <br>

- <b>dl 요소</b>는 definition list로 정의목록이라는 의미로, 특정한 정의를 하고자 하는 대상과 그 설명을 list로 나타내는 것이다.

  - <b>dt 요소는 정의 대상</b> <b>dd 요소</b>는 정의 설명이다.

  - dd 요소와 dt 요소는 단독으로 사용할 수 없으며 항상 dl 요소와 함께해야 한다.

  - 예외적으로 dl 요소 내에서 특정 요소들을 그룹화해야하는 경우에 div 요소를 활용할 수 있다.<br>
    하나의 dl요소에 여러 개의 그룹이 있는 경우 div로 감싸면 CSS 작업 때 용이하다.

<br>

- <b>figure 요소</b>는 콘텐츠의 부연설명을 하는 콘텐츠를 담을 때 사용한다.

- <b>figcaption 요소</b>는 콘텐츠의 부연설명을 하는 콘텐츠 자체를 작성할 때 사용하는 요소이다.

- <b>main 요소</b>는 해당 애플리케이션이나 페이지에서 가장 중요한 콘텐츠를 담는 컨테이너 역할을 한다.<br>
  <b>한 페이지 내에서 한 번만 사용 가능하다.</b>

  - 예외적으로 hidden 속성 등을 활용하여 main 요소를 감춘 경우에는 여러번 사용 가능하다.<br><b>활성화 되어있는 main 요소는 언제나 하나만 존재해야 한다.</b>

  <br>

- <b>div 요소</b>는 <u>의미 없이</u> CSS 등의 목적으로 여러 요소를 그루핑할 때 사용한다.<br>
  요소 중첩을 활용해야할 때 많이 사용된다.<br>
  <u>div 요소는 다른 요소를 사용할 수 없을 때 최후의 수단으로만 활용한다.</u>

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
