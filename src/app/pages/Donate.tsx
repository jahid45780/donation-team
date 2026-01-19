/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInitDonationMutation } from "../api/donationApi";


const Donate = () => {
  const [initDonation, { isLoading }] = useInitDonationMutation();

  const handlePay = async () => {
    try {
      const res = await initDonation().unwrap();
      window.location.href = res.paymentUrl; // redirect to SSLCommerz
    } catch (error) {
      alert("Payment initialization failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-8 rounded shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">
          Monthly Donation
        </h2>

        <p className="text-lg mb-6">
          Amount: <span className="font-semibold text-green-600">50 Tk</span>
        </p>

        <button
          onClick={handlePay}
          disabled={isLoading}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          {isLoading ? "Redirecting..." : "Pay Now"}
        </button>

        <p className="text-sm text-slate-500 mt-4">
          Secure payment via SSLCommerz
        </p>
      </div>
    </div>
  );
};

export default Donate;
