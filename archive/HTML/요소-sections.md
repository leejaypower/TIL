# HTML 요소 - Sections

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Document Title</title>
  </head>
  <body>
    <!-- body 요소는 콘텐츠를 담는 HTML 요소 -->

    <!-- heading 요소 : 제목 -->
    <!-- h1, h2, h3, h4, h5, h6 -->
    <h1>HTML Section 요소</h1>
    <p>안녕하세요, 이 HTML문서는 Sections 콘텐츠를 설명하기 위한 문서입니다.</p>

    <h2>HTML Article 요소</h2>
    <p>콘텐츠1</p>

    <h2>HTML Aside 요소</h2>
    <p>콘텐츠2</p>

    <!-- section 요소 & article -->
    <!-- header, group -->
    <article>
      <header>
        <hgroup>
          <h1>HTML Section 요소</h1>
          <h2>누구나 쉽게 배우는</h2>
        <hgroup>
        <p>
          안녕하세요, 이 HTML문서는 Sections 콘텐츠를 설명하기 위한 문서입니다.
        </p>
      </header>

      <section>
        <h2>HTML Article 요소</h2>
        <p>콘텐츠1</p>
      </section>

      <section>
        <h2>HTML Aside 요소</h2>
        <p>콘텐츠2</p>
      </section>
    </article>

    <h1>HTML Grouping 요소</h1>
  </body>
</html>
```

- 콘텐츠의 대부분을 body 요소 내부가 차지하는 것이 일반적이므로 용량이나 시맨틱에 대해 신경쓰는 것이 좋다.

- heading 요소를 잘 활용하면 페이지 전체의 outline을 그리는데 용이하다.

- heading 요소를 사용하면 <b>제목을 포함하는 익명 영역(anonymous section)</b>을 생성한다.

  ```html
  <!-- HTML Section 요소 -->
  <!-- |- HTML Article 요소 -->
  <!-- |- HTML Aside 요소 -->
  ```

<br>

- 접근성 기기를 사용하는 경우에는 heading 단위로 페이지를 옮길 수 있다.

<br>

- <b>Section, Article 요소</b>는 내용 관계를 형성 할 때, 특정 구역을 명확하게 분리시키기 위해 사용한다.

- 프론트엔드 프레임워크를 사용하면 파일이 자잘히 분리되어있기 때문에 <b>heading이 어떤 단계에 있는지 알기가 어려운 경우</b>가 있다.

  - <b>이럴 때 section과 article 요소를 활용</b>할 수 있다.

  - HTML section 요소를 article로 묶고, 그 안에서 section으로 잘게 쪼개주면 내부에서도 콘텐츠 관심사를 하나로 묶을 수 있다.
  - 이는 익<b>명으로 작성했던 heading의 관계를 명시적으로 작성하는 것</b>이다.

  <br>

- <u>어떤 경우에 section을 쓰고 어떤 경우에 article을 써야할까?</u>

  - <b>콘텐츠의 독립성</b>의 기준을 보면 된다.

  - <b>article 요소는 내부의 콘텐츠를 떼어서 다른 사이트에 가져가도 어색함이 없어야 한다.</b><br>예로 페이스북의 하나의 타임라인 아이템이 있다.
  - <b>section 요소는 콘텐츠가 다른 콘텐츠와 연관이 있을 때 사용하게 된다.</b>

<br>

- <b>article 요소 & section 요소를 사용할 때 heading 요소를 함께 사용하는 것이 강력히 권장된다.</b>
  - heading을 넣음으로써 비로소 그 section이 완성되기 때문이다.

<br>

- <b>header</b>는 특정한 콘텐츠의 시작부분을 명시적으로 나타낼 때 사용하는 요소이다.

- <b>hgroup</b>은 heading 요소를 그룹화 하여 제목 - 부제목 관계를 만드는 요소이다.

  - 부제목 목적으로 사용했는데 의도한 것과 다르게 계층을 가지게 되는 이슈가 생길 때와 같은 경우에 사용한다.

  - hgroup 요소 내부에서 계층 구조를 가지지만, 외부에서는 가장 높은 h요소의 계층만 가져간다.

  ```html
      <!-- header, group -->
    <article>
      <header>
        <hgroup>
          <h1>HTML Section 요소</h1>
          <h2>누구나 쉽게 배우는</h2>
        <hgroup>
        <p>
          안녕하세요, 이 HTML문서는 Sections 콘텐츠를 설명하기 위한 문서입니다.
        </p>
      </header>
  ```

  - 제목과 부제목을 좀 더 명확히 그룹화할 수 있다.

<br>

```html
<article>
  <!-- 콘텐츠 -->
  <footer>
    <!-- copyright, 작성자 정보, 작성일 등 -->
    <p>
      <cite> 출처: <a href="주소">위키백과</a>
    </p>
  </footer>
  <!-- address 요소 : contact information -->
  <address>
  <p>
    작성자: <a href="mailto:devjayloper@gmail.com">제이</a>
  </p>
  <p>
    서울시 마포구 백범로 ....
  </p>
  </address>
  <!-- publication information -->
  <p>
    <time>2022-02-24</time>
  </p>
</article>
```

- <b>footer 요소</b>는 콘텐츠의 마무리를 나타내는 요소이다.
- address에는 컨택트 정보만을 담을 때 사용한다는 것을 유의해야한다.

<br>

```html
    <article>
      <nav>
        <a href="#html-section">HTML Section 요소</a>
        <a href="#html-article">HTML Article 요소</a>
      </nav>

      <header>
        <hgroup>
          <h1>HTML Section 요소</h1>
          <h2>누구나 쉽게 배우는</h2>
        <hgroup>
        <p>
          안녕하세요, 이 HTML문서는 Sections 콘텐츠를 설명하기 위한 문서입니다.
        </p>
      </header>

      <section>
        <h2>HTML Article 요소</h2>
        <p>콘텐츠1</p>
      </section>

      <section>
        <h2>HTML Aside 요소</h2>
        <p>콘텐츠2</p>
      </section>

    <!-- aside: 핵심 콘텐츠와 관련은 있지만 콘텐츠 전체 흐름과는 크게 관련이 없는 콘텐츠 -->
    <!-- 콘텐츠 추천, 광고 -->
      <aside>
        <iframe src="ad.html"></iframe>
      </aside>
    </article>
```

- <b>nav 요소</b>는 페이지 네비게이션 콘텐츠를 담는 요소이다.

- <b>aside 요소</b>는 페이지 콘텐츠와 연관성은 있지만, 해당 콘텐츠와는 별개로 간주될 수 있는 콘텐츠를 의미한다.
  - 이런 섹션은 페이지 콘텐츠의 사이드바로 사용하거나 figure 요소와 함께 사용하기도 한다.

<br>

header, footer, nav, aside 요소는 각각 용법에 따라 적극적으로 활용하는 것이 좋고, div는 최후의 방법으로 사용해야 한다!

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
