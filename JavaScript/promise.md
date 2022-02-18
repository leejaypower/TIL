# Promise

> <b>promise는 javascript에서 비동기를 간편하게 처리할 수 있도록 도와주는 object이다.</b>

<br>

- promise는 정해진 기능을 정상적인 수행한다면 성공의 메시지와 처리된 결과값을 전달해주고, 예상치 못한 문제가 발생했다면 에러를 전달한다.

- promise는 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 쓰이는 내장 object이다. 이를 이해하기 위해서는...

  - <b>state (상태)</b>: 기능을 수행 중인지, 수행완료 및 성공인지 실패인지에 대한 상태를 이해하고

  - 우리가 원하는 데이터를 제공하는 사람(<b>producer</b>), 와 그 데이터를 사용하는 사람(<b>consumer</b>)에 대한 차이를 이해해야한다.

```javascript
// State : pending(수행중) -> fulfilled(완료) or rejected(문제발생)

// Producer vs Consumer

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log("doing something...");

  // 데이터를 받아오는 과정(시간)을 가정하기 위해서 setTimeout함수를 사용한다.
  setTimeout(() => {
    resolve("jay");
    // 혹은
    reject(new Error("no network"));
  }, 2000);
});
// 여기서 jay는 정상적으로 네트워크에서 받아온, 혹은 파일에서 읽어온 (가공된)데이터이다. 이를 resolve 콜백함수에 전달한다.

// 2. Consumers : then, catch, finally

promise
  .then((value) => {
    console.log(value); // jay
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
```

- promise는 두가지의 콜백함수를 받는다.<br>
  기능을 정상적으로 수행해서 마지막으로 최종결과를 전달하는 <b>resolve 함수</b>, 문제가 발생하면 호출되는 <b>reject 함수</b>이다.

- 네트워크에서 데이터를 받아오거나 파일에서 데이터를 읽아오는 과정은 시간이 걸리기에 비동기적으로 처리하게 되는 것이 좋다.

- <b>promise를 만드는 순간, 우리가 전달한 콜백함수가 바로 실행이 된다.</b><br>
  이 말은 네트워크 통신을 하는 코드를 작성했다면 바로 네트워크 통신을 수행한다는 뜻이다.

- 따라서 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면 다른 방법으로 코드를 작성해야한다.

- return된 promise에 catch를 다시 호출한다.

- finally는 성공여부와 관계없이 마지막에 무조건 호출된다.

<br>

```javascript
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }); // 5
  })
  .then((num) => console.log(num));
```

- then에서 값을 바로 전달할 수도 있고, promise를 전달해도 된다.
- 이처럼 비동기적인 것들을 묶어서 처리할 수도 있다.

<br>

```javascript
// 4. Error handling
// 계속해서 서버에서 데이터를 받아오는 과정을 setTimeout으로 대체한다.
const getChicken = () =>
  newPromise((resolve, reject) => {
    setTimeout(() => resolve("chicken"), 1000);
  });

const getEgg = (chicken) =>
  newPromise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${chicken} => egg`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried egg`), 1000);
  });

getChicken() //
  .then(getEgg)
  .catch(error => {
    return "Bread";
  })
  .then(cook)
  .then(console.log);
//  .then((chicken) => getEgg(chicken))
//  .then((egg) => cook(egg))
//  .then((meal) => console.log(meal));
  .catch(console.log);

// 결과: chciken => egg => fried egg
```

- 콜백함수를 전달할 때 받아오는 value 하나만 바로 호출하는 경우에는 생략해서 작성할 수 있다.

- prettier로 포맷이 한줄로 바뀔 경우 가독성이 안좋기 때문에 주석표시를 하나 달아서 밑으로 내리도록 한다.

- 에러를 핸들링하지 않으면 uncaught error가 발생한다.

- <i>전체적인 promise chain에 문제가 발생하지 않도록</i>, 에러 처리를 하는 것이 중요하다.

<br>
<hr>
<a href="https://www.youtube.com/watch?v=JB_yU6Oe2eE&t=1389">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
