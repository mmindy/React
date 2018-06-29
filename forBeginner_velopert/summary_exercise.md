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
facebook에서 `create reack app` 개발하여 기본 설정 쉽게 할 수 있음!

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

