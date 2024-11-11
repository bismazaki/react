import React, { useState } from 'react';
import img3 from '../image/moon2.jpg';

const Post = () => {
  const [likeActive, setLikeActive] = useState(false);
  const [heartActive, setHeartActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);
  const [saveActive, setsaveActive] = useState(false);

  const handleLikeClick = () => {
    setLikeActive(true);
    setDislikeActive(false);
    setHeartActive(false); // Disable heart when like is active
    setsaveActive(false);
  };

  const handleDislikeClick = () => {
    setDislikeActive(true);
    setLikeActive(false);
    setHeartActive(false);
    setsaveActive(false);
  };

  const handleHeartClick = () => {
    setHeartActive(true);
    setLikeActive(false);
    setDislikeActive(false);
    setsaveActive(false);
  };
  const handlesaveClick = () => {
    setsaveActive(true);
    setLikeActive(false);
    setHeartActive(false);
    setDislikeActive(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src={img3} alt="..." style={{ width: '100%', height: '600px' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 d-flex justify-content-start" style={{ fontSize: 40, gap: '30px' }}>
            <i
              className={`bi ${likeActive ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'}`}
              onClick={handleLikeClick}
              style={{ cursor: 'pointer', color: likeActive ? 'blue' : 'black' }}
            ></i>
            <i
              className={`bi ${dislikeActive ? 'bi-hand-thumbs-down-fill' : 'bi-hand-thumbs-down'}`}
              onClick={handleDislikeClick}
              style={{ cursor: 'pointer', color: dislikeActive ? 'grey' : 'black' }}
            ></i>
            <i
              className={`bi ${heartActive ? 'bi-heart-fill' : 'bi-heart'}`}
              onClick={handleHeartClick}
              style={{ cursor: 'pointer', color: heartActive ? 'red' : 'black' }}
            ></i>
          </div>
          <div className="col-md-6 d-flex justify-content-end" style={{ fontSize: 40 }}>
            <i className={`bi ${saveActive ? `bi bi-save2-fill` :`bi bi-save2`}`} 
            onClick={handlesaveClick}
            style={{ cursor: 'pointer', color: saveActive ? 'black' : 'black' }}></i>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            {likeActive && <p style={{ fontSize: '25px', color: 'blue' }}>You liked this</p>}
            {dislikeActive && <p style={{ fontSize: '25px', color: 'grey' }}>You disliked this</p>}
            {heartActive && <p style={{ fontSize: '25px', color: 'red' }}>Added to favourites</p>}
            {saveActive && <p style={{ fontSize: '25px', color: 'green' }}>Saved Successfully</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
