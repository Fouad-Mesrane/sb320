import React from "react";
import { useCoins } from "../context/CoinProvider";
import { Link } from "react-router-dom";

const TrackingPage = () => {
  const { trackedCoins } = useCoins();
  return (
    <div className="tracked-coins-page  ">
      <div className="flex justify-between bg-blue-600 p-4 text-white text-center text-xl font-bold">
        <h2 className="">Tracked Coins</h2>
        <Link to={"/"}>Home</Link>
      </div>
      {trackedCoins.length > 0 ? (
        trackedCoins.map((coinId) => (
          <div
            key={coinId}
            className="bg-white shadow-md rounded-lg p-4 mb-4 mx-auto text-center w-1/2"
          >
            <h3 className="text-lg">{coinId}</h3>
            
          </div>
        ))
      ) : (
        <p>No tracked coins.</p>
      )}
    </div>
  );
};

export default TrackingPage;
