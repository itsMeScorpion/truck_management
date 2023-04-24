import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { listData } from './action';

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

function Gallery() {
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();

  function handleImageClick(image) {
    setSelectedImage(image);
    setShowImageViewer(true);
  }

  useEffect(() => {
    dispatch(listData());
  }, []);

  const { gallery } = useSelector((e) => e.galleryReducer);

  return (
    <div className="container mt-5">
      <GalleryWrapper>
        {gallery?.map((image, index) => (
          <GalleryImage
            key={index}
            src={`http://localhost:5000/${image.image?.slice(6)}`}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </GalleryWrapper>
      {showImageViewer && (
        <ImageViewerWrapper onClick={() => setShowImageViewer(false)}>
          <ImageViewer>
            <ImageViewerImage
              src={`http://localhost:5000/${selectedImage.image?.slice(6)}`}
              alt="Viewer Image"
            />
          </ImageViewer>
        </ImageViewerWrapper>
      )}
    </div>
  );
}

export default Gallery;
