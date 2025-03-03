import React, { useState } from "react";
import Header from "../components/Header";
import { useCoins } from "../context/CoinProvider";
import { Link } from "react-router-dom";
const Home = () => {
  const { coins, loading } = useCoins();
  const [searchQuery, setSearchQuery] = useState("");

  const [trackedCoins, setTrackedCoins] = useState(() => {
    // Retrieve tracked coins from local storage
    const savedCoins = localStorage.getItem("trackedCoins");
    return savedCoins ? JSON.parse(savedCoins) : [];
  });

  // Toggle coin tracking
  const toggleTrackCoin = (coinId) => {
    const newTrackedCoins = trackedCoins.includes(coinId)
      ? trackedCoins.filter((id) => id !== coinId)
      : [...trackedCoins, coinId];

    setTrackedCoins(newTrackedCoins);
    localStorage.setItem("trackedCoins", JSON.stringify(newTrackedCoins)); // Sync with localStorage
  };

  // Filter coins based on search query
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <Header />

      <main className="p-6">
        <input
          type="text"
          placeholder="Search for a cryptocurrency..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="text-center text-xl">Loading...</div>
          ) : (
            filteredCoins.map((coin) => (
              <div
                key={coin.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <h2 className="font-semibold text-lg">{coin.name}</h2>
                <p className="text-xl text-blue-600">
                  {coin.current_price} USD
                </p>
                <Link to={`/coin/${coin.id}`} className="mt-4 text-blue-500">
                  View Details
                </Link>
                <button
                  onClick={() => toggleTrackCoin(coin.id)}
                  className={`track-btn ${
                    trackedCoins.includes(coin.id) ? "tracked" : ""
                  } track-btn bg-blue-500 text-white py-2 px-4 rounded`}
                >
                  {trackedCoins.includes(coin.id) ? "Untrack" : "Track"}
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
