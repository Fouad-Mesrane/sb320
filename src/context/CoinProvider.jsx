import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
const CoinContext = createContext()
const CoinProvider = ({children}) => {

const [coins, setCoins] = useState([])
const [loading, setLoading] = useState(false)

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


useEffect(() => {
    fetchCoins();
}, [])

let value = {
    coins,
    setCoins,
    loading,
    setLoading
}
  return (
    <CoinContext.Provider value={value} >
      {children}
    </CoinContext.Provider>
  )
}

export const useCoins = () => useContext(CoinContext)

export default CoinProvider