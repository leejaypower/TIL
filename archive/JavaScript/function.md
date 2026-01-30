# 함수

절차적 프로그래밍(Procedural Programing)에서는 함수가 아주 중요한 기능을 담당한다.

> 자바스크립트는 class가 추가되었지만 java처럼 순수한 객체지향 프로그래밍(Object Oriented Programming)언어는 아니고, 프로토타입을 베이스로 한 '가짜 OOP'다.

프로그램 안에서 또 각각의 작은 단위의 기능을 수행하는 것이 function이다.

- function은 input을 받아서 처리해 output을 리턴하는 것이 일반적이다.
- 하나의 함수에서는 한가지의 일만 하도록 만들어야 한다.
- 함수 이름은 doSomething과 같은 형식처럼 커맨드나 동사형태로 짓는 것이 좋다.
- 자바스크립트에서 function은 object이기 때문에 변수에 할당할 수도 있고, 파라미터로 전달하거나 함수를 리턴할 수 있다.

### 함수 선언(function declaration)

```javascript
function printHello() {
  console.log("Hello");
}
printHello();

// 인자를 받아서 출력하는 함수
function log(message) {
  console.log(message);
}
log("Hello" + message);
```

```javascript
// object의 값을 변경하는 함수
function changeName(obj) {
  obj.name = "coder";
}
const jay = { name: "jay" };
changeName(jay);
console.log(jay); // {name: "coder"}
```

```javascript
// Default parameters(ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");
```

- 파라미터 값이 전달되지 않은 경우(from) 옆에 원하는 default값을 지정할 수 있다.

<br>

```javascript
// Rest parameters(ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("developer", "front-end", "jay");
```

- 파라미터속 dot(.)을 3개 작성하게 되면 이것은 rest parameters 라고 불리우는데, 배열 형태로 전달된다.
- 따로 배열 선언을 하지 않아도, function을 호출할 때 파라미터 값을 여러개 주면<br>
  지정한 이름으로 배열이 선언되어지고 배열 속에 파라미터값이 들어간다.

<br>

### Local scope

> 유리가 틴트처리된 창문처럼 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

```javascript
let globalMessage = "global"; // 전역변수
function printMessage() {
  let message = "hello"; // 지역변수
  console.log(message);
  console.log(globalMessage);
}
printMessage();
console.log(message); // 에러발생
```

- 지역변수를 밖에서 출력하려고 하면 에러가 발생한다.

<br>

### Early return, early exit

```javascript
// 안좋은 코드
function upgradeUser(user) {
  if (user.point > 10) {
    // 긴 로직 적기...
  }
}

// 좋은 코드
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // 긴 로직 적기...
}
```

- 블럭안에서 로직을 많이 작성하게 되면 가독성이 떨어진다.
- if문을 써서 함수를 만들 때, 먼저 조건이 맞지 않는 경우 함수를 종료하고 조건이 맞는 경우에 필요한 로직을 실행하는 것이 더 좋다.

<br>

### 함수 표현식(function expression)

```javascript
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
```

- 함수의 이름이 없는것을 anonymous fuction이라고 부른다.
- 함수를 변수에 할당하고, 할당한 변수에 ();를 붙이면 함수가 호출된다.
- 함수를 할당한 변수를 다른 변수에 할당하는 것도 가능하다.
- <b>함수 선언과 함수 표현식의 큰 차이점은 함수 표현식은 할당된 다음부터 호출이 가능한 반면에, 함수 선언은 hoist가 된다.</b>

<br>

### 콜백함수 (callback function)

```javascript
function randomQuiz(answer, printYes, printNo) {
  if (answer === "genius jay") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function(){
  console.log("yes")!
}

// named functin
const printNo = function print(){
  console.log("no!");
  // recursions
  print();
}
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

```

- 함수를 파라미터에 전달해서 조건에 맞는 함수를 호출하는 것을 callback function이라고 한다.
- recursion은 함수안에서 함수 자신 스스로를 부르는 것을 말한다.<br> 반복되는 평균값을 계산하거나 피보나치 수를 계산한다던지 할 때 사용된다.
- 함수를 무한대로 호출하면 call stack error가 발생한다.

<br>

### Arrow function

```javascript
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint = () => console.log("simplePrint!");
// const simplePrint = (
//   console.log("simplePrint!");
// )

const add = (a, b) => a + b;
// const add = function (a,b){
//  return a + b;
//}
```

- 화살표 함수는 간결하게 함수를 작성할 수 있고, 함수형 프로그래밍을 할 때 유용하다.

<br>

### IIFE : Immediately Invoked Function Expression

```javascript
(function hello() {
  console.log("IIFE");
})();
```

- 함수를 선언함과 동시에 호출하려면 함수를 괄호로 묶은 다음에 호출하면 된다.

<br>
<hr>
<a href="https://www.youtube.com/watch?v=e_lU39U-5bQ&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=5">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
