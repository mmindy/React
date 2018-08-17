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
