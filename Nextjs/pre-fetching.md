## Next.js의 Pre-Fetching

- **현재 사용자가 보고 있는 페이지에서 이동할 가능성이 있는 모든 페이지**들을 사전에 미리 불러놓는 기능
- 사용자가 페이지를 이동할 때 빠르게 렌더링 할 수 있도록 함

- Next.js는 작성한 리액트 컴포넌트들을 페이지 별로 **스플리팅**해서 저장을 미리 해둔다.
  - Next.js의 내장 webpack 설정이 이 작업을 처리한다.
- 현재 페이지에 필요한 JS 번들만 전달된다.
- 모든 페이지에 대한 번들 파일을 받게된다면 `hydration`이 늦어지고 `사용자의 인터렉션 가능 시간(TTI: Time To Interact)`도 늦어질 것이다.

- 위 맥락대로라면, 페이지를 이동할 때 이동하려는 페이지에 대한 JS 코드를 추가로 불러와야하는데, 이 때 `hydration`은 빨라질 수 있곘지만 페이지 이동은 비효율적일 수 있다는 문제가 있다.
- `Pre-Fetching`은 이러한 문제를 해결하기 위한 기능이다.

- 개발 모드가 아닌 production 모드에서만 pre-fetching이 작동한다.
- 기본적으로 Link 컴포넌트를 이용한 이동 페이지에서만 작동한다.
- 아닌 경우 직접 pre-fetching 할 수 있도록 코드를 작성하면 된다.

```tsx
// mount 될 때 한번만 실행해서 어떤 페이지를 prefetch 할지 결정
useEffect(() => {
  router.prefetch("/test");
}, []);

// prefetch 비활성화
<Link href="/search" prefetch={false}>Search</Link>
```
