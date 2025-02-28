import React from 'react'
import Header from '../components/Header'
import { useCoins } from '../context/CoinProvider'
import { Link } from 'react-router-dom'
const Home = () => {

    const {coins,loading} = useCoins()
  return (
    <div>
        <Header/>
        <main className="p-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="text-center text-xl">Loading...</div>
          ) : (
            coins.map((coin) => (
              <div key={coin.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                <h2 className="font-semibold text-lg">{coin.name}</h2>
                <p className="text-xl text-blue-600">{coin.current_price} USD</p>
                <Link to={`/coin/${coin.id}`} className="mt-4 text-blue-500">View Details</Link>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default Home