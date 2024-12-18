import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Dummy data for products
const initialProducts = [
  {
    id: 1,
    title: "Sample Product 1",
    description: "This is a sample product description.",
    category: "electronics",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Sample Product 2",
    description: "This is another sample product description.",
    category: "fashion",
    price: 50,
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];

const ProductTable = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Handle delete product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Handle open modal for editing product
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  // Handle form submission for editing
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { ...currentProduct };
    setProducts(
      products.map((product) =>
        product.id === currentProduct.id ? updatedProduct : product
      )
    );
    setShowModal(false); // Close the modal
  };

  return (
    <div className="max-w-6xl mx-auto p-3 bg-white rounded-lg shadow-lg">
      <div className="p-3 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
          Product List
        </h1>

        {/* Product Table */}
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-green-300">
              <th className="px-4 py-3 border-b text-left font-semibold text-gray-700 border-r">
                Image
              </th>
              <th className="px-4 py-3 border-b text-left font-semibold text-gray-700 border-r">
                Title
              </th>
              <th className="px-4 py-3 border-b text-left font-semibold text-gray-700 border-r">
                Description
              </th>
              <th className="px-4 py-3 border-b text-left font-semibold text-gray-700 border-r">
                Category
              </th>
              <th className="px-4 py-3 border-b text-left font-semibold text-gray-700 border-r">
                Price
              </th>
              <th className="px-4 py-3 border-b text-left font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 border-r">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full shadow-xl"
                  />
                </td>
                <td className="px-4 py-3 border-r">{product.title}</td>
                <td className="px-4 py-3 border-r">{product.description}</td>
                <td className="px-4 py-3 border-r">{product.category}</td>
                <td className="px-4 py-3 border-r">${product.price}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-800 ml-4"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Editing Product */}
        {showModal && currentProduct && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className=" sm:w-1/2 md:w-1/2 lg:w-1/2 p-3 bg-white rounded-lg shadow-xl">
              <div className="bg-gray-200 p-4 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                  Edit Product
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Product Title */}
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="title"
                      className="w-1/4 text-gray-600 font-bold"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={currentProduct.title}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          title: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="description"
                      className="w-1/4 text-gray-600 font-bold"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={currentProduct.description}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-4">
                    <label htmlFor="price" className="w-1/4 text-gray-600 font-bold">
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      value={currentProduct.price}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          price: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="category"
                      className="w-1/4 text-gray-600 font-bold"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      value={currentProduct.category}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          category: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="home">Home & Kitchen</option>
                      <option value="beauty">Beauty</option>
                      <option value="toys">Toys</option>
                    </select>
                  </div>

                  {/* Product Image URL */}
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="image"
                      className="w-1/4 text-gray-600 font-bold"
                    >
                      Product Image URL
                    </label>
                    <input
                      type="text"
                      id="image"
                      value={currentProduct.image}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          image: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTable;
