# SCSS (CSS preprocessor - CSS 전처리기)

- CSS preprocessor에는 <b>SCSS</b>뿐만 아니라 <b>Less, PostCSS</b> 등이 있다.

- SCSS보다 Sass가 먼저 쓰여졌는데, 그 둘은 다른 문법(syntax)를 가지고 있었다.

- SCSS가 Sass를 위한 공식적인 syntax로 릴리즈되었다.<br>
  따라서 SCSS와 Sass는 거의 같은 것이라고 보면 된다.

- SCSS는 css를 프로그래밍 언어처럼 만들어서 변수나 function, extend를 사용할 수 있게 한다.

- SCSS는 compile하고 build 하는 과정이 필요하다.

- <b>gulp</b>는 <b>compile이나 transform해주는 nodeJS package</b>로,
  새로운 코드를 오래된 코드로 바꾸거나, Sass나 SCSS를 CSS문법으로 바꿔준다.

- SCSS로 작업하게 되면, 실수가 있다면 console에 에러를 알려준다.
- index.html 파일에서는 css를 링크해주어야 한다.
  <br>browser은 SCSS를 이해하지 못하기 때문이다.

  <br>

## variables

- SCSS에서 variable은 기본적으로 website에서 가장 중요한 colors나
  가장 중요한 styles를 저장하고 싶을 때 사용한다.

- SCSS에서 variable을 이용하기 위해서는 scss폴더에서 \_variables.scss 이름의 파일을 만들어주면 된다.

- 이름은 variables가 아니어도 상관없지만 앞에 <b>언더바(\_)</b>를 넣는 것이 중요하다.

- 밑줄이 있는 파일들은 css로 변하지 않아야 하는 파일들이다.<br>
  따라서 <b>언더바를 넣는 것은 scss만을 위한 파일이라는 것을 의미하고, <br>
  css로 translate이나 compile되기를 원하지 않는 것이다.
- variable을 생성하기 위해서는 아래와 같이 $를 넣어주면 된다.</b>

  ```scss
  $bg: red;
  ```

- scss 파일에 <b>variable을 import하고</b> 백그라운드에 저장한 bg 변수를 주면<br> css 파일도 똑같이 bg 변수 값인
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

- SCSS에서는 다음과 같이 적을 수 있는데, 읽기가 더 쉽다는 것을 알 수 있다.

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

<br>

## Mixin

<b>Mixin은 SCSS functionality를 재사용할 수 있도록 해준다.</b>

- mixins를 사용하려면 mixins.scss 파일을 생성해 작성한다.

```scss
@mixin title {
  color: purple;
  font-size: 30px;
  margin-bottom: 12px;
}
```

- scss 파일에 import한다.

```scss
@import "_mixins";

h1 {
  @include title();
}
```

- <i>@include</i>를 앞에 붙이고 mixin name을 붙이면 mixin의 스타일이 h1에 들어가게 된다.

- 마치 function처럼 보인다.

<br>

```scss
@mixin title($color) {
  color: $color;
  font-size: 30px;
  margin-bottom: 12px;
}
```

- 이처럼 mixin에 variable을 넣어서 사용할 수도 있다!

<br>

SCSS에서는 <b>if와 else, else if</b>를 사용하여 mixin을 활용할 수도 있다.

```scss
/* scss 파일 */
a {
  margin-botton: 10px;
  &:nth-child(odd) {
    @include title("odd");
  }
  $:nth-child(even) {
    @include title("even");
  }
}
```

- scss에서 mixin을 include하고 문자를 인자로 주었다.

```scss
/* mixin 파일 */
@mixin title($word) {
  @if $word == "odd" {
    color: blue;
  } @else {
    color: red;
  }
}
```

- mixin은 그 문자열을 <b>if로 확인해서 선택적인 스타일</b>을 줄 수 있다.

- <b>즉 SCSS에서는 어떤 종류의 argument를 mixin에 보내서 css 결과값을 바꾸는 것이 가능하다.</b>

<br>
<br>

<b>@content</b> 를 사용하면 mixin responsive를 include한 a태그의 style이 mixin responsive의 style이 될 수 있다.

```scss
// mixin.scss
@mixin responsive {
  @content;
}
```

```scss
a {
  @include responsive {
    text-decoration: none;
  }
}
```

<br>
<br>

mixin을 이용하면 반응형 웹도 쉽게 설계할 수 있다.<br>
다음은 간단히 반응형 디자인을 시험해본 예제이다.

```scss
// variables.scss

$minIphone: 576px;
$maxIphone: 768px;
$minTablet: 768px;
$maxTablet: 992px;
```

```scss
// mixin.scss

@mixin responsive($device) {
  @if $device == "iphone" {
    @media screen and (min-width: $minIphone) and (max-width: $maxIphone) {
      @content;
    }
  } @else if $device == "tablet" {
    @media screen and (min-width: $minTablet) and (max-width: $maxTablet) {
      @content;
    }
  } @else if $device == "iphone-l" {
    @media screen and (max-width: $minIphone) and (max-width: $maxIphone) and (orientation: landscape) {
      @content;
    }
  } @else if $device == "ipad-l" {
    @media screen and (max-width: $minIphone) and (max-width: $maxIphone) and (orientation: landscape) {
      @content;
    }
  }
}
```

```scss
// styles.scss

@import "_variables";
@import "_mixins";

h1 {
  color: red;
  @include responsive("iphone") {
    color: yellow;
  }
  @include responsive("iphone-l") {
    font-size: 60px;
  }
  @include responsive("tablet") {
    color: green;
  }
}
```

<image alt="mixin responsive function" src="./images/mixin responsive.gif">

<br>

## Extends

mixin이 상황에 따라 다르게 스타일을 줄 때 사용했다면,
<b>extend는 코드를 확장(extend)하거나 재사용하고 싶을 때 사용한다.</b>

- extends를 작성할 파일을 생성하여 %을 붙여 작성하면 된다.

```scss
// extends.scss

%button {
  border-radius: 7px;
  font-size: 12px;
  text-transform: uppercase;
  padding: 5px 10px;
  background-color: gainsboro;
  color: peru;
  font-weight: 500;
}
```

- 이 button의 style을 재사용한다.
- extend는 page에서 분리해야하는 element들(button, card, navigation 등)이 많을 때 유용하게 쓰일 수 있다.

```scss
// styles.scss

@import "_extends.scss";

a {
  @extend %button;
  text-decoration: none;
}

button {
  @extend %button;
  border: none;
```

- extends 파일을 import하고, <i>@extend</i>를 앞에 적고 <i>%(extend이름)</i> 을 붙이면 된다.
- 이처럼 extend을 이용해 a와 button은 여러 property를 한번에 공유하면서도 서로 다른 property를 추가로 가질 수 있다.

- extend는 CSS코드를 재사용할 때 유용하지만 mixin처럼 어떤 정보를 인자로 넘겨서 function처럼 사용할 수는 없다.

<br>
<hr>
<a href="https://nomadcoders.co/css-layout-masterclass">노마드코더 CSS Layout 마스터클래스</a> - SCSS 로 공부한 내용입니다.
