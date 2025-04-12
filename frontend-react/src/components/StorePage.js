import React from "react";

const StorePage = () => {

  const games = [
    {
      id: 1,
      title: "PinLes Classic",
      desc: "Game piano tiles klasik dengan musik yang bikin nostalgia.",
      img: "/images/pinles-classic.jpg",
      price: "5.000",
    },
    {
      id: 2,
      title: "PinLes EDM Pack",
      desc: "Paket lagu EDM eksklusif untuk tantangan lebih seru.",
      img: "/images/edm-pack.jpg",
      price: "Rp15.000",
    },
    {
      id: 3,
      title: "PinLes Remix Mode",
      desc: "Mode remix dengan kecepatan tinggi dan efek keren!",
      img: "/images/remix-mode.jpg",
      price: "Rp10.000",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="text-2xl font-bold">-PinLes</div>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/AbtPage" className="hover:text-blue-400">About</a>
          <a href="/Games" className="hover:text-blue-400">Game</a>
          <a href="/StorePage" className="hover:text-blue-400">Shop</a>
          <a href="/Login" className="hover:text-blue-400 hover:bg-blue-950 rounded-xl">Login</a>
          <a href="/Profiles" className="hover:text-blue-400">Profile</a>
        </div>
      </nav>

      {/* Store Section */}
      <section className="py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Mode Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game) => (
            <div key={game.id} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={game.img} alt={game.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{game.title}</h2>
              <p className="text-gray-300 mb-4">{game.desc}</p>
              <a href="http://127.0.0.1:8000/pay"button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                {game.price === "Gratis" ? "Mainkan Sekarang" : `Beli - ${game.price}`}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; PinLes, copyright 2025</p>
      </footer>
    </div>
  );
};

export default StorePage;