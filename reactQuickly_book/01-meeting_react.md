# 1장 리액트 살펴보기

## 1.1 React란 무엇인가? 
- 자바스크립트 기반 UI 컴포넌트 라이브러리
- 컴포넌트 기반 아키텍처(CBA, Component-based Architecture)  
  - 재사용, 유지보수, 확장이 용이함

## 1.2 React가 해결할 수 있는 문제 
- "시간에 따라 변화하는 데이터를 다루는 웹 어플리케이션 개발"

## 1.3 React 장점
- 단순한 앱 개발
- 빠른 UI
- 코드량 감소

### 1.3.1. 간결성

#### 선언형 스타일 채택
- 뷰를 자동으로 갱신하는 선언형 스타일 채택
- 실행 결과가 어떻게 되어야 할지를 코드로 작성 > 코드 복잡도 낮추고 코드 이해도와 가독성 높임
```js
// 명령형
var arr = [1,2,3,4,5];
var arr2 = [];

for ( var i = 0; i < arr.length; i++) {
  arr2[i] = arr[i] * 2;
}

console.log(arr2); // [2,4,6,8,10]

// 선언형
var arr = [1,2,3,4,5];
var arr2 = arr.map(function(v,i){ return v * 2; });

console.log(arr2); // [2,4,6,8,10]
```

**명령형**
```js
const profile = { account : '47574416'};
const profileDeep = { account: {number:'47574416'}};

const getNestedValueImperatively = (object, propertyName) => {
  let currentObject = object;
  const propertyNameList = propertyName.split('.');
  const maxNestedLevel = propertyNameList.length;

  for ( let currentNestedLevel = 0; currentNestedLevel < maxNestedLevel; currentNestedLevel++ ){
    if (!currentObject || typeof currentObject === 'undefined') return undefined;
    currentObject = currentObject[propertyNameList[currentNestedLevel]];
  }

  return currentObject;
}

console.log(getNestedValueImperatively(profile,'account')==='47574416'); // true
console.log(getNestedValueImperatively(profileDeep,'account.number')=== '47574416'); // true
```

**선언형**
```js
const getValue = (object, propertyName) => {
  return typeof object === 'undefined' ? undefinded : object[propertyName];
}

const getNestedValueDeclaratively = (object, propertyName) => {
  return propertyName.split('.').reduce(getValue, object);
}

console.log(getNestedValueDeclaratively({bar: 'baz'}, 'bar') === 'baz');
console.log(getNestedValueDeclaratively({bar: {baz:1}, 'bar.baz') === 1);
```

- 일반적으로 선언형 프로그래밍이 더 단순함
- 리액트는 상태 변경에 따라 뷰를 갱신하는데, 내부적으로 가상DOM 활용하여 DOM비교(diffing)/상태와 뷰 보정(reconciliation) 이루어짐

#### 자바스크립트를 이용한 컴포넌트 기반 아키텍처
- 컴포넌트 기반 아키텍처의 핵심 : 1) 관심사 분리, 2) 느슨한 결합, 3) 코드 재사용
- HTML을 서버에만 랜더링 하는 경우, HTML과 JS를 분리해놓아도 문제X   
  BUT **요즘의 단일페이지 어플리케이션 > 복잡한 사용자 입력 처리 & 브라우저에서 렌더링 수행(HTML과 JS 밀접하게 연관)**
- 리엑트는 JS와 마크업을 한 곳에 두어, 템플릿을 사용할 때처럼 매번 파일이나 언어를 바꾸는 수고를 줄여줌

### 강력한 추상화
- 리엑트는 강력한 문서 모델 추상화 제공
- 내부 인터페이스는 숨기고, 정규화 과정 거친 합성 메서드와 속성 제공함  
  ex. 리엑트에서 `onClick`이벤트 발생할 경우  
    이벤트 핸들러 : 브라우저 원본 이벤트 객체 대신 원복 객체를 감싼 합성 이벤트 객체(synthetic event object) 전달 받음  
- 리엑트 DOM 추상화 증명하는 예 >> **서버 측 렌더링 기능**  
  - 이는 검색 엔진 최적화(search engine optimization, SEO)와 성능 개선에 유용함


