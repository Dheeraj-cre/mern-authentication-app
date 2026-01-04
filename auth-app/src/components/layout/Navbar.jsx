import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

// CSS import
import "./Navbar.css";

function Navbar() {
  const { user, token, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading || !token) return null;

  return (
    <nav className="navbar">
      {/* Brand */}
      <Link to="/dashboard" className="navbar-brand">
        Authentication App
      </Link>

      {/* Right Section */}
      <div className="navbar-right">
        {/* <span className="navbar-user">
          Hi, <strong>{user?.name || "User"}</strong>
        </span> */}

        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>

        {/* <button className="navbar-logout" onClick={handleLogout}>
          Logout
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
