import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function OTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // 🔒 OTP backend not implemented yet
      // await verifyOtpApi({ email, otp: data.otp });

      alert("OTP verification will be enabled soon.");
      navigate("/login");
    } catch (error) {
      alert("Invalid OTP");
      console.error("OTP error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Safety check
  if (!email) {
    return (
      <div className="auth-form">
        <p>Invalid access. Please start from signup.</p>
        <Link to="/signup">Go to Signup</Link>
      </div>
    );
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="auth-title">Verify OTP</h2>
      <p className="auth-subtitle">OTP sent to {email}</p>

      <Input
        label="OTP"
        placeholder="Enter 6-digit OTP"
        {...register("otp", {
          required: "OTP is required",
          minLength: {
            value: 6,
            message: "OTP must be 6 digits",
          },
        })}
      />
      {errors.otp && <p className="error">{errors.otp.message}</p>}

      <Button type="submit" disabled={loading}>
        {loading ? "Verifying..." : "Verify OTP"}
      </Button>

      <p className="auth-link">
        <Link to="/login">Back to Login</Link>
      </p>
    </form>
  );
}

export default OTP;
