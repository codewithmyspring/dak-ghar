import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import PostageCalculator from './components/PostageCalculator/PostageCalculator';
import BuyStamps from './components/BuyStamps/BuyStamps';
import LocatePostOffice from './components/LocatePostOffice/LocatePostOffice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<div> {/* Common parent route */}
          <HomePage />
        </div>} />
        <Route path="/BuyStamps" element={<BuyStamps />} />
        <Route path="/LocatePostOffice" element={<LocatePostOffice />} />
        <Route path="/PostageCalculator" element={<PostageCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
