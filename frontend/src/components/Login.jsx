console.log("🔥 LOGIN BUTTON CLICKED");
console.log("LOGIN API CALLED");
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!data.email || !data.password) {
    alert("Enter all fields ❌");
    return;
  }

  try {
    const res = await axios.post("http://127.0.0.1:5000/api/auth/login", {
      email: data.email,
      password: data.password,
    });

    // if token idre store maadu
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    if (data.remember) {
      localStorage.setItem("email", data.email);
    }

    alert("Login Successful ✅");
    navigate("/dashboard");

  } catch (err) {
    alert("Invalid email or password ❌");
  }
};

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-4">

        <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <div className="flex justify-between text-sm">
          <label>
            <input
              type="checkbox"
              onChange={(e) => setData({ ...data, remember: e.target.checked })}
            /> Remember me
          </label>

          <span
            onClick={() => navigate("/forgot")}
            className="text-blue-500 cursor-pointer"
          >
            Forgot?
          </span>
        </div>

        <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        <p className="text-center text-sm">
          Don’t have account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer"
          >
            Register
          </span>
        </p>

      </form>
    </div>
  );
}

export default Login;