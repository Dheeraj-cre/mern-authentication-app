import SignupForm from "../components/forms/SignupForm";
import "./Signup.css";

function Signup() {
  return (
    <div className="page-center">
      <div className="mobile-auth">

        {/* MOBILE HEADER (same as Login) */}
        <header className="mobile-header">
          <h1 className="brand">Welcome</h1>
          <div className="wave" />
        </header>

        {/* AUTH CARD */}
        <section className="auth-card">
          <SignupForm />
        </section>

      </div>
    </div>
  );
}

export default Signup;
