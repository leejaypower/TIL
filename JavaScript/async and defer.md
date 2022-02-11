# async VS defer

자바스크립트는 인터프리터 기반언어로 한줄씩 코드를 읽고 DOM 요소로 변환한다.

<br>

### HTML Header에 js파일을 포함하는 경우

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script src="main.js"></script>
  </head>
  <body></body>
</html>
```

- html을 파싱하다가 script가 보이면 파싱을 멈추고 필요한 js 파일을 다운로드하고 실행한다.

- <b>script를 header에 넣으면 브라우저는 용량이 어떻든 간에 js 파일까지 다 읽어온 후 화면을 보이기 때문에 사용자가 페이지를 보는데까지의 속도가 느려질 수 있다.

- 따라서 head에 script를 포함하는 것은 좋지 않다.</b>

<br>

### body 끝에 js 파일을 추가하는 경우

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div></div>
    <script src="main.js"></script>
  </body>
</html>
```

- html을 파싱해서 페이지가 준비된 후, script를 다운로드 하고 실행하게 된다.

- body끝에 script를 넣으면 html이 먼저 로딩되기 때문에
  js 파일이 읽어지는 동안에 유저들이 페이지 컨텐츠를 먼저 볼 수 있다.

- <b>단점은 html 문서의 크기가 아주 큰 경우에는 html 다운로드 후 스크립트를 다운받기 때문에 페이지가 느려진다. 또 만약 자바스크립트에 의존적인 사이트라면 사용자가 의미있는 컨텐츠를 보기 위해서는 js가 실행될때까지 여전히 기다려야 한다. </b>

<br>

### header 안에 script를 넣되, async라는 속성값을 사용하는 경우

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script aync src="main.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

- async는 boolean타입의 설정값이라 선언하는 것 만으로도 true로 설정되어 사용할 수 있다.

- 브라우저는 html을 파싱하면서 병렬로 js 파일을 다운로드 받기 시작하고, js 파일이 다운로드가 완료되면 파싱을 멈추고 js 파일을 실행한 후 나머지 html을 파싱하게 된다.

- 장점으로는 body끝에 사용하는 것보다는 fetching이 파싱하는 동안 병렬적으로 일어나서
  다운로드 받는 시간을 절약할 수 있다.

- <b>하지만 js가 html이 전부 파싱되기 전에 실행되므로
  queryselector을 이용해서 dom을 조작한다고 한다면,
  조작하려는 시점에 원하는 html element가 정의되어 있지 않을 수 있다.

- 또한 html을 파싱하는 동안에 자바스크립트를 실행하기 위해서 언제든지 파싱이 멈출 수 있기 때문에
  사용자가 페이지를 보는데 시간이 걸릴 수 있다.

- 또한 정의된 script 순서와는 상관없이 먼저 다운로드 된 js 파일을 실행하기 때문에
  만약 정의한 자바스크립트가 순서에 의존적이라면 문제가 발생할 수 있다.</b>

<br>

### header에서 defer이라는 옵션을 주면서 script를 추가하는 경우

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script defer src="main.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

- 파싱을 하다가 js 파일을 다운로드 명령만 하고,
  나머지 html을 다 파싱한 후 마지막에 다운로드되어진 js를 실행하게 된다.

- <b>html을 파싱하는 동안 필요한 js를 다운로드 받아놓고 사용자에게 페이지를 보여준 다음에
  js를 실행하기 때문에 제일 좋은 옵션이다.

- async와는 다르게 defer는 다운로드해야할 js 파일을 전부 다운로드 받아놓고
  우리가 정의해 놓은 순서대로 자바스크립트가 실행되기 때문에 원하는대로 script가 실행되는 것을
  예상할 수 있다.
  </b>

<br>

### 관련해서 참고하면 좋은 사이트

https://ko.javascript.info/script-async-defer

<br>
<hr>
<a href="https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
