# 데이터 타입

```
primitive type, single item: number, string, boolean, undefine, null, symbol

object, box container

function, first-class function
```

- <b>primitive type(원시타입)</b>은 더이상 작은 단위로 나눌 수 없는 한가지의 아이템을 말한다.<br>값 자체(value)가 메모리에 저장된다.

- 다른 프로그래밍 언어와 마찬가지로 number, string, boolean 타입이 있고, 자바스크립트만의 데이터타입도 가지고 있다.

- <b>object</b>는 single item들을 묶어서 한 단위로 관리할 수 있게 한다.<br>object를 할당하게 되면 이를 가리키는 reference가 있고, 이 ref를 통해 실제 메모리가 들어있는 곳을 가리키게 된다.

- <b>자바스크립트에서는 function도 데이터 타입 중 하나이다.</b><br> function도 변수에 할당이 가능하고, 함수의 파라미터(인자)로도 전달이 되며, 함수에서 function으로 리턴이 가능하다.

- 메모리를 더 세세히 관리하는 low level 언어인 C언어나 자바의 데이터 타입에 비해서 <b>자바스크립트는 숫자는 number만 사용한다.</b>

<br>

> 자바스크립트는 Dynamic typing이 특징인데, 변수를 선언할 때 타입을 결정하지 않고, runtime 즉 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경된다. 하지만 이러한 특징이 개발자의 의도와는 다른 결과값이 나오거나 오류가 발생하기 쉬워서 typescript의 탄생을 불러오기도 하였다.

<br>

### number

```javascript
// javascript
let a = 12;
let b = 1.2;
```

```typescript
// typescript에서도 int, long, float와 같이 나누진 않고 number를 쓴다.
let a: number = 12;
let b: number = 1.2;
```

```javascript
// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0; // 숫자를 0으로 나누면 무한대의 숫자값(infinity)이 나온다.
const negativeInfinity = -1 / 0; // 음수를 0으로 나누면 -infinity값이 나온다.
cont NaN = 'not a number' / 2; // 숫자가 아닌 값을 숫자로 나누면 NaN이 나온다.
```

- 이러한 특별한 number 타입은 자바스크립트를 이용해서 DOM 요소의 포지션을 바꾸거나 다양한 계산을 해야할 때 에러 발생을 방지하기 위해 유용하다.

<br>

### string

```javascript
const char = "a"; // string
const jay = "jay"; // string
const greeting = "hello" + jay;
const welcome = `hi ${jay}!`; // template literals(string)
```

- <b>자바스크립트에서는 문자 한개든 여러개의 글자로 이루어진 문자열이든 데이터타입으로 string을 사용한다.</b>

- <b>template literals(string)</b> : 백틱기호(`)와 달러사인($)을 이용해서 변수와 함께 string을 출력할 수 있다.

<br>

### boolean

```javascript
// boolean 객체
// false : 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
```

- 값이 없거나 0, null, false, NaN, undefined, 빈 문자열이라면 객체의 초기값은 false이다.
- 값이 undefined, null이 아닌 모든 객체는 조건문에서 true로 계산된다.

<br>

### undefined & null

```javascript
let x;
```

- <b>undefined</b>은 변수는 존재하는데 값을 주지 않아서 정의되지 않은 것을 말한다.<br> 컴퓨터 메모리 안에 공간은 존재하는데, 값이 들어가지 않은 것.<br> 변수에 값을 주지 않은 상태이다.

<br>

```javascript
let nothing = null;
```

- <b>null</b>은 절대 자연적으로 발생하지 않는다.
  어떤 변수안에 값이 아무것도 없다라는 것을 확실히 하기 위해 쓴다. 자바스크립트에게
  값이 "없다"를 알려줄 때 사용한다. 비어있는 값을 의도적으로 표현하는 것이다.

<br>

### Symbol

```javascript
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

const symbolA = Symbol.for("id");
const symbolB = Symbol.for("id");
console.log(symbolA === symbolB); // true;
```

- <b>Symbol</b>은 비교적 최근에 추가된 데이터타입인데,<br>
  Map이나 다른 자료구조에서 <b>고유한 식별자</b>가 필요하거나, 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 쓰여진다.

- Symbol()에서 인자안에 동일한 string을 작성해도 값이 다르게 들어가기 때문에 주어진 String에 상관없이 고유한 식별자를 만들 때 사용되어진다.

- String이 똑같을때 동일한 아이디값을 주고 싶을 때는 Symbol.for()을 쓰면 된다.

- Symbol을 출력할 때는 .description을 이용해서 String으로 변환해서 사용해야 한다.

<br>

### object

```javascript
const jay = { name: "jay", age: 27 };
jay.age = 26;
```

- const로 선언된 object jay는 다른 object로 변경이 불가하다.
- jay를 가리키고 있는 메모리 포인터가 잠겨있기 때문이다.
- 하지만 object안의 property는 변경이 가능하다.

<br>
<hr>
<a href="https://www.youtube.com/watch?v=OCCpGh4ujb8&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=3">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.

참고: [MDN Web Docs Boolean](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
