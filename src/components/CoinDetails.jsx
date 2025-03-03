import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCoins } from "../context/CoinProvider";
import { Link } from "react-router-dom";
function CoinDetails() {
  const { id } = useParams();
  const { coins } = useCoins();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const selectedCoin = coins.find((coin) => coin.id === id);
    setCoin(selectedCoin);
  }, [id, coins]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 p-4 text-white text-center text-xl font-bold">
        <Link to="/" className="hover:underline">
          Crypto Price Tracker
        </Link>
      </header>

      <main className="p-6">
        {coin ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="font-semibold text-2xl">{coin.name}</h2>
            <p className="text-xl text-blue-600">
              Price: ${coin.current_price}
            </p>
            <p className="mt-4">Market Cap: ${coin.market_cap}</p>
            <p className="mt-4">24h Volume: ${coin.total_volume}</p>
          </div>
        ) : (
          <div>Coin not found.</div>
        )}
      </main>
    </div>
  );
}

export default CoinDetails;
