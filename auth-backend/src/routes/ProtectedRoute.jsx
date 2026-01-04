import { Navigate } from "react-router-dom";
import { getToken } from "../utils/token";

function ProtectedRoute({ children }) {
  const token = getToken();

  // ❌ No token → block route
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // ✅ Token exists → allow route
  return children;
}

export default ProtectedRoute;
