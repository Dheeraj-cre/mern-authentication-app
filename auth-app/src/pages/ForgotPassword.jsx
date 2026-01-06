import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { forgotPasswordApi } from "../services/authService";

import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");

    try {
      await forgotPasswordApi(data.email);
      navigate("/reset-password", {
        state: { email: data.email },
      });
    } catch (error) {
      setServerError(error.message || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-center">
      <div className="mobile-auth">

        {/* MOBILE HEADER */}
        <header className="mobile-header">
          <h1 className="brand">Welcome</h1>
          <div className="wave" />
        </header>

        {/* AUTH CARD */}
        <section className="auth-card">
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="auth-title">Forgot Password</h2>

            <Input
              label="Email"
              type="email"
              placeholder="Enter registered email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}

            {serverError && <p className="error">{serverError}</p>}

            <Button type="submit" disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </Button>

            <p className="auth-link">
              <Link to="/" className="back-link">
                ← Back to Login
              </Link>
            </p>
          </form>
        </section>

      </div>
    </div>
  );
}

export default ForgotPassword;
