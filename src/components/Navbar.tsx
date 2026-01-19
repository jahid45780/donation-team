import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-400">
        Donation Team
      </h1>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-green-400">
          Home
        </Link>

        {token ? (
          <>
            <Link to="/donation" className="hover:text-green-400">
              Donate
            </Link>

            <Link to="/admin" className="hover:text-green-400">
              Admin
            </Link>

            <button
              onClick={() => dispatch(logout())}
              className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-green-400">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 px-4 py-1 rounded hover:bg-green-600"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
