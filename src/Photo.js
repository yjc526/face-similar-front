import React, { useState } from "react";

import axios from "axios";
import Spinner from "./Spinner";

export default function Photo({
  setResult,
  photo,
  setPhoto,
  photoURL,
<<<<<<< HEAD
  setPhotoURL,
  setSpinner,
  spinner
=======
  setPhotoURL
>>>>>>> 3c803c6576287836ff2a146ee0d1105462c6150e
}) {
  const serverURL = "http://localhost:3000/api/upload";

  const checkFile = f => {
    if (f) {
      const fileName = f.name;
      const fileSize = f.size;
      if (/\.(jpg|jpeg|png)$/i.test(fileName)) {
        if (fileSize > 1024 * 1024 * 3) {
          alert("3MB 이하 파일만 등록할 수 있습니다.");
        } else return f;
      } else alert("jpg, png 파일만 업로드 해 주세요");
    }
  };

  const uploadPhoto = async event => {
    const data = event.target.files[0];
    console.log("data", data);

    const filteredData = await checkFile(data);

    await setPhoto(filteredData);
    console.log("filteredData", filteredData);

    if (filteredData) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPhotoURL(reader.result);
      };
      reader.readAsDataURL(filteredData);
    }
  };

  const sendURL = () => {
    if (!photo) {
      alert("사진을 업로드 해 주세요");
    } else {
      setSpinner(true);
      const formData = new FormData();
      formData.append("file", photo);

      return axios
        .post(serverURL, formData)
        .then(res => {
          const photoData = res.data.result;
          console.log(res.data.result);
<<<<<<< HEAD

          setResult(photoData);
          setSpinner(false);
=======
          alert("사진이 저장 되었습니다");
          setResult(photoData);
>>>>>>> 3c803c6576287836ff2a146ee0d1105462c6150e
        })
        .catch(err => {
          alert("사진 서버에 저장 실패");
        });
    }
  };
  //console.log("formData", formData);

  console.log("photo", photo);
  console.log("photoUR", photoURL);
  return (
    <>
<<<<<<< HEAD
      {spinner === true ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <div className="container">
            <p>
              <img src="케릭터3.png" width="100px" height="70px" />
              <span>사</span>랑에빠진
              <span>얼</span>굴
            </p>

            <h4>커플 사진을 업로드 해 주세요</h4>
          </div>
          <div className="photoDiv">
            <img
              className={!photo ? "nonPhotoFram" : "photoFram"}
              src={`${photoURL}`}
            />
          </div>
          <div class="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={uploadPhoto}
            />
            <label className="custom-file-label" for="customFile"></label>
          </div>
          <div className="btnDiv">
            <button type="button" onClick={sendURL} className="how-btn">
              날 눌러줘
            </button>
          </div>
        </>
      )}
=======
      <div className="container">
        <p>
          <img src="케릭터3.png" width="100px" height="70px" />
          <span>사</span>랑에빠진
          <span>얼</span>굴
        </p>

        <h4>커플 사진을 업로드 해 주세요</h4>
      </div>
      <div className="photoDiv">
        <img
          className={!photo ? "nonPhotoFram" : "photoFram"}
          src={`${photoURL}`}
        />
      </div>

      <div class="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="customFile"
          onChange={uploadPhoto}
        />
        <label className="custom-file-label" for="customFile"></label>
      </div>

      <div className="btnDiv">
        <button type="button" onClick={sendURL} className="how-btn">
          날 눌러줘
        </button>
      </div>
>>>>>>> 3c803c6576287836ff2a146ee0d1105462c6150e
    </>
  );
}
