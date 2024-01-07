import axios from 'axios';
import React, { useState } from 'react';
const [data,setdata]=useState([]);
const coindata=
function Market() {
  const coinData = [
    { name: 'Bitcoin', price: '$50,000', noCap: '21M', marketCap: '$940B' },
    { name: 'Ethereum', price: '$3,500', noCap: 'N/A', marketCap: '$400B' },
    { name: 'Binance Coin', price: '$400', noCap: 'N/A', marketCap: '$70B' },
    { name: 'Cardano', price: '$2.50', noCap: '45B', marketCap: '$80B' },
    { name: 'Solana', price: '$150', noCap: 'N/A', marketCap: '$40B' },
    { name: 'XRP', price: '$1.20', noCap: '100B', marketCap: '$55B' },
    { name: 'Polkadot', price: '$30', noCap: '1B', marketCap: '$30B' },
    { name: 'Dogecoin', price: '$0.30', noCap: 'N/A', marketCap: '$40B' },
    { name: 'Avalanche', price: '$60', noCap: 'N/A', marketCap: '$15B' },
    { name: 'Chainlink', price: '$25', noCap: '1B', marketCap: '$10B' },
  ];

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Coin
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              No Cap
            </th>
            <th scope="col" class="px-6 py-3">
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
              <td class="px-6 py-4">{item.price}</td>
              <td class="px-6 py-4">{item.noCap}</td>
              <td class="px-6 py-4">{item.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Market;
