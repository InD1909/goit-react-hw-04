import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImages } from "/src/APi/api.js";
import Toaster from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { SearchBar } from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error.message} />}
      <ImageGallery images={images} onImageClick={openModal} />
      <LoadMoreBtn onClick={loadMore} isLoading={isLoading} />{" "}
      {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
      <Toaster />
    </div>
  );
};

export default App;
