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
import Payment from './components/donation/Payment';
import PaymentSuccess from './components/donation/PaymentSuccess';
import AllDonation from './components/donation/AllDonations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about_us" element={<AboutUs />} />


          {/* All routes regarding fundraiser */}
          <Route exact path="/ngo/fundraiser" element={<NGOAllFundraisers />} />
          <Route exact path="/ngo/fundraiser/create" element={<CreatUpdateFundraiser />} />
          <Route exact path="/ngo/fundraiser/update/:id" element={<CreatUpdateFundraiser />} />
          <Route exact path="/fundraiser">
            <Route path=":id" element={<FundRaiser />} />
            <Route index element={<FundraiserList />} />
          </Route>


          {/* All routes regarding donations */}
          <Route exact path="/donation" element={<DonationForm />} />
          <Route exact path="/all_donations" element={<AllDonation />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/payment/success" element={<PaymentSuccess />} />





          {/* Add pages as needed */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
