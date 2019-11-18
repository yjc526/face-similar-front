import React, { useState, useEffect } from "react";
import "./Photo.css";
import axios from "axios";

export default function Photo() {
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
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
      const formData = new FormData();
      formData.append("file", photo);

      return axios
        .post(serverURL, formData)
        .then(res => {
          alert("사진 서버에 저장 성공");
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
      <div className="photoDiv">
        <img
          className={!photo ? "nonPhotoFram" : "photoFram"}
          src={`${photoURL}`}
        />
      </div>
      <div>
        <input className="fileBtn" type="file" onChange={uploadPhoto} />
      </div>

      <div className="btnDiv">
        <button type="button" onClick={sendURL} className="how-btn">
          PUSH
        </button>
      </div>
    </>
  );
}
