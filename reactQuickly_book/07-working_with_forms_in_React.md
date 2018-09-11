# 7. React에서 폼 다루기

> **주요 주제**
> 1. 폼과 폼 요소 정의학
> 2. 데이터 변경 감지
> 3. 참조(ref)를 이용한 데이터 접근
> 4. 사용자 입력 데이터 감지를 위한 다른 방법
> 5. 폼 요소에 기본값 설정하기

## 7.1 React에서 폼을 다루기 위한 권장 방법
- 전통적인 HTML 폼 요소는 사용자 입력에 의해 요소의 상태가 변경된다
- 그러나 **React는 UI를 묘사하기 위해 선언형 스타일을 사용하므로 상태를 적절히 반영하려면 입력이 동적이어야 한다**  
  - **"React 컴포넌트는 최기화 시점은 물론 어느 시점에든지 뷰의 상태를 표현해야 한다"**
  - 컴포넌트 상태를 자바스크립트에서 관리하지 않고 뷰와 동기화하지 않으면, 내부상태와 뷰가 다른 경우 발생! 
```js
// 동적이지 않아!
render () {
  return <input type='text' name='title' value='Mr.' />
}

// 바꾼다면!
handleChange = e => {
  this.setState({
    title: e.target.value
  })
}
render() {
  return <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
}
```

1. `render()`에서 상태값을 이용해 엘리먼트 정의
2. `onChange` 이용하여 폼 요소의 변경 사항 감지
3. 이벤트 핸들러에서 state 갱신
4. state 갱신되면 `render()` 실행되어 뷰 갱신

**React의 단방향 바인딩**
- 여러 개의 뷰에서 암묵적으로 상태 또는 데이터 모델을 갱신하거나 역으로 상태가 뷰를 갱신하는 거대한 규모의 앱을 다룰 때 복잡도 제거할 수 있다

**제어 컴포넌트(controlled component)**
- 폼을 다룰 때 권장하는 방식
- 컴포넌트 내부 state와 뷰를 동기화함

### 7.1.1 React에서 폼과 이벤트 정의하기
`<form>`요소에 사용할 수 있는 이벤트
- `onChange` : 요소 변경 시
- `onInput` : `<textarea>`, `<input>` 요소 값 변경 시 (React에서 추천X)
- `onSubmit` : 제출 시
- `onKeyUp`, `onClick` ... 

### 7.1.2 폼 요소 정의하기
**대화형 속성**
- 변경 가능한 속성
- `value` : `<input>, <textarea>, <select>`
  `checked` : `<input>` `type="checkbox"`, `type="radio"`
  `selected` : `select`

### 7.1.3 변경 감지하기
`onChange` 활용, `input, textarea, select`의 value가 변경되거나 `input`의 checked가 변경될 때 발생


