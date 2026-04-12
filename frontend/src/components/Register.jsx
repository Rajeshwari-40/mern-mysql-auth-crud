console.log("🔥 REGISTER BUTTON CLICKED");
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("DATA SENT:", data);
    if (!data.name || !data.email || !data.phone || !data.password || !data.confirmPassword) {
      alert("All fields required ❌");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:5000/api/auth/register", {
        name: data.name,
        email: data.email,
        phone: data.phone,  
        password: data.password,
      });

      alert("Registered Successfully ✅");
      navigate("/");

    } catch (err) {
  console.log("❌ ERROR:", err.response?.data || err.message);

  alert(err.response?.data?.message || "Register Failed ❌");
}
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-4">

        <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>

        <input
          placeholder="Name"
          value={data.name}
          className="w-full border border-gray-300 p-2 rounded-lg"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          className="w-full border border-gray-300 p-2 rounded-lg"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

       <input
           placeholder="Phone"
           value={data.phone}
           className="w-full border border-gray-300 p-2 rounded-lg"
           onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

       <input
           type={show ? "text" : "password"}
           placeholder="Password"
           value={data.password}
           className="w-full border border-gray-300 p-2 rounded-lg"
           onChange={(e) => setData({ ...data, password: e.target.value })}
        />

       <input
           type={show ? "text" : "password"}
           placeholder="Confirm Password"
           value={data.confirmPassword}
           className="w-full border border-gray-300 p-2 rounded-lg"
           onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
        />

       <button
           type="button"
           onClick={() => setShow(!show)}
           className="text-sm text-blue-500"
          >
         {show ? "Hide Password" : "Show Password"}
       </button>
       <button
            type="submit"
            onClick={() => console.log("🔥 BUTTON CLICKED")}
            className="bg-blue-600 text-white w-full py-2 rounded-lg"
          >
          Register
        </button>

        

        <p className="text-center text-sm">
          Already have account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 cursor-pointer"
          >
            Login
          </span>
        </p>

      </form>
    </div>
  );
}

export default Register;