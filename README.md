node_modules 다시 설치: npm install
server 띄우기: npm run dev
router:npm install react-router-dom
CSS(스타일): npm install styled-components
아이콘: npm install react-icons

reducer
dispatch: reduce 함수 실행
action: 전체 object 인수
action.type: 함수의 타입
action.payload: state에 변화시킬 수 있는 인수

useState => useReducer => useContext => redux
context: state, 내부함수(reducers)
redux: state, 내부함수(reducers), 외부함수(extraReducers: api)