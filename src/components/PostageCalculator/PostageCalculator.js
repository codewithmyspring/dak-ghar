// PostageCalculator.js
import React, { useState } from 'react';
import './postageCalculator.css'; // Import your CSS file
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const PostageCalculator = () => {
  const [typeOfService, setTypeOfService] = useState('Domestic');
  const [sendFrom, setSendFrom] = useState({
    pincode: '',
    city: '',
    state: '',
  });
  const [sendTo, setSendTo] = useState({
    pincode: '',
    city: '',
    state: '',
  });
  const [articleDetails, setArticleDetails] = useState({
    selectedItem: '',
    weight: 0,
    length: 0,
    width: 0,
    height: 0,
  });
  const [postageCost, setPostageCost] = useState(0);

  const handleTypeOfServiceChange = (e) => {
    setTypeOfService(e.target.value);
  };

  const handleSendFromChange = (field, value) => {
    setSendFrom((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendToChange = (field, value) => {
    setSendTo((prev) => ({ ...prev, [field]: value }));
  };

  const handleArticleDetailsChange = (field, value) => {
    setArticleDetails((prev) => ({ ...prev, [field]: value }));
  };

  const calculatePostage = () => {
    // Implement your postage calculation logic based on the input data
    // For simplicity, let's assume a flat rate of $2.50 for domestic and $5.00 for international
    const rate = typeOfService === 'Domestic' ? 2.5 : 5.0;
    const cost = rate * articleDetails.weight;
    setPostageCost(cost.toFixed(2));
  };

  return (
    <div>
      <Navbar />
      <h1>Calculate Postage</h1>
      <div className="postage-calculator-container">
        <div>
          <label>
            Type of Service:
            <div className="radio-container">
              <label>
                <input
                  type="radio"
                  value="Domestic"
                  checked={typeOfService === 'Domestic'}
                  onChange={handleTypeOfServiceChange}
                />
                Domestic
              </label>
              <label>
                <input
                  type="radio"
                  value="International"
                  checked={typeOfService === 'International'}
                  onChange={handleTypeOfServiceChange}
                />
                International
              </label>
              <label>
                <input
                  type="radio"
                  value="Miscellaneous"
                  checked={typeOfService === 'Miscellaneous'}
                  onChange={handleTypeOfServiceChange}
                />
                Miscellaneous
              </label>
            </div>
          </label>
        </div>
        <div className="side-by-side">
          <div>
            <h3>Send From:</h3>
            <label>
              Pincode:
              <input
                type="text"
                value={sendFrom.pincode}
                onChange={(e) => handleSendFromChange('pincode', e.target.value)}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                value={sendFrom.city}
                onChange={(e) => handleSendFromChange('city', e.target.value)}
              />
            </label>
            <label>
              State:
              <input
                type="text"
                value={sendFrom.state}
                onChange={(e) => handleSendFromChange('state', e.target.value)}
              />
            </label>
          </div>
          <div>
            <h3>Send To:</h3>
            <label>
              Pincode:
              <input
                type="text"
                value={sendTo.pincode}
                onChange={(e) => handleSendToChange('pincode', e.target.value)}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                value={sendTo.city}
                onChange={(e) => handleSendToChange('city', e.target.value)}
              />
            </label>
            <label>
              State:
              <input
                type="text"
                value={sendTo.state}
                onChange={(e) => handleSendToChange('state', e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="side-by-side">
          <div>
            <h3>Article Details:</h3>
            <label>
              Select an Item:
              <select
                value={articleDetails.selectedItem}
                onChange={(e) =>
                  handleArticleDetailsChange('selectedItem', e.target.value)
                }
              >
                <option value="">--Select--</option>
                {/* Add other options based on your requirements */}
                <option value="Letter/Document">Letter/Document</option>
                <option value="Parcel">Parcel</option>
                <option value="Book Packet">Book Packet</option>
                <option value="Postcard">Postcard</option>
              </select>
            </label>
          <div>
            <label>
              Weight (in gms):
              <input
                type="number"
                value={articleDetails.weight}
                onChange={(e) =>
                  handleArticleDetailsChange(
                    'weight',
                    parseFloat(e.target.value) || 0
                  )
                }
              />
            </label>
            <label>
              Length (in cm):
              <input
                type="number"
                value={articleDetails.length}
                onChange={(e) =>
                  handleArticleDetailsChange(
                    'length',
                    parseFloat(e.target.value) || 0
                  )
                }
              />
            </label>
            <label>
              Width (in cm):
              <input
                type="number"
                value={articleDetails.width}
                onChange={(e) =>
                  handleArticleDetailsChange(
                    'width',
                    parseFloat(e.target.value) || 0
                  )
                }
              />
            </label>
            <label>
              Height (in cm):
              <input
                type="number"
                value={articleDetails.height}
                onChange={(e) =>
                  handleArticleDetailsChange(
                    'height',
                    parseFloat(e.target.value) || 0
                  )
                }
              />
            </label>
          </div>
          </div>
        </div>
        <button onClick={calculatePostage}>Calculate Postage</button>
        <p>Postage Cost: Rs.{postageCost}</p>
      </div>
      <Footer />
    </div>
  );
};

export default PostageCalculator;
