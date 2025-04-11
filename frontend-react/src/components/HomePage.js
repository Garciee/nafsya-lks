import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold">PinLes</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">Tentang</a>
          <a href="#play" className="hover:text-blue-400">Mainkan</a>
          <a href="#shop" className="hover:text-blue-400">Shop</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black to-gray-900 text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Selamat Datang di Pinles, user!</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Klik, iringi musik, dan jangan sampai salah! Uji kecepatan dan akurasi mu! im cooked vro
        </p>
        <a href="#play">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl text-lg transition-all duration-300">
            Mulai Bermain
          </button>
        </a>
      </section>

      {/* Tentang Game */}
      <section id="about" className="py-16 bg-white text-gray-800 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">what is Pinles?</h2>
        <p className="max-w-2xl mx-auto text-lg">
          PinLes adalah permainan musik yang menguji kecepatan tangan dan ketepatan reflek.
          Klik hanya pada kotak hitam yang muncul mengikuti irama musik, dan jangan sampai terlewatka 1 tiles pun!
        </p>
      </section>

      {/* Section Mainkan Game */}
      <section id="play" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">ENTER THE GAME?</h2>
        <a href="/game">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition-all duration-300">
            YEAH!
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; PinLes, copyright 2025</p>
      </footer>
    </div>
  );
};

export default HomePage;
