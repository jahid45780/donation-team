import { useSearchParams, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [params] = useSearchParams();

  const tranId = params.get("tran_id");
  const amount = params.get("amount");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-md text-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ✅ Payment Successful
        </h1>

        <p className="text-gray-700 mb-2">
          Transaction ID:
          <span className="font-semibold block">{tranId}</span>
        </p>

        <p className="text-gray-700 mb-6">
          Amount Paid:
          <span className="font-semibold block">{amount} Tk</span>
        </p>

        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
