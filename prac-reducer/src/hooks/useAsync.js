import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        success: false,
        error: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        success: action.data,
        // 성공 시 조회된 데이터
        error: false,
      };
    case "ERROR":
      return {
        loading: false,
        success: false,
        error: action.error,
      };
    default:
      throw new Error("Unhandled Action Type");
  }
}

function useAsync(axiosFunc) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    success: false,
    error: false,
  });

  const fetchData = async () => {
    try {
      // 예외처리
      dispatch({ type: "LOADING" });
      const data = await axiosFunc();
      // return된 값이 담기는데 담기기 전까지 로딩
      dispatch({ type: "SUCCESS", data });
      // 성공하면 reducer 함수 실행, success 부분 발동
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
      // error라는 action을 dispatch
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // useEffect 비동기 요청 불가, 비동기 요청 가능한 함수 따로 만들기
  return [state, fetchData];
  // 버튼을 누르면 fetchData 실행될 수 있도록
}

export default useAsync;
