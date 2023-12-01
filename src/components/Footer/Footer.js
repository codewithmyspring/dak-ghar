import React from 'react';

const Footer = () => {

  return (
    <footer style={footerStyle}>
      <div>
        <h1>Contact Information</h1>
        <p style={paragraphStyle}>Dak Ghar Niryat Kendra</p>
        <p style={paragraphStyle}>123 Main Street, City</p>
        <p style={paragraphStyle}>Email: info@dakgharniryat.com</p>
        <p style={paragraphStyle}>Phone: +1 234 567 890</p>
      </div>
      <div>
        <h1>Services</h1>
        <ul>
          <li><a href="/tracking">Tracking</a></li>
          <li><a href="/parcel-services">Parcel Services</a></li>
          <li><a href="/postal-products">Postal Products</a></li>
          <li><a href="/location">Location</a></li>
        </ul>
      </div>
      <div>
        <h1>Follow Us</h1>
        <ul>
          <li><a href="https://facebook.com/dakgharniryatkendra">Facebook</a></li>
          <li><a href="https://twitter.com/dakgharniryat">Twitter</a></li>
          <li><a href="https://instagram.com/dakgharniryatkendra">Instagram</a></li>
        </ul>
      </div>
      <div>
        <img
          src="https://www.indiapost.gov.in/_layouts/15/images/DOP.Portal.UILayer/Track_Trace_Icon.svg"
          alt="Track and Trace Icon"
          style={{ marginBottom: '10px', width: '50px', height: '50px' }}
        />
        <h1 style={{ marginBottom: '5px' }}>Track N Trace</h1>
        <input type="text" placeholder="Search..." style={searchStyle} />
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#B7C9E2',
  color: '#fff',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '15px',
};

const paragraphStyle = {
  fontSize: '14px',
  margin: '5px 0', 
};

const searchStyle = {
  padding: '5px',
  width: '150px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginRight: '2px',
  outline: 'none',
  fontSize: '14px',
};

export default Footer;