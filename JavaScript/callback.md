# Callback

> 콜백함수는 함수의 파라미터, 즉 함수의 입력값으로 들어가는 함수를 말한다.

- 자바스크립트는 동기적(synchronous)이다.<br> 이는 호이스팅이 된 이후부터 코드가 작성한 순서대로 맞춰서 한줄씩 동기적으로 실행된다는 의미이다.

- <b>비동기적(asynchronous)</b>인 것은 언제 코드가 실행될지 예측할 수 없는 것을 말한다.

- 비동기의 좋은 예로 setTimeout()과 같은 브라우저API가 있다.
  setTimeout에는 timehandler라는 콜백함수를 전달해주고, 시간을 지정해주는 인자들이 있다.

  ```javascript
  console.log("1");

  /*
  setTimeout(function () {
    console.log("2");
  }, 1000);
  */

  setTimeout(() => console.log("2"), 1000);
  console.log("3");

  // 결과는 순서대로 1, 3, 2가 나온다.
  ```

  - 브라우저 API는 무조건 브라우저에게 먼저 요청을 보내고, 응답을 기다리지 않고 그 다음 줄로 넘어간다.

  - 이후 브라우저에서 1초가 지난 후 setTimeout의 함수를 실행한다.

  <br>

- 콜백은 비동기에만 쓰이는 것이 아니다.<br> 즉각적으로 쓰이는 동기적 콜백과 언제 실행될지 예측할 수 없는 비동기적 콜백으로 나뉜다.

```javascript
// Synchronous callback
function printImmediately(print) {
  print();
}
// 출력하는 print 콜백함수를 전달받는다.

console.log("1");

setTimeout(() => console.log("2"), 1000);

console.log("3");

prinImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);
```

- 콘솔에 1, 3, hello, 2, async callback 순으로 출력된다.

<br>

### 콜백 지옥..?

- 주의할 것은 콜백함수를 계속 nesting하면서 사용한다면 문제가 발생한다.

```javascript
// 콜백지옥체험
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "jay" && password === "1234") ||
        (id === "coder" && password === "5678")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  // 사용자의 역할을 따로 네트워크 요청을 통해 받아와야하는 상황 가정
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "jay") {
        onSuccess({ name: jay, role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
      },
      (error) => {
        console.log(error;)
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
```

- id와 password를 이용해서 서버에서 login을 시도한다.
- login이 성공적이면 id를 이용해서 역할을 요청해서 받아온다.
- 역할이 성공적으로 받아와진다면 사용자 object의 정보를 출력한다.

<br>

- <b>콜백 체인의 문제점</b>

  - 가독성이 떨어지고, 비즈니스 로직을 한눈에 파악하기 어렵다.

  - 디버깅과 유지보수가 어렵다.

<br>

[promise](https://github.com/leejaypower/TIL/blob/main/JavaScript/promise.md)와 [aync/await]()를 통해서 비동기 코드를 깔끔하게 작성할 수 있고, 병렬적, 효율적으로 네트워크 통신을 해결할 수 있다.

```javascript
// 콜백지옥을 promise로 바꾸기
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "jay" && password === "1234") ||
          (id === "coder" && password === "5678")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  // 사용자의 역할을 따로 네트워크 요청을 통해 받아와야하는 상황 가정
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (user === "jay") {
        onSuccess({ name: jay, role: "admin" });
      } else {
        onError(new Error("no access"));
      }
     }, 1000);
   });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
// .then(user => userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`));
.catch(console.log);
```

<br>
<hr>
<a href="https://www.youtube.com/watch?v=s1vpVCrT8f4&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
