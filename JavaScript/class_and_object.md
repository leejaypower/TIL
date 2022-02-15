# class와 object

## class

- class는 연관있는 데이터를 한 곳에 묶어놓는 컨테이너 같은 것이다.
- class 안에는 연관이 있는 fields(속성)와 methods(행동)가 묶여있다.
- fields만 있는 class는 data class라고 한다.
- class안에서 내부적으로 보이는 변수와 밖에서 보일 수 있는 변수를 나눠서 캡슐화한다.
- 또한 상속, 다형성들의 특징을 갖는데 이것은 객체지향언어의 특징이기도 하다.

- class는 청사진, template이라고 부르는데, class 자체에는 데이터가 들어있지 않고 template만 정의해놓고 한번만 선언한다.

- class를 이용해서 새로운 instance를 생성하면 object가 된다.

- object는 class를 이용해서 많이 만들 수 있고, class는 정의만 한 것이라서 실제로 메모리에 올라가진 않지만 데이터를 넣으면 object로 메모리에 올라가게 된다.

- 즉, class는 template에 속하고 이 template을 이용해서 데이터를 넣어 만드는 것이 object이다.

- class는 비교적 최근에 생긴 문법이다(ES6).

- 클래스가 도입되기 전에는 클래스를 정의하지 않고 바로 object를 만들 수 있는데, function을 이용해서 template을 만들었다.

- 기존에 존재하던 자바스크립트 위에 추가되었기 때문에 완전 새롭게 추가된 것이 아니라 기존에 존재하던 프로토타입을 베이스로 한것에 기반해서 간편하게 쓸 수 있도록 문법만 클래스가 추가된 것이다.

<br>

```javascript
class Person {
  //constructor

  constructor(name, age) {
    //fields : object를 만들 때 필요한 데이터
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const jay = new Person("jay", 27);
console.log(jay.name); // jay
console.log(jay.age); // 27
jay.speak(); // jay: hello!
```

<br>

### getter, setter

```javascript
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
  return this._age;
  }

  set age(){
    // if(value < 0){
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);
```

- 사람의 나이가 -1인것은 말이 되지 않는다. 이처럼 class를 사용하는 사용자가 실수해도 방어해줄 수 있는 것이 getter와 setter이다.

- age라는 getter, setter를 정의하는 순간, this.age는 메모리에 들어있는 데이터를 읽어오는 것이 아니라 getter를 호출하게 되며,

- = 를 써서 값을 할당하게 될 때는 바로 메모리의 값을 할당하는 것이 아니라 setter를 호출하게 된다.

- 따라서 메모리의 값에 접근하지 못하고 계속해서 반복되다가 call stack error(닫힘)가 발생하는 것을 방지하기 위해서 getter와 setter안에 쓰이는 변수 이름을 field 변수(메모리에 할당된 데이터를 가리키는 변수)이름과 다르게 설정해야 한다.

- 일반적으로 변수앞에 \_ (언더바)를 붙인다.

- field에는 \_age가 있는데 .age로 호출 및 값할당이 가능한 이유는 내부적으로 getter와 setter를 이용하기 때문이다.

<br>

### (여기서 잠깐) 자바스크립트의 this

- 함수 내부에서 this 키워드를 사용하게 되면 해당 메소드를 포함한 객체를 가리키게 된다.
- 어떤 html요소에서 어떤 함수를 실행하게 되고, 파라미터값에 this를 넣으면, this가 가리키는 값은 그 html element가 된다.
- this를 사용해서 element를 인자로 넘길 수 있는 것이다.
- 또한 다른 예를 들어서, form안에 text input과 button이 있는데, button을 클릭했을 때 this.form.name을 가져온다고 가정하면 여기서 this는 부모인 form을 말한다.

<br>

### fields (public, private)

```javascript
class Experiment {
  publicField = 2;
  #privateField = 0;
}
```

- 최근에 추가된 문법으로 public와 private가 있다.

- 변수이름앞에 #을 붙이면 private field가 되어서 클래스 내부에서만 값이 보여지고, 접근 및 변경이 가능하다.

- 아직 최신브라우저에서도 지원이 되지 않기 때문에(2020년 기준) 쓰려면 barbel을 이용해야 한다.

<br>

### static

```javascript
class Article {
  static publisher = "Genius jay";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher); // undefined
console.log(Article.publisher); // Genius jay
Article.printpublisher(); // Genius jay
```

- 데이터와 상관없이 class가 갖고 있는 고유한 값과, 동일하게 반복적으로 사용되어지는 method들 앞에 static을 붙이면 object와 상관없이 class 자체에 연결된다.

- static은 object마다 할당되어지는 것이 아니라 클래스 자체에 붙어있기 때문에 object의 property로 호출하면 값이 나오지 않는다.

- static 함수를 호출할때는 class 이름을 이용해야 한다.

