### 들어가기 전에

div요소에 class 이름으로 의미를 준다면, 개발자가 보기에는 의미가 있지만 머신 입장에서는 그저 div로만 파악하고 의미를 이해하지 못한다.<br>
따라서 HTML 자체에서 의미를 가지는 태그를 사용해서 <a href="https://velog.io/@leejaypower/Semantic-Web시맨틱-웹과-Semantic-Tag시맨틱-태그">시맨틱하게 작성할 수 있다.</a>

<br>

# HTML 요소 - Document metadata

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- meta 요소, 해당 문서 혹은 애플리케이션의 metadata를 담는 요소 -->
    <!-- charset, 문자 인코딩을 어떻게 할 것인지 결정 -->
    <meta charset="UTF-8" />

    <!-- viewport, 모바일 브라우저에서 화면을 어떻게 노출시킬 지 -->
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <!-- SEO에 도움을 주는 metadata -->
    <meta
      name="description"
      content="메타데이터에 요소에 대한 설명을 다루는 웹페이지입니다."
    />

    <!-- social Metadata: Facebook - Open Graph -->
    <!-- Open Graph Protocol -->
    <meta property="og:title" content="metadata element" />
    <meta
      property="og:description"
      content="메타데이터 요소에 대한 설명을 다루는 웹페이지입니다."
    />
    <meta property="og:url" content="http:url주소" />
    <meta property="og:image" content="https://이미지주소" />

    <!-- Social Metadata: Twitter - Twitter Card -->
    <meta name="twitter:card" content="summary" />
    <meta name-="twitter:site" content="@유저닉네임" />
    <meta name="twitter:title" content="matadata element" />
    <meta
      name="twitter:description"
      content="메타데이터 요소에 대한 설명을 다루는 웹페이지입니다."
    />
    <meta name="twitter:image" content="http://주소" />

    <!-- title 요소: 해당 애플리케이션의 제목 -->
    <title>metadata element</title>

    <!-- link 요소 : 외부 문서 혹은 외부 콘텐츠와 이 콘텐츠를 연결해주는 요소 -->
    <link rel="stylesheet" href="./style.css" />

    <!-- style 요소: 페이지 내에서 사용하는 CSS를 정의하는 요소 -->
  </head>
  <body></body>
</html>
```

>  meta 태그는 문서 전반에 걸친 정보를 표시하기 위할 때 사용된다.

- UTF-8은 전 세계 언어 대부분을 지원하고, EUC-KR은 한국어와 영문을 지원한다.
- <b>사용하는 DB의 charset과 맞춰서 작업하는 것이 좋다.</b>
- viewport가 없으면 모바일 브라우저(태블릿 PC포함)에서 화면 렌더링이 이상하게 동작한다.

- Facebook이 개발한 Open Graph Protocol은 페이스북에서 콘텐츠를 어떤식으로 긁어가게 할지 정할 수 있다.<br>og:url을 설정하면 페이스북에서 긁어갈 url을 지정하는 것이다.<br>
  og:image같은 경우 서버에 올려놓고 사용하는 것을 권장한다.

- 실제로 프론트엔드 개발 할 때에는 social metadata는 자동화로 생성하면 깔끔하게 사용할 수 있다.

- 하나라도 많은 HTTP Request는 성능저하를 일으킬 여지가 있다.
  - 웹 페이지를 개발할 때는 어느정도 style요소를 활용하면서 외부 CSS를 사용하는 것이 좋다.
  - 왜냐하면 style요소는 HTML 내부에 있기 때문에 외부 request 를 부르지 않기 때문에 그만큼의 성능 개선을 일으킨다.
  - 따라서 style 요소 내부에 <u>렌더링에 꼭 필요한 스타일</u>만 담아두면 성능 개선에 좋다.
  - 예를 들어 레이아웃을 잡는 CSS나, font-family같은 것들이 있겠다.

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
