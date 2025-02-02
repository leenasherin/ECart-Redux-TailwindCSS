import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ insideHome }) => {
  const userCart = useSelector(state => state.cartReducer);
  const userWishlist = useSelector(state => state.wishlistReducer);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg fixed w-full p-4 text-white flex items-center">
      {/* Logo Section */}
      <Link to="/" className="text-2xl font-extrabold flex items-center">
        <i className="fa-solid fa-truck-fast me-2"></i>
        <span className="hover:text-gray-200 transition duration-300">Daily Cart</span>
      </Link>

      {/* Navigation Icons */}
      <ul className="flex items-center space-x-6">
        {/* Wishlist */}
        <Link to={'/wishlist'}>
          <li className="flex items-center space-x-2 hover:opacity-90 transition duration-300 mx-5">
            <i className="fa-solid fa-heart text-red-500 text-xl"></i>
            <span className="text-sm font-medium">Wishlist</span>
            <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{userWishlist?.length}</span>
          </li>
        </Link>

        {/* Cart */}
        <Link to={'/cart'}>
          <li className="flex items-center space-x-2 hover:opacity-90 transition duration-300">
            <i className="fa-solid fa-cart-plus text-green-400 text-xl"></i>
            <span className="text-sm font-medium">Cart</span>
            <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">{userCart?.length}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
