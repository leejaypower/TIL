# grid

flexbox와 마찬가지로 grid로 item을 배치하려면 부모의 display가 grid여야 한다.

```html
<html>
  <head>
    <title>CSS Masterclass</title>
  </head>
  <body>
    <div class="wrapper">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
  </body>
</html>
```

```css
.wrapper {
  display: grid; /* grid container */

  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 100 50px 300px;
  /* grid의 행(row)과 열(column)의 개수와 크기 설정 */

  column-gap: 10px; /* column 사이 빈 공간 설정 */
  row-gap: 10px;
  gap: 10px; /* column과 row의 gap을 gap 하나로 설정 가능 */
}
.box {
  width: 200px;
  height: 200px;
  background: peru;
  color: white;
}
```
