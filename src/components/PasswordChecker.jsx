import React, { useState } from "react";
export default function PasswordChecker() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const calculateStrength = (password) => {
        if (password.length === 0) {
          return "";
        }
        if (password.length < 6 || /^[a-zA-Z]+$/.test(password)) {
          return "weak";
        }
        if (
          password.length >= 6 &&
          password.length <= 8 &&
          /[a-zA-Z]/.test(password) &&
          /\d/.test(password)
        ) {
          return "medium";
        }
        if (
          password.length > 8 &&
          /[a-zA-Z]/.test(password) &&
          /\d/.test(password) &&
          /[\W_]/.test(password)
        ) {
          return "strong";
        }
        return "weak";
      };
    
      const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        setStrength(calculateStrength(inputPassword));
      };
    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h3>Password Strength Checker</h3>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                }}
            />
            <div>
                <span>Password Strength: </span>
                <span
                    style={{
                        fontWeight: "bold",
                        color:
                            strength === "weak"
                                ? "red"
                                : strength === "medium"
                                    ? "orange"
                                    : "green",
                    }}
                >
                    {strength || "Enter a password"}
                </span>
            </div>
            <div className="password-strength-meter">
                <div
                    className={`strength-bar ${strength === "weak"
                            ? "weak"
                            : strength === "medium"
                                ? "medium"
                                : strength === "strong"
                                    ? "strong"
                                    : ""
                        }`}
                ></div>
            </div>
        </div>
    )
}