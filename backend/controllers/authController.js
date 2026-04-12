const db = require("../config/db");
const bcrypt = require("bcryptjs");

console.log("🔥 AUTH CONTROLLER LOADED");

// ✅ REGISTER
exports.register = async (req, res) => {
  try {
    console.log("🔥 REGISTER HIT", req.body);

    const { name, email, phone , password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      "INSERT INTO users (name, email, phone ,password) VALUES (?, ?, ?, ?)",
      [name, email, phone, hashedPassword]
    );

    console.log("✅ INSERTED:", result);

    res.json({ message: "Registered Successfully" });

  } catch (error) {
    console.log("❌ ERROR:", error);
    res.status(500).json({ message: "Register error" });
  }
};

// ✅ LOGIN
exports.login = async (req, res) => {
  try {
    console.log("🔥 LOGIN HIT", req.body);

    const { email, password } = req.body;

    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login success" });

  } catch (error) {
    console.log("❌ ERROR:", error);
    res.status(500).json({ message: "Login error" });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  const crypto = require("crypto");
  const token = crypto.randomBytes(32).toString("hex");

  await db.query(
    "UPDATE users SET reset_token = ? WHERE email = ?",
    [token, email]
  );

  res.json({ message: "Reset token generated", token });
};

exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  const [users] = await db.query(
    "SELECT * FROM users WHERE reset_token = ?",
    [token]
  );

  if (users.length === 0) {
    return res.status(400).json({ message: "Invalid token" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await db.query(
    "UPDATE users SET password = ?, reset_token = NULL WHERE reset_token = ?",
    [hashedPassword, token]
  );

  res.json({ message: "Password reset successful" });
};