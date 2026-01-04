import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function ResetPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  function onSubmit(data) {
    console.log("New Password:", data.password);
    alert("Password reset successful");
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px" }}>
      <h2>Reset Password</h2>

      <Input
        label="New Password"
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Minimum 6 characters required",
          },
        })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <Input
        label="Confirm Password"
        type="password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}

      <Button type="submit">Reset Password</Button>
    </form>
  );
}

export default ResetPassword;
