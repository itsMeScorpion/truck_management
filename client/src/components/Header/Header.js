import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        <img
          src="https://w7.pngwing.com/pngs/575/280/png-transparent-car-gps-navigation-systems-vehicle-tracking-system-fleet-management-fleet-vehicle-car-truck-logo-vehicle-thumbnail.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Truck Management
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link
              to="/gallery"
              class="nav-link"
              style={{ textDecoration: 'none', marginRight: '30px' }}
            >
              Gallery <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li
            class="nav-item"
            to="/contact-us"
            style={{ textDecoration: 'none', marginRight: '30px' }}
          >
            <Link class="nav-link">Contact Us</Link>
          </li>
          <li class="nav-item">
            <Link
              to="/auth/login"
              style={{ textDecoration: 'none' }}
              class="nav-link"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
