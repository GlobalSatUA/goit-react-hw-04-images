import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import '../styles.css'

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
