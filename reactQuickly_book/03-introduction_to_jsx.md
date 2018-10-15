# JSX

> **주요 주제**
> 1. JSX의 이해와 이점
> 2. Babel을 이용한 JSX의 변환 설정
> 3. React와 JSX의 까다로운 부분

## 3.1 JSX의 정의와 장점
- JSX는 React 엘리먼트를 생성하면서 자바스크립트의 모든 기능 사용하게 함

### JSX의 장점
- 개발자 경험(developer experience, DX) 개선 : 코드 가독성 높음 / xml과 비슷한 문법으로 중첩도니 선언형 구조
- 팀의 생산성 향상 : HTML과 비슷하여 친숙함
- 문법 오류와 코드량 감소 

## 3.2 JSX의 이해

### 3.2.1 JSX로 React 엘리먼트 생성하기
- only js
```js
React.createElement(
  name,
  {key1: value1, key2: value2, key3: value3},
  child1, 
  child2,
  child3,
  ...
  childN
)
```
- JSX
```js
<name key1=value1 key2=value2 key3=value3>
  <child1 />
  <child2 />
  <child3 />
  ...
  <childN />
</name>
```

### 3.2.2 React 컴포넌트에 JSX 사용하기
- HTML 태그명과 같되, 컴포넌트 클래스명은 첫문자를 대문자로
```js
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#content')
)
```

### 3.2.3 JSX에서 변수 출력하기
- 지역 변수 및 props를 브라켓을 활용하여 출력 가능

```js
class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString();
    return <span>Hello! {this.props.name}.Current date and time is {dateTimeNow}</span>;
  }
}
```

### 3.2.4 JSX에서 props 사용하기
```js
class ProfileLink extends React.Component {
  render () {
    return <a href={this.props.url}
      title={this.props.lable}
      target="_blank"
    ></a>
  }
}
```
- props는 컴포넌트(`<ProfileLink />`) 생성 시 정의됨
- `<ProfileLink />`를 생성하는 부모 컴포넌트에서 이 값 정의하는 것!

```js
<ProfileLink url='/users/azat' label='Profile for Azat' />
```

- props전달 시 모든 요소를 전달해야 한다면 개별 props 전달 보단, `this.props`로 한번에 전달하자

### 3.2.5 React 컴포넌트 메서드 생성하기
- React 컴포넌트에 애플리케이션을 위한 메서드를 자유롭게 추가할 수 있다
- 이는 React 컴포넌트가 클래스이기 떄문!
- JSX에서는 컴포넌트 메서드 `{}`로 호출 가능

```js
class Content extends React.Component {
  getURL () {
    return "testURL.com";
  }

  render() {
    return (
      <div>
        <p>Your URL is : <a href="{this.getURL()}">{this.getURL()}</a></p>
      </div>
    )
  }
}
```


### 3.2.6 JSX의 if/else 처리

if문을 사용하는 방법 세가지
1. 변수에 담기
  ```js
  render() {
    let link;

    if ( this.props.user.session )
      link = React.createElement('a', {href: '/logout'}, 'Logout');
    else
      link = React.createElement('a', {href: '/login'}, 'Login');

    return React.createElement('div', null, link);
  }
  ```
  ```js
  render() {
    let link;
    if (this.props.user.session)
      link = <a href="logout">logout</a>
    else 
      link = <a href="login">login</a>
    
    return <div>{link}</div>
  }
  ```
2. 표현식
  ```js
  render() {
    let link = sessionFleg => {
      if (sessionFleg) 
        return React.createElement('a', {href: '/logout'}, 'Logout');
      else
        return React.createElement('a', {href: '/login'}, 'Login');
    }
    
    return React.createElement('div', null, link(this.props.user.session));
  }
  ```
  ```js
  render() {
    let link = sessionFleg => {
      if (sessionFleg) return <a href="/logout">logout</a>;
      else return <a href="/login">login</a>
    }

    return <div>{link(this.props.user.session)}</div>
  }
  ```
3. 삼항 연산자(엘비스 연산자)
  ```js
  render() {
    return React.createElement('div', null, 
      (this.props.user.session) 
      ? React.createElement('a', {href: '/logout'}, 'Logout') 
      : React.createElement('a', {href: '/login'}, 'Login');
    );
  }
  ```
  ```js
  render() {
    return (
      <div>
      {(this.props.user.session)? <a href="/logout">logout</a> : <a href="/login">login</a>}
      </div>
    )
  }
  ```

  4. 즉시 실행 함수 사용
  ```js
  render() {
    return <div> {
      (sessionFleg) => {
        if (sessionFleg) return <a href="/logout">logout</a>;
        else return <a href="/login">login</a>;
      }(this.props.user.session)
    }
    </div>
  }
  ```

### 3.2.7 JSX 주석 작성하기

- 표준 자바스크립트 주석을 `{}`로 감싸서 사용
```js
{/* 한줄 주석은 이렇게 */}

/*
여러줄 주석은
이렇게
*/
```

## 3.3 Babel을 이용한 JSX 트랜스파일러 설정하기

