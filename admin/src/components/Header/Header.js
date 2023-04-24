import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import history from '../../Routes/History';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './action';

function Header() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  // console.log('token', token);
  const dispatch = useDispatch();
  // const { isLogin } = useSelector((e) => e.loginReducer);
  // console.log('isLogin', isLogin);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      {token ? (
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/dashboard" class="nav-link">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/transaction" class="nav-link">
                Transaction
              </Link>
            </li>
            {role === 'Admin' ? (
              <li class="nav-item">
                <Link to="/permission" class="nav-link">
                  Permission
                </Link>
              </li>
            ) : null}
            <li class="nav-item">
              <Link to="/gallery" class="nav-link">
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/feedback" class="nav-link">
                Feedbacks
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/driver" class="nav-link">
                  Driver
                </Link>
                <Link to="/truck" class="nav-link">
                  Truck
                </Link>
                <Link to="/routes" class="nav-link">
                  Routes
                </Link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/profile" class="nav-link">
                  Profile
                </Link>
                <button class="nav-link" onClick={() => dispatch(logout())}>
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/auth/signup">Sign Up</Link>
      )}
    </nav>
  );
}

export default Header;
