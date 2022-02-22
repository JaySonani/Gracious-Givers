// Package imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import FundRaiser from './pages/Fundraiser';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/fundraiser" element={<FundRaiser />} />
          <Route exact path="/about_us" element={<AboutUs />} />
          {/* Add pages as needed */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
