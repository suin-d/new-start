import React from "react";
import { FcFilmReel } from "react-icons/fc";

export default function Header() {
  return (
    <header className="inner">
      <div>
        MOVIE APP
        <FcFilmReel />
      </div>
    </header>
    // header 를 Header로 오타 => 자기 자신을 호출^^!
  );
}
