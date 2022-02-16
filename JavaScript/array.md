# array

```javascript
const arr1 = new Array();
const arr2 = [1, 2];

console.log(arr2[0]); // 1
console.log(arr2[1]); // 2
console.log(arr2[arr2.length - 1]); // 2
```

- 배열의 인덱스로 값에 접근한다.
- 인덱스는 0부터 시작하며, 총 배열의 길이에서 -1을 빼면 마지막 인덱스에 접근할 수 있다.

<br>

### 배열의 반복문

```javascript
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let item of array) {
  console.log(item);
}

array.forEach(function (item, index) {
  console.log(item, index);
});

// arrow function 사용
array.forEach((item) => console.log(item));
```

- 자바스크립트에서 배열의 반복문은 <b>일반 for문,
  for of, foreach</b>를 사용해 작성할 수 있다.

- forEach는 전달한(파라미터의) 콜백함수를 배열의 값마다 반복해서 호출한다.

- 화살표함수를 사용해서 더 간단히 작성할 수 있다.

<br>

### array의 삽입, 삭제, 복사

```
array.push() : 뒤에서 삽입
array.unshift() : 앞에서 삽입
array.pop() : 뒤에서 삭제 - 지워진 값을 return
array.shift() : 앞에서 삭제
```

- <b>shift와 unshift는 push와 pop보다 실행속도가 느리다.</b> <br>전체 데이터의 위치가 움직여야 되기때문이다.
- 그래서 가능하면 shift와 unshift는 사용하지 않는 것이 좋다.<br> 뒤에서 데이터에 접근하는 것이 빠르다.

- <b>array.splice(시작인덱스 삭제개수, 넣을아이템) : 지정된 위치에서 데이터 삭제와 삽입</b><br>
  deletecount를 지정하지 않으면 지정한 인덱스부터 마지막까지의 데이터를 지운다.<br>
  마지막 인자에 넣을 아이템을 두는 것은 선택이다.

- <b>array.concat</b> : 배열끼리 합해서 새로운 배열을 반환

- <b>array.indexOf(찾는 아이템) : 배열안에서 찾는 아이템의 인덱스 반환</b>
  <br>아이템 값이 중복일 경우 먼저 위치한 아이템 반환.
  <br>아이템이 없을 경우 -1을 반환한다.

- array.lastIndexOf(찾는 아이템) : 아이템 값이 중복일 경우 마지막에 위치한 아이템 반환

- array.includes(찾는 아이템) : 찾는 아이템이 배열안에 있는지 없는지 boolean값 (true of false) 반환

<br>

### 유용한 배열 함수들

- <b>array.join(구분자): 배열에 있는 모든 아이템을 구분자로 나눠서 string으로 반환</b> <br>
  구분자를 넣지않으면 기본값으로 콤마가 들어감.

- <b>string.split(구분자, 리턴받을 사이즈 지정):
  String을 배열로 반환</b>

- <b>array.reverse</b>: 배열안 item의 순서를 거꾸로 만들어 반환

- <b>array.slice(start인덱스, end인덱스):
  배열의 특정한 부분을 "새로운 배열"로 반환 -> splice와의 차이점</b>
  <br>end 인덱스에 해당하는 아이템은 배제된다는 것을 주의! 즉, 마지막 인덱스전까지의 아이템까지 반환한다.

- <b>array.find</b>: 배열에 있는 모든 요소가 순차적으로 호출되는데, 반환이 true라면 바로 find 메소드가 멈추고
  "<i>처음으로 true가 된 요소</i>" 를 반환하게 된다.

  ```javascript
  array.find(function (item, index) {
    return item.요소 + 조건;
  });

  // 혹은
  array.find((item) => item.요소 + 조건);
  ```

- <b>array.filter</b>: 조건에 맞는 요소만 받아올 때 사용

  ```javascript
  array.filter((item) => item.요소 + 조건);
  ```

- <b>array.map</b>: 배열안에 있는 모든 요소들을 주어진 콜백함수(원하는 함수)를 거쳐서 다른 값으로 매핑되어 반환된다.

  ```javascript
  array.map((item) => item.요소);
  ```

- <b>array.some</b>: 조건에 맞는 item의 존재 여부를 boolean값으로 반환

  ```javascript
  array.some((item) => item.요소 + 조건);
  ```

- <b>array.every</b>: <u>모든 요소들이</u> 조건에 맞으면 true, 아니면 false

- <b>array.reduce</b>: 배열에 있는 값을 누적해서 사용해야 할 때 사용

  ```javascript
  array.reduce(prev, curr) => {
    return curr;
  };
  ```

  curr은 배열안의 요소가 하나씩 전달되고, prev는 return한 값이 들어가서
  다음에 curr가 호출될때 prev의 그 다음 요소가 나오게끔 연결된다.<br>
  예를들어 prev + curr을 return하게 되면, 전체 요소의 값이 누적해서 더해진 값이 출력되게 된다.

- array.sort: 정렬할 때 쓰이는 API

  ```javascript
  sort((a, b) => a - b);
  ```

  b가 a보다 클 경우 -의 값으로 반환<br>첫번째 값(이전값)이 두번째 값(현재값)보다 작다고 간주되어 정렬됨.<br>
  즉, 오름차순 정렬.

<br>
<hr>
<a href="https://www.youtube.com/watch?v=yOdAVDuHUKQ&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=8">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
```
