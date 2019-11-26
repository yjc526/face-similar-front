import React from "react";

export default function Female({ result }) {
  const photoUrl = result.info.female.celebrity.url;
  const defaulUrl = "heart.png";
  const name = result.info.female.celebrity.name;
  const age = result.info.female.age;
  const volume = result.rank.max;
  const rank = result.rank.female;
  return (
    <div className="detailBox">
      <div className="imgBox">
        <h1>여자</h1>
        {<img src={photoUrl} className="detailPhoto" />}
      </div>
      <div className="textBox">
        <p>닮은 연예인:{name === null ? "없어용" : name}</p>
        <p>나이:{age}</p>
        <p>
          여자 {volume}명중 {rank}등
        </p>
        <p>감정: </p>
      </div>
    </div>
  );
}
