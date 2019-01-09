# React 컴포넌트의 상태 객체(state)

> **주요 주제**
> 1. React 컴포넌트의 상태 객체에 대한 이해
> 2. 상태 객체를 다루는 방법
> 3. 상태 객체와 속성(props)의 배교
> 4. 상태 저장 컴포넌트와 상태 비저장 컴포넌트


## 4.1 React 컴포넌트의 상태(state)란?
- state는 변경 가능한 데이터 저장소
- 독립적이면서 가능 중심인 UI와 논리의 블록
- state값 변경을 통해 뷰(`render()`)에서 상태를 이용하고, 변경에 따라 뷰의 표현에 영향 줄 수 있음

- state는 보통 뷰의 렌더링이 갱신될 때 동적 정보를 출력하기 위해 사용됨
- DOM에 있는 다른 부분은 그대로 유지(이는 가상DOM 덕분으로, React가 reconciliation과정 통해 변경부분 결정하는 것)  
  \> 선언적 작성 가능!

## 4.2 state 객체 다루기

값 접근 및 갱신 방법, 초기 설정 방법

### 4.2.1 state 객체에 접근하기
- `this`통해 접근(예. `this.state.name`)

### 4.2.2 초기 state 설정하기
- `React.Compoent` 사용하는 생성자(constructor)에서 `this.state`선언
- `super()`에 속성 전달하여 실행하여야 함!

```js
class MyFancyComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // ... 
    }
  }
}
```
- state는 배열이나 다른 객체를 중첩해서 가질 수 있음

### 4.2.3 state 갱신하기
- `this.setState(data, callback)`
- `setState` 메서드 실행하면, data를 현재 state와 병합 > `render()` 호출
- `setState`는 비동기여서, 새로운 state에 의존하는 경우 callback 활용해야 작업 수행 가능!!! 

