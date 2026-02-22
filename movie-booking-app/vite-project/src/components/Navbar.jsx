import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-black border-b border-gray-800 px-10 py-4 flex justify-between items-center">
      <NavLink
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        🎬 MTime
      </NavLink>

      <div className="space-x-8 font-medium">
        {isLoggedIn && (
          <NavLink
            to="/"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Movies
          </NavLink>
        )}

        {!isLoggedIn ? (
          <NavLink
            to="/login"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Login
          </NavLink>
        ) : (
          <button
            onClick={handleLogout}
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;