### 1.3.2. 속도와 테스트 용이성 
- 필요한 DOM 갱신 외 불필요한 갱신을 일으키는 경우, 성능 저하와 사용성 떨어질 수 있음
- 리엑트는 자바스크립트 메모리에만 존재하는 가상 DOM에서 메모리를 비교, 렌더링 변경이 필요한 경우에만 실제 DOM에 렌더링하여 성능 최적화

### 1.3.3. React의 폭넓은 개발 커뮤니티와 생태계
- 사용자가 많고, 커뮤니티가 크고 활발

## 1.4. React의 단점
- 모든 기능을 갖춘 라이브러리가 아님. AngularJS 같은 기능 위해 Redux, Router 등의 라이브러리 함께 사용
- 다른 프레임워크만큼 성숙하지 못했으며, 핵심 API가 조금씩 바뀌고 있음
- 새로운 방법 제시하여, 초기 개발에 어려움이 있을 수 있으며, 이러한 개념을 설명한 사례나 책, 강의 등이 충분치 못함
- 단방향 데이터 바인딩만 제공함
- 리액티브 프로그래밍은 아님

## 1.5. 웹 애플리케이션에 React 적용하기
React는 UI라이브러리일 뿐이므로, 어떤 형태의 백엔드나 프론트엔드 데이터 관리 라이브러리와도 함께 사용 가능  
**React를 기존 웹 앱에 적용할 경우 할 수 있는 방법들**
- React와 이와 관련된 Redux, React Router 활용, 단일페이지 어플리케이션 스택 구성
- MVC의 V 대체하는 UI라이브러리로 기존 MVC프레임워크와 결합
- jQuery 기반으로 서버 측 랜더링 거친 어플리케이션에서 자동완성 등 일부기능 위한 UI컴포넌트로 활용
- 대부분의 로직 직접 처리하는 전통 백엔드 개발에서 서버측 랜더링 템플릿 라이브러리로 활용
- 백엔드와 프론트엔드 모두 자바스크립트 사용할 경우
- React Native를 UI 라이브러리로 사용한 모바일 앱
- 여러 가지 랜더링 대상에 적용할 목적으로 사용하는 UI라이브러리

### 1.5.1 React 라이브러리와 렌더링 대상
- 0.14 버전 이후부터 React와 React-dom 구분
- jsx

### 1.5.2 단일페이지 애프리케이션과 react
- SPA, single-page applications
- fat client / thick client : 서버보다는 브라우저 측에 로직이 더 많음
- html 랜더링, 입력값 검증, UI변경 등

- UI 랜더링을 대부분 브라우저 상에서 해결, 서버와는 데이터만 주고 받음

### 1.5.3 react 개발스택
- 리액트는 모든 것을 갖춘 프론트엔드 프레임워크가 아니므로, 데이터 모델링, 스타일, 라우팅 등에 대해 정해진 방법이 없음

리액트와 함께 쓰기 위한 목적으로 개발된 라이브러리들
1. 데이터 모델링과 백엔드 : RefluxJs, Redux, Flux
2. 라우팅 : React Router
3. React용 Bootstrap 컴포넌트 : React-Bootstrap


**JSX**
- `<>`을 이용하여 자바스크립트로 작성하는 React 객체 생성
- 코드 구현 & 가독성 편리


## 1.6 첫번째 React App 만들기 : Hello World
[실습코드](./01-hello_world)
```html
<head>
  <script src="js/react.js"></script>
  <script src="js/react-dom.js"></script>
</head>
<body>
  <div id="content"></div>

  <script>
    //
  </script>
</body>
```
- React 엘리먼트를 `body`에서 직접 랜더링 하지 않는 이유는, 다른 라이브러리나 `body`조작하는 브라우저 확장 프로그램과의 충돌 방지 위함


> **요약**
> - React는 선언적이며, 뷰 또는 UI 레이어의 역할만 한다
> - React는 `ReactDOM.render()` 메서드를 통해 컴포넌트를 실제로 사용한다
> - React 컴포넌트는 클래스로 생성하고 필수적인 `render()` 메서드를 포함한다
> - React 컴포넌트는 재사용할 수 있고, 불가변 속성을 전달받아서 `this.props.NAME`으로 접근할 수 있다.