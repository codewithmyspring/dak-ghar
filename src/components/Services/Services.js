import React from 'react';
import { Link } from 'react-router-dom';

const Services= () => {
  return (
    <section style={sectionStyle}>
      <p style={headingStyle}>Our Services</p>

      <div style={servicesContainerStyle}>
        {/* Service 1 */}
        <div style={serviceStyle}>
          <h2>Dak Niryat Kendra</h2>
          <p><br/></p>
          <a href='#'><img src="https://www.indiapost.gov.in/_layouts/15/images/DOP.Portal.UILayer/DNK.png" alt="Service 1" style={imageStyle} /></a>
        </div>

        {/* Service 2 */}
        <div style={serviceStyle}>
          <h2>Buy Stamps</h2>
          <p><br/></p>
          <a href='/BuyStamps'><img src="https://www.indiapost.gov.in/_layouts/15/images/DOP.Portal.UILayer/india-post-buy-stamps-Icon.svg" alt="Service 1" style={imageStyle} /></a>
        </div>

        {/* Service 3 */}
        <div style={serviceStyle}>
          <h2>Locate Post Office</h2>
          <p><br/></p>
          <li>< Link to='/LocatePostOffice'><img src="https://www.indiapost.gov.in/_layouts/15/images/DOP.Portal.UILayer/Locate_your_post_office_Icon.svg" alt="Service 1" style={imageStyle} /></Link></li>
        </div>
        
        {/* Service 4 */}
        <div style={serviceStyle}>
          <h2>Calculate Postage</h2>
          <p><br/></p>
          <li><Link to="/PostageCalculator"><img src="https://www.indiapost.gov.in/_layouts/15/images/DOP.Portal.UILayer/Calculator_Icon.svg" alt="Service 1" style={imageStyle} /></Link></li>
        </div>
        </div>
    </section>
  );
};

const sectionStyle = {
  padding: '40px 0',
  textAlign: 'center',
};

const servicesContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const imageStyle = {
    width: '80px', // Adjust the width as needed
    height: '80px',
    marginBottom: '10px',
  };

const serviceStyle = {
  flex: 1,
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px',
};

const headingStyle = {
  fontSize: '40px',
  color: '#333',
  fontWeight:'1000',
  marginBottom: '20px',
};

export default Services;