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
              <h2>
                <span class="lnr lnr-heart"></span>결과를 알려줄거에요
                <span class="lnr lnr-heart"></span>
              </h2>
            </div>

            <div className="noPhotoDiv">
              <img
                className={!photo ? "nonPhotoFram" : "photoFram"}
                src={`${photoURL}`}
              />
            </div>
            <div>
              <h2>점수:{score}</h2>
              <h3> 우리 커플은 100명 중 1 등</h3>
            </div>
            <div className="btnDiv">
              <h5>잠깐! 누가더 아까운지 궁금하면 클릭</h5>

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
