import React from "react";
import { Spinner as Loader } from "react-bootstrap";
import "./Spinner.css";

const Spinner = () => {
  return (
    <>
      <div className="spinnerDiv">
        <div>
          <h2>잠시만 기다려 죠요</h2>
          <div className="spinner">
            <Loader animation="border" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
