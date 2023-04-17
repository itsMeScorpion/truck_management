import React from 'react';

function Home() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://us.epg.com/fileadmin/_processed_/d/6/csm_TransportationMgmtSolutions-495837766_70d5cf24b9.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.fleetnews.co.uk/web-clean/2/root/zf-extends-suite-of-fleet-solutions-to-light-commercial-vehicles-in-europe_w1200.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.frost.com/wp-content/uploads/2017/07/Connected-truck-telematics-1080x675.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
