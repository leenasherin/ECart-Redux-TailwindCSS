import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer);

  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [productsPerPage] = useState(8); // 8 products per page
  const [searchQuery, setSearchQuery] = useState(''); // Search query state

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on search query
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic: Calculate the products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage; // End index of products to display
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // Start index of products to display
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct); // Get products for the current page

  // Handle page changes
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Total pages calculation (total filtered products / products per page)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className="container px-4 mx-auto">
        {/* Search Bar */}
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Search products here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-2/3 md:w-1/2 lg:w-1/3 p-2 rounded-lg border border-gray-200 shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center my-5 text-3xl">
            <img
              width={'100px'}
              height={'100px'}
              src="https://i.pinimg.com/originals/9f/5b/a6/9f5ba6b38c4259a23c5965a8164ec86f.gif"
              alt=""
            />
            Loading...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div className="rounded border p-2 shadow" key={product.id}>
                    <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{product?.title}</h3>
                      <Link
                        to={`/${product?.id}/view`}
                        className="bg-violet-600 rounded p-1 mt-3 text-white inline-block"
                      >
                        View More....
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
                  Products Not Found!!
                </div>
              )}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center items-center mt-6">
              <nav aria-label="Page navigation">
                <ul className="flex space-x-4">
                  {/* Previous Page Button */}
                  <li>
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 text-white bg-blue-500 rounded-md disabled:bg-gray-400"
                    >
                      Previous
                    </button>
                  </li>
                  {/* Page Number Buttons */}
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 text-white ${currentPage === index + 1 ? 'bg-blue-600' : 'bg-blue-400'} rounded-md`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  {/* Next Page Button */}
                  <li>
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 text-white bg-blue-500 rounded-md disabled:bg-gray-400"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
