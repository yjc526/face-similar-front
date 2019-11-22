import React, { useState } from "react";
import "./App.css";

import Photo from "./Photo";
import Result from "./Result";
import Winner from "./Winner";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [result, setResult] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [winner, setWinner] = useState(false);
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
            setResult={setResult}
            photo={photo}
            setPhoto={setPhoto}
            photoURL={photoURL}
            setPhotoURL={setPhotoURL}
          />
        </form>
      )}
      {winner === true && (
        <Winner
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
