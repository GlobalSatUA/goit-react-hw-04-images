import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'

import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const API_KEY = '35888482-91687ab4dbf94420f0a7f1f80';
const BASE_URL = 'https://pixabay.com/api/';

const App = () => {
  const [totalHits, setTotalHits] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasMoreImages, setHasMoreImages] = useState(true);

  const handleFormSubmit = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    setHasMoreImages(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  
    if (images.length === totalHits) {
      setHasMoreImages(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchImages = async () => {
      setIsLoading(true);
      

      try {
        const response = await axios.get(
          `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );

        if (response.data.hits.length === 0) {
          setHasMoreImages(false);
        } else {
          setImages((prevImages) => [...prevImages, ...response.data.hits]);
          setTotalHits(response.data.totalHits);
        }
      } catch (error) {
        console.log('Error fetching images:', error);
      }

      setIsLoading(false);
    };

    fetchImages();
  }, [searchQuery, page]);

  return (
    <div className='App'>
      <Searchbar onSubmit={handleFormSubmit} />

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}

      {isLoading && (
        <div className="loader">
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
      )}

      {images.length > 0 && !isLoading && hasMoreImages && images.length < totalHits && (
        <Button onClick={handleLoadMore} totalHits={totalHits} />
      )}

      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
