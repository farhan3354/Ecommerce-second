// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200/20">
//         <NavLink to="/">
//           <h1 className="text-2xl font-bold">My Store</h1>
//         </NavLink>
//         <div className="flex md:hidden">
//           <button onClick={toggleMenu}>
//             <img
//               className={`toggle block ${isMenuOpen ? 'hidden' : ''}`}
//               src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
//               width="48"
//               height="48"
//               alt="Menu Icon"
//             />
//             <img
//               className={`toggle ${isMenuOpen ? 'block' : 'hidden'}`}
//               src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
//               width="48"
//               height="48"
//               alt="Close Icon"
//             />
//           </button>
//         </div>
//         <div
//           className={`toggle w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none ${isMenuOpen ? 'block' : 'hidden'}`}
//         >
//           <NavLink
//             to="/"
//             className="block px-3 py-3 text-teal-900 border-b-2 border-teal-900 md:inline-block hover:text-teal-500 md:border-none"
//             activeClassName="text-teal-500"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/products"
//             className="block px-3 py-3 text-teal-900 border-b-2 border-teal-900 md:inline-block hover:text-teal-500 md:border-none"
//             activeClassName="text-teal-500"
//           >
//             Products
//           </NavLink>
//           <NavLink
//             to="/Aboutus"
//             className="block px-3 py-3 text-teal-900 border-b-2 border-teal-900 md:inline-block hover:text-teal-500 md:border-none"
//             activeClassName="text-teal-500"
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="block px-3 py-3 text-teal-900 border-b-2 border-teal-900 md:inline-block hover:text-teal-500 md:border-none"
//             activeClassName="text-teal-500"
//           >
//             Contact
//           </NavLink>
//         </div>
//         {/* Modify the Create Account link so it appears on small screens as well */}
//         <NavLink
//           to="/create-account"
//           className={`toggle w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded ${isMenuOpen ? 'block' : 'hidden'} md:block`}
//           activeClassName="bg-teal-500"
//         >
//           Create Account
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Example cart count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white shadow-lg bg-gradient-to-r from-teal-400 to-teal-600">
      <div className="container flex items-center justify-between px-5 py-3 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-wide">My Store</span>
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="items-center hidden w-1/3 md:flex">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 text-teal-900 border-none rounded-l-lg focus:ring-2 focus:ring-teal-300"
          />
          <button className="px-4 py-2 transition bg-teal-700 rounded-r-lg hover:bg-teal-800">
            <FiSearch className="text-lg text-white" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden space-x-6 md:flex">
          <NavLink
            to="/"
            className="transition hover:text-teal-300"
            activeClassName="text-teal-200 font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="transition hover:text-teal-300"
            activeClassName="text-teal-200 font-semibold"
          >
            Products
          </NavLink>
          <NavLink
            to="/aboutus"
            className="transition hover:text-teal-300"
            activeClassName="text-teal-200 font-semibold"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="transition hover:text-teal-300"
            activeClassName="text-teal-200 font-semibold"
          >
            Contact
          </NavLink>
        </div>

        {/* Cart and Create Account */}
        <div className="flex items-center space-x-4">
          {/* Add to Cart */}
          <div className="relative">
            <NavLink
              to="/cart"
              className="flex items-center transition hover:text-teal-300"
            >
              <FiShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Create Account */}
          <NavLink
            to="/create-account"
            className="hidden px-4 py-2 font-medium transition bg-teal-800 rounded-lg md:block hover:bg-teal-700"
          >
            Create Account
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="p-4 space-y-2 text-white bg-teal-500 md:hidden">
          <NavLink
            to="/"
            className="block transition hover:text-teal-300"
            activeClassName="text-teal-200 font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="block transition hover:text-teal-300"
            activeClassName="text-teal-200 font-semibold"
          >
            Products
          </NavLink>
          <NavLink
            to="/aboutus"
            className="block transition hover:text-teal-300"
            activeClassName="text-teal-200 font-semibold"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="block transition hover:text-teal-300"
            activeClassName="text-teal-200 font-semibold"
          >
            Contact
          </NavLink>
          <NavLink
            to="/create-account"
            className="block px-4 py-2 mt-2 transition bg-teal-700 rounded-lg hover:bg-teal-600"
          >
            Create Account
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
