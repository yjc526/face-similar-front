import React from "react";
import Spinner from "./Spinner";
import Male from "./Male";
import Female from "./Female";

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
  const router = () => {
    if (!detail) {
      return (
        <>
          {!result ? (
            <Spinner />
          ) : (
            <>
              <div className="mainResultDiv">
                <h2>♡싸우지말아요♡</h2>
              </div>
              <div className="winnerMainDiv">
                <div className="winnerDiv">
                  <img
                    src={malePhoto}
                    className="winnerPhotoFram"
                    onClick={() => setDetail("male")}
                  />
                </div>
                <div className="vs">
                  <h1>VS</h1>
                </div>

                <div className="winnerDiv">
                  <img
                    src={femalePhoto}
                    className="winnerPhotoFram"
                    onClick={() => setDetail("female")}
                  />
                </div>
              </div>
              <div className="winnerServeBlankDiv">
                <div className="winnerBlankDiv">
                  <h3>점수:{maleScore}</h3>
                </div>
                <div className="blank"> </div>

                <div className="winnerBlankDiv">
                  <h3>점수:{femaleScore}</h3>
                </div>
              </div>
              <div>
                <h1>Winner is {maleScore > femaleScore ? "MAN" : "WOMAN"}</h1>
              </div>
              <div>
                <button
                  type="button"
                  className="how-btn"
                  onClick={() => setWinner(false)}
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
          )}
        </>
      );
    } else {
      return (
        <>
          {!result ? (
            <Spinner />
          ) : (
            <>
              <div className="mainResultDiv">
                <h2>♡싸우지말아요♡</h2>
              </div>
              <div className="winnerMainDiv">
                <div className="winnerDiv">
                  <img src={malePhoto} className="winnerPhotoFram" />
                </div>
                <div className="vs">
                  <h1>VS</h1>
                </div>

                <div className="winnerDiv">
                  <img src={femalePhoto} className="winnerPhotoFram" />
                </div>
              </div>
              <div className="winnerServeBlankDiv">
                <div className="winnerBlankDiv">
                  <h3>점수:{maleScore}</h3>
                </div>
                <div className="blank"> </div>

                <div className="winnerBlankDiv">
                  <h3>점수:{femaleScore}</h3>
                </div>
              </div>
              <div>{detail === "male" ?  <Male  />}</div>
           
              <div>
                <h1>Winner is {maleScore > femaleScore ? "MAN" : "WOMAN"}</h1>
              </div>
              <div>
                <button
                  type="button"
                  className="how-btn"
                  onClick={() => setWinner(false)}
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
          )}
        </>
      );
    }
  };

  return router();
}
