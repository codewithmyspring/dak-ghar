import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Postage from './components/Postage/Postage';
import PostageCalculator from './components/PostageCalculator/PostageCalculator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div> {/* Common parent route */}
          <HomePage />
        </div>} />
        <Route path="/PostageCalculator" element={<div> {/* Common parent route */}
          <Postage />
        </div>} />
        {/* Other routes go here */}
      </Routes>
    </Router>
  );
}

export default App;
