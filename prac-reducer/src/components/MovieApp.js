import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";
import MovieItem from "./MovieItem";
import Bannerb from "./Bannerb";
import Header from "./Header";

const fetchMovieRank = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=74f9a2f51a30e2eb21c5a7eb362d8937&language=ko-KR&region=KR"
  );
  return response.data;
  // 실질적인 data
};

export default function MovieApp() {
  const [state, refetch] = useAsync(fetchMovieRank);
  // useAsync 호출
  // console.log(state);
  const { loading, success, error } = state;
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러내용: {error}</div>;
  if (!success) return null;

  return (
    <>
      <Header />
      <Bannerb item={success.results[0]} />
      <h1 className="section__title">Box Office</h1>
      <div className="item__parent inner">
        {success.results.map((v) => (
          <MovieItem item={v} key={v.id} />
        ))}
      </div>
    </>
  );
  //  return <div>the movie app</div>;
}

// CSS : Cascading Style Sheets
// SASS : Syntactically Awesome Sytyle Sheets 문법적으로 짱멋진 스타일시트!

// {
//   /* <div class="wrapper">
//   <div class="summary">서머리</div>
//   <div className="info">
//     인포메이션<strong>강한글씨</strong>
//   </div>
// </div>; */
// }
