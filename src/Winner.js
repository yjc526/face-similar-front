import React from "react";

export default function Winner({
  setResult,
  setWinner,
  setPhoto,
  setPhotoURL
}) {
  return (
    <>
      <div className="winnerMainDiv">
        <div className="winnerDiv"></div>
        <div className="vs">
          <h1>VS</h1>
        </div>
        <div className="winnerDiv"></div>
      </div>

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
        Click
      </button>
    </>
  );
}
