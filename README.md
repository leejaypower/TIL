# TIL (Today I Learned)

> 💡 **"내가 무엇을 배웠고, 어디에 있는지 알려주는 지도"**

학습한 내용의 네비게이션 인덱스입니다.  
주 콘텐츠는 Notion(개념+사고)과 Playground(코드+실험)에 있으며,  
TIL은 이들을 연결하고 매핑하는 역할을 합니다.

---

## 🗂️ 학습 인덱스

### 🏗️ HTML

| 주제 | 핵심 개념 | 실무 연결 | 학습 자료 |
|------|-----------|-----------|-----------|
| 웹 표준 | 시맨틱 마크업, 문서 구조 | SEO, 접근성 개선 | [Archive](archive/HTML/웹표준.md) |
| 웹 접근성 | ARIA, 키보드 내비게이션 | 장애인 사용자 지원, 법적 요구사항 준수 | [Archive](archive/HTML/웹접근성.md) 
| 웹 브라우저 | 렌더링 엔진, 파싱 | 성능 최적화 이해 | [Archive](archive/HTML/웹브라우저.md) 
| Document Metadata | meta, title, link | SEO, SNS 공유 최적화 | [Archive](archive/HTML/요소_document_metadata.md) 
| Sections | header, nav, main, article | 문서 구조화, 스크린 리더 | [Archive](archive/HTML/요소-sections.md) 
| Grouping Content | div, p, ul, ol | 컨텐츠 그룹화, 스타일링 | [Archive](archive/HTML/요소_grouping.md) 
| Text Semantics | a, strong, em, code | 의미론적 텍스트 표현 | [Archive](archive/HTML/요소_text_level_semantics.md) 
| Embedded Content | img, video, iframe | 미디어 삽입, 성능 최적화 | [Archive](archive/HTML/요소_embedded_content.md) 
| Tabular Data | table, tr, td | 데이터 표 구조화 | [Archive](archive/HTML/요소_tabular_data.md) 
| Forms | input, select, validation | 사용자 입력 처리, 유효성 검사 | [Archive](archive/HTML/요소_forms.md) 
| Interactive Content | details, dialog | 인터랙티브 UI 구현 | [Archive](archive/HTML/요소_interactive_content.md) 

---

### 🎨 CSS

| 주제 | 핵심 개념 | 실무 연결 | 학습 자료 |
|------|-----------|-----------|-----------|
| Flexbox | 1차원 레이아웃, justify-content, align-items | 헤더, 카드 리스트, 버튼 그룹 배치 | [Archive](archive/CSS/flexbox.md) 
| Grid | 2차원 레이아웃, grid-template-areas | 복잡한 페이지 레이아웃, 반응형 그리드 | [Archive](archive/CSS/grid.md) 
| SCSS | 변수, 중첩, 믹스인, 함수 | 스타일 재사용, 테마 관리, 유지보수성 | [Archive](archive/CSS/SCSS.md) 

---

### 🛞 JavaScript

