import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './locatePostOffice.css'; // Import your custom styles

function LocatePostOffice() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const trackPackage = () => {
    // Dummy data for demonstration
    const dummyTrackingInfo = {
      status: 'In transit',
      location: 'Dak Ghar Kendra, City Name',
      deliveryDate: 'December 15, 2023'
    };

    // Set tracking information
    setTrackingInfo(dummyTrackingInfo);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Dak Ghar Kendra</h1>

        <form>
          <label htmlFor="trackingNumber">Enter Tracking Number:</label>
          <input
            type="text"
            id="trackingNumber"
            name="trackingNumber"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />

          <button type="button" onClick={trackPackage}>
            Track Package
          </button>
        </form>

        {trackingInfo && (
          <div id="result">
            <h2>Tracking Result</h2>
            <p>Status: {trackingInfo.status}</p>
            <p>Location: {trackingInfo.location}</p>
            <p>Estimated Delivery Date: {trackingInfo.deliveryDate}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default LocatePostOffice;
