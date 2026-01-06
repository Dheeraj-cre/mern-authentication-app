import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { resetPasswordApi } from "../services/authService";
import "./Login.css";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  //  Block direct access
  useEffect(() => {
    if (!email) {
      navigate("/forgot-password", { replace: true });
    }
  }, [email, navigate]);

  if (!email) return null;

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setServerError("");

      await resetPasswordApi({
        email,
        otp: data.otp,
        newPassword: data.password,
      });

      alert("Password updated successfully ");
      navigate("/login", { replace: true });
    } catch (error) {
      setServerError(error.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-center">
      <div className="auth-card">
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="auth-title">Reset Password</h2>

          <Input
            label="OTP"
            placeholder="Enter 6-digit OTP"
            {...register("otp", {
              required: "OTP is required",
              minLength: { value: 6, message: "OTP must be 6 digits" },
            })}
          />
          {errors.otp && <p className="error">{errors.otp.message}</p>}

          <Input
            label="New Password"
            type="password"
            placeholder="Enter new password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" },
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm new password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}

          {serverError && <p className="error">{serverError}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </Button>

          <p className="auth-link">
            Didn’t receive OTP? <Link to="/forgot-password">Resend OTP</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
