// import React, { useState } from "react";

// const Product = () => {
//   // State for form inputs
//   const [productName, setProductName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [productImage, setProductImage] = useState(null);

//   // Handle image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProductImage(URL.createObjectURL(file)); // Preview the selected image
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const productData = {
//       name: productName,
//       description,
//       price,
//       category,
//       image: productImage,
//     };
//     // You can integrate the API logic here for adding the product to your database
//     console.log("Product added:", productData);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-3 bg-white rounded-lg shadow-xl">
//         <div className="bg-gray-200 p-4 rounded-2xl shadow-2xl">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add Product</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Product Name */}
//         <div className="flex items-center space-x-4">
//           <label htmlFor="product-name" className="w-1/4 text-gray-600 font-bold">
//             Product Name
//           </label>
//           <input
//             type="text"
//             id="product-name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div className="flex items-center space-x-4">
//           <label htmlFor="description" className="w-1/4 text-gray-600 font-bold">
//             Description
//           </label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="4"
//             required
//           />
//         </div>

//         {/* Price */}
//         <div className="flex items-center space-x-4">
//           <label htmlFor="price" className="w-1/4 text-gray-600 font-bold">
//             Price
//           </label>
//           <input
//             type="number"
//             id="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Category */}
//         <div className="flex items-center space-x-4">
//           <label htmlFor="category" className="w-1/4 text-gray-600 font-bold">
//             Category
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="electronics">Electronics</option>
//             <option value="fashion">Fashion</option>
//             <option value="home">Home & Kitchen</option>
//             <option value="beauty">Beauty</option>
//             <option value="toys">Toys</option>
//           </select>
//         </div>

//         {/* Product Image */}
//         <div className="flex items-center space-x-4">
//           <label htmlFor="product-image" className="w-1/4 text-gray-600 font-bold">
//             Product Image
//           </label>
//           <div className="w-full">
//             <input
//               type="file"
//               id="product-image"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
//             />
//             {productImage && (
//               <div className="mt-4">
//                 <img
//                   src={productImage}
//                   alt="Product Preview"
//                   className="object-cover w-40 h-40 rounded-md"
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end space-x-4">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Add Product
//           </button>
//         </div>
//       </form>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useState } from "react";

const Product = () => {
  // State for form inputs
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // For sending the actual file
  const [isLoading, setIsLoading] = useState(false);

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(URL.createObjectURL(file)); // Preview the selected image
    setImageFile(file); // Store the file for API upload
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", imageFile);

    try {
      const response = await fetch("https://belike-ecommerce-backend.onrender.com/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product added successfully:", data);
        alert("Product added successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error adding product:", errorData);
        alert("Failed to add the product. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while adding the product.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-3 bg-white rounded-lg shadow-xl">
      <div className="bg-gray-200 p-4 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div className="flex items-center space-x-4">
            <label htmlFor="product-name" className="w-1/4 text-gray-600 font-bold">
              Product Name
            </label>
            <input
              type="text"
              id="product-name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="flex items-center space-x-4">
            <label htmlFor="description" className="w-1/4 text-gray-600 font-bold">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <label htmlFor="price" className="w-1/4 text-gray-600 font-bold">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div className="flex items-center space-x-4">
            <label htmlFor="category" className="w-1/4 text-gray-600 font-bold">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Kitchen</option>
              <option value="beauty">Beauty</option>
              <option value="toys">Toys</option>
            </select>
          </div>

          {/* Product Image */}
          <div className="flex items-center space-x-4">
            <label htmlFor="product-image" className="w-1/4 text-gray-600 font-bold">
              Product Image
            </label>
            <div className="w-full">
              <input
                type="file"
                id="product-image"
                accept="image/*"
                onChange={handleImageChange}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {productImage && (
                <div className="mt-4">
                  <img
                    src={productImage}
                    alt="Product Preview"
                    className="object-cover w-40 h-40 rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
