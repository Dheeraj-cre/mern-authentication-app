const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth`;

/* ======================
   REGISTER
====================== */
export async function signupApi(data) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Signup failed");
  }

  return result;
}

/* ======================
   LOGIN
====================== */
export async function loginApi(data) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result;
}

/* ======================
   GET PROFILE (Protected)
====================== */
export async function getProfile(token) {
  const res = await fetch(`${BASE_URL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Unauthorized");
  }

  return result;
}

/* ======================
   FORGOT PASSWORD (Send OTP)
====================== */
export async function forgotPasswordApi(email) {
  const res = await fetch(`${BASE_URL}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to send OTP");
  }

  return result;
}

/* ======================
   RESET PASSWORD (Verify OTP)
====================== */
export async function resetPasswordApi(data) {
  const res = await fetch(`${BASE_URL}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Password reset failed");
  }

  return result;
}
