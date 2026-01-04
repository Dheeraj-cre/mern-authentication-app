import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { loginApi } from "../../services/authService";
import { setToken } from "../../utils/token";
import "./LoginForm.css";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("Login data:", data);

      const res = await loginApi(data);
      console.log("Login response:", res);

      if (res?.token) {
        setToken(res.token);
        login(res.token);
        navigate("/dashboard");
      } else {
        alert(res?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="auth-title">Login</h2>

      <Input
        label="Email"
        type="email"
        {...register("email", { required: true })}
      />

      <Input
        label="Password"
        type="password"
        {...register("password", { required: true })}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>

      <p className="auth-link">
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>

      <p className="auth-link">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </form>
  );
}

export default LoginForm;
