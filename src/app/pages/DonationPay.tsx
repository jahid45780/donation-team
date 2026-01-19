/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInitPaymentMutation } from "../api/paymentApi";


const DonationPay = () => {
  const [initPayment, { isLoading }] = useInitPaymentMutation();

  const handlePay = async () => {
    try {
      const res = await initPayment().unwrap();

      if (res?.data?.paymentUrl) {
        window.location.href = res.data.paymentUrl;
      }
    } catch (error) {
      alert("Payment initialization failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Monthly Donation
        </h1>

        <div className="text-center mb-6">
          <p className="text-gray-600">Donation Amount</p>
          <p className="text-4xl font-bold text-green-600">৳ 50</p>
          <p className="text-sm text-gray-500 mt-1">
            Fixed monthly contribution
          </p>
        </div>

        <button
          onClick={handlePay}
          disabled={isLoading}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-60"
        >
          {isLoading ? "Redirecting..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default DonationPay;
