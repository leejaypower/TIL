# HTML 요소 - tabular data

HTML의 표를 나타내는 요소들을 tabular data라고 지칭한다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Table</title>
  </head>
  <body>
    <!-- table -->
    <table>
      <caption>
        표의 제목
      </caption>
      <tr>
        <td>표의 셀</td>
        <td>표의 셀</td>
        <td>표의 셀</td>
      </tr>
      <tr>
        <td>표의 셀</td>
        <td>표의 셀</td>
        <td>표의 셀</td>
      </tr>
    </table>

    <!-- caption -->
    <table>
      <caption>
        <p>2022년 넷플릭스 업데이트작</p>
        <p>2022년 넷플릭스에서 업데이트된 콘텐츠를 작성해보았습니다.</p>
      </caption>
      <tr>
        <td>제목</td>
        <td>작성일</td>
        <td>요약</td>
      </tr>
      <tr>
        <td>위플래쉬</td>
        <td>2022-02-27</td>
        <td>이 영화는...</td>
      </tr>
    </table>

    <!-- thead, tbody, tfoot -->
    <table>
      <caption>
        넷플릭스 2022 기대작
      </caption>
      <colgroup>
        <col class="table-cell table-cell-title" />
        <col class="table-cell table-cell-date" />
        <col class="table-cell table-cell-content" />
      </colgroup>
      <thead>
        <tr>
          <th>제목</th>
          <th>작성일</th>
          <th>본문</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>위플래쉬</td>
          <td>2022-02-27</td>
          <td>목표를 향해 가는 과정을 바라보는 시선의 차이에 대한 영화</td>
        </tr>
      </tbody>
      <tfoot>
        <!-- 테이블 전체를 정리하는 콘텐츠 -->
      </tfoot>
    </table>

    <!-- colgroup, col -->
    <table>
      <caption>
        넷플릭스 2022 기대작
      </caption>
      <thead>
        <tr>
          <th>제목</th>
          <th>작성일</th>
          <th>본문</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>위플래쉬</td>
          <td>2022-02-27</td>
          <td>목표를 향해 가는 과정을 바라보는 시선의 차이에 대한 영화</td>
        </tr>
      </tbody>
    </table>

    <!-- tr, th, td -->
    <table>
      <tr>
        <th rowspan="2">table header 1</th>
        <th colspan="2">table header 2</th>
      </tr>
      <tr>
        <td>table data</td>
        <td>table data</td>
      </tr>
    </table>
  </body>
</html>
```

- 테이블을 만들 때 td의 개수는 다른 row의 셀 개수와 동일해야 한다는 것을 유의한다.

- <b>caption 요소</b>는 table의 제목이나 설명을 나타낸다.<br>p 요소를 사용해서 설명을 추가로 넣을 수 있다.<br>
  table을 사용한다면 가급적 caption 요소를 넣는 것이 좋다.

- 테이블의 제목, 본문, 결과 영역을 나눠서 각각 thead, tbody, tfoot 로 그루핑할 수 있다.

- <b>colgroup과 col</b>을 사용하면 해당 테이블에 걸쳐있는 모든 셀에 한번에 스타일을 줄 수 있다.

- table을 구성하는 가장 기본적인 요소는 <b>tr, th, td 요소</b>이다.
  - 테이블을 row나 cell 단위로 병합하고 싶을 때 <b>rowspan과 colspan</b>을 사용하면 된다.

<br>

- table의 용법은 표를 나타낼 때 사용하게 된다.

  - 예를 들어 게시판의 게시글 목록을 나타낼 때나, 회원가입 form도 일종의 표이다.

  - <u>하지만 table을 레이아웃을 구성하기 위해서 사용해서는 안된다.</u>

  - 이메일 마크업할 때는 예외적으로 사용된다.<br>
    메일을 볼 때 g메일 클라이언트, 맥의 기본 메일 앱, 윈도우 기본 메일 앱을 쓸 수 있는 특수한 상황이기 때문이다.

    ```html
    <table role="presentation"></table>
    ```

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
