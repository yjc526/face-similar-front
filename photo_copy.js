import React, { useState, useEffect } from "react";
import "./Photo.css";
import axios from "axios";

export default function Photo() {
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  const uploadPhoto = event => {
    const data = event.target.files[0];
    setPhoto(data);
    if (data) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPhotoURL(reader.result);
      };
      reader.readAsDataURL(data);
    }
  };

  const sendURL = () => {
    const formData = new FormData();
    formData.append("file", photo);

    return axios
      .post("", formData)
      .then(res => {
        alert("성공");
      })
      .catch(err => {
        alert("실패");
      });
  };

  console.log("photo", photo);
  return (
    <>
      <div className="photoDiv">
        <img
          className={!photo ? "nonPhotoFram" : "photoFram"}
          src={`${photoURL}`}
        />
      </div>
      <div>
        <input
          className="fileBtn"
          type="file"
          name="file"
          onChange={uploadPhoto}
        />
      </div>

      <div className="btnDiv">
        <button type="button" onClick={sendURL} className="how-btn">
          PUSH
        </button>
      </div>
    </>
  );
}
