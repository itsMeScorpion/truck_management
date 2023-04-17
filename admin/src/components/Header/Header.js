import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" href="#">
          <img
            src="https://w7.pngwing.com/pngs/575/280/png-transparent-car-gps-navigation-systems-vehicle-tracking-system-fleet-management-fleet-vehicle-car-truck-logo-vehicle-thumbnail.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Truck Management
        </Link>
        <div>
          <Link to="/auth/login" style={{ textDecoration: 'none' }}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
