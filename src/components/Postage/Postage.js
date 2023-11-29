import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PostageCalculator from '../PostageCalculator/PostageCalculator';

function Postage() {
  return (
    <div>
      <Navbar />
      <PostageCalculator/>
      <Footer />
    </div>
  )
}

export default Postage