- object, 들어오는 데이터에 상관없이 공통적으로 class에서 쓸 수 있는거라면 static과 static method를 이용해서 작성하는 것이 메모리의 사용을 줄일 수 있다.

<br>

### 상속 & 다형성

```javascript
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea()); // 200
```

- class에서 extends를 이용해 다른 클래스를 연결하여 연장할 수 있다.

- 이처럼 상속을 이용하면 공통되어지는 것들을 일일이 작성하지 않고도 재사용할 수 있다.

- extends 후 필요한 함수만 재정의해서 사용할 수도 있다.(오버라이딩)

- 함수를 재정의해서 사용하게 되면 원래 extends한 클래스의 함수는 불러와지지 않고, 필요하다면 super. 을 앞에 붙여서 불러오면 된다.

<br>

### instanceOf operator

```javascript
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof object);
```

- instanceof 왼쪽에 있는 object가 오른쪽에 있는 클래스의 instance인지 아닌지 즉, object가 이 클래스를 이용해서 만들어진 아이인지 아닌지 확인할 때 쓰인다.

- 자바스크립트에서 만든 모든 object 클래스들은 자바스크립트에 있는 object를 상속한다!

<br>

## object

```javascript
const obj1 = {}; // 'object literal' syntax
const obj2 = newObject(); // 'object constructor' syntax

function print(person) {}

const jay = { name: "jay", age: 27 };

jay.hasBrother = true; // property 추가 가능
delete jay.hasBrother; // property 삭제
```

- 자바스크립트는 property를 이후에 추가하거나 삭제하는 것이 가능한 아주 유연한 언어이다.
- 하지만 이렇게 너무 동적으로 코딩하면 에러가 발생하기 쉽고, 유지보수가 어렵다.

<br>

> <b>object = {key : value};<br>
> object는 key와 value의 집합체이다.</b>

<br>

```javascript
console.log(jay.name);
console.log(jay["name"]); // computed properties

function printValue(obj, key) {
  console.log(obj.key); // undefined
  console.log(obj[key]);
}

printValue(jay, "name"); // jay
```

- object의 property를 불러올때 object.property명으로 불러오는 방법과<br>
  object["property명"]으로 불러올 방법이 있다.

- dot(.)을 사용해서 불러오는 것은 정확하게 어떤 key가 필요한지 알고 있을 때이다.

- runtime에서 key가 결정될때(실시간으로 원하는 키의 값을 받아오고 싶을때)는 computed properties를 쓰게 된다.

- 예를 들어 사용자에게 input으로 object의 key를 받아서 출력하고 싶은데, 코딩하는 시점에서는 사용자가 어떤 key를 선택하게 될지 모를 때 사용한다.

```javascript
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("jay", 27);

// Contructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
```

- 일반적으로 다른 계산을 하지않고 순수하게 object를 생성하는 함수(constructor function)의 이름은 대문자로 시작한다.

- 클래스의 constructor(생성자)가 object를 만드는 것 처럼 변수명 = new 함수명()으로 호출하고 this를 통해서 작성한다.

<br>

```javascript
console.log("name" in jay);
```

- 'in' operator는 object안에 'key'가 있는지 없는지 확인할 수 있다. 있으면 true, 없으면 false가 반환된다.
- 참고로 정의되어있지 않은 key를 dot(.)으로 호출하면 undefined가 출력된다.

<br>

```javascript
for (key in object) {
  console.log(key);
}

// for(value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value); // 1,2,3,4
}
```

- for(key in obj)는 obj가 가지고 있는 key들이 블럭을 돌때마다 key라는 지역변수에 할당이 되어진다.
  <br>즉 모든 key들을 받아올 수 있다.

- for (value of array)는 배열, 리스트와 같은 순차적인 자료구조들을 반복해서 value에 할당해 값을 가져올 수 있다.

<br>

```javascript
//cloning
const user = {name: "jay", age ="27"};
const user2 = user; // reference 값이 같음
user2.name = "coder";
console.log(user); // coder

// old way
const user3 = {};
for(key in user){
  user3[key] = user[key];
}
console.log(user3);

// Object.assign(dest, [obj1, obj2, obj3...])
const user4 = {};
Object.assign(user4, user);

// 혹은
const user4 = Object.assign({}, user);
```

- 같은 객체 -> 레퍼런스를 가리키고 있는 변수가 두개가 있을때, <br>그중 한 변수의 프로퍼티 값을 변경하게 되면 나머지 변수도 같은 값을 갖게 된다. <br>같은 메모리값을 갖고 있기 때문이다.

- object.assign(target, 복사하고자 하는 object1, object2)

<br>

```javascript
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixedd = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
```

- 주의할 점은 assign은 복사하고자하는 프로퍼티의 값이 중복될 경우, 뒤의 값을 덮어씌운다.

<br>
<hr>
<a href="https://www.youtube.com/watch?v=_DLhUBWsRtw&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=6">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
