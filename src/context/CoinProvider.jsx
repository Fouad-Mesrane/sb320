import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
const CoinContext = createContext()
const CoinProvider = ({children}) => {

const [coins, setCoins] = useState([])
const [loading, setLoading] = useState(false)
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
// fetch coins
const fetchCoins = async () => {
   try {
    setLoading(true);
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await response.json();
    setCoins(data);
    setLoading(false);
   } catch (error) {
    console.log(error);
   }
  };
 // Filter coins based on search query
 const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

useEffect(() => {
    fetchCoins();
}, [])

let value = {
    coins,
    setCoins,
    loading,
    setLoading,
    searchQuery,
    setSearchQuery,
    filteredCoins,
    toggleTrackCoin,
    trackedCoins
}
  return (
    <CoinContext.Provider value={value} >
      {children}
    </CoinContext.Provider>
  )
}

export const useCoins = () => useContext(CoinContext)

export default CoinProvider