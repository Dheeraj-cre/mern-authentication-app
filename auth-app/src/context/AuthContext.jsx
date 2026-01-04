import { createContext, useState, useEffect, useCallback } from "react";
import { getProfile } from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  // Logout helper (stable reference)
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  }, []);

  // Load user on refresh / token change
  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      if (!token) {
        if (isMounted) setLoading(false);
        return;
      }

      try {
        const data = await getProfile(token);
        if (isMounted) setUser(data.user);
      } catch (error) {
        if (isMounted) logout();
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, [token, logout]);

  // Login handler
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
