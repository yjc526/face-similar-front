import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css"; //yarn add @fortawesome/fontawesome-free
import Spinner from "./Spinner";

export default function Result({ result, photo, photoURL, winner, setWinner }) {
  console.log("dddddddddddddddddd", result);
  const score = result.score.similar;
  const volume = result.rank.max;
  const rank = result.rank.similar;
  return (
    <>
      {!result ? (
        <Spinner />
      ) : (
        <>
          <div>
            <div className="mainResultDiv">
              <h2>♡결과를 알려줄거에요♡</h2>
            </div>

            <div className="noPhotoDiv">
              <img
                className={!photo ? "nonPhotoFram" : "photoFram"}
                src={`${photoURL}`}
              />
            </div>
            <div className="resultScoreDiv">
              <h2>점수:{score}</h2>
              <h3>
                우리 커플은 {volume} 커플 중 {rank} 등
              </h3>
            </div>

            <div className="btnDiv">
              <h5>잠깐! 누가더 아까운지 궁금하면 클릭</h5>

              <button
                type="button"
                className="how-btn"
                onClick={() => setWinner(true)}
              >
                날 눌러줘
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