| 주제 | 핵심 개념 | 실무 연결 | 학습 자료 
|------|-----------|-----------|-----------|
| **기본 문법** |
| 변수와 스코프 | var, let, const, 블록 스코프, 호이스팅 | 변수 선언 위치 결정, 전역 오염 방지 | [Archive](archive/JavaScript/variable_and_scope.md) 
| 데이터 타입 | 원시값 vs 참조값, null vs undefined | 불변성, 객체 복사 전략 (얕은/깊은 복사) | [Archive](archive/JavaScript/datatype.md) 
| 연산자 | ==, ===, 논리 연산자, 단축 평가 | 조건문 간결화, null 체크 패턴 | [Archive](archive/JavaScript/operator.md) 
| 함수 | 선언식 vs 표현식, 화살표 함수 | 호이스팅 이해, this 바인딩 | [Archive](archive/JavaScript/function.md) 
| 배열 | map, filter, reduce, spread | 데이터 변환, 불변 업데이트 패턴 | [Archive](archive/JavaScript/array.md) 
| 클래스와 객체 | class 문법, constructor, 프로퍼티 | 객체 지향 설계, 컴포넌트 모델링 | [Archive](archive/JavaScript/class_and_object.md) 
| JSON | 직렬화, 역직렬화, stringify, parse | API 데이터 전송, localStorage 저장 | [Archive](archive/JavaScript/json.md) 
| **실행 모델** |
| 실행 컨텍스트 | 콜 스택, 스코프 체인, this | 디버깅, 메모리 누수 추적 | [Archive](archive/JavaScript/execution_context.md) 
| Call Stack | LIFO, 스택 오버플로우, 호출 스택 | 재귀 함수 디버깅, 에러 트레이싱 | [Archive](archive/JavaScript/call_stack.md) 
| 클로저 | 렉시컬 스코프, 함수 스코프 | 모듈 패턴, 상태 은닉, 팩토리 함수 | [Playground](https://github.com/leejaypower/play-ground/blob/main/javascript/lexical-closure.js) 
| this 바인딩 | 호출 방식별 바인딩 규칙, call/apply/bind | 이벤트 핸들러, 메서드 설계, 클래스 메서드 | [Playground](https://github.com/leejaypower/play-ground/blob/main/javascript/this.js) 
| 프로토타입 | 프로토타입 체인, \_\_proto\_\_, prototype | 상속 구현, Class vs Factory 함수 선택 | [Playground](https://github.com/leejaypower/play-ground/blob/main/javascript/prototype.js) 
| Proxy | Proxy, Reflect, 가로채기 | 반응성 시스템 구현 (Vue 3 reactive) | [Playground](https://github.com/leejaypower/play-ground/blob/main/javascript/proxy.js) 
| Reflect | Reflect API, 메타프로그래밍 | Proxy 핸들러 구현 | [Playground](https://github.com/leejaypower/play-ground/blob/main/javascript/reflect.js) 
| 동기성과 블로킹 | 싱글 스레드, 메인 스레드 점유 | 무한 스크롤 성능, UI 멈춤 방지, Web Worker 활용 | [Notion](https://www.notion.so/JS-2f4664cd671680d392d2d9e9fa542d56) 
| 비동기 스케줄링 | Event Loop, Task Queue, Microtask Queue | Promise vs setTimeout 실행 순서 이해 | [Notion](https://www.notion.so/2e1664cd67168023a046f4789ad7ff7a) 
| **비동기 처리** |
| Callback | 콜백 함수, 콜백 지옥 | 레거시 API 래핑, 에러 핸들링 패턴 | [Archive](archive/JavaScript/callback.md) 
| Promise | 체이닝, catch, finally, Promise.all | API 순차/병렬 호출, 에러 전파 | [Archive](archive/JavaScript/promise.md) 
| async/await | 동기적 코드 작성, try-catch | 복잡한 비동기 플로우, 가독성 향상 | [Archive](archive/JavaScript/async_await.md) 
| **브라우저 API** |
| async & defer | script 로딩 전략 | 성능 최적화, 렌더링 블로킹 방지 | [Archive](archive/JavaScript/async_and_defer.md) 

---

### 🚥 TypeScript

| 주제 | 핵심 개념 | 실무 연결 | 학습 자료 
|------|-----------|-----------|-----------|
| 기본 타입 | 타입 추론, 타입 단언, union, intersection | API 응답 타입 정의, null 안전성 | [Playground](https://github.com/leejaypower/play-ground/blob/main/typescript/type/basic-type.ts) 
| Type vs Interface | 확장 방식, 선언 병합, 유니온 타입 | 외부 라이브러리 타입 확장, 컴포넌트 Props 정의 | [Playground](https://github.com/leejaypower/play-ground/blob/main/typescript/type/type-vs-interface.ts) 
| 제네릭 | 재사용 가능한 타입, 타입 파라미터 | 공통 컴포넌트, 유틸 함수, API 래퍼 | [Playground](https://github.com/leejaypower/play-ground/blob/main/typescript/type/generic.ts) 
| 유틸리티 타입 | Partial, Pick, Omit, Record, ReturnType | 폼 데이터 부분 수정, 타입 변환, API 응답 매핑 | [Playground](https://github.com/leejaypower/play-ground/blob/main/typescript/type/utility-type.ts) 
| OOP | class, interface, 추상화, 캡슐화 | 아키텍처 설계, DIP 원칙 적용 | [Playground](https://github.com/leejaypower/play-ground/blob/main/typescript/oop/) 

---

### 📡 HTTP

| 주제 | 핵심 개념 | 실무 연결 | 학습 자료 
|------|-----------|-----------|-----------|
| 인터넷 네트워크 | IP, TCP/IP, UDP, PORT | 웹 통신 기초 이해, 네트워크 디버깅 | [Archive](archive/HTTP/인터넷_네트워크.md) 
| HTTP 기본 | 요청/응답, 무상태성, 비연결성 | REST API 이해, 세션/쿠키 설계 | [Archive](archive/HTTP/HTTP기본.md) 
| HTTP 메서드 | GET, POST, PUT, DELETE, PATCH, 멱등성 | REST API 설계, 안전한 메서드 선택 | [Archive](archive/HTTP/HTTP메서드.md) 
| HTTP 메서드 활용 | 클라이언트-서버 아키텍처, URI 설계 | RESTful API 설계 원칙 | [Archive](archive/HTTP/HTTP메서드활용.md) 
| HTTP 상태코드 | 2xx, 3xx, 4xx, 5xx 응답 코드 | 에러 핸들링 전략, 사용자 피드백 | [Archive](archive/HTTP/HTTP상태코드.md) 
| HTTP 헤더 - 일반 | Content-Type, Authorization, User-Agent | API 요청 설정, 인증 구현 | [Archive](archive/HTTP/HTTP일반헤더.md) 
| HTTP 헤더 - 캐시 | Cache-Control, ETag, Last-Modified | 네트워크 성능 최적화, 조건부 요청 | [Archive](archive/HTTP/HTTP헤더_캐시와조건부요청.md) 

---

### 🔮 React

| 주제 | 핵심 개념 | 실무 연결 | 학습 자료 
|------|-----------|-----------|-----------|
| 클린 코드 패턴 | Props 설계, 관심사 분리, 컴포넌트 추상화 | 컴포넌트 재사용성 향상, 유지보수성 | [Learn React](https://github.com/leejaypower/learn-react#3-react%EB%A5%BC-%EC%9C%84%ED%95%9C-clean-code) 

---

### 🛡️ Next.js

| 주제 | 핵심 개념 | 실무 연결 | 학습 자료 
|------|-----------|-----------|-----------|
| 사전 렌더링 | SSG, SSR, ISR 차이와 선택 기준 | SEO vs 실시간성 트레이드오프, 렌더링 전략 | [Archive](archive/Nextjs/pre-rendering.md) 
| 사전 페칭 | Prefetching, Link 컴포넌트 최적화 | 페이지 전환 속도 개선, 사용자 경험 향상 | [Archive](archive/Nextjs/pre-fetching.md) 
| 데이터 페칭 | getServerSideProps, getStaticProps, getInitialProps | 렌더링 전략별 데이터 로딩 방식 | [Archive](archive/Nextjs/data-fetching.md) 
| 페이지 라우터 | 동적 라우팅, 중첩 라우트, catch-all | 복잡한 SPA 구조 설계, URL 파라미터 처리 | [Archive](archive/Nextjs/page-router.md) 

---

### 🩻 컴퓨터 과학 (CS50)

| 주제 | 핵심 개념 | 실무 연결 | 학습 자료 
|------|-----------|-----------|-----------|
| 컴퓨팅 사고 | 추상화, 알고리즘적 사고, 문제 분해 | 복잡한 요구사항 분석, 설계 접근법 | [Archive](archive/CS50/컴퓨팅사고.md) 
| C언어 | 컴파일, 메모리 관리, 포인터 | 저수준 동작 이해, 성능 최적화 인사이트 | [Archive](archive/CS50/C언어.md) 
| 배열 | 메모리 연속성, 인덱싱, 시간 복잡도 | 데이터 구조 선택, 성능 고려사항 | [Archive](archive/CS50/배열.md) 
| 알고리즘 | 정렬, 탐색, Big-O 표기법 | 대량 데이터 처리 최적화, 성능 분석 | [Archive](archive/CS50/알고리즘.md) 
| 메모리 | 스택, 힙, 포인터, 메모리 누수 | 메모리 누수 방지, 성능 디버깅 | [Archive](archive/CS50/메모리.md) 
| 자료구조 | 배열, 연결 리스트, 트리, 해시 테이블 | 적절한 자료구조 선택, 성능 트레이드오프 | [Archive](archive/CS50/자료구조.md) 

---

## 📦 Archive

과거에 TIL 레포지토리 내부에서 작성 및 관리했던 학습 노트들입니다.
기술 개념과 문법 정리 중심이며, 추후 Notion 문서로 이관될 수 있습니다.

- [JavaScript 기초 문법](archive/JavaScript/)
- [HTML 요소 정리](archive/HTML/)
- [CSS 레이아웃](archive/CSS/)
- [HTTP 프로토콜](archive/HTTP/)
- [Next.js 학습 노트](archive/Nextjs/)
- [CS50 강의 정리](archive/CS50/)
