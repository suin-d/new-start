import React from "react";

export default function MovieItem({ item }) {
  return (
    <div className="item__wrapper">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.id}
      />
      {/* {`${item.poster_path}`} : movie db에서 이미지 주소오고 일반 문자열에 이어서 추가 */}
      <div className="summary">
        <h1>{item.original_title}</h1>
        {/* item 요소 안에 있는 original_title에 접근 */}
        <span>{item.release_date}</span>
      </div>
      <div className="score">
        <h1>{item.vote_average}</h1>
      </div>
    </div>
  );
}
