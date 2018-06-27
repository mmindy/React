[강의자료](https://react-anyone.vlpt.us/)


# Section 01. 리액트란 무엇일까

## 프론트엔드 라이브러리란 무엇일까
- 요즘의 WEB == WEB Application > **사용자의 특성에 따라 동적 페이지 표현**
- 프로젝트의 규모가 커질 수록 DOM 요소 정리 및 관리 어려워짐 
- 개발 생산성 및 높은 유지보수성과 관련, 사용자 인터페이스, 기능 개발에만 집중할 수 있음

## 리액트의 Virtual DOM
지속해서 **변화(mutation)**하는 대규모 애플리케이션 구축 위한 방법

**기존 웹 프레임워크 및 라이브러리**
- 양방향 바인딩 : model과 view 사이 값 변화하면 서로 값 변화시켜줌

**React**
- **data 변화 시, 가상의 DOM에 먼저 렌더링 후, 기존 DOM과 비교, 변화 필요한 곳에만 update

## 리액트를 특별하게 만드는 점
- virtual DOM 은 Vue, Marko, Maquette, Mithril 등 다양하게 쓰임

1. 넓고 다양한 생태계
2. 사용하는 곳이 많음

# Section 02. 리액트 프로젝트 시작하기

## 본격적인 리액트 코드 작성하기

**리액트 시작 전 알아야 할 것들**
1. **Webpack** : gulp와 비슷한 개념. 웹 프로젝트 시  파일관리 
2. **Babel** : ES6 -> ES5 변환 도구

# Section 03. JSX

## JSX 기본 문법

- 리액트 컴포넌트 생성 시, render 부분에 사용되는 문법
- html과 비슷하지만 js로 변환됨  

### 꼭 지켜야할 것들
- 항상 태그는 닫아야 한다!
  ```js
  class App extends Component {
    render() {
      return (
        <div>
          <div></div>
          <input type="text" />
        </div>
      )
    }
  }
  ```

- 두개 이상의 태그는 하나의 태그로 감싸주어야 한다
  ```js
  class App extends Component {
    render() {
      return (
        <div>
          <div></div>
          <div></div>
        </div>
      )
    }
  }
  ```
  ```js
  // react 16.2에서 나온 대안
  <Fragment>
    <div></div>
    <div></div>
  </Fragment>
  ```

- JSX에서 JS값 사용하기 : `{ }`
  ```js
  class App extends Component {
    render() {
      const name = "name a";
      return (
        <div>
          hello {name}
        </div>
      )
    }
  }
  ```

- 조건부 랜더링(조건문) 
  ```js
  // 조건이 하나일 때 - 삼항연산자, &&
  class App extends Component {
    render() {
      const name = "minji~~~~~";
      return (
        <div>
          {
            1 + 1 === 2 ? "맞다" : "틀리다"
          }
          {
            name === "minji!" && <div>minji!!</div>
          }
        </div>
      )
    }
  }
  ```
  ```js
  // 조건이 여러개일 때 - 일반적인 경우, 외부에서 작업
  // IIFE
  class App extends Component {
    render() {
      const value = 1;
      return (
        <div>
          {
            (() => {
              if ( value === 1 ) return <div>1!</div>
              if ( value === 2 ) return <div>2!</div>
              if ( value === 3 ) return <div>3!</div>
              return <div>없따</div>
            })()
          }
        </div>
      )
    }
  }
  ```

- CSS 사용하기
  - 객체 형태로 삽입
  - `-` 중간선 대신 낙타표기법으로 사용
  - 속성 값은 문자열로 삽입
  ```js
  import React, { Component } from 'react';

  class App extends Component {
    render() {
      const style = {
        padding : "10px",
        color : "#000",
        backgroundColor : "pink",
        fontSize : "25px"
      };
      return (
        <div style={style}>
          <h1>안녕하세요 리액트</h1>
        </div>
      );
    }
  }

  export default App;

  ```

- class는 className으로 사용  
  : class라고 입력해도 작동은 하지만, className이 올바른 컨벤션
  ```js
  <div className="name"> </div>
  ```

- 주석 만들기
  ```js
  import React, { Component } from 'react';

  class App extends Component {
    render() {
      // hello
      return (
        <div>
          
          {/* 
          이곳에 주석을 쓰려면 멀티주석으로 표기를 하고 중괄호(브라켓)을 써줘야 합니다.
          */}
          <h1
          // 태그 내에서는 여기에는 이렇게 주석을 남깁니다.
          >안녕하세요 리액트</h1>
        </div>
      );
    }
  }

  export default App;

  ```

# Section 04. props 와 state

## Props를 사용하는 방법
- props : 부모가 자식에게 넘겨주는 것

```js
//App.js
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    // hello
    return <MyName />;
  }
}

export default App;
```
```js
// MyName.js
import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = { // defaultProps로 기본값 설정할 수 있음
    name: 'deault name'
  };
  render() {
    return (
      <div>
        Hello! my name is <strong>{this.props.name}</strong>!:)
      </div>
    );
  }
}

export default MyName;

```

- defaultProps를 선언하는 방법 2  
  : 위와 같은 코드이나 static으로 안에서 선언해 주는 것이 좀더 최신 js 문법
```js
class MyName extends Component {
  render() {
    return (
      <div>
        Hello! my name is <strong>{this.props.name}</strong>!:)
      </div>
    );
  }
}

MyName.defaultProps = {
  name: 'deault name'
}
```

- 함수형 컴포넌트
```js
const MyName = ( {name} ) => {  // 비구조 할당으로 객체 할당하여 받아옴
  return <div>Hello! My name is {name}!</div>
}

MyName.defaultProps = {
  name : "default name"
}
```

## state 사용하는 방법
- props : 컴포넌트 랜더링 시 특정 값 설정. 부모가 자식에게 내려줄 때 사용되며, 자식입장에서는 읽기 전용
- **state** :   
  - state는 컴포넌트 내부에 존재하며, 컴포넌트 내부에서 바뀔 수 있으며, 바꿀 때마다 리랜더링 됨
  - state를 업데이트할 때는 `setState`를 사용하며, 이를 사용하지 않을 경우 리랜더링이 되지 않아 원하는 값을 가질 수 없음


```js
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 1
  };
  
  constructor(props) {
    super(props);
    this._handleDecrease = this._handleDecrease.bind(this); // 일반함수 사용 시 constructor 에서 this 바인딩 해야함
    this._handleIncrease = this._handleIncrease.bind(this);
  }

  _handleIncrease = () => {
    // 화살표 함수 사용하여 this 바인딩
    this.setState({
      number: this.state.number + 1
    });
  };
  
  _handleDecrease = () => {
    this.setState({
      // update 시 setState
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this._handleIncrease}>+</button>
        <button onClick={this._handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```

# LifeCycle API

LifeCycle API 사용하는 경우,  
컴포넌트가 브라우저에서 
1. **나타날 때 (Mounting)** 
2. **업데이트될 때 (Updating)** - 컴포넌트의 props나 state가 바뀔 때
3. **사라질 때 (Unmounting)**

![lifeCyle API](./lifeCycleAPI.jpg)
> 출처 : [트위터](https://twitter.com/dan_abramov/status/981712092611989509)

- `constructor` : 생성자 함수. 브라우저 처음 실행될 때의 초기설정
- `getDerivedStateFromProps` : props로 받은 값을 state로 동결
- `render` : 어떤 DOM을 만들지 정의
- `componentDidMount` : 컴포넌트가 브라우저에 나타난 시점에 일어나는 것들 설정  
  : 외부 라이브러리 사용 시, 라이브러리와 DOM 연결 / AJAX 요청
- **`shouldComponentUpdate`** : 컴포넌트가 업데이트되는 성능 최적화   
  : `true/false` 반환 rendering 여부 결정. virtual DOM에 render 할지 말지 결정
- `getSnapshotBeforeUpdate` : rendering 한 결과물이 브라우저에 호출되기 직전(예. scroll의 위치나 화면의 크기 가져올 때)
- `componentDidUpdate` : 컴포넌트 업데이트 이후 작업
- `componentWillUnmount` 

![관련 내용](https://react-anyone.vlpt.us/05.html)