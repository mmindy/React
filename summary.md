# React JS로 웹 서비스 만들기

## Why React?

### **Just Javascript**
- Javascript 기반으로 별도의 언어를 학습하지 않아도 되며, 활용도가 높다

### **Composition**
  - 요소별 컴포넌트별로 나눠 작업할 수 있는 구조
  - 개별 요소 컴포넌트의 독립성 높아 다른 곳에서 활용도 또한 높아짐
### **Unidirectional Dataflow**
  - 데이터는 항상 일정한 장소에 위치해 있고, 그 장소에서만 변경 가능(단방향 데이터플로우)  
    (Data -> UI, 데이터 변화에 따라 UI업데이트)


### **and..**
#### **React = UI 라이브러리**    
- MVC 중 **View**에 해당하기에, 나머지 부분을 python, ruby, nodejs 등 다른 것과 섞어 쓸 수 있음


- - - 

## 영화 소개 app 만들기 실습

- Component 1. Movie List 
- Component 2. Movie 
- Component 3. Movie Poster(Image)


### React 흐름 
**Component** -> **Render** -> **return** -> **JSX**

### React vs React DOM
![react](react_reactDOM.jpg)

### Data flow with Props
React의 컨셉 : prop & state
- 메인 컴포넌트가 Data 갖고 있고, props 통해 children 컴포넌트한테 정보 넘김

### Validating Props with Props Types
- API에서 데이터 많이 가져올 때, 정리 쉽게 하기 위해 배열로 저장 후 data 응용하게 됨  
  이후, array.map 메서드 통해 리스트에 뿌리는데, 리엑트는 element 많을 경우 key 값 필요로 함
- Proptypes 설정으로 부모가 보낸 데이터 타입 체크할 수 있음
  ```js
  static propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string
  }
  ```
  - `isRequired` 설정 통해 필수값 설정 가능

### Component Lifecycle
- 컴포넌트는 다양한 functions를 갖고 있고, 이를 순서대로 실행시키는데, 이를 component lifecycle이라 함
- 이는 프로그램이 작동될 때 자동으로 발생함

#### render
- **componentWillMount() -> render() -> componentDidMount()**
  - `componentWillMount()` : 컴포넌트가 실행됐음 알 수 있음
  - `render()` : 컴포넌트가 존재함 알 수 있음
  - `componentDidMount()` : 컴포넌트가 자리잡았음 알 수 있음
#### update
- **componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()**
  - `componentWillReceiveProps()` : 컴포넌트가 새로운 props를 받음
  - `shouldComponentUpdate()` : old props - new props 비교 후 다를 경우, 업데이트 발생
  - `componentWillUpdate()` : update 상태
  - `componentDidUpdate()` : update 후의 상태


  