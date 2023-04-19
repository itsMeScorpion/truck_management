import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

function Success(props) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ display: showModal ? 'block' : 'none' }}>
      <div class="success-container">
        <div class="row">
          <div class="modalbox success col-sm-8 col-md-6 col-lg-5 center animate">
            <div class="icon">
              <span class="glyphicon glyphicon-ok"></span>
            </div>
            <h1>Success!</h1>
            <p>{props.msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
