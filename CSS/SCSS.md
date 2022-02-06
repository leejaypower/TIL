# SCSS (CSS preprocessor - CSS 전처리기)

- CSS preprocessor에는 <b>SCSS</b>뿐만 아니라 <b>Less, PostCSS</b> 등이 있다.

- SCSS보다 Sass가 먼저 쓰여졌는데, 그 둘은 다른 문법(syntax)를 가지고 있었다.

- SCSS가 Sass를 위한 공식적인 syntax로 릴리즈되었다.<br>
  따라서 SCSS와 Sass는 거의 같은 것이라고 보면 된다.

- SCSS는 css를 프로그래밍 언어처럼 만들어서 변수나 function, extend를 사용할 수 있게 한다.

- SCSS는 compile하고 build 하는 과정이 필요하다.

- <b>gulp</b>는 <b>compile이나 transform해주는 nodeJS package</b>로,
  새로운 코드를 오래된 코드로 바꾸거나, Sass나 Scss를 CSS문법으로 바꿔준다.

- scss로 작업하게 되면, 실수가 있다면 console에 에러를 알려준다.
- index.htm 파일에서는 css를 링크해주어야 한다.
  <br>browser은 scss를 이해하지 못하기 때문이다.

  <br>

## variables

- css에서 variable은 기본적으로 website에서 가장 중요한 colors나
  가장 중요한 styles를 저장하고 싶을 때 사용한다.

- scss에서 variable을 이용하기 위해서는 scss폴더에서 \_variables.scss 이름의 파일을 만들어주면 된다.

- 이름은 variables가 아니어도 상관없지만 앞에 <b>언더바(\_)</b>를 넣는 것이 중요하다.

- 밑줄이 있는 파일들은 css로 변하지 않아야 하는 파일들이다.<br>
  따라서 <b>언더바를 넣는 것은 scss만을 위한 파일이라는 것을 의미하고, <br>
  css로 translate이나 compile되기를 원하지 않는 것이다.
- variable을 생성하기 위해서는 아래와 같이 $를 넣어주면 된다.</b>

  ```scss
  $bg: red;
  ```

- scss에 <b>variable을 import하고</b> 백그라운드에 저장한 bg 변수를 주면<br> css 파일도 똑같이 bg 변수 값인
  red로 compile된다.
  ```scss
  @import "_variables";
  body {
    background: $bg;
  }
  ```

## Nesting

Nesting은 타겟하는 element를 더 정확하게 해줄 수 있다.

```html
<body>
  <h2>Title</h2>
  <div class="box">
    <h2>Another Title</h2>
    <button>Hello</button>
  </div>
  <button>Bye</button>
</body>
```

- box안에 button이 있고, box밖에도 button이 있는 경우, <br>
  먼저 class를 box안 element에 주거나<br>
  혹은 부모의 클래스를 앞에 적는 방법 등이 있다.

  ```css
  .box button {
    color: red;
  }
  ```

- 만약 box에도 style을 주고 싶다면 따로 적어야 한다.

  ```css
  .box {
    margin-top: 20px;
  }
  ```

- 이러한 옵션보다 좀 더 쉽게 적으면서 정확하게 작성하는 방법이 바로 <b>Nesting</b>이다.

- scss에서는 다음과 같이 적을 수 있는데, 읽기가 더 쉽다는 것을 알 수 있다.

  ```scss
  .box {
    margin-top: 20px;

    h2 {
      color: blue;
    }

    button {
      color: red;
    }
  }
  ```

- box에 더 style을 주고싶다면 <b>&</b>을 사용할 수도 있다.

  ```scss
  .box {
    margin-top: 20px;
    &:hover {
      background-color: green;
    }

    h2 {
      color: blue;
    }

    button {
      color: red;
    }
  }
  ```

- nesting안에 nesting을 할수도 있다.

  ```scss
  .box {
    margin-top: 20px;
    &:hover {
      background-color: green;
    }

    h2 {
      color: blue;
      &:hover {
        color: red;
      }
    }

    button {
      color: red;
    }
  }
  ```
