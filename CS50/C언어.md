# C언어 목차

1. [C기초](#C-기초)
2. [문자열](#문자열)
3. [조건문과 루프](#조건문과-루프)
4. [자료형, 형식지정자, 연산자](#자료형-형식지정자-연산자)
5. [사용자정의함수, 중첩루프](#사용자정의함수-중첩루프)
6. [하드웨어의 한계](#하드웨어의-한계)

<br>
<br>

# C 기초

> C언어는 아주 오래되고 전통적인 순수 텍스트 기반의 언어이다.

<br>

```C
#include <stdio.h>

int main(void){
  printf("hello, world\n");
}
```

<br>

C언어의 기초문법을 뜯어보자.

<br>

```C
#inlude<stdio.h>
```

- C에서 함수를 사용하기 위해서는 컴퓨터에게 그 함수가 어디에 구현되어 있는지,<br>
  또는 어디에 저장되어 있는지를 알려줘야 한다.<br>
  stdio.h라는 파일이 무엇이든 함수에 접근하기 위해 그 파일을 들여다보라는 말이다.<br>
  이 코드가 없으면 컴퓨터는 printf를 이해하지 못한다.

<br>

```C
int main(void){ }
```

- 프로그램의 시작, 실행을 의미한다.

<br>

```C
print() printf("hello, world\n");
```

- print는 괄호안의 내용물을 출력한다.<br>
  printf의 f는 형식화된 형태를 의미한다. <br>
  즉 형식화된 텍스트를 출력하는데,
  텍스트는 쌍따옴표로 감싸야 한다.

- 코드 각 줄의 마침표는 세미콜론을 붙인다.
- 출력할 텍스트의 줄바꿈은 \n 이다.

<br>

C언어와 같은 프로그래밍 언어를 컴퓨터가 이해할 수 있으려면,<br>
나의 <b>소스코드</b>를 입력으로 받아서 <b>머신코드</b>라고 하는 출력을 내보내는 일종의 프로그램이 필요하다.<br>

<b>소스코드</b>는 C나 파이썬, 자바와 같은 <b>프로그래밍 언어</b>를 의미하고,<br>
<b>머신코드</b>는 컴퓨터가 이해할 수 있는 0과 1의 조합, <b>이진법</b>을 말한다.<br>
소스코드로부터 머신코드를 얻기 위해서는 이러한 번역을 수행하는 알고리즘 혹은 소프트웨어가 필요하다.<br>
이를 우리는 <b>컴파일러(compiler)</b>라고 부른다.<br>

즉 키보드로 명령어를 입력해서 파일로 저장하고, 그 프로그래밍을 실행하기 위해서는<br> 컴파일러를 통해서 0과 1로 이루어진 출력을 만들어야 한다.

<br>

### ※ C언어 실습을 위해서 https://sandbox.cs50.io 를 사용한다.

- C로 작성한 코드 파일의 확장자는 ".c"이다.
- 위 코드를 <i>hello.c</i> 라는 파일로 저장하였다.

```C
$ clang hello.c
```

- 터미널창의 프롬프트에서 "clang" 이라는 명령어 뒤에 파일이름을 붙이면 그 파일을 컴파일하라는 의미이다.
- 컴파일하면 <i>a.out</i> 이라는 파일이 디렉토리에 생성된다.
- 이 파일 안에는 hello.c의 머신코드가 들어있다.

```C
$ ./a.out
```

- 현재 디렉토리에 있는(./) a.out을 실행한다.

```C
hello, world
```

- 컴파일된 hello.c 가 실행된다.

<br>
<hr>
<br>

```c
$clang -o hello hello.c
```

- 이처럼 clang의 출력인자 -o를 사용해서 컴파일하는 파일의 이름을 정할 수도 있다.

```c
$ ls
a.out* hello* hello.c
```

- 실행가능한 파일은 $ls(현재 위치 파일 리스트를 의미하는 명령어)로 봤을 때
  <br> 뒤에 \*이 붙는다. 이를 통해 머신코드와 소스코드를 구분할 수도 있다.

<br>

추가로, <i>mkdir</i> 명령어로 폴더를 생성할 수 있고, <i>rmdir</i> 명령어는 폴더를 삭제한다.<br> <i>rm</i> 은 파일을 삭제하는 명령어이다. <i>y</i>(yes)나 <i>n</i>(no)으로 확답을 할 수 있다.

> 기억해야 할 것은 마우스와 그래픽 UI로 할 수 있는 모든 일을 명령어만으로도 할 수 있다는 것이다.

<br>
<br>

# 문자열

사용자에게 이름을 받아와서 인사하는 프로그램을 만들기 위해
<i>get_string</i>이라는 함수를 써보자.<br>
코드 파일 이름은 string.c이다.

```c
#include <stdio.h>
int main(void){
  get_string("what's your name?\n");
}
```

```c
answer = get_string("what's your name?\n");
```

- 값을 저장할 변수를 지정한다(answer).

- C는 변수가 저장하는 데이터의 종류를 정확하게 명시해줘야 한다.

```c
string answer = get_string("what's your name?\n");
```

- 변수명의 왼쪽에 저장하고자 하는 값의 종류가 문자열임을 알려준다.
- 이 때 <i>string</i>은 <b>형식 지정자</b>라고 한다.

- = 의 의미는 지정한다는 뜻이다. <b>할당 연산자</b>라고도 부른다.

<br>
이제 컴퓨터 메모리 어딘가에 사용자의 이름이 저장되어 있다.<br>

우리는 "hello" 뒤에 사용자의 이름을 넣어서 출력하고자 한다.<br>

사용자의 이름은 매번 달라질 수 있고, answer이라는 변수안에 저장될 것이다.<br>

변수값을 출력하기 위해 printf는 <b>형식 지정자</b>를 사용한다.<br>
%와 문자열을 의미하는 s를 적어 어떤 종류의 인자를 받는지 알려주는 것이다.

```c
string answer = get_string("what's your name?\n");
printf("hello, %s\n", answer);
```

C의 함수들은 인자를 받지 않거나, 한 개의 인자를 받거나, 여러 개의 인자를 받을 수 있다.<br>
만약 여러 개의 인자를 받는다면 <b>쉼표</b>로 구분해줘야 한다.

<br>

### cs50 라이브러리 사용

<i>get_string</i> 함수는 cs50.h파일 안에 저장되어 있기 때문에 <br>cs50.h를 <i>include</i> 해야 컴파일 및 실행이 가능하다.

```c
#include <cs50.h>
#include <stdio.h>
int main(void){
  string answer = get_string("what's your name?\n");
  printf("hello, %s\n", answer);
}
```

- 터미널에 아래와 같은 명령어를 입력하여 컴파일을 한다.

```
$ clang -o string string.c -lcs50
```

- 여기서 -lcs50은 <i>link</i>라는 뜻의 l에 추가로 포함하기를 원하는 cs50파일을 합친 것이다.<br>
- 이를 통해 cs50파일을 소스코드로 추가하고 연결해 한 프로그램으로 실행될 수 있게 한다.

<br>

이러한 단계를 더 간단히 할 수 있는 방법이 있다.

```
$ make string
```

> make라는 명령어는 알아서 어떤 인자를 사용해야 할지, 파일명은 무엇으로 할지, 다른 사람들은 어떤 라이브러리나 코드를 연결했는지 등을 찾아준다.

프로그램을 컴파일할 때 그냥 <i>make</i> 를 입력하고 프로그램 이름을 입력하면 된다.<br> 주의할 것은 make string.c가 아닌 <b>프로그램 이름만</b>을 입력해야 한다.

<br>
<br>

# 조건문과 루프

C언어도 다른 프로그래밍 언어와 마찬가지로
데이터 타입에 int와 string이 있다.

### int

```
int counter = 0;
```

- counter라는 변수에 정수값을 할당한다.

```
counter = counter + 1;
```

- 여기서는 int라고 말해줄 필요가 없다.
- 여기서는 이미 counter가 존재한다고 가정했고,
- 앞서 counter를 선언했기 때문에 다시 int를 입력할 필요가 없는 것이다.

<br>

변수를 증가시키는 방법에는 다른 방법들도 있다.

```
counter += 1;
counter ++;
```

- 이는 프로그래밍에서 <b>구문 설탕(Syntactic sugar)</b>이라고 부른다.
- 새로운 기능을 추가해주지는 않지만 기존 기능을 더욱 보기 좋고 간결하게 활용할 수 있도록 해준다.

### if

```c
if (x < y){
  printf("x is less than y\n");
}
else{
  printf("x is not less than y\n");
}

```

```c
if(x < y){
  printf("x is less than y\n");
}
else if(x > y){
  printf("x is greater than y\n");
}
else{
  printf("x is equal to y\n");
}
```

- 마지막 조건에서 <i>else if(x == y)</i>라고 하지 않은 것은 이미 x와 y가 같은 경우밖에 남지 않았기 때문이다.
- ==는 <b>일치 연산자</b>라고 부른다.
- 등호 표시 하나는 할당을, 두 개는 일치를 나타낸다.

<br>

### while

뭔가를 계속 반복하는 상황(loop)을 나타내기 위해 사용된다.

```c
while(true)
{
  printf("hello,world\n");
}
```

- while의 조건이 true라면 영원히 반복되는 무한 루프를 만들 수 있다.

<br>

### 응용

```c
int i = 0;
while( i < 50){
  printf("hello, world\n");
  i = i + 1;
}
```

- i 가 50이 되기전까지 50번 반복해서 hello, world를 출력한다.

<br>

### for

```c
for(int i = 0; i < 50; i++){
  printf("hello, world\n");
}
```

- while문과 같은 논리를 for문에서 더 간단히 만들 수 있다.

<br>
<br>

# 자료형, 형식지정자, 연산자

### 데이터 타입

```
bool: 참/거짓
char: 문자 하나
string: 문자열
int: 정수
long: 더 큰 크기의 정수
float: 부동소수점을 갖는 실수
double: 부동소수점을 포함한 더 큰 실수
...
```

> int는 대략 40억까지 셀 수 있다. 40억 이상의 데이터를 가진 일부 거대 기업이 아닌 일반 사용자들은 대부분 정수에 int를 사용한다.

<br>

### 형식 지정자

```
%c: char
%f: float, double
%i: int
%li: long
%s: string
```

<br>

### 정수 예제

```c
#include<cs50.h>
#include<stdio.h>

int main(void){
  int age = get_int("what's your age?\n");
  int days = age * 365;
  printf("You are at least %i days old.\n", days);
}
```

이 예제를 다르게 설계해보자.

```c
int main(void){
  int age = get_int("what's your age?\n");
  printf("You are at least %i days old.\n", age * 365);
}
```

- 굳이 days라는 변수를 설정하지 않아도 가능하다.

```c
int main(void){
  printf("You are at least %i days old.\n", get_int("what's your age?\n") * 365);
}
```

- age라는 변수가 없어도 가능하다.
- 하지만 이 코드는 너무 길어서 가독성이 떨어진다.
- 디자인적 관점에서 보면 처음 버전이 더 좋다.
- 맞냐 틀리냐의 문제가 아니라 좋고 나쁨의 문제인 것이다.

<br>

### 실수 예제

```c
#include<cs50.h>
#include<stdio.h>

int main(void){
  float price = get_float("what's the price?\n");
  printf("Your total is %f.\n", price * 1.0625);
}
```

```c
 printf("Your total is %.2f.\n", price * 1.0625);
```

- <i>.2f</i> 는 소수점 뒤 2자리만 보여준다.

<br>

### 짝수 홀수 예제

```c
#include<cs50.h>
#include<stdio.h>

int main(void){
  int n = get_int("n: ")

  if(n % 2 == 0){
    printf("even\n");
  }
  else{
    printf("odd\n");
  }
}
```

- n%2는 2로 나눈 나머지를 뜻한다.
- 2로 나눈 나머지가 0이면 짝수, 1이면 홀수이다.

- <i>cs50 라이브러리에서 get_int 함수는 정수값만 받을 수 있도록 강제한다.</i>

<br>

### 논리연산자

```
|| : 또는
&& : 그리고
```

<br>
<br>

# 사용자정의함수, 중첩루프

cough(기침)을 3번 하는 프로그램이다.

```c
#include <stdio.h>
int main(void)
{
  for(int i=0; i<3; i++){
    printf("cough\n");
  }
}
```

```c
#include <stdio.h>
void cough(void)
{
  printf("cough\n");
}

int main(void){
  for(int i=0; i<3; i++){
    cough();
  }
}
```

- cough라는 나의 함수를 만들어서 같은 내용을 실행시킬 수 있다.
- 주의할 점은 만든 함수는 main 함수 위에서 정의되어야 한다.
- 하지만 사용자 정의 함수의 구현코드가 위에 있어야한다면, 새로운 함수들을 만들 때 마다 위로 올려야 한다.
- 프로그램에서 가장 중요한 부분인 main 함수는 계속해서 내려갈 것이다.

<br>

```c
#include <stdio.h>

void cough(void);

int main(void){
  for(int i=0; i<3; i++){
    cough();
  }
}

void cough(void)
{
  printf("cough\n");
}
```

- main 함수를 위에 올리기 위해서 정의한 함수의 이름만 위로 올려준다.
- 마치 C가 이전에 cough를 봤던 것처럼 속이는 방법이다.
- 이것을 <b>함수 프로토타입</b>이라고 한다. 실제 함수에서 그대로 가져온 것이다.

<br>

### 원하는 횟수만큼 cough를 출력하는 프로그램을 만들어보자.

```c
#include <stdio.h>

void cough(int n);

int main(void){
  cough(3);
}

void cough(int n){
  for(int i = 0; i < n; i++)
  printf("coungh\n");
}
```

- void는 반환값이 없는 함수의 타입을 말한다.
- cough라는 함수의 매개변수에 n이라는 정수값을 받는다.
- coungh 함수는 매개 변수화가 된다.
- "cough"의 출력을 입력받은 횟수만큼 반복하게 된다.

이렇게 짜여진 프로그램은 <b>잘 디자인된</b> 프로그램이다.

<br>

### 다른 예제

```c
#include <cs50.h>
#include <stdio.h>

int get_positive_int(void);
  // 함수 왼쪽에 있는 int는 출력의 종류를 의미한다.
  // 괄호 안의 void는 입력의 종류를 뜻한다.


int main(void){
  int i = get_positive_int();
  prntf("%i\n",i);
}

int get_positive_int(void){

  int n;
  /* int n; 은 변수를 달라는 일종의 힌트이다.
  어떤 값이 저장될지 모르는 상태이며 아직 아무것도 할당할 필요가 없다.
  그럼 n은 쓰레기 값이라고 부르는 값을 가지게 된다.
  */
  do{
    n = get_int("Positive Integer:");
  }
  while(n < 1);
  return n;
}

```

- 사용자에게 양의 정수를 물어봐서 정수값을 받아 n에 저장한다.
- 만약 n이 1보다 작다면 이를 반복한다.

- <b>do-while 루프</b>가 좋은 점은 do괄호 부분을 <b>적어도 한 번 수행</b>한 뒤 조건에 따라 다시할지 여부를 결정한다.
- 조건을 먼저 확인했던 while 루프와 다른점이다.

<br>

### 중첩 루프

n만큼 반복해서 #을 그리려고 한다.

```C
#include<cs50.h>
#include<stdio.h>

int main(void){
  int n;

  do{
    n = get_int("Size:");
  }
  while(n < 1);

  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      printf("#");
    }
    printf("\n");
  }
}
```

- 중첩 for문에서는 i 대신 j 변수를 사용했지만 n번 반복하라는 말은 같다.
- 열과 행을 출력하는 것과 같다.
- 내부 루프에서 #을 한 줄에 한 개씩 n만큼 반복해서 출력하게 된다.
- 바깥 루프문으로 인해 출력된 것이 n만큼 반복된다.
- 왼쪽에서 오른쪽으로, 위에서 아래로 움직이며 여러줄로 출력된다.

- 즉 루프가 중첩되어 각 열마다 좌에서 우로 #를 출력한다.

<br>
<br>

# 하드웨어의 한계

모든 컴퓨터에는 <b>메모리 혹은 RAM</b>이라고 하는 것이 들어있다.<br>
RAM은 모든 프로그램이 실행 중 저장되는 곳이다.<br>
그리고 모든 파일들이 열려있는 동안 저장되는 곳이다.<br>
컴퓨터가 여러 일들을 한 번에 할 때, 기억하기 위해 사용되는 것이다.<br>
하지만 어디까지나 하드웨어이기 때문에 그 성능, 즉 메모리의 용량은 유한하다.<br>

컴퓨터가 할 수 있는 일에는 근본적인 한계가 존재한다는 말이다.

<br>

### 사용자에게 몇 개의 실수값을 받아오는 프로그램

```C
#include <cs50.h>
#include <stdio.h>

int main(void){
float x = get_float("x: ");
float y = get_float("y: ");

printf("x / y = %.50f\n", x / y);
}

```

- x와 y값을 받아서 나눈다.
- 나눈값은 소수점 뒤 50자리까지 보도록 한다.

```terminal
x:1
y:10
x / y = 0.10000000149011611938476562500000000000000000000000
```

### 왜 이런 결과가 나올까?

- <u>메모리의 저장 공간이 유한하기 때문에</u> 컴퓨터는 특정 지점에서 한계에 부딪힌다.
- float는 32비트를 사용하고, double은 64비트를 사용한다.
- 소수점 뒤 이보다 많은 숫자는 저장할 수 없다.

컴퓨터는 완벽하지 않다.

- 컴퓨터는 계산할 수 있는 값들 중 1/10에 가장 가까운 값을 저장한다.
- 유한한 정보를 사용해서는 무한한 숫자들을 100% 정확하게 저장할 수 없기 떄문이다.

<br>

## 정수 오버플로우

```c
#include <stdio.h>
#include <unistd.h>

int main(void){
  for(int i=1; ; i *= 2)
  {
    printf("%i\n", i);
    sleep(1);
  }
}
```

- i가 1부터 시작하고 2를 계속해서 곱하여 출력한다.
- for문에 불리언 표현을 적지 않았기에 무한반복된다.
- 곱하는 사이 1초간 쉰다.(sleep 이라는 C언어의 함수를 사용)

<br>

```
...
overflow.c:6:25: runtime error: signed integer overflow: 1073741824 * 2 cannot be represented in type 'int'
-2147483648
0
0
...
```

- 2를 계속 곱하다보면 int가 저장할 수 있는 값을 넘게 된다.
- 에러가 발생하고 0이 출력된다.
- int의 32비트 이상의 숫자는 저장할 수 없다.
- 숫자가 커지면서(10억을 넘기면) 앞으로 넘어갈 1의 자리가 없어진다.
- 결국 앞으로 가져온 1이 사라지면서 실제로 저장된 값은 0만 남는 것이다.

이런 오버플로우 문제가 발생하면 변수를 다시 0으로 리셋해야 한다.<br>

> 따라서 다루고자 하는 데이터 값의 범위를 유의하며 프로그램을 작성하는 것이 중요하다.

<br>
<hr>
<a href="https://www.boostcourse.org/cs112">모두를 위한 컴퓨터과학(CS50 2019)</a> - C언어로 공부한 내용입니다.
