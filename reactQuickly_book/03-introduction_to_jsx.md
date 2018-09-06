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
