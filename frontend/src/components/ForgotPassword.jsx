import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email) {
    alert("Enter email ❌");
    return;
  }

  try {
    const res = await axios.post("http://127.0.0.1:5000/api/auth/forgot-password", {
      email
    });

    console.log("TOKEN:", res.data.token);

    alert("Reset link sent ✅");

    // token pass to reset page
    navigate(`/reset/${res.data.token}`);

  } catch (err) {
    console.log(err);
    alert("Error ❌");
  }
};

  return (
      <div className="flex justify-center items-center h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96 space-y-4">

        <h2 className="text-2xl text-blue-600 text-center">Forgot Password</h2>

        <input type="email" placeholder="Enter email" className="input"
          onChange={(e) => setEmail(e.target.value)} />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Send Link
        </button>

      </form>
    </div>
  );
}

export default ForgotPassword;