# 변수와 스코프(Variable & Scope)

변수의 범위는
<b>global scope(전역스코프), block scope(지역 스코프)</b>에 따라 나뉜다.

<b>global scope안의 변수들은 어플리케이션의 시작부터 끝까지 메모리에 담겨있기 때문에 최소한으로 쓰는것이 바람직하다.</b>

가능하면 클래스나 함수, if나 for loop 필요한 부분에서만 정의해서 쓰는 것이 좋다.

<br>

### var변수의 hoisting

- <b>hoisting(호이스팅)은 어디에 선언했는지에 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다.</b>

- var는 blockscope를 무시한다. block안에서 변수를 선언해도 어디서나, 아무곳에서나 호출이 가능하다.<br>

- 이러한 유연함 때문에 프로젝트의 규모가 커지기 시작하면 오류가 발생하기 쉽다.

- <b>값이 계속 변경될 수 있는 변수타입</b>을 'Mutable'이라고 한다.<br>
- <b>var, let</b>과 같은 변수타입과 <b>모든 object의 property</b>값은 변경이 가능하다.<br> 또한 자바스크립트에서는 기본적으로 모든 object는 변경이 가능하다.

- <b>변경할 수 없는 변수타입</b>은 'Immutable'로 constant의 <b>const</b> 변수가 있다. 또한 object중에서도 <b>frozen object</b>도 포함된다.

<br>

### always const, sometimes let, and never var!

- 변수 var는 언제 어디서든 값을 업데이트할 수 있는 변수다.<br>
- 이 변수의 문제는 실수로 변수의 값을 업데이트해도 언어가 말해주지 않는다는 것이다.<br>

- 절대 바뀌지 않는 값을 만들고 싶을 때 const를 쓰고, 값을 업데이트 하고 싶은 경우에는 let을 쓴다.</b>
  이와 같은 변수를 통해 코드를 짠 사람의 의도를 파악할 수 있다.

- 따라서 코드에서 의미를 찾을 수 있는 const나 let을 사용하고, 이를 통해 값을 보호하는 것이 좋다.

<br>
