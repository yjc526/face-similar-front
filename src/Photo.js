import React, { useState } from "react";

import axios from "axios";
import Spinner from "./Spinner";

export default function Photo({
  setResult,
  photo,
  setPhoto,
  photoURL,
  setPhotoURL,
  setSpinner,
  spinner
}) {
  const serverURL = "https://face-love.herokuapp.com/api/post";
  // "https://localhost:3000/api/post";

  const checkFile = f => {
    if (f) {
      const fileName = f.name;
      const fileSize = f.size;
      if (/\.(jpg|jpeg|png)$/i.test(fileName)) {
        if (fileSize > 1024 * 1024 * 8) {
          alert("8MB 이하 파일만 등록할 수 있습니다.");
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
          if (res.data.status === false) {
            alert(res.data.result.msg);
            setPhoto(null);
            setPhotoURL(null);
            setSpinner(false);
          } else {
            const photoData = res.data.result;
            console.log(res.data.result);

            setResult(photoData);
            setSpinner(false);
          }
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
      {spinner === true ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <div className="containerTitle">
              <p>
                <img src="케릭터3.png" width="20%" height="30%x" />
                <span>사</span>랑에빠진
                <span>얼</span>굴
              </p>
            </div>

            <h5>커플 사진을 업로드 해 주세요</h5>
          </div>
          <div className="photoDiv">
            <div className={photo ? "nonDescriptDiv" : "descriptDiv"}>
              <p>1. 꼭 커플 사진으로 올려죠요</p>
              <p>2. 크기는 8MB 이하만 가능해요</p>
              <p>3. 얼굴이 잘리지 않고 잘 나온 사진으로 올려죠요</p>
            </div>
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
    </>
  );
}
