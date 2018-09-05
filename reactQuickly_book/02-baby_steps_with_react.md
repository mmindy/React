# React 첫걸음

> **주요주제**
> 1. 엘리먼트 중첩
> 2. 컴포넌트 클래스 생성하기
> 3. 속성 다루기  
> -  **엘리먼트는 컴포넌트의 인스턴스이며, 컴포넌트 클래스라고도 한다.  
엘리먼트를 어떻게, 왜 사용할까?!**


## 2.1 엘리먼트 중첩
- 계층 구조로 html을 구성할 경우, 아래처럼 `React.createElement()` 내 자식 요소를 쓸 수 있다.  
  세 번째 이후 매개변수가 문자열이 아니라면, 새로 생성하는 엘리먼트의 자식 엘리먼트이다
```js
let h1 = React.createElement("h1", null, "hello world!");
ReactDOM.render(
  React.CreateElement('div', null, h1, h1),
  document.querySelector('#content')
)
```

`React.createElement()`의 첫 번째 매개변수로 쓸 수 있는 것
1. 문자열로 작성한 HTML 태그
2. React 컴포넌트 객체

## 2.2 React 컴포넌트 클래스 생성
- 컴포넌트 클래스를 사용하면, 기능을 느슨하게 결합하여 코드를 재사용할 수 있다  
  (컴포넌트 클래스는 컴포넌트라고도 부른다)
- ES6 문법 활용하면 `React.Component` 클래스를 상속받아 React 컴포넌트 클래스를 생성할 수 있다
```js
let h1 = React.createElement('h1', null, 'Hello World');
class HelloWorld extends React.Component { // React 컴포넌트 이름 정의(대문자 시작)
  render() { // 엘리먼트 하나 반환하는 함수 render()
    return React.createElement('div', null, h1, h1);  // React 엘리먼트 반환하여, div로 감싼 h2태그 두개 반환
  }
}

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.querySelector('#content')
)
```
- React 컴포넌트를 대문자로 시작하는 건, 일반 JS만 사용하면 상관 없으나 JSX를 사용하기 때문!  
  JSX는 html 요소와 사용자 정의 컴포넌트를 대소문자로 구분한다
- `ReactDOM.render()`와 유사하게 컴포넌트 클래스의  `render()`메소드는 **엘리먼트 하나만을 반환** 한다!   
  여러 동일 계층 요소 반환하려면 `<div>`나 `<span>`등 스타일 영향 없는 요소로 감싸야 함!  
  ※ 버전 16부터, 문자열이나 숫자, 배열에 담은 여러개의 React엘리먼트(fragments)도 `render()` 메서드의 반환값으로 사용 가능! [참고링크](https://reactjs.org/docs/fragments.html)


## 2.3 React 속성 사용하기
> properties를 줄여서 props라고 부름! 

- props는 엘리먼트 내 변경할 수 없는 값으로 생각하자  
  **properties는 컴포넌트 내부에서 변경할 수 없는 값!!!**  
- React 는 내부적으로 `Object.freeze()`활용하여 `this.props`객체를 불변 객체로 만든다  
  (이를 확인하기 위해서는 `Object.isFrozen()`으로 가능!)
- 부모 컴포넌트는 자식 컴포넌트 생성 시 props 할당한다

**props의 목적**
- html 속성 작성 (예. `href`, `title`, `style`, `class` 등)
- 엘리먼트 속성을 코드에서 원하는 대로 사용하는 것 가능! (`this.props`의 값)


```js
class HelloWorld extends React.Compnent {
  render () {
    return React.createElement(
      'h1',
      this.props,
      'Hello ' + this.props.PROPS_NAME + ' World!'
    )
  }
}
```


```
* 요약 *
- React 엘리먼트를 중처밯여 자식 엘리먼트로 추가하려면 createElement()의 세 번째 인자로 계속해서 전달하면 된다
- React 엘리먼트를 생성할 때 사용자 정의 컴포넌트 클래스를 사용한다
- props를 사용하여 React 엘리먼트의 렌더링 결과를 바꾼다
- 부모 컴포넌트는 자신 엘리먼트에 props를 전달할 수 있다
- React 컴포는트를 통해 컴포넌트 기반 아키텍처를 구현할 수 있다
```