# Scss set up issue

<b>SCSS</b>를 배우기에 앞서서
json이나 bablerc와 같은 파일을 강의파일과 똑같이 붙여넣고 터미널에 명령어를 입력해야 했다.

<b>npm과 yarn, gulp 등의 개념이 없는 상태로 진행</b>하려고 하다보니
다른 사람이 설명해준 글을 보며 터미널에 똑같이 입력하였다.

> node.js를 다운받는다.<br>프로젝트 폴더로 이동한다.<br>이동경로지정은 cd<br>예) cd desktop/foldername/projectfoldername<br>아니면 cd 라고 쓰고 본인이 작업중인 폴더를 드래그하면 자동으로 경로가 써짐<br>npm -v (노드 버전 확인)<br>(버전 확인으로 다운로드 완료를 확인함)<br>npm install sass -g<br>(sass 글로벌하게 다운로드..)<br>sass 가 다운됐는지 확인해야하니까<br>npm show sass version<br>(sass 버전확인)<br>이제 본인이 작업할 폴더에 style.scss 를 만들고<br>터미널이든 vsc의 터미널이든<br>scss 를 css 로 컴파일 해주는 명령어를 입력함.<br>sass style.scss style.css<br>근데 이것만 하면 맨날 수동으로 컴파일 하는거니까<br>sass 의 watch라는 옵션을 써서 상시 컴파일되게 함<br>sass --watch styles.scss styles.css<br>혹은 scss, css폴더를 구분해두었다면 폴더왓칭<br>sass --watch scss:css<br><br><small><i>출처: https://nomadcoders.co/css-layout-masterclass/lectures/1392 daylia님 댓글</i></small>

project/src에 styles.scss파일 만든 후, 컴파일 명령어를 입력할 때 <br>
명령어 sass --watch styles.scss styles.css를 입력하니 <b>보안오류(PSSecurityException)</b>가 발생하였다.

<br>
구글링을 통해 해결방법을 찾았는데, <b>powershell을 관리자로 실행하여 Set-ExecutionPolicy Unrestricted을 입력해<br>
ExecutionPolicy가 Unrestricted 인 상태로 바꾸는 것이다.</b><br>
이것은 모든 스크립트를 허용하는 상태이다.

이후 다시 src 경로에서 sass --watch styles.scss styles.css를 실행하니 정상적으로 실행되었다.

<br>

그러나... css파일을 scss와 다른 경로에 놓았으나 <u>watch를 걸면 scss와 같은 위치에 compile된 css 파일이 새로 생성되었다.</u>

강의처럼 <u>지정한 경로에 css파일이 위치하길 원했기 때문에</u> <br>
다시 처음부터 npm install을 하고 <b>npm run dev</b>로 실행하려고 하니 error가 발생했다.

이를 해결하기 위해 구글링을 했고, 스택오버플로우에서 답을 얻었다.

아마 scss 컴파일을 위해 명령어 여러가지를 시도하다가 꼬인걸까? <br>
npm의 캐시와 노드 모듈들, 그리고 package-lock.json을 삭제한 후 다시 npm을 설치해야 한다.

```
$ npm cache clean --force
$ rm -rf node_modules package-lock.json
$ npm install
```

을 차례차례 실행하면 되는데, 2번째 단계에서 명령어가 듣지 않았다.

```
rm -r "node_modules"
```

이렇게 입력하였더니 정상적으로 삭제되었다.
아마 윈도우 환경이기 때문에 명령어가 달라서 그런 것 같은데
잘 모르겠다.. 후에 알아보도록 하겠다.

이후 npm run dev 명령어를 입력하니 정상적으로 원하는 경로로 compile되었다!!

<br>

### 느낀점

<i>npm이나 node.js 공부는 CSS 전처리기 공부와 , JS 공부를 한 후 시작하려고 했는데 갑자기 npm, yarn 등의 개념이 튀어나와 당황스러웠다...<br> Scss가 css로 compile 및 build되어야 하고, 그를 위한 과정이 있다는 것을 미처 고려하지 못했다.<br>
일단 Scss 과정은 멈추지 않고 진행하며, 이해가 필요한 경우 그때 그때 구글링을 하면서 공부하고, 이후 더 깊게 공부해야겠다.
</i>

<br>
