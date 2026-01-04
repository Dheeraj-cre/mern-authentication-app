import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Email sent to:", data.email);

    // mock OTP send
    navigate("/otp");
  }

  return (
    <div className="page-center">
      <div className="auth-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Forgot Password
          </h2>
          <p className="under-processing">
   Under Processing – This feature is not working yet
</p>


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

          <Button type="submit">Send OTP</Button>

          <p style={{ marginTop: "15px", textAlign: "center" }}>
            <Link to="/">Back to Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
