import React from 'react';
import '../styles.css'

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img className='ImageGalleryItem-image' src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