- JSX를 실행하려면, JS코드로 변환해야 하는데, 이 과정을 컴파일(Compilation)과 변환(transformation)을 거친다는 의미에서 트랜스파일레이션(Transpilation)이라고 함
- 트랜스파일레이션을 위한 방법  
  1. **Babel 명령줄 인터페이스 도구** : `babel-cli` 패키지가 제공하는 트랜스파일레이션 명령 사용. 설정 적고 시작 간편한 편
  2. **Node.js 또는 브라우저 자바스크립트로 작성한 스크립트(API방식)** : `babel-core`패키지 이용. 저수준 제어 가능, 빌드도구와 빌드 도구의 플러그인 상의 추상화나 의존성을 제거할 수 있음
  3. **빌드 도구** : Grunt, Gulp, Webpack 같은 도구에서 Babel 플러그인으로 사용하기


- CLI로 이용하기

## 3.4 React와 JSX의 까다로운 부분
JSX를 사용할 때 알아야 할 까다로운 부분

### 3.4.1 특수문자
**엔티티코드(entity code) 사용**
- 정적 JSX에서만 사용 가능
  ```js
  // O
  <span>&copy; &mdash; &ldquo;</span>
  <input value="&copy;&mdash;&ldquo;"/>

  // X -- 문자로 출력됨
  var specialChars = "&copy;&mdash;&ldquo;";

  <span>{specialChars}</span>
  <input value={specialChars}/>
  ```

- 그러나 React/JSX는 위험한 HTML 구문에 대해 자동으로 이스케이프를 적용. 보안측면에서 매우 편리한 기능
> 이스케이프 : 값을 에러 없이 제대로 전달하기 위해 제어 문자로 인식될 수 있는 특정 문자 왼쪽에 슬래시를 붙이거나, URI(URL) 또는 HTML 엔티티 등으로 인코딩하여 제어 문자가 아닌 일반 문자로 인식시켜 에러 또는 에러를 이용한 부정행위를 방지한다.
- 위의 이유로 아래의 방법 사용 가능. 특수문자를 노출하기 위한 방법  
  1. 배열로 출력하기
    ```js
    <span>{[
        <span key="specialChar">&copy;&mdash;&ldquo;</span>
    ]}</span>
    ```
  2. 문자셋 UTF-8 설정 후, 소스코드에 특수문자 직접 복사 붙여넣기
  3. 특수문자를 `\u`로 시작하는 이스케이프 시퀀스로 바꾼 후 유니코드 번호 찾아 사용
  4. `String.fromCharCode(charCodeNumber)` 이용해서 유니코드 번호에서 문자로 변경
  5. React 엘리먼트의 `__html`에 `dangerouslySetInnerHTML`사용 -- 비추. 마지막에 정 안될 때 사용하기
    ```js
    var specialChars = "&copy;&mdash;&ldquo;";
    <span dangerouslySetInnerHTML={specialChars}></span>
    ```

### 3.4.2 data-속성
- 안티패턴
- DOM을 데이터베이스나 로컬스토리지처럼 사용하지 않아야 함!
- 그럼에도 불구하고 사용하려면 `data-`접두사 사용하여 랜더링

### 3.4.3 스타일 속성
- JSX에서는 문자열 대신 자바스크립트 객체 전달하기 때문에 **카멜표기법** 사용!
- 객체를 변수에 저장하거나 중괄호 이중으로 작성하여(`{{...}}`) 인라인으로 작성  
  : 여기서 바깥 중괄호는 JSX에 사용, 안쪽 중괄호는 자바스크립트 객체 리터럴 작성 위함
- 축약 속성 사용 가능(ex. `{{border:1px solid red}}`)
```js
let smallFontSize = { fontSize: '10px'};

<input style={smallFontSize} />
<input style={{fontSize:'10px'}} />
```

### 3.4.4 class와 for 속성
- React와 JSX는 class와 for를 제외한 모든 표준 HTML 속성 사용가능
- 이유는 class와 for는 자바스크립트와 ECMAScript의 예약어이기 때문!

그래서!
```
class -> className 
for -> htmlFor
```

### 3.4.5 불 값을 속성값으로 사용하는 경우
- `disabled`, `required`, `checked`, `autofocus`, `readOnly` 등 폼 요소에서만 사용하는 속성들의 사용
- JSX는 자바스크립트로 변환되기 때문에 해당 속성들의 값 또한 자바스크립트 식으로 작성해야 한다
- 주의. 문자열로 작성할 경우, 문자열은 자바스크립트에서 `true`로 간주되기 때문에 유의해야한다
```js
<input disabled={false}/>  // false
<input disabled="false"/> // true
<input disabled/> // true
```


```
* 요약 *
- JSX는 그저 createElement 같은, React 메서드를 위한 문법적 개선이다
- JSX에서는 표준 HTML의 속성인 class와 for 대신, className과 htmlFor를 사용한다
- JSX에서 스타일 속성을 입력할 때는 HTMl처럼 문자열을 사용하지 않고 자바스크립트 객체를 전달한다
- 삼항연산자와 즉시실행함수는 JSX에서 if/else 문을 처리하기 좋은 방법이다
- 변수, 주석, HTML 엔티티 코드를 출력하고, JSX 코드를 네이티브 자바스크립트 코드로 변경하는 것은 쉽다
```