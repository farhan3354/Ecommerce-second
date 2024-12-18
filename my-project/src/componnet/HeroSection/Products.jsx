import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import React Icons
import { Link } from 'react-router-dom'; // Import Link for navigation

const Products = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Set the fetched data into state
        setFilteredProducts(data); // Initially display all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the function to fetch data
  }, []); // Empty dependency array to run only once when the component mounts

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredProducts(products); // Show all products if no category is selected
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered); // Filter products based on the selected category
    }
  };

  return (
    <div className="relative flex items-center justify-center -mt-12">
      <div className="w-full px-10">
        <h1 className="flex items-center justify-center p-10 mb-8 text-6xl font-bold text-white">
          Our Latest Products
        </h1>

        {/* Filter Section */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => handleCategoryChange('')}
            className={`px-4 py-2 rounded-md ${selectedCategory === '' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange('electronics')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'electronics' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Electronics
          </button>
          <button
            onClick={() => handleCategoryChange('jewelery')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'jewelery' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Jewelry
          </button>
          <button
            onClick={() => handleCategoryChange('men\'s clothing')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'men\'s clothing' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Men's Clothing
          </button>
          <button
            onClick={() => handleCategoryChange('women\'s clothing')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'women\'s clothing' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Women's Clothing
          </button>
        </div>

        <div className="grid justify-center grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <section
              key={product.id}
              className="p-5 py-4 text-center duration-500 transform bg-white border-gray-100 shadow-2xl cursor-pointer rounded-2xl border-y-2 border-x-2 hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mb-4 w-52 h-72 "
                />
                <div className="flex justify-center mt-2 space-x-1">
                  {/* Star Rating using React Icons */}
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaRegStar className="w-4 h-4 text-gray-300" />
                  <FaRegStar className="w-4 h-4 text-gray-300" />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-gray-700">{product.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                <span className="mt-4 text-xl font-semibold text-green-700">
                  ${product.price}
                </span>
                <div className="flex justify-center mt-6 space-x-4">
                  <Link to={`/product/${product.id}`}>
                    <button
                      type="button"
                      className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
