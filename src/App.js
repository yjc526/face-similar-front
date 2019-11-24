import React, { useState } from "react";
import "./App.css";

import Photo from "./Photo";
import Result from "./Result";
import Winner from "./Winner";
<<<<<<< HEAD
=======
import Spinner from "react-bootstrap/Spinner";
>>>>>>> 3c803c6576287836ff2a146ee0d1105462c6150e

function App() {
  const [result, setResult] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [winner, setWinner] = useState(false);
<<<<<<< HEAD
  const [spinner, setSpinner] = useState(null);
=======
>>>>>>> 3c803c6576287836ff2a146ee0d1105462c6150e
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
<<<<<<< HEAD
            result={result}
=======
>>>>>>> 3c803c6576287836ff2a146ee0d1105462c6150e
            setResult={setResult}
            photo={photo}
            setPhoto={setPhoto}
            photoURL={photoURL}
            setPhotoURL={setPhotoURL}
<<<<<<< HEAD
            setSpinner={setSpinner}
            spinner={spinner}
=======
>>>>>>> 3c803c6576287836ff2a146ee0d1105462c6150e
          />
        </form>
      )}
      {winner === true && (
        <Winner
<<<<<<< HEAD
          result={result}
=======
>>>>>>> 3c803c6576287836ff2a146ee0d1105462c6150e
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
