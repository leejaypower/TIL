# HTML 요소 - embedded content

embedded content는 외부에 있는 콘텐츠를 가져올 때 사용하는 콘텐츠이다.

embedded content를 사용해 이미지, 비디오, 오디오와 같은 미디어 계열을 불러오거나
다른 HTML문서를 가져올 수 있다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Embedded</title>
  </head>
  <body>
    <!-- picture, source, img -->
    <img src="image.webp" alt="" />

    <picture>
      <source src="image.webp" type="image/webp" />
      <source src="image.jpg" type="image/jpeg" />
      <img src="image.jpg" alt="" />
    </picture>

    <!-- video, source, track 요소 -->
    <video src="video.mp4"></video>
    <video preload>
      <source src="video.webm" type="video/webm" />
      <source src="video.mp4" type="video/mpeg4" />

      <track
        kind="subtitles"
        src="video.en.vtt"
        srclang="en"
        lang="en"
        label="English"
      />
      <!-- vtt 포맷은 웹에서 영상 자막을 나타내는 표준 스펙이다. -->
    </video>

    <!-- audio, source -->
    <audio src="music.mp3"></audio>
    <audio>
      <source src="music.mp3" type="audio/mpeg" />
    </audio>

    <!-- iFrame -->
    <!-- YouTube 동영상을 iFrame으로 가져오기 -->
    <iframe
      width="1520"
      height="545"
      src="https://www.youtube.com/embed/Z6l4y-pjM0A"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <!-- image best practice -->
    <!-- 레티나 디스플레이 대응 -->
    <!-- 픽셀 밀도 대응 -->
    <picture>
      <source
        src="image.webp"
        srcset="image@2x.webp 2x, image@3x.webp 3x"
        type="image/webp"
      />
      <source
        src="image.jpg"
        srcset="image@2x.jpeg 2x, image@3x.jpeg 3x"
        type="image/jpeg"
      />
      <img src="image.jpg" alt="" srcset="image@2x.jpeg 2x, image@3x.jpeg 3x" />
    </picture>

    <!-- 브라우저 크기에 따라 다른 이미지를 불러오고 싶은 경우 -->
    <picture>
      <source src="small.webp" type="image/webp" media="(max-width: 400px)" />
      <source src="medium.webp" type="image/webp" media="(min-width: 400px)" />
      <source src="large.webp" type="image/webp" media="(min-width: 1000px)" />
      <img
        src="medium.jpg"
        alt="노을이 지는 바닷가 해변의 모습을 보여주는 이미지"
      />
      <!-- 마지막 img 요소는 위의 source들이 다 실패하면  img을 불러온다.(fallback) -->
    </picture>

    <!-- alt 속성 -->
  </body>
