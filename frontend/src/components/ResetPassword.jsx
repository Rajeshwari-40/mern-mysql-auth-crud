import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  console.log("TOKEN:", token);
  

  const [data, setData] = useState({
    password: "",
    confirm: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.password || !data.confirm) {
      alert("Fill all fields ❌");
      return;
    }

    if (data.password !== data.confirm) {
      alert("Passwords not match ❌");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:5000/api/auth/reset-password", {
        token: token,
        newPassword: data.password
      });

      alert("Password Reset Successful ✅");
      navigate("/");

    } catch (err) {
      console.log(err);
      alert("Reset failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96 space-y-4">

        <h2 className="text-2xl text-blue-600 text-center">Reset Password</h2>

        <input type="password" placeholder="New Password"
          onChange={(e) => setData({ ...data, password: e.target.value })} />

        <input type="password" placeholder="Confirm Password"
          onChange={(e) => setData({ ...data, confirm: e.target.value })} />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Reset Password
        </button>

      </form>
    </div>
  );
}

export default ResetPassword;