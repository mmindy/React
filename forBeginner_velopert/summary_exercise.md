# 리액트 작업환경 직접 설정하기

## 필요한 도구
1. **node.js** : 직접 사용하지는 않지만, webpack / babel 사용 시 필요함
2. **yarn** : 프로젝트에서 필요한 라이브러리 설치 및 버전 관리(npm의 개선된 버전 : 속도 및 캐싱시스템)
3. editor : VSCode

cf. 버전확인
```
node -v
yarn -v 
```

## Create react app

이전에는 package.json 활용하여 babel, webpack 등 작업환경 설정하였으나,  
facebook에서 `create react app` 개발하여 기본 설정 쉽게 할 수 있음!  

[Create react app](https://github.com/facebook/create-react-app)


### 설치하기

```
npx create-react-app 프로젝트명
```
설치 완료 후 `yarn start`로 시작하여 개발 서버에서 확인 가능

### babel과 webpack 설정 확인
- `./node_modules`에서 `react_scripts`내 `package.json`파일에서 설정 확인할 수 있으며,  
- `yarn eject` 명령어로 루트 폴더 내 `package.json`으로 꺼내어 커스터마이징할 수 있다!
- 단, 이 설정은 되돌릴 수 없음!

- - -
**\>> 전화번호부 만들기!**

# 인풋 상태 관리

**reactjs code snippet 사용하기**
- `rcc` : class 형 컴포넌트 자동완성
- `rsc` : 함수형 컴포넌트 자동완성

# 배열 데이터 랜더링 및 관리

## 배열에 데이터 삽입하기 

### 자식컴포넌트가 부모에게 값 전달하는 방법  
- `App` 컴포넌트 내 `handleCreate` 메소드 생성 > `handleCreate` 메소드 자식에게 전달 > 자식 컴포넌트에서 함수 호출하여 부모에게 데이터 전달


### 값 변경하기
- 리액트에서는 불변성 유지해 주어야 하는데, 값 수정할 때 setState 사용해야 함
- 기존 배열이나 객체 변경 시, 직접 수정이 아닌 그것을 기반으로 새로운 배열/객체 사용하여 값 주입해주어야함  
  : 배열에서는 `concat()`사용

> **`Array.prototype.concat()`** - - [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)  
> - 인자로 주어진 배열이나 값들을 **기존 배열에 합쳐서 새 배열을 반환**
> 
> ```js
> var alpha = ['a', 'b', 'c'],
>     numeric = [1, 2, 3];
> 
> var alphaNumeric = alpha.concat(numeric);   // ['a', 'b', 'c', 1, 2, 3]
> ```

## 배열 렌더링하기

### React 프로젝트에서 `map()` 사용하기

> `map()` - - [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
> - 배열을 특정함수를 사용하여 전체적으로 변환하는 메서드

**\>> 새로운 컴포넌트 생성하기**
- `PhoneInfo` 컴포넌트 : 각 전화번호 정보 보여주는 컴포넌트
- `PhoneInfoList` 컴포넌트 : `PhoneInfo`의 정보를 목록으로 출력 


### 배열을 렌더링할 때 쓰는 `key`
- `key` : 배열의 요소가 갖는 고유값 
- 배열 내 데이터를 효율적으로 관리하기 위한 요소


## 배열에서 데이터 제거하기
- **불변성 유지**하면서 제거하려면, `slice()`와 `filter()` 사용

- **[`slice()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)**
```js
const numbers = [1,2,3,4,5];

numbers.slice(0,2); // [1,2] 새로운 배열 반환
numbers.slice(0,3); // [1,2,3]
numbers.slice(1,3); // [2,3]
numbers.slice(3,5); // [4,5]
numbers.slice(0,2).concat(numbers.slice(3,5)); // [1,2,4,5]

[
  ...numbers.slice(0,2),
  10,
  ...numbers.slice(3,5)
] // [1,2,10,3,5]
```
- **[`filter()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)**
```js
const numbers = [1,2,3,4,5];

numbers.filter(n=> n>3); // [4,5]
numbers.filter(n=> n!==3); // [1,2,4,5]
```

## 배열 안의 데이터 수정하기

# 최적화, 활용, Ref

## `shouldComponentUpdate`를 통한 최적화, 불변성을 왜 유지하는가?
- state 업데이트 시 불변성 유지 이유
- component 업데이트 시 성능 최적화 방법

/>> `App.js`와 `PhoneInfoList.js`에서 중복으로 렌더링됨. 

**`shouldComponentUpdate`**
- `shouldComponentUpdate`는 불필요한 렌더링을 막기 위한 메소드  
  : snippet 설치했을 경우 `scu + tab`통해 생성 가능
- 항상 `true`값 반환하여 항상 update(render)되는 것!  
  : **따라서 해당 메서드에 조건 걸어 `true` 반환하는 조건 설정하기!** 
  ```js
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) { // state가 변경되었을 때, 
      return true;
    }

    return this.porps.info !== nextProps.info; // props의 info가 변경되었을 때, true값 반환. 
    
    // 나머지 경우엔 true 반환 하지 않아서, 렌더링 되지 않음
  }
  ```
  
- 아래와 같은 경우, 불변성 유지가 되지 않아 `shouldComponentUpdate`에서 두 객체가 다른 지 확인하는 데 어려움(복잡)이 있음
  ```js
  const array1 = [0,1,2];
  const array2 = array1;

  array1.push(3);

  console.log(array1);  // [0,1,2,3]
  console.log(array2);  // [0,1,2,3]

  array1 === array2; // true

  ///

  const object1 = { a:1, b:2 };
  const object2 = object1;

  object1.c = 3;

  object1 === object2; // true
  ```

- 그렇기에 아래와 같이 **불변성 유지**한 채, 값 변경해주어야 함!!!
  ```js
  const array1 = [0,1,2];
  const array2 = [...array1, 3];
  const array3 = array1.concat(4);

  ///

  const object1 = { a:1, b:2 };
  const object2 = { ...object1, c:3 }
  ```
- depth 깊은 객체 다루기 위한 라이브러리 [immutable.js](https://facebook.github.io/immutable-js/) / [immer.js](https://github.com/mweststrate/immer)
  ```js
  const object = {
    a : {
      b : [],
      c : {
        d : {  
          e : { }
        }
      }
    }
  }
  ```

## 이름으로 전화번호 찾기

## Ref 통해 DOM에 직접 접근하기
: Ref 틍해 DOM직접 접근 가능
1. 함수로 사용하기
  ```js
  <input  
    ref={ref => this.input = ref}
  />
  ```
2. `React.createRef()` 활용하기 : 16.3이상에서 적용 가능


# 앞으로는..
- Prettier : 코드 깔끔하게!
- 리액트 컴포넌트 스타일링 : sass, less 등 
- immutable : 불변성 유지
- 리덕스 : 상태관리 라이브러리. 데이터 관리 시 업데이트 로직 분리, 프로젝트 구조 정리 및 체계화 
- Mob x 라이브러리
- 리액트 라우터 v4 : 여러 페이지 관리
- 타입스크립트 : 컴포넌트를 좀더 확실하게 짜고 싶다면
- Jest, Enzyme : 리액트 컴포넌트 유닛 테스트