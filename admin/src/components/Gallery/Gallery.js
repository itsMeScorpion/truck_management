import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addData } from './action';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GalleryImage = styled.img`
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageViewerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  /* Add cursor pointer to indicate clickable */
  cursor: pointer;
`;

const ImageViewer = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
`;

const ImageViewerImage = styled.img`
  width: 100%;
  height: auto;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Gallery() {
  const [images, setImages] = useState([]);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImages([...images, reader.result]);
      dispatch(addData(images));
    };
  }

  function handleImageClick(image) {
    setSelectedImage(image);
    setShowImageViewer(true);
  }

  function handleDeleteImage(image) {
    const updatedImages = images.filter((img) => img !== image);
    setImages(updatedImages);
    setShowImageViewer(false);
  }

  return (
    <div className="container mt-5">
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById('fileInput').click()}
      >
        Add Image
      </button>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <GalleryWrapper>
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </GalleryWrapper>
      {showImageViewer && (
        <ImageViewerWrapper onClick={() => setShowImageViewer(false)}>
          <ImageViewer>
            <ImageViewerImage src={selectedImage} alt="Viewer Image" />
            <DeleteButton onClick={() => handleDeleteImage(selectedImage)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </DeleteButton>
          </ImageViewer>
        </ImageViewerWrapper>
      )}
    </div>
  );
}

export default Gallery;
