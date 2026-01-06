import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { token, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (loading || !token) return null;

  return (
    <nav className="navbar">
      {/* Brand */}
      <Link to="/dashboard" className="navbar-brand">
        Authentication App
      </Link>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Menu */}
      <div className={`navbar-right ${open ? "active" : ""}`}>
        <Link
          to="/dashboard"
          className="navbar-link"
          onClick={() => setOpen(false)}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
