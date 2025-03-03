import React from 'react'
import { Link } from 'react-router-dom'
import { useCoins } from '../context/CoinProvider';

const Header = () => {


const { searchQuery, setSearchQuery } = useCoins();

  return (
    <nav className="bg-blue-600 p-4 text-white text-center text-lg font-bold flex justify-between items-center">
      <Link><h1>Crypto Price Tracker</h1></Link>
      <input
          type="text"
          placeholder="Search for a cryptocurrency..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 text-black rounded-full w-1/2"
        />
    <ul className='flex gap-2'>
      <Link to={"/"} ><li>Home</li></Link>
      <Link to={"/tracking"}><li>Tracked</li></Link>
    </ul>
  
  </nav>
  )
}

export default Header