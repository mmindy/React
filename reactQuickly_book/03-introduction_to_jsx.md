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
