import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      localStorage.setItem("user", email);
      navigate("/Profiles");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login ke PinLes</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Belum punya akun?{" "}
          <a href="/Register" className="text-blue-400 hover:underline">
            Daftar Sekarang
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogPage;