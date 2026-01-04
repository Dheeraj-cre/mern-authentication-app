import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { signupApi } from "../../services/authService";
import { setToken } from "../../utils/token";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./SignupForm.css"

function SignupForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Call backend register API
      const res = await signupApi(data);

      // ✅ Backend returns token
      if (res.token) {
        setToken(res.token);   // store JWT
        login(res.token);      // update AuthContext
        navigate("/dashboard");
      } else {
        alert(res.message || "Signup failed");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="auth-title">Signup</h2>

      {/* Name */}
      <Input
        label="Name"
        placeholder="Enter your name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      {/* Email */}
      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      {/* Password */}
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Minimum 6 characters required",
          },
        })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      {/* Confirm Password */}
      <Input
        label="Confirm Password"
        type="password"
        placeholder="Re-enter password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}

      <Button type="submit" disabled={loading}>
        {loading ? "Signing up..." : "Signup"}
      </Button>

      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default SignupForm;
