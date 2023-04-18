import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-about">
          <h3>ABOUT US</h3>
          <p>
            We are a leading provider of trucking management services, offering
            solutions for fleets of all sizes. Contact us to learn more about
            how we can help your business.
          </p>
        </div>
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p>
            123 Main St, Anytown USA
            <br />
            Phone: (555) 555-1234
            <br />
            Email: info@truckmanagement.com
          </p>
        </div>
        <div className="footer-copyright">COPYRIGHT © 2023</div>
      </footer>
    </div>
  );
}

export default Footer;
