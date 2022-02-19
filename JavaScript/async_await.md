# async와 await

> async와 await은 promise를 간결하고, 동기적으로 실행되는 것처럼 보이게 만든다.

기존의 promise위에 간편한 api를 제공한다.

```javascript
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    return "jay"; // <pending>
    resolve("jay"); // <fulfilled>
  });
}

const user = fetchUser();
user.then(console.log);
console.log(user);
```

- 기본적으로 자바스크립트는 동기적인 처리를 하기 때문에<br>
  실행시간이 오래걸리는 코드를 비동기적인 처리를 하지 않으면<br>
  그 코드가 다 실행될 때까지 그 다음 라인으로 넘어가질 못한다.

- promise를 사용할 때 resolve나 reject를 호출하지 않고 반환하게 되면 promise는 state(상태)가 pending이 된다.

<br>

### async

```javascript
async function fetchUser() {
  // do network request in 10 secs...
    return "jay"; // <fulfilled>
  });
}

const user = fetchUser();
user.then(console.log);
console.log(user);
```

- 위보다 조금 더 간편하게 비동기를 작성하는 방법이 있는데 <b>function앞에 async를 붙이면 길게 쓸 필요 없이 코드 블럭이 자동으로 promise로 변환되어진다.</b>

- async는 promise의 syntactic sugar인 셈이다.

<br>

### await

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// function getBanana() {
//   return delay(3000).then(() => "banana");
// }
```

- <b>await은 async가 붙은 함수안에서만 사용가능하다.</b>

- delay함수의 실행이 끝날 때까지 기다렸다가 반환한다.

<br>

```javascript
//promise chaining
function pickFriuts() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);

// aync & await
async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
  } catch(){

  }
}
```

- promise도 중첩을 많이 써서 chaining을 한다면 가독성이 떨어진다.

- async와 await을 이용하면 마치 동기적인 코드를 작성하는 것처럼 간편해진다.

- 하지만 이렇게 순차적으로 진행되면, 두 함수가 연결되어있지 않아도 getApple()에서 2초를 기다린 후 getBanana()에서 1초를 기다려야만 결과값을 받을 수 있다.

<br>

```javascript
// 병렬처리를 위해 코드개선
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();

  try {
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  } catch(){

  }
}
```

- promise를 만드는 순간 바로 코드 실행이 되는 점을 이용하면 병렬처리가 가능하다.

- 하지만 일반적으로 이렇게 코드를 짜지는 않고, 다음과 같이 promise의 api를 이용한다.

```javascript
// 유용한 promise api
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((Fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);
```

- all()이라는 promise api를 사용해서 promise 배열을 전달하게 되면, 모든 promise들이 병렬적으로 실행되며 완료되면 결과를 집계한다.

```javascript
function PickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); // banana
```

- Promise.race()는 promise 배열 중에서 가장 먼저 값을 리턴한 promise만 전달된다.

<br>
<hr>
<a href="https://www.youtube.com/watch?v=aoQSOZfz3vQ&t=1s">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
