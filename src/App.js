// Package imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import FundRaiser from './pages/Fundraisers';
import AboutUs from './pages/AboutUs';
import FundraiserList from './pages/FundraiserList';
import NGOAllFundraisers from './pages/NGOAllFundraisers';
import CreatUpdateFundraiser from './pages/CreateUpdateFundraiser';
import DonationForm from './components/donation/DonationForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about_us" element={<AboutUs />} />

          <Route exact path="/fundraiser">
            <Route path=":id" element={<FundRaiser />} />
            <Route index element={<FundraiserList />} />
          </Route>
          <Route exact path="/donation" element={<DonationForm />} />


          <Route exact path="/ngo/fundraiser" element={<NGOAllFundraisers />} />
          <Route exact path="/ngo/fundraiser/create" element={<CreatUpdateFundraiser />} />
          <Route exact path="/ngo/fundraiser/update/:id" element={<CreatUpdateFundraiser />} />

          {/* Add pages as needed */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
