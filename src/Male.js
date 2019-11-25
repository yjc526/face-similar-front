import React from "react";

export default function Male({ result }) {
  //const photoUrl = result.info.male.celebrity.url;
  // const name = result.info.male.celebrity.name;
  // const age = result.info.male.age;
  // const volume = result.rank.max;
  // const rank = result.rank.male;

  return (
    <div className="detailBox">
      <div className="imgBox">
        <h1>남자</h1>

        {/* { <img src={photoUrl} className="detailPhoto" /> }
      </div>
      <div className="textBox">
        <p>닮은 연예인:{name}</p>
        <p>나이:{age}</p>
        <p>
          남자 {volume}명중 {rank}등
        </p>
        <p>감정:</p> */}
      </div>
    </div>
  );
}
