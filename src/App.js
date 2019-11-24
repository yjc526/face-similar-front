import React, { useState } from "react";
import "./App.css";

import Photo from "./Photo";
import Result from "./Result";
import Winner from "./Winner";

function App() {
  const [result, setResult] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [winner, setWinner] = useState(false);
  const [spinner, setSpinner] = useState(null);
  return (
    <div className="mainDiv">
      {result ? (
        <Result
          result={result}
          photoURL={photoURL}
          photo={photo}
          winner={winner}
          setWinner={setWinner}
        />
      ) : (
        <form>
          <Photo
            result={result}
            setResult={setResult}
            photo={photo}
            setPhoto={setPhoto}
            photoURL={photoURL}
            setPhotoURL={setPhotoURL}
            setSpinner={setSpinner}
            spinner={spinner}
          />
        </form>
      )}
      {winner === true && (
        <Winner
          result={result}
          setResult={setResult}
          setWinner={setWinner}
          setPhoto={setPhoto}
          setPhotoURL={setPhotoURL}
        />
      )}
    </div>
  );
}

export default App;
