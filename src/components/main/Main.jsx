import React, { useState } from "react";

import movieJson from "data/data.json";
import movieReverseJson from "data/dataReverse.json";

import "./Main.css";
const Main = () => {
  // jsonData
  const [movieData, setMovieData] = useState(movieJson);

  // nav button
  const movieType = ["현재상영영화", "개봉예정영화", "박스오피스"];

  // 어떤 nav button을 사용중인지를 알기 위한 useState와 함수
  const [movieActiveType, setMovieActiveType] = useState("현재상영영화");

  const activeMovie = (activeTitle) => {
    if (activeTitle === "현재상영영화") {
      setMovieData(movieJson);
      setMovieActiveType("현재상영영화");
    } else if (activeTitle === "개봉예정영화") {
      setMovieData(movieReverseJson);
      setMovieActiveType("개봉예정영화");
    } else {
      setMovieData(movieJson);
      setMovieActiveType("박스오피스");
    }
  };

  // trailer , 예매하기 준비중
  const readyTo = (e) => {
    e.preventDefault();
    alert("준비중");
  };

  return (
    <main className="main-container">
      <header className="main-header">
        <h2 className="main-title">정글 시네마 영화 목록</h2>
        {/* 네비게이션 */}
        <nav>
          <ul className="main-nav">
            {movieType.map((type) => (
              <button
                onClick={() => activeMovie(type)}
                key={type}
                className={
                  type === movieActiveType ? " button-active" : undefined
                }
              >
                {type}
              </button>
            ))}
          </ul>
        </nav>
      </header>

      {/* 정글 시네마 영화 목록 컨텐츠 */}
      <article className="main-content">
        <h2 className="a11y-hidden">{movieActiveType}</h2>
        <ul className="main-grid">
          {movieData.map((item) => (
            <li key={item.id} className="movie-item">
              <img
                className="movie-poster"
                src={require(`${item.poster}`)}
                alt={`${item.title} 포스터`}
              />
              {/* <div className="over_text_cover"> */}
              <h3 className="movie-name">{item.title}</h3>
              {/* </div> */}
              <dl className="movie-detail">
                <dt className="movie-genre">{item.genre}</dt>
                <dt className="movie-star">{item.star}</dt>
                <dt className="movie-release">{item.release}</dt>
                <dt className="movie-actor">{item.actor}</dt>
              </dl>
              {/* 외부 링크 */}
              <ul className="link-group">
                <li>
                  <a
                    href={item.url}
                    onClick={item.url === "" ? readyTo : undefined}
                  >
                    예매하기
                  </a>
                </li>
                <li className="trailer-box">
                  <button type="button" className="trailer" onClick={readyTo}>
                    예고편
                  </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Main;
