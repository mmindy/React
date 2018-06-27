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

## Create reackt app

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

# 인풋 상태 관리
