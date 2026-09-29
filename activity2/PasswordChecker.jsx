import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PasswordChecker.css";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  useEffect(() => {
    if (password.length === 0) {
      setStrength("");
    } else if (password.length < 6) {
      setStrength("Weak");
    } else if (password.length < 10) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  }, [password]);

  const getSuggestion = () => {
    if (!password) return "Enter a password to see its strength.";
    if (password.length < 6) return "Keep typing... it's too short!";
    if (password.length < 10) return "Almost there! A few more letters for a strong password.";
    return "Great! This is a long and secure password.";
  };

  return (
    <div className="page">
      <Link to="/" className="back-btn">← Back to Home</Link>
      <div className="card">
        <h1 className="title">Password Checker</h1>
        <p className="subtitle">Strength is based on how long your password is.</p>

        <input
          type="password"
          placeholder="Type here..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />

        {strength && (
          <div className="result">
            <p className={`strength ${strength.toLowerCase()}`}>
              Strength: {strength}
            </p>
          </div>
        )}

        <div className="footer-suggestion">
          <p className="suggestion-text">
            <span>TIP:</span> {getSuggestion()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordChecker;