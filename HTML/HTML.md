# HTML이란?

- HTML은 Hypertext Markup Language의 약자이다.

- 여기서 Hypertext란 a요소를 클릭해서 다른 페이지로 넘어가는 링크를 의미하고, <>를 활용한 형태를 Markup 이라고 지칭한다.

```html
<div></div>
<section></section>
```

- HTML은 SGML(Standard General Markup Language)를 기반으로 만들어졌다.<br>
  SGML은 꺽쇠형태를 최초로 사용한 마크업 언어이다.

- 비슷한 파생언어로 XML, MathML, EmotionML 가 있다.

- <b>HTML 표준은 HTML와 관련 API로 구성되어있다.</b><br>
  HTML을 단순히 마크업 언어로만 접근하는 것은 단편적인 접근이다.<br>
  웹 플랫폼이라는 측면에서 넓은 영역을 차지하고 있기 때문이다.

- Web Storage, Soket API 등이 HTML 스펙에 포함되어 있다.

- 따라서 HTML을 잘 안다는 것은 단순히 마크업 언어를 잘 안다는 것이 아니라, HTML을 이루고 있는 위와 같은 API들을 함께 이해하고 있다는 것이다.

<br>

## HTML의 탄생(배경)

<b>HTML은 문서를 표현하기 위해 만들어졌다.</b>

먼 과거에는 문서 편집 프로그램이 상호 호환되지 않는 문제가 있었다.<br>
그를 해결하기 위해 문서를 표현하기 위한 언어를 만들게 된 것이 HTML이다.

HTML4.0까지는 HTML은 api도 거의 없었고 마크업 언어로만 활용되었다.

HTML 1.0, 2.0, 3.0, 4.0, 4.01, 5, 5.1, 5.2, Living Standard에 이르기까지 다양한 과정을 거쳐서<br>
지금은 HTML Living Standard가 웹의 표준으로서 동작을 하게 되었다.

HTML5은 공식적으로 폐기된 상태이며, 이러한 지칭은 더이상 존재하지 않고 공식 명칭으로 활용되지 않는다.

- HTML Living Standard(html.spec.whatwg.org)

이러한 깊은 역사를 거치면서 HTML은 지금은 단순한 마크업 언어가 아닌, 마크업 언어와 관련된 api들을 모두 아우르는 웹 플랫폼을 나타내는 것이라고 보아야한다.

<br>

## HTML은 왜 중요한가?

- HTML은 웹을 구성하는 역할을 수행하고 있는 웹의 근간이다.<br> 브라우저가 공식적으로 지원하는 언어는 4종류(HTML, CSS, Javascript, WASM)밖에 없는데, 그 중 하나가 HTML이다.

- HTML은 DOM, Javascript, Web assembly와도 연관되어있다.<br>
  HTML은 웹을 구성하는 가장 큰 역할을 하고 있다.
  <b>HTML은 웹의 골격이다.</b>

- JSX (React 문법)을 사용하더라도 결과물은 HTML로 나오게 된다.

- HTML을 잘 안다는 것은 브라우저가 어떤 방식으로 동작하는지를 이해하는 것과 같다.

- 또한 브라우저 뿐만 아니라 검색엔진, 크롤러, 콘텐츠의 표현방식, 접근성 등에 대한 이해도가 있다는 것을 의미한다.

<br>

## HTML Living Standard

HTML은 꾸준히 업데이트가 진행되고 있다.

https://html.spec.whatwg.org/multipage/

HTML 표준 문서를 보면 요소에 대한 세부적인 내용을 파악함과 동시에<br> 어느 브라우저와 검색엔진에서 요소가 지원되는 지도 파악할 수 있다.

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
