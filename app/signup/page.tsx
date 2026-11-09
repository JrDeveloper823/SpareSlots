"use client";

import { useState, FormEvent } from "react";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
  const [accountType, setAccountType] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    if (password.length < 8) {
      setMessage("Your password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          account_type: accountType,
        },
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data.session) {
      setMessage("Your account has been created successfully!");
    } else {
      setMessage("Account created! Please check your email to confirm your account.");
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#101820",
      color: "#F4F6F3",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px 20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <form onSubmit={handleSignup} style={{
        width: "100%",
        maxWidth: "440px",
        background: "#202B34",
        padding: "35px",
        borderRadius: "16px",
        boxSizing: "border-box"
      }}>
        <h1 style={{ fontSize: "30px", marginBottom: "8px" }}>
          Join SpareSlot
        </h1>

        <p style={{ color: "#B7C1C8", marginBottom: "28px" }}>
          Never waste an empty appointment.
        </p>

        <label>Account type</label>

        <select
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          style={fieldStyle}
        >
          <option value="customer">Customer</option>
          <option value="business">Business</option>
        </select>

        <label>Email address</label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={fieldStyle}
        />

        <label>Password</label>

        <input
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          style={fieldStyle}
        />

        <label>Confirm password</label>

        <input
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Enter your password again"
          style={fieldStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "15px",
            background: "#B7F36B",
            color: "#101820",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        {message && (
          <p style={{ marginTop: "20px", lineHeight: 1.5 }}>
            {message}
          </p>
        )}
      </form>
    </main>
  );
}

const fieldStyle = {
  display: "block",
  width: "100%",
  padding: "13px",
  marginTop: "8px",
  marginBottom: "20px",
  borderRadius: "7px",
  border: "1px solid #52616B",
  background: "#101820",
  color: "#F4F6F3",
  boxSizing: "border-box" as const,
  fontSize: "15px"
};
