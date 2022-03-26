// Package imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import FundRaiser from "./pages/Fundraisers";
import AboutUs from "./pages/AboutUs";
import FundraiserList from "./pages/FundraiserList";
import NGOAllFundraisers from "./pages/NGOAllFundraisers";
import CreatUpdateFundraiser from "./pages/CreateUpdateFundraiser";
import AdminHome from "./pages/AdminHome";
import DonationForm from "./components/donation/DonationForm";
import Payment from "./components/donation/Payment";
import PaymentSuccess from "./components/donation/PaymentSuccess";
import NGODetails from "./components/moderation/NGODetails";
import FundraiserRequests from "./components/moderation/FundraiserRequests";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import FundraiserRequest from './components/moderation/FundraiserRequest';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about_us" element={<AboutUs />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
          <Route exact path="/fundraiser">
            <Route path=":id" element={<FundRaiser />} />
            <Route index element={<FundraiserList />} />
          </Route>

          <Route exact path="/ngo/fundraiser" element={<NGOAllFundraisers />} />
          <Route
            exact
            path="/ngo/fundraiser/create"
            element={<CreatUpdateFundraiser />}
          />
          <Route
            exact
            path="/ngo/fundraiser/update/:id"
            element={<CreatUpdateFundraiser />}
          />

          <Route exact path="/donation" element={<DonationForm />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/payment/success" element={<PaymentSuccess />} />

          <Route exact path="/admin" element={<AdminHome />} />
          <Route exact path="/admin/ngodetails/:id" element={<NGODetails />} />     
          <Route exact path="/admin/activefundraisers" element={<FundraiserRequests all={true}/>} />
          <Route exact path="/admin/activefundraisers/:id" element={<FundraiserRequest all={true}/>} />

          <Route exact path="/admin/fundraiserrequests" element={<FundraiserRequests />} />
          <Route exact path="/admin/fundraiserrequests/:id" element={<FundraiserRequest />} />
          {/* Add pages as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
