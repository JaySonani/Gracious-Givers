// Package imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import FundRaiser from "./pages/fundraiser/Fundraisers";
import AboutUs from "./pages/AboutUs";
import FundraiserList from "./pages/fundraiser/FundraiserList";
import NGOAllFundraisers from "./pages/fundraiser/NGOAllFundraisers";
import CreatUpdateFundraiser from "./pages/fundraiser/CreateUpdateFundraiser";
import AdminHome from "./pages/user_management/AdminHome";
import DonationForm from "./components/donation/DonationForm";
import Payment from "./components/donation/Payment";
import PaymentSuccess from "./components/donation/PaymentSuccess";
import NGODetails from "./components/moderation/NGODetails";
import FundraiserRequests from "./components/moderation/FundraiserRequests";
import Login from "./pages/user_management/Login";
import Register from "./pages/user_management/Register";
import AdminLogin from "./pages/user_management/AdminLogin";
import FundraiserRequest from './components/moderation/FundraiserRequest';
import AllDonation from "./pages/donation/AllDonations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* All routes from NavBar */}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about_us" element={<AboutUs />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/AdminLogin" element={<AdminLogin />} />

          {/* All routes regarding fundraisers */}
          <Route exact path="/fundraiser">
            <Route path=":id" element={<FundRaiser />} />
            <Route index element={<FundraiserList />} />
          </Route>
          <Route exact path="/ngo/fundraiser" element={<NGOAllFundraisers />} />
          <Route exact path="/ngo/fundraiser/create" element={<CreatUpdateFundraiser />} />
          <Route exact path="/ngo/fundraiser/update/:id" element={<CreatUpdateFundraiser />} />

          {/* All routes regarding donations */}
          <Route exact path="/donation" element={<DonationForm />} />
          <Route exact path="/all_donations" element={<AllDonation />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/payment/success" element={<PaymentSuccess />} />

          {/* All routes regarding moderation */}
          <Route exact path="/admin" element={<AdminHome />} />
          <Route exact path="/admin/ngodetails/:id" element={<NGODetails />} />
          <Route exact path="/admin/activefundraisers" element={<FundraiserRequests all={true} />} />
          <Route exact path="/admin/activefundraisers/:id" element={<FundraiserRequest all={true} />} />
          <Route exact path="/admin/fundraiserrequests" element={<FundraiserRequests />} />
          <Route exact path="/admin/fundraiserrequests/:id" element={<FundraiserRequest />} />

          {/* Add pages as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
