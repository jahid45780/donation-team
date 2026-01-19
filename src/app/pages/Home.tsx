const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-slate-800">
        Welcome to Donation Team 💚
      </h1>

      <p className="text-lg text-slate-600 mb-2">
        Every month each member donates{" "}
        <span className="font-semibold text-green-600">50 Tk</span>
      </p>

      <p className="text-slate-500">
        Secure payments powered by SSLCommerz
      </p>
    </div>
  );
};

export default Home;
