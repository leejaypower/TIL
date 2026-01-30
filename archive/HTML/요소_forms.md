# HTML 요소 - Forms

Form요소는 유저의 입력을 받아서 서버에 전달해주는 역할을 수행한다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Forms</title>
  </head>
  <body>
    <!-- Form -->
    <!-- label, input -->
    <form>
      <!-- fieldset, legend -->
      <fieldset>
        <legend>유저 정보</legend>
        <div>
          <label for="uid">아이디</label>
          <input id="uid" type="text" autocomplete="username" />
        </div>
        <div>
          <label for="upw">비밀번호</label>
          <input id="upw" type="password" />
        </div>
      </fieldset>
      <fieldset>
        <legend>배달 정보</legend>
        <div>
          <label for="tel">전화번호</label>
          <input id="tel" type="tel" />
        </div>
        <div>
          <label for="addr">주소</label>
          <input id="addr" type="text" />
        </div>
      </fieldset>
      <fieldset>
        <legend>주문 정보</legend>
        <div>
          <h2>사이즈 선택</h2>
          <input type="radio" name="size" value="small" checked />
          <label for="small">스몰</label>
          <input type="radio" name="size" value="medium" />
          <label for="medium">미디움</label>
          <input type="radio" name="size" value="large" />
          <label for="large">라지</label>
        </div>
        <div>
          <h2>토핑 추가</h2>
          <input type="checkbox" id="cheese" name="topping" value="cheese" />
          <label for="cheese">치즈 추가</label>
          <input type="checkbox" id="tomato" name="topping" value="tomato" />
          <label for="tomato">토마토 추가</label>
        </div>
        <div>
          <h2>추가 요청 사항</h2>
          <label for="requiredment">추가 요청 사항</label>
          <textarea id="requirement"></textarea>
        </div>
      </fieldset>
      <!-- button -->
      <!-- button의 기본 타입은 submit -->
      <button type="submit">주문하기</button>
      <button type="button">취소하기</button>
      <!-- 자바스크립트 동작 -->
    </form>
  </body>
</html>
```

- <b>input 요소</b>는 유저가 데이터를 입력하는 입력창을 나타낸다.

  - input 요소는 한줄로 된 데이터만 받을 수 있다.

  - <b>type 속성</b>을 사용해 다양한 데이터를 받을 수 있다.

    - text
    - password
    - radio
    - checkbox
    - hidden : 유저 눈에는 보이지 않지만 서버로 전송해야 하는 데이터
    - file
    - reset
    - <b>submit</b>

    <br>

  - <b>input 요소에서 주로 사용하는 속성</b>

    - checked
    - required
    - min
    - max
    - value
    - placeholder
    - minlength
    - maxlength
    - autocomplete : 브라우저가 제공하는 자동완성 사용 여부

    <br>

- <b>label 요소</b>는 유저가 어떤 데이터를 입력하는지에 대한 레이블을 기입한다.

  - for 속성을 활용해 input과 연결하여 label을 클릭할 때 input에 포커스를 가게 한다.

  - CSS를 이용한 custom input을 만들 때(주로 radio button, checkbox 등) label을 많이 사용한다.

<br>

- 유저가 form 요소 내부의 input에서 엔터를 치면, form 내부의 submit 이벤트를 실행시킨다.

  - submit 이벤트 실행을 위해 form 요소 내부에 submit 버튼이 있어야 한다.

  - submit 이벤트가 실행되면 onSubmit() 이벤트가 발생한다.

<br>

- form 요소에서 사용할 수 있는 속성

  - method 속성을 사용해 form 데이터를 보내는 방식을 GET과 POST 중 정할 수 있다.

  - action 속성을 사용해 백엔드 처리를 수행할 URL을 지정할 수 있다.

  - enctype 속성을 사용해 백엔드에서 데이터 처리를 수행할 때 어떤 인코딩 타입을 사용해야 하는 지 정할 수 있다.

<br>

- <b>fieldset 요소</b>는 form 내부에서 관심사가 묶여있는 <b>input 요소를 그룹화하여 구역을 나눌 때</b> 사용한다.

  - legend 요소는 그 구역의 제목을 나타낸다.

<br>

- <b>button 요소</b>의 기본 타입은 submit이다.

  - submit 동작이 아닌 자바스크립트를 동작시키고자 한다면 button의 type을 반드시 지정해야 한다.

  - form 내부의 값을 초기화하고자 한다면 reset이라는 type을 사용할 수 있다.

 <br>

- <b>radio 요소</b>는 여러 개의 선택지 중 하나를 선택할 수 있게 만드는 버튼을 생성한다.

  - 자바스크립트에서 name 값을 가지고 form 데이터를 받아오기 때문에 같은 주제의 선택지들은 name 값을 통일해야한다.

  - checked를 요소 내에 적으면 체크된 상태로 버튼이 활성화되어있다.

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
