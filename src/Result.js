import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css"; //yarn add @fortawesome/fontawesome-free
import Spinner from "./Spinner";

export default function Result({ result, photo, photoURL, winner, setWinner }) {
  console.log("dddddddddddddddddd", result);
  const score = result.score.similar;
  return (
    <>
      {!result ? (
        <Spinner />
      ) : (
        <>
          <div>
            <div className="mainResultDiv">
              <h1>♡결과를 알려줄거에요♡</h1>
            </div>

            <div className="noPhotoDiv">
              <img
                className={!photo ? "nonPhotoFram" : "photoFram"}
                src={`${photoURL}`}
              />
            </div>
            <div>
              <h1>점수:{score}</h1>
            </div>
            <div className="btnDiv">
              <h3>잠깐! 누가더 아까운지 궁금하면 클릭</h3>

              <button
                type="button"
                className={!winner ? "how-btn" : "noBtn"}
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
