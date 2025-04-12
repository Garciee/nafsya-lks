import React from "react";

const ProfileCard = ({ name, email }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-white max-w-sm w-full text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
        src="/images/pfp.jpg"
        alt="Profile"
      />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-400 mb-4">{email}</p>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-7 rounded"
      >
        Logout
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/RegisterPage";
        }}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-7 rounded"
      >
        Login
      </button>
      <section>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/Games";
        }}
        className="bg-gray-800 hover:text-blue-800 text-white font-bold py-2 px-7 rounded"
      >
        Games
      </button>
      </section>
    </div>
   
  );
};

export default ProfileCard;