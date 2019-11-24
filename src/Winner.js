import React from "react";
import Spinner from "./Spinner";

export default function Winner({
  setResult,
  setWinner,
  setPhoto,
  setPhotoURL,
  result
}) {
  const maleScore = result.score.male;
  const femaleScore = result.score.female;

  return (
    <>
      {!result ? (
        <Spinner />
      ) : (
        <>
          <div className="winnerMainDiv">
            <div className="winnerDiv"></div>
            <div className="vs">
              <h1>VS</h1>
            </div>

            <div className="winnerDiv"></div>
          </div>
          <div className="winnerMainDiv">
            <div className="winnerBlankDiv">
              <h2>점수:{maleScore}</h2>
            </div>
            <div className="blank"> </div>

            <div className="winnerBlankDiv">
              <h2>점수:{femaleScore}</h2>
            </div>
          </div>
          <div>
            <h1>Winner is {maleScore > femaleScore ? "MAN" : "WOMAN"}</h1>
          </div>
          <div>
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
