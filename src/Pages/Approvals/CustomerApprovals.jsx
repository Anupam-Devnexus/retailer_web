import React, { useState } from 'react';
import Data from "../../DataStore/DataStore.json";
import CustomerCard from '../../Component/Cards/CustomerCard';

const CustomerApprovals = () => {
  const allCustomers = Data.customers;
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 6;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const filteredCustomers = allCustomers
    .filter(customer => {
      const search = searchTerm.toLowerCase();
      return (
        customer.name.toLowerCase().includes(search) ||
        customer.email.toLowerCase().includes(search)
      );
    })
    .filter(customer => {
      if (statusFilter === 'all') return true;
      return customer.status === statusFilter;
    });

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const startIndex = (currentPage - 1) * customersPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, startIndex + customersPerPage);

  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <h1 className="text-2xl font-bold text-indigo-800">🧾 Customer Approvals</h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="search"
            placeholder=" Search by name or email..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border-b  shadow-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={statusFilter}
            onChange={handleStatusFilter}
            className="px-4 py-2 border-b shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </header>

      {/* Customer Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {currentCustomers.length > 0 ? (
          currentCustomers.map((customer) => (
            <CustomerCard key={customer.customer_id} customer={customer} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            😔 No customers found.
          </p>
        )}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            ⬅ Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index + 1)}
              className={`px-3 py-1 text-sm font-medium rounded ${
                currentPage === index + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerApprovals;
