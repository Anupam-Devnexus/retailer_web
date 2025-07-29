import React, { useState, useMemo } from 'react';
import Data from '../../DataStore/DataStore.json';
import ProductCard from '../../Component/Cards/ProductCard';

const AllProducts = () => {
  const allProducts = Data.product_listings;

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtered and searched products
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((product) =>
        statusFilter === 'all' ? true : product.status === statusFilter
      )
      .filter((product) =>
        categoryFilter === 'all' ? true : product.category === categoryFilter
      );
  }, [allProducts, searchTerm, statusFilter, categoryFilter]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleStatusChange = (productId, currentStatus) => {
    alert(`Status change requested for Product ID: ${productId}, Current Status: ${currentStatus}`);
    // Optional: integrate with backend or state update
  };

  return (
    <div className="px-6 bg-gray-50 w-full min-h-screen">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center mb-8 text-[var(--accent)]">
        All Product Listings
      </h1>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-4 py-2 rounded-md shadow w-full sm:w-1/3"
        />

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-4 py-2 rounded-md shadow w-full sm:w-1/3"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-4 py-2 rounded-md shadow w-full sm:w-1/3"
        >
          <option value="all">All Categories</option>
          {[...new Set(allProducts.map((p) => p.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.product_id}
              {...product}
              onChangeStatus={handleStatusChange}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-16">
          No matching products found.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md border transition ${
                  page === currentPage
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
