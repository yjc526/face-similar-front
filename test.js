<div className="detailBox">
  <div className="imgBox">
    <h1>남자</h1>

    {
      <img
        src={photoUrl === null ? defaultUrl : photoUrl}
        className="detailPhoto"
      />
    }
  </div>
  <div className="textBox">
    <p>닮은 연예인:{name === null ? "없어용" : name}</p>
    <p>나이:{age}</p>
    <p>
      남자 {volume}명중 {rank}등
    </p>
    <p>감정:</p>
  </div>
</div>;
