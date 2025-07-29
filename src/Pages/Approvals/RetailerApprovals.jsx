import React, { useState } from 'react';
import Data from "../../DataStore/DataStore.json";
import RetailersCard from '../../Component/Cards/RetailersCard';

const RetailerApprovals = () => {
  const allRetailers = Data.retailers;

  const [searchTerm, setSearchTerm] = useState('');

  const filteredRetailers = allRetailers.filter((retailer) => {
    const lowerTerm = searchTerm.toLowerCase();
    return (
      retailer.name.toLowerCase().includes(lowerTerm) ||
      retailer.owner_name.toLowerCase().includes(lowerTerm)
    );
  });

  return (
    <div className="max-w-5xl mx-auto p-5 font-sans">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-extrabold text-indigo-700">Retailer Approvals</h1>

        <input
          type="search"
          placeholder="Search by retailer or owner..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search retailers"
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </header>

      <section className="flex flex-col gap-6">
        {filteredRetailers.length > 0 ? (
          filteredRetailers.map((retailer) => (
            <RetailersCard key={retailer.retailer_id} retailer={retailer} />
          ))
        ) : (
          <p className="text-center text-gray-500">No retailers found matching your search.</p>
        )}
      </section>
    </div>
  );
};

export default RetailerApprovals;
