import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Sidebar() {
  return (
    <div style={{ background: 'black' }}>
      <div
        class="header text-white container-fluid"
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1>Cargo</h1>
      </div>
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
          <li>
            Admin <span>Web Developer</span>
          </li>
          <li>
            <Link to="/" class="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/">Driver</Link>
          </li>
          <li>
            <Link to="/">Truck</Link>
          </li>
          <li>
            <Link to="/">Routes</Link>
          </li>
          <li>
            <Link to="/">Trips</Link>
          </li>
          <li>
            <Link to="/">Transaction</Link>
          </li>
          <li>
            <Link to="/">Permission</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/">Feedbacks</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// export default Sidebar;
