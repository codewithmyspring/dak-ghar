// BuyStamps.jsx

import React, { useState } from 'react';
import './buyStamps.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const BuyStamps = () => {
  const [cart, setCart] = useState([]);

  const stampsData = [
    {
      id: 1,
      name: 'Historical Stamps',
      imageSrc: 'https://freesvg.org/img/StampIndia.png',
    },
    {
      id: 2,
      name: 'Historical Stamps',
      imageSrc: 'https://media.istockphoto.com/id/137460220/photo/vintage-indian-postage-stamp.jpg?s=612x612&w=0&k=20&c=tsWrfVwQAPi73Oo3j52Ne9kiYGNGy2dzZvVJ5z5xuVQ=',
    },
    {
      id: 3,
      name: 'Historical Stamps',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Stamp_of_India_-_1931_-_Colnect_298915_-_1_-_War_Memorial_Arch.jpeg',
    },
    {
      id: 4,
      name: 'Historical Stamps',
      imageSrc: 'https://c8.alamy.com/comp/J4YT9G/vintage-indian-centenary-stamp-one-anna-of-india-postage-1854-to-1954-J4YT9G.jpg',
    },
    {
      id: 5,
      name: 'Historical Stamps',
      imageSrc: 'https://media.istockphoto.com/id/185289296/photo/india-indian-flag-postage-stamp.jpg?s=612x612&w=0&k=20&c=LuxaIoA_I9zMqDc_5-tDVzNLp9EMKp6V_FcdN2gPjyY=',
    },
    {
      id: 6,
      name: 'Historical Stamps',
      imageSrc: 'https://www.shutterstock.com/image-photo/milan-italy-september-22-2020-260nw-1852887031.jpg',
    },
    {
      id: 7,
      name: 'Historical Stamps',
      imageSrc: 'https://media.istockphoto.com/id/185104480/photo/indian-stamp.jpg?s=1024x1024&w=is&k=20&c=J6EJJ5mvoywupOJOTFYpIryHn691Arm0wUycyjZrpvU=',
    },
    {
      id: 8,
      name: 'Historical Stamps',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0628/4358/4735/files/418_d747d31f-2d48-4d09-b56b-bb0fc8cd7b0b_480x480.jpg?v=1667647409',
    },
    {
      id: 9,
      name: 'Historical Stamps',
      imageSrc: 'https://live.staticflickr.com/8094/8583768108_53a6528c03_b.jpg',
    },
    // Add more stamp data as needed...
  ];

  const addToCart = (stamp) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === stamp.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === stamp.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...stamp, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (stampId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === stampId ? { ...item, quantity: item.quantity - 1 } : item
      );
      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

  const paraFont={
    fontSize:'13px',
  };

  return (
    <div>
      <Navbar/>
    <div className="buy-stamps-container">
      <div className="stamps-container">
        {stampsData.map((stamp) => (
          <div key={stamp.id} className="stamp-box">
            <img src={stamp.imageSrc} alt={stamp.name} />
            <p style={paraFont}>{stamp.name}</p>
            <button onClick={() => addToCart(stamp)}>Add to Cart</button>
            <button onClick={() => removeFromCart(stamp.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BuyStamps;
