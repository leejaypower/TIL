## Next.js의 Page Router 
- 현재 많은 기업에서 사용되고 있는 안정적인 라우터
- React Router처럼 페이지 라우팅 기능을 제공함
  - 페이지 분할 및 이동 기능을 제공함
- 파일명 기반의 페이지 라우팅을 제공함
```
pages/
  - index.js <- ~/
  - about.js <- ~/about
  - contact.js <- ~/contact
```

- 폴더명 기반의 페이지 라우팅을 제공함
- 대괄호로 묶으면 동적 경로에 대응할 수 있음
```
pages/
  - about/
    - index.js <- ~/about
    - [id].js <- ~/about/1
  - users/
    - [id].js <- ~/users/1
```


