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
