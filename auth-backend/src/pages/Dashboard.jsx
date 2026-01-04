import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./dashboard.css";

function Dashboard() {
  const { user, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return <p className="dashboard-loading">Loading...</p>;
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h2>Welcome, {user?.name || "User"} </h2>
        <p>You are logged in using secure JWT authentication.</p>
      </div>

      {/* Cards */}
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h4> User Details</h4>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>

        <div className="dashboard-card">
          <h4> Security</h4>
          <p>Your session is protected using JSON Web Tokens.</p>
          <p>Only authenticated users can access this page.</p>
        </div>
      </div>

{/* Actions */}
<div className="dashboard-actions">
  <button className="btn-logout" onClick={handleLogout}>
    Logout
  </button>
</div>

    </div>
  );
}

export default Dashboard;
