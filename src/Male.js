import React from "react";

export default function Male({ result }) {
  const photoUrl = result.info.male.celebrity.url;
  const defaultUrl = "not_found.jpg";
  const name = result.info.male.celebrity.name;
  const age = result.info.male.age;
  const volume = result.rank.max;
  const rank = result.rank.male;
  const emo1 = result.info.male.emotion.first.emotion;
  const emo1Num = result.info.male.emotion.first.score;
  const emo1Number = Math.round(emo1Num * 100 * 100) / 100;
  const emo2 = result.info.male.emotion.second.emotion;
  const emo2Num = result.info.male.emotion.second.score;
  const emo2Number = Math.round(emo2Num * 100 * 100) / 100;

  console.log(emo1Num);
  const emotion1 = () => {
    if (emo1 === "happiness") {
      return "happiness.png";
    } else if (emo1 === "neutral") {
      return "neutral.png";
    } else if (emo1 === "sadness") {
      return "sad.png";
    } else if (emo1 === "surprise") {
      return "surprise.png";
    } else {
      return "anger.png";
    }
  };

  const emotion2 = () => {
    if (emo2 === "happiness") {
      return "happiness.png";
    } else if (emo2 === "neutral") {
      return "neutral.png";
    } else if (emo2 === "sadness") {
      return "sad.png";
    } else if (emo2 === "surprise") {
      return "surprise.png";
    } else {
      return "anger.png";
    }
  };

  return (
    <div className="detailBox">
      <div className="detailTitle">
        <h3>남자</h3>
      </div>
      <div className="detailContents">
        <div className="detailLeft">
          <p>
            랭킹: {rank}등/{volume}명
          </p>
          <p>얼굴 나이: {age}</p>
          <div className="detailEmotion">
            <div>
              <div>
                <img src={emo1Number === 0 ? "nono.png" : emotion1()} />
              </div>
              <div>({emo1Number}%)</div>
            </div>
            <div>
              <div>
                <img src={emo2Number === 0 ? "nono.png" : emotion2()} />
              </div>
              <div>({emo2Number}%)</div>
            </div>
          </div>
        </div>
        <div className="detailRight">
          <p>닮은 연예인</p>

          <img
            src={photoUrl === null ? defaultUrl : photoUrl}
            className="detailPhoto"
          />

          <p>{name === null ? "(없어용)" : name}</p>
        </div>
      </div>
    </div>
  );
}
