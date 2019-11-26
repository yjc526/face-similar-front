import React from "react";

import Male from "./Male";
import Female from "./Female";
import CountUp from "react-countup";
import Confetti from "react-confetti";
import Typical from "react-typical";

export default function Winner({
  setResult,
  setWinner,
  setPhoto,
  setPhotoURL,
  result,
  detail,
  setDetail
}) {
  const maleScore = result.score.male;
  const femaleScore = result.score.female;
  const malePhoto = result.face_url.male;
  const femalePhoto = result.face_url.female;
  const main = () => {
    return (
      <>
        <div className="mainResultDiv">
          <h2>♡화내지말아요♡</h2>
        </div>
        <div className="winnerMainDiv">
          <div className="winnerDiv">
            <img
              src={malePhoto}
              className="winnerPhotoFram"
              onClick={() => {
                setDetail("male");
              }}
            />
          </div>
          <div className="vs">
            <h1>VS</h1>
          </div>

          <div className="winnerDiv">
            <img
              src={femalePhoto}
              className="winnerPhotoFram"
              onClick={() => {
                setDetail("female");
              }}
            />
          </div>
        </div>
        <div className="winnerServeBlankDiv">
          <div className="winnerBlankDiv">
            <h3>
              점수:
              {detail ? (
                maleScore
              ) : (
                <CountUp start={0} end={maleScore} decimals={2} />
              )}
            </h3>
          </div>
          <div className="blank"> </div>

          <div className="winnerBlankDiv">
            <h3>
              점수:
              {detail ? (
                femaleScore
              ) : (
                <CountUp start={0} end={femaleScore} decimals={2} />
              )}
            </h3>
          </div>
        </div>
      </>
    );
  };

  const winner = () => {
    if (maleScore > femaleScore) {
      return "MAN";
    } else {
      return "WOMAN";
    }
  };

  const footer = () => {
    return (
      <>
        <div className="WinnerWhoDiv">
          <Typical steps={[2000, `Winner is ${winner()}`]} wrapper="h2" />
        </div>
        <div>
          <button
            type="button"
            className="how-btn"
            onClick={() => {
              setWinner(false);
              setDetail(null);
            }}
          >
            이전화면
          </button>
          <button
            type="button"
            className="how-btn"
            onClick={() => {
              setResult(null);
              setWinner(null);
              setPhoto(null);
              setPhotoURL(null);
            }}
          >
            처음으로
          </button>
        </div>
      </>
    );
  };

  const router = () => {
    if (!detail) {
      return (
        <>
          <Confetti />
          {main()}
          <h4 className="seeThePhoto">사진을 클릭해 보세용</h4>
          {footer()}
        </>
      );
    } else {
      return (
        <>
          {main()}
          <div>
            {detail === "male" ? (
              <Male result={result} />
            ) : (
              <Female result={result} />
            )}
          </div>

          {footer()}
        </>
      );
    }
  };

  return router();
}
