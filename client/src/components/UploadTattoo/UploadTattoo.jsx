import React, { useRef, useState } from 'react';
import cross from '../../img/cross.svg';
import './UploadTattoo.scss';

const UploadTattoo = ({ view, setView }) => {
  const uploadRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const onImageChange = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const reset = () => {
    setView(!view);
    setPhoto(null);
  };

  return (
    <div style={{ display: view ? 'flex' : 'none' }} className="upload-block">
      <div className="upload-form">
        <div onClick={() => reset()} className="close-cross">
          <img src={cross} alt="cross" />
        </div>
        <div style={{ display: photo === null ? 'block' : 'none' }}>
          <h1 onClick={() => uploadRef.current.click()}>+</h1>
          <h2>Select image</h2>
          <input
            ref={uploadRef}
            type="file"
            onChange={(e) => onImageChange(e)}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      <div
        style={{
          display: photo === null ? 'none' : 'block',
        }}
        className="photo"
      >
        <img src={photo} alt="tattoo" />
        <h3>Tattoo price: 800 UAH, 45 min</h3>
      </div>
    </div>
  );
};

export default UploadTattoo;
