import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
function Market() {
  const [coinData, setCoinData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all assets
        const response = await axios.get('https://api.coincap.io/v2/assets');
        const allAssets = response.data.data;
        setTotalPages(Math.ceil(allAssets.length / itemsPerPage));

        // Calculate start and end index for the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Set the current items for the page
        const currentItems = allAssets.slice(startIndex, endIndex);
        setCoinData(currentItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [currentPage, itemsPerPage]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
             24hr Change
            </th>
            <th scope="col" className="px-6 py-3">
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((item) => (
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
              <td className="px-6 py-4">{Math.round(item.priceUsd * 10) / 10}</td>
              <td className="px-6 py-4">
                {Math.round(item.changePercent24Hr * 10) / 10 + '%'}
              </td>
              <td className="px-6 py-4">{Math.round(item.marketCapUsd * 10) / 10}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex items-center justify-center gap-2'>
        <button className=' rounded-lg p-3 mt-1 bg-gray-800 ' onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}>
         <FontAwesomeIcon icon={faAngleLeft}  color='white'/>
        </button>
        <span className=' rounded-lg p-3 mt-1 bg-gray-800 text-white font-semibold'>{currentPage}</span>
        <button className=' rounded-lg p-3 mt-1 bg-gray-800 ' onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages}>
          <FontAwesomeIcon icon={faAngleRight} color='white' />
        </button>
      </div>
    </div>
  );
}

export default Market;
