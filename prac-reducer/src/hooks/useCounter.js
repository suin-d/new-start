import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        number: state.number /*+ 1*/ + action.diff,
        text: /*"증가했습니다."*/ `${action.diff}가 증가했습니다.`,
      };
    case "DECREASE":
      return {
        ...state,
        number: state.number /*- 1*/ - action.diff,
        text: /*"감소했습니다."*/ `${action.diff}가 감소했었습니다.`,
      };
    default:
      throw new Error("Unhandled Action Type");
  }
}

function useCounter(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // *useReducer - state, dispatch, reducer / 각각의 state를 따로따로 관리하면 힘든데, useReducer로 여러 개의 로직을 한번에 처리할 수 있다.

  // state = 현재 상태(데이터 저장 - useReducer의 두번째 인자)
  // dispatch = 상태를 변환시킬 방아쇠 역할, 실행 시 reducer 함수 실행
  // reducer = 변화시킬 로직
  // reducer 안에 action
  // action 안에 dispatch 안에 넣어준 것 ; type. swtich문 돌릴 때 필터링
  // state.number 이런 식으로 접근. state.number를 통해 현재 상태에서 +1, -1

  return [state, dispatch];
}

export default useCounter;
