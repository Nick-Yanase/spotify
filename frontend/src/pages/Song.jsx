import React from "react";

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt="imagem da música X"
          />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <img src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9" alt="imagem do artista X" />
        </div>
        <div className="player"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Song;