</html>
```

- <b>picture 요소</b>는 이미지를 불러오는 요소이다.

  - img 요소보다 picture 요소가 더 의미적이다.

  - picture 요소 내에서 source와 img 요소를 같이 사용하는 것이 보편적인 방법이다.

  - source 내에서 webp, jpg, png 등 다양한 이미지 포맷을 사용할 수 있고, 이를 통해 용량을 줄이고 더 나은 화질의 이미지를 제공할 수 있다.

  - img 요소만을 사용하면 webp가 지원되지 않는 브라우저에서는 이미지가 블랙박스로 보인다.

  - source 요소를 여러개 넣으면 처음 요소를 먼저 렌더링을 시도한다. 이를 이용해 가장 최신 스펙부터 시작해서 이미지를 불러오는 것이 가능하다.

  - 브라우저 지원에 따라 다양한 이미지를 대응할 수 있기 때문에 img 요소를 대신해 사용하는 것이 권장된다.

  <br>

- webp는 Google에서 제작한 이미지 포맷이다. jpeg에 비해 용량이 적고 투명도를 표현할 수 있다.

<br>

- <b>video 요소</b>는 영상을 가져와서 보여줄 때 사용한다.

  - src 속성을 사용하거나 source 요소를 넣어서 가져올 수 있다.

  - 브라우저 별로 가져올 수 있는 코덱이 조금씩 다르다.

  - video 속성으로 preload가 있는데, 미리 비디오를 불러오는 속성이다.<br>
    유저가 재생을 시작하기 전까지 미리 비디오를 불러오는 것을 수행할 수 있다.

  - placeinline는 비디오를 모바일에서 전체화면으로 노출되지 않고, 인라인으로 재생하는 속성이다.

  - muted, autoplay 와 같은 속성도 있다.<br> <u>접근성 지침에 의하여 autoplay는 반드시 muted된 상태에만 가능하다.</u><br>
    자바스크립트로 자동 재생을 거는 것도 가능하지만 일부 브라우저에서는 그 동작을 허용하지 않는다.<br>사용자가 버튼을 눌렀을 경우에만 재생이 가능하다.

  - poster 속성은 썸네일 이미지를 정할 수 있게 한다.

  - control 속성을 활용하면 video player로 활용가능하다.

  - video에서 <b>track 요소</b>를 사용하면 자막을 추가할 수 있다.<br>
    웹 vtt를 활용하면 자막을 바탕으로 스타일을 주는 것도 가능하게 된다.

  - video 포맷을 테스트 할때는 여러 개의 브라우저에서 테스트 해야한다.<br> webm이 대부분의 브라우저에서 지원이 된다.

  <br>

- <b>audio 요소</b>는 오디오를 가져와서 재생시키는 것이 목적이다.

  - audio 요소도 video 요소와 마찬가지로 접근성을 위해 autoplay는 muted 상태에서만 가능하다.

  - audio 요소도 source 요소를 사용해 가져올 수 있다.

  - audio는 자막이 없기 때문에 track 요소를 사용할 수 없다.

  - preload, autoplay, muted, controls 등의 속성을 지원한다.

<br>

- <b>iframe 요소</b>는 HTML 문서 내에서 외부 HTML 문서를 가져올 때 사용하는 요소이다.

  - 내부 HTML 문서를 iframe으로 가져오는 것은 불필요한 렌더링 비용을 유도하기 때문에 좋지않다.

  - iframe 요소와 부모 요소 사이는 격리되어있어서 iframe 내부는 제어가 어렵다.

<br>

- <b>픽셀 밀도 대응</b>

  - 사용자의 화면크기에 따라 원래 이미지가 가지고 있는 픽셀을 조정해서 보여주는데, 그런 것을 픽셀 밀도 대응이라고 한다.

  - 픽셀 밀도가 높은 디바이스를 대응해야 할 때 저해상도 이미지를 가져오게 된다면 더 깨지거나 화질이 안좋아지는 경우가 있다.<br>
    이럴 때 <b>srcset</b>을 사용한다. 이 속성은 img 요소와 source 요소에 사용할 수 있다.

  - srcset 속성은 여러 개의 해상도를 한번에 대응할 수 있게 된다.

  - 해상 밀도에 따라서 이미지를 1,2,3배(2x, 3x...) 등으로 표현할 수 있다.

<br>

- 실제로 이미지를 사용 할 떄 브라우저의 크기에 따라 이미지가 다르게 보일 수 있다.<br>
  브라우저의 크기에 따라 다른 이미지를 불러오고 싶은 경우 <b>미디어쿼리</b>를 사용하면 된다.

  - 예전에는 css에서 수행을 했는데 이제는 picture요소 내에서 가능하다.

  <br>

- <b>img의 alt 속성</b>은 alternative text의 약자로, 시각장애인이나 검색 로봇같은 것들이 이미지를 긁어갈 때 alt 속성을 보고 긁어간다.<br>
  따라서 가급적이면 의미있는 텍스트를 넣어주는게 좋다.

<br>
<hr>
<a href="https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88">인프런 조은님의 HTML 강의</a> 로 공부한 내용입니다.
