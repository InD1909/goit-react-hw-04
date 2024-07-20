import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      {images.map((image) => (
        <div key={image.id} onClick={() => onImageClick(image)}>
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
