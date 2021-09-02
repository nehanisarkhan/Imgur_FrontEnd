import React, { useState } from "react";
import "./style.css";
const Upload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const imageHandleChange = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedImages((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img src={photo} alt={""} key={photo} />;
    });
  };
  return (
    <div className="upload">
      <div className="uploadImages">
        <h5 style={{ paddingBottom: "15px" }}>Select an Image to upload </h5>
      </div>
      <div>
        <input type="file" multiple id="file" onChange={imageHandleChange} />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <i className="material-icon"> upload photo </i>
          </label>
        </div>
        <div className="Result">{renderPhotos(selectedImages)}</div>
      </div>
    </div>
  );
};

export default Upload;
