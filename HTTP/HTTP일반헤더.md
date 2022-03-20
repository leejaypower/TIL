# HTTP 일반 헤더

<img src="./images/http_header.png" width="600px;">

- HTTP 전송에 필요한 모든 부가정보

  - 메시지 바디의 내용 및 크기, 압축, 인증, 요청 클라이언트, 서버 정보, 캐시 관리 정보

<br>

### 헤더 분류 - RFC2616 과거

- <b>General 헤더</b>: 메시지 전체에 적용되는 정보

  - 예) Connection : close

    <br>

- <b>Request 헤더</b>: 요청 정보(요청을 보낼 때 들어가는 헤더), 예) User-Agent: Mozila/5.0
- <b>Response 헤더</b>: 응답 정보(응답에 들어가는 헤더), 예) Server: Apache
- <b>Entity 헤더</b>: 엔티티 바디 정보, 예) Content-Type: text/html, Countent-Length: 3423

  - 메시지 본문(message body) 엔티티 본문(entity body)를 전달하는데 사용

  - 엔티티 본문은 요청이나 응답에서 전달할 실제 데이터

  - <b>엔티티 헤더는 엔티티 본문의 데이터를 해석할 수 있는 정보 제공</b> - 데이터 유형(html, json), 데이터 길이, 압축 정보 등등

<br>

HTTP 표준으로 2014년 RFC7230~7235가 등장하면서 RFC2616은 폐기된다.

<br>

### RFC723x 변화

- 엔티티(Entity) -> 표현(Representation)

- Representation = representation Metadata + Representation Data
- 표현 = 표현 메타데이터 + 표현 데이터

- 메시지 본문(message body)을 통해 표현 데이터 전달
- 메시지 본문 = 페이로드(payload)
- <b>표현은 요청이나 응답에서 전달할 실제 데이터</b>
- <b>표현 헤더는 표현 데이터를 해석할 수 있는 정보 제공</b> - 데이터 유형(html, json), 데이터 길이, 압축 정보 등등
- <i>표현 헤더는 표현 메타데이터와 페이로드 메시지를 구분해야하지만 이 학습에서는 생략한다.</i>

<br>

### 표현

실제 리소스는 추상적이기 때문에 클라이언트와 서버간 데이터를 주고받을 때는 서로 이해할 수 있게 변환하는 과정이 필요하다. <br>
그 과정에서 데이터를 HTML, JSON, XML 등으로 <b>"표현"</b> 한다.

- <b>Content-Type</b>: 표현 데이터의 형식

  - 미디어 타입, 문자 인코딩(text/html; charset=urf-8, application/json, image/png ...)

  <br>

- <b>Content-Encoding</b> : 표현 데이터의 압축 방식

  - 데이터를 전달하는 곳에서 압축 후 인코딩 헤더 추가

  - 데이터를 읽는 쪽에서 인코딩 헤더의 정보로 압축 해제(gzip, deflate, identity ...)

  <br>

- <b>Content-Language</b>: 표현 데이터의 자연 언어를 표현

  - ko, en, en-US

  - 클라이언트에서 언어를 바꾸는 부가적인 작업을 할 수 있다.

    <br>

- <b>Content-Length</b>: 표현 데이터의 길이

  - 바이트 단위

  - Transfer-Encoding(전송 코딩)을 사용하면 Content-Length를 사용하면 안됨

  <br>

- 표현 헤더는 전송, 응답 둘다 사용

<br>

### 협상(Content negotiation)

클라이언트가 선호하는 표현으로 서버에게 데이터를 달라고 요청하면 서버는 클라이언트가 원하는 우선순위에 맞춰서 표현 데이터를 만든다.

- Accept: 클라이언트가 선호하는 미디어 타입 전달
- Accept-Charset: 클라이언트가 선호하는 문자 인코딩
- Accept-Encoding: 클라이언트가 선호하는 압축 인코딩
- Accpet-Language: 클라이언트가 선호하는 자연 언어

- 협상 헤더는 요청시에만 사용한다.

<br>

예를 들어 다중 언어가 지원되는 서버가 있는데, 이 서버의 기본 언어는 영어이며, 한국어 지원이 가능하다.<br>
클라이언트가 정보를 주지 않으면 기본값인 영어로 브라우저 응답을 해준다.
클라이언트가 한국어 자연언어를 요청하면 서버는 한국어로 브라우저 응답을 보내게 된다.

<br>

### 협상과 우선순위 - Quality Values(q)

좀 더 복잡한 예시를 보자.<br>
기본 언어가 독일어고 영어가 지원되는 서버가 있고, 클라이언트는 한국어가 요청되지 않는다면 영어로 응답하길 원한다면?

```
GET /event
Accept-Language:ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
```

- Quality Values(q) 값을 사용한다.

- 0과 1사이에서 값이 클수록 높은 우선순위를 가진다.

- 생략하면 1을 가진다.

<br>

```
GET /event
Accept: text/*,text/plain,text/plain;format=flowed,*/*
```

- 구체적인 것(디테일이 많은 것)이 우선한다.

- 즉 다음과 같은 우선순위를 가진다.
  1. text/plain;format=flowed
  2. text/plain
  3. text/\*
  4. \*/\*
