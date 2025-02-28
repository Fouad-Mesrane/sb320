import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
const CoinContext = createContext()
const CoinProvider = ({children}) => {

const [coins, setCoins] = useState([])
const [loading, setLoading] = useState(false)

// fetch coins
const fetchCoins = async () => {
    setLoading(true);
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await response.json();
    setCoins(data);
    setLoading(false);
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
    <CoinContext.provider value={value} >
      {children}
    </CoinContext.provider>
  )
}

export default CoinProvider