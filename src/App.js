import { useState, useEffect } from 'react';
import Spinner from './components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchImage, setSearchImage] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState('false');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchImage) return;
    async function getFetchImages() {
      try {
        setLoader('true');
        const gallery = await fetchImages(searchImage, page);
        if (searchImage.trim() === '' || gallery.length === 0) {
          return toast.error(`нет картинки с именем  ${searchImage}`);
        }
        setImages(prevImages => [...prevImages, ...gallery]);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        toast.error('что-то пошло не так');
      } finally {
        setLoader('false');
      }
    }
    getFetchImages();
  }, [page, searchImage]);

  const handleFormSubmit = searchImage => {
    setPage(1);
    setImages([]);
    setSearchImage(searchImage);
  };

  const handleButtonLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSelectedImage = imageURL => {
    setShowModal(!showModal);
    setSelectedImage(imageURL);
  };

  const showButton = images.length >= 12;
  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      {loader === 'true' && <Spinner />}
      <ImageGallery images={images} onSelect={handleSelectedImage} />
      {showButton && <Button onClick={handleButtonLoadMore} />}
      {showModal && (
        <Modal
          src={selectedImage.largeImageURL}
          alt={selectedImage.tags}
          onSelect={handleSelectedImage}
        />
      )}
      <Toaster />
    </div>
  );
}
