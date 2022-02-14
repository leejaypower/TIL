# 연산자(operator)

### String concatenation

```javascript
console.log("my" + "dog"); // my dog
console.log("1" + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);
```

<br>

### Numeric operators

```javascript
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(3 % 2); // 나머지
console.log(2 ** 3); // 거듭제곱 (2의 3승)
```

<br>

### Increment and decrement operators

```javascript
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
```

<br>

### Assignment operators

```javascript
let x = 1;
let y = 2;

x += y; // x = x + y;
x -= y;
x *= y;
x /= y;
```

<br>

### logical operators: || (or) , && (and), ! (not)

```javascript
const value1 = false;
const value2 = 4 < 2; // false

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("wasting time");
  }
  return true;
}
```

- || (or)은 하나라도 true가 있으면 true가 된다.
- or 연산자는 처음에 true가 나오면 연산을 멈추고 true를 반환한다. 따라서 expression이나 function을 제일 뒤에 두는 것이 효율적이다.

```javascript
// && (and)
console.log(`and: ${value1 && value2 && check()}`);
```

- && (and)는 하나라도 false가 있으면 false가 된다.
- and 연산자는 처음에 false가 나오면 연산을 멈추고 false를 반환한다.
- null 체크할 때 많이 쓰인다. (nullableObject && nullableObject.something)

<br>

```javascript
// !(not)
console.log(!value1); //true
```

<br>

### Equality

```javascript
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true
```

```javascript
// object equality by reference
const jay1 = { name: "jay" };
const jay2 = { name: "jay" };
const jay3 = jay1;
console.log(jay1 == jay2); // false
console.log(jay1 === jay2); // false
console.log(jay1 === jay3);
```

- jay1과 jay2는 각각 다른 reference를 갖고 있다.
- jay1이 가지고 있는 reference값을 jay3으로 할당했기 때문에 jay1과 jay3의 reference는 같다.

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

<br>

### Conditional operators : if, else if, else

```javascript
const name = "jay";
if (name === "jay") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("keep it up!");
} else {
  console.log("who are you?");
}
```

### Ternary operator : ?

```javascript
// condition(조건) ? value1(true인 경우) : value2(false인 경우);
console.log(name === "jay" ? "yes" : "no");
```

- 값을 할당하거나 간단히 출력할 때 사용한다.
- 가독성을 위해 복잡한 경우라면 if나 switch문을 사용하는게 좋다.

<br>

### Switch statement

```javascript
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}
```

- if문에서 else if 를 반복한다면 switch문을 사용하는 것을 고려해야한다.

<br>

### Loops

```javascript
// while
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do-while
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
```

- while 조건이 false가 될 때까지 반복한다.
- do-while문에서는 do블럭을 먼저 실행한 후 while문이 실행된다.

```javascript
// for loop, for(begin; condition; step)
for (i = 10; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 0; i < 10; i++) {
  // inline 변수선언
  console.log(`inline variable for : ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

```javascript
// break, continue를 이용한 퀴즈풀이

//continue를 사용해서 0부터 10까지 짝수만 출력
for (i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    // 홀수인 경우
    continue;
    // 처음으로 돌아가서 그 다음 루프를 실행
  }
  console.log(i);
}

// 1부터 10까지 반복하는데 8까지만 출력
for (i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
```

- 반복문에서 continue를 만나면 현재 반복을 종료하고 반복문의 처음으로 돌아가서 그 다음 루프를 실행한다.

<br>
<hr>
<a href="https://www.youtube.com/watch?v=YBjufjBaxHo&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=4">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
