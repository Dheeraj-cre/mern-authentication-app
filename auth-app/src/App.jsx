import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
// import OTP from "./pages/OTP";
import ResetPassword from "./pages/ResetPassword";

import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/layout/Navbar";

function App() {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading...</p>;
  }

  return (
    <>
      {/* Show Navbar only when logged in */}
      {token && <Navbar />}

      <Routes>
        {/* ================= PUBLIC AUTH ROUTES ================= */}
        <Route
          path="/login"
          element={token ? <Navigate to="/dashboard" replace /> : <Login />}
        />

        <Route
          path="/signup"
          element={token ? <Navigate to="/dashboard" replace /> : <Signup />}
        />

        <Route
          path="/forgot-password"
          element={token ? <Navigate to="/dashboard" replace /> : <ForgotPassword />}
        />

        {/* OTP + Reset are public but flow-controlled inside components */}
        {/* <Route
          path="/otp"
          element={token ? <Navigate to="/dashboard" replace /> : <OTP />}
        /> */}

        <Route
          path="/reset-password"
          element={token ? <Navigate to="/dashboard" replace /> : <ResetPassword />}
        />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route
          path="*"
          element={<Navigate to={token ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </>
  );
}

export default App;
