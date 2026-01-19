import { useSearchParams, Link } from "react-router-dom";

const PaymentFail = () => {
  const [params] = useSearchParams();

  const tranId = params.get("tran_id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded-xl shadow-md text-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          ❌ Payment Failed
        </h1>

        <p className="text-gray-700 mb-6">
          Transaction ID:
          <span className="font-semibold block">{tranId}</span>
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/donation"
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
          >
            Try Again
          </Link>

          <Link
            to="/"
            className="border border-gray-400 px-5 py-2 rounded-lg hover:bg-gray-100"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
