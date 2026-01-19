import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "lucide-react";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Donate from "./app/pages/Donate";
import PaymentSuccess from "./app/pages/PaymentSuccess";
import PaymentFail from "./app/pages/PaymentFail";
import DonationPay from "./app/pages/DonationPay";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

            <Route path="/payment/success" element={<PaymentSuccess />} />
      <Route path="/payment/fail" element={<PaymentFail />} />
      <Route path="/donation" element={<DonationPay />} />

        <Route
          path="/donate"
          element={
            <ProtectedRoute>
              <Donate />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
