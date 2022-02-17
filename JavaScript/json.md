# JSON

- 브라우저에서 동작하는 웹사이트나, 웹 어플리케이션 같은 client들이 어떻게 서버와 통신할 수 있는지를 정의한 것이 <b>HTTP</b>이다. <br>

- HTTP는 <b>Hypertext Transfer Protocal</b>의 약자로써 어떻게 Hypertext를 서로 주고받을 수 있는지를 규약한 프로토콜의 하나이다.

- 여기서 Hypertext는 하이퍼링크뿐만 아니라 문서나 이미지 파일들을 포함한다.

- client가 server에게 데이터를 <b>request</b>할 수 있고 server는 그에 맞는 <b>response</b>을 client에 보내준다.

- 이렇게 HTTP를 이용해 서버에서 데이터를 받아오는 방법으로는<b>
  AJAX(Asynchronous Javasript and XML)</b>가 있다.<br>
  웹페이지에서 동적으로 서버에서 데이터를 주고받을 수 있는 기술을 의미한다.

- <b>XMLHttpRequest Object</b>는 브라우저 API가 제공하는 오브젝트중 하나로, 이를 이용하면 간단하게 서버에게 데이터를 요청하고 받아올 수 있다.

- 최근 브라우저 API에 추가된
  <b>fetch()API</b>을 이용하면 간편하게 데이터를 주고받을 수 있다.

- XML은 마크업 언어 중 하나로 태그를 이용해서 데이터를 나타낸다. 하지만 불필요한 태그로 인해 가독성이 떨어져서 이제 잘 사용하지 않고 ECMA3부터 <b>JSON</b>을 사용한다.

- JSON(Javascript Object Notation)은 텍스트를 기반으로 하기 때문에 가볍고, 간단한 포맷이다.<br> 데이터를 서버와 주고받을 때 데이터를 serialization(직렬화)하기 위해서 사용한다.<br><b>언어와 플랫폼에 상관없이 지원된다.</b> <br> key와 value값으로 이루어져있다.

- JSON을 이용해 웹 어플리케이션의 object를 서버에 전송할 때는 <b>key와 value의 string타입</b>으로 서버에 전송하고,<br>서버에서 데이터를 받아올 때도 string 타입으로 받아온 후 object로 변환해서 브라우저에 표기한다.

- <b>JSON.stringify()</b>: JSON의 형태를 string형태로 바꾼다.

  ```javascript
  let json = JSON.stringify(true);
  // boolean 타입도 변환이 가능하다.
  ```

  - stringify를 이용해 원하는 property만 가져올 수 있다.

    ```javascript
    json = JSON.stringify(object, [property1, property2]);
    ```

  - 또한 콜백함수를 이용해 변환할 때 object가 만들어지는 과정을 조정할 수 있다.

    ```javascript
    json = JSON.stringify(object, (key, value) => {
      console.log(key, value);
      return key === "name" ? "jay" : value;
    });
    ```

<br>

- <b>JSON.parse()</b>:
  string형태로 있는 JSON데이터를 다시 JSON형태로 변환한다.

  ```javascript
  json = JSON.stringify(object);
  const obj = JSON.parse(json);
  ```

- <b>JSON에는 symbol 같이 자바스크립트에만 있는 특별한 데이터는 포함되지 않는다.<br>
  또한 오브젝트 속 함수도 포함되지 않는다!</b>

- New Date()와 같은 object를 데이터로 사용하면 stringify를 이용할 때 값은 string 형태로 고정된다.<br>
  여기서 다시 parse로 JSON형태로 바꿔봐도 값은 고정된 그대로이다.<br>
  이런 경우를 세밀히 처리하려면 parse 매개변수에 콜백함수를 넣어서 반환하면 된다.

<br>

### JSON 관련 유용한 사이트

- [JSON Diff](http://www.jsondiff.com/) : 서버에 요청했을 때 데이터의 다른점을 찾아준다. 문제를 디버깅할 때 유용하다.

- [JSON validator](https://tools.learningcontainer.com/json-validator/) : JSON 데이터 문법 체크, JSON이 유효한지 확인해준다.

<br>
<hr>
<a href="https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10">드림코딩 엘리 자바스크립트 강의</a> 로 공부한 내용입니다.
