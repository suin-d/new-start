import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";

export default function Detail({ match }) {
  async function fetchDetail() {
    const response = await axios.get(
      `http://api.themoviedb.org/3/movie/${match.params.id}?api_key=74f9a2f51a30e2eb21c5a7eb362d8937&language=ko-KR`
    );
    return response.data;
  }

  const [state] = useAsync(fetchDetail);
  // 이 state가 결정되는 방식
  // useAsync 안에 fetchDetail 함수를 넣어서 호출
  const { loading, success, error } = state;

  // if (loading) return <div>로딩중...</div>;
  loading && <div>로딩중...</div>;
  // loading이 true일 경우 로딩중...
  if (error) return <div>에러발생</div>;
  if (!success) return null;
  // 성공은 했으나 받아온 데이터가 없을 때 null 처리
  console.log(success);
  return (
    <div className="'detail__container">
      <h1>
        {success.genres[0].name}/{success.genres[1] && success.genres[1].name}
      </h1>
      <h1>{success.original_title}</h1>
      <h1>{success.overview}</h1>
      <h1>{success.tagline}</h1>
      <h1>{success.production_companies[0].name}</h1>
    </div>
  );
}
