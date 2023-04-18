import React, { useState } from 'react';
import ReactModal from 'react-modal';

function Gallery() {
  return (
    <div className="container">
      <div class="card mt-5" style={{ width: '18rem' }}>
        <img
          class="card-img-top"
          src={require('../../Images/storage.jpg')}
          alt="Card image cap"
        />
      </div>
    </div>
  );
}
export default Gallery;
