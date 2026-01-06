import LoginForm from "../components/forms/LoginForm";
import "./Login.css";

function Login() {
  return (
    <div className="page-center">
      {/* Wrapper MUST be full width on mobile */}
      <div className="mobile-auth">

        {/* MOBILE HEADER (Canva style) */}
        <header className="mobile-header">
          <h1 className="brand">Welcome</h1>
          <div className="wave" />
        </header>

        {/* AUTH CARD (ONLY ONE CARD) */}
        <section className="auth-card">
          <LoginForm />
        </section>

      </div>
    </div>
  );
}

export default Login;
