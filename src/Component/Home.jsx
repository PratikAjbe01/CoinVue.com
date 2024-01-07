

import React from 'react';
import bitcoin from '../assets/bitcoin.png';
import ethereum from '../assets/ethereum.png';
import './Home.css';

function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#130749] to-[#0f051d] flex items-center justify-center flex-col space-y-10'>
      <div className="title text-center text-white">
        <div className="mb-4 flex items-center justify-center space-x-2">
          <div className="coin-animation w-12 sm:w-16 md:w-20 lg:w-24">
            <img src={bitcoin} alt="Bitcoin" />
          </div>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            TRACK AND TRADE
          </h1>
          <div className="coin-animation w-12 sm:w-16 md:w-20 lg:w-24">
            <img src={ethereum} alt="Ethereum" />
          </div>
        </div>
        <h1 className="font-extrabold text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          CRYPTO CURRENCIES
        </h1>
      </div>
      <div className="coin-img flex items-center justify-center space-x-3">
        <div className="img-1 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-yellow-500 rounded-full"></div>
        <div className="img-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-green-500 rounded-full"></div>
        <div className="img-3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-full"></div>
        <div className="img-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-purple-500 rounded-full"></div>
      </div>
    </div>
  );
}

export default Home;
