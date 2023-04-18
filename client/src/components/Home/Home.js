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
      <div className="services">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img
              src={require('../../Images/transportation.jpeg')}
              alt="Transportation"
              className="service-image"
            />
            <h3 className="service-title">Transportation</h3>
            <p className="service-description">
              We offer reliable and efficient transportation services for all
              types of cargo, including heavy haul and oversize loads.
            </p>
          </div>
          <div className="service-item">
            <img
              src={require('../../Images/logistics.jpeg')}
              alt="Logistics"
              className="service-image"
            />
            <h3 className="service-title">Logistics</h3>
            <p className="service-description">
              Our logistics services include freight management, supply chain
              optimization, and inventory management.
            </p>
          </div>
          <div className="service-item">
            <img
              src={require('../../Images/storage.jpg')}
              alt="Storage"
              className="service-image"
            />
            <h3 className="service-title">Storage</h3>
            <p className="service-description">
              We offer secure and affordable storage solutions for all types of
              cargo, including hazardous materials and refrigerated goods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
