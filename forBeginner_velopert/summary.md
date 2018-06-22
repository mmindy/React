# 프론트엔드 라이브러리란 무엇일까
- 요즘의 WEB == WEB Application > **사용자의 특성에 따라 동적 페이지 표현**
- 프로젝트의 규모가 커질 수록 DOM 요소 정리 및 관리 어려워짐 
- 개발 생산성 및 높은 유지보수성과 관련, 사용자 인터페이스, 기능 개발에만 집중할 수 있음

# 리액트의 Virtual DOM
지속해서 **변화(mutation)**하는 대규모 애플리케이션 구축 위한 방법

**기존 웹 프레임워크 및 라이브러리**
- 양방향 바인딩 : model과 view 사이 값 변화하면 서로 값 변화시켜줌

**React**
- **data 변화 시, 가상의 DOM에 먼저 렌더링 후, 기존 DOM과 비교, 변화 필요한 곳에만 update

# 리액트를 특별하게 만드는 점
- virtual DOM 은 Vue, Marko, Maquette, Mithril 등 다양하게 쓰임

1. 넓고 다양한 생태계
2. 사용하는 곳이 많음

- - - 

# 본격적인 리액트 코드 작성하기

**리액트 시작 전 알아야 할 것들**
1. **Webpack** : gulp와 비슷한 개념. 웹 프로젝트 시  파일관리 
2. **Babel** : ES6 -> ES5 변환 도구

- - -

# JSX 기본 문법
리액트 컴포넌트 생성 시, render 부분에 사용되는 문법
- 항상 태그는 닫아야 한다!
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