# HTML 요소 - text level semantics

HTML 요소 내에서 텍스트로 취급되는 요소들을 text level semantics라고 한다.

텍스트로 취급된다는 의미는 텍스트 사이에서 이 요소들을 사용하더라도 이 요소들은 텍스트로 취급된다는 것이다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Text-level semantics</title>
  </head>
  <body>
    <!-- a요소 -->
    <a href="https://naver.com">네이버</a>

    <div>
      <a href="https://google.com">
        <h1>Google</h1>
        <p>세계 1위 검색 포털이다.</p>
      </a>
      <button type="button">선호하는 URL에 추가</button>
    </div>

    <!-- a 요소 hash link -->
    <nav>
      <a href="#html-em">HTML em 요소</a>
      <a href="#html-strong">HTML strong 요소</a>
    </nav>

    <h2 id="html-em">HTML em 요소</h2>
    <h2 id="html-strong">HTML strong 요소</h2>

    <!-- em 요소, strong 요소 -->
    <strong>주의하세요!</strong>
    <h1>Chapter 1. <strong>Hello World</strong></h1>
    <em>감자튀김</em>은 맛있다.

    <!-- q, cite 요소 -->
    <p><q>HTML is awesome</q> is on the <cite>Smashing magazine</cite></p>

    <!-- dfn, abbr 요소 -->
    <p>
      <dfn id="whatwg"
        ><abbr title="Web Hypertext Application...">WHATWG</abbr></dfn
      >는 웹 표준화 기구입니다.
    </p>
    <p>
      <a href="#whatwg">WHATWG</a>에서 제정한 표준에는 HTML Living Standard가
      있습니다.
    </p>

    <!-- code 요소 -->
    <p>
      HTML의 DOCTYPE에는 <code> &lt;!DOCTYPE html&gt;</code> 같은 것들이 있다.
    </p>

    <!-- span 요소 -->
    <span lang="ko">텍스트</span>

    <!-- br, wbr 요소 -->
    <p>
      안녕하세요.<br />
      제이입니다.
    </p>

    <p>
      안녕하세요.<wbr />
      제이입니다.
    </p>
  </body>
</html>
```

- <b>a 요소</b>는 HTML 내에서 하이퍼텍스트(링크)를 생성할 때 사용하는 요소이다.

  - 자바스크립트를 활용해서 링크를 생성하면 접근성에 위배되고, 굳이 그렇게 할 필요가 없다.

  - <b>href 속성은 필수값은 아니다.</b><br> 활성화/비활성화 상태를 나타내고 싶을 때 href 포함 유무에 따라 동작시킬 수 있다.

  - a 요소 내에서 다른 a요소를 삽입할 수 없다.

  - a 요소에 간혹 다른 버튼을 넣는다거나 하는 경우가 있는데,<br>
    <b>interactive content 내에는 다른 interactive content를 넣으면 안된다는 지침이 있다.</b><br>
    a 요소 바깥에 넣고 div로 묶는 방법을 사용하면 된다.

  - a 요소의 <b>hash link</b>는 해당 id가 있는 곳으로 이동시킨다.

  - 이러한 속성을 이용하면 싱글 페이지 어플리케이션을 만들 때 hash link를 참조해서 페이지 라우팅을 발생시키는 동작도 가능하다.

  <br>

- <b>em과 storng 요소</b>는 강조를 나타내는 요소이다.

  - string은 <u>강한 강조</u>로 주의(warning), 나 집중(attention)과 가깝다.

  - em은 비교적 보편적인 강조이다.

<br>

- <b>q 요소, cite</b>는 인용구를 나타내는 요소이다.

  - blockquote 요소가 인용문장을 블록 단위로 가져온다면, q 요소는 내부에서 인용을 활용할 때 사용한다.

  - <b>cite 요소</b>는 실체가 있는 물건이나 사이트 등을 인용해올 때 사용한다.

<br>

- <b>dfn 요소 </b>
  는 해당 페이지에서 최초로 정의된 용어를 나타낼 때 사용한다.

  - a 요소의 hash link를 사용하여 용어설명을 보여줄 때 응용하기도 한다.

  <br>

- <b>abbr 요소</b>는 약어를 나타내는 요소이다.

- <b>code 요소</b>는 HTML 문서 내에서 코드를 나타낼 때 사용한다.

- <b>span 요소</b>는 <b>별다른 의미는 없지만 여러 개의 텍스트를 감싸야할 때</b> 사용하는 요소이다.<br>div 요소와 마찬가지로 최후의 수단으로 사용한다.

  - CSS 작업이나 lang과 같이 특수한 속성을 사용해야 할 때 사용한다.

<br>

- <b>br, wbr 요소</b>는 HTML 문서 내에서 줄바꿈을 일으킬 때 사용한다.

  - wbr 요소는 특정한 조건에서만 줄바꿈이 발생한다.<br>한 줄로 표현할 수 없을 때에만 줄바꿈이 발생한다.

  - 한 줄로 보이던 단어들이 화면에 반응해서 여러줄로 보일 때,<br> 단어 단위로 끊고 싶거나 의도한 영역에서 줄바꿈이 일어나게 하고 싶을 때 wbr 요소를 활용할 수 있다.

  - CSS의 word-break:keep-all 과 유사한 동작을 한다.

  - 줄바꿈을 억지로 일으키게 한다면 다양한 문제가 생길 수 있기 때문에 디자이너와 논의해서 사용하는 것이 좋다.

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
