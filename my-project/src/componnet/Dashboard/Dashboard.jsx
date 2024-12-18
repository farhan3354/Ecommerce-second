import React, { useState } from "react";
import { FaBlogger, FaCode, FaShoppingCart, FaUsers, FaPlus, FaEdit, FaChartBar, FaCheckCircle, FaHourglass } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineOrderedList, AiOutlineProduct } from "react-icons/ai";
import { FcSalesPerformance } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import Product from "./Product";
import EditProduct from "./EditProduct";
import Order from "./Order";
import Custmor from "./Custmor";
import Chart from "./Chart";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const recentOrders = [
    { id: 1, orderId: "#12345", customer: "John Doe", status: "Delivered", date: "2024-12-05", productImage: "https://via.placeholder.com/50", productName: "Product 1" },
    { id: 2, orderId: "#12346", customer: "Jane Smith", status: "Pending", date: "2024-12-04", productImage: "https://via.placeholder.com/50", productName: "Product 2" },
    { id: 3, orderId: "#12347", customer: "Sam Wilson", status: "Shipped", date: "2024-12-03", productImage: "https://via.placeholder.com/50", productName: "Product 3" },
    { id: 4, orderId: "#12348", customer: "Alex Johnson", status: "Delivered", date: "2024-12-02", productImage: "https://via.placeholder.com/50", productName: "Product 4" },
  ];

  return (
    <div className="bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:block lg:w-64`}>
        <div className="flex flex-col h-full p-4 bg-white dark:bg-gray-800 border-r border-gray-200">
          {/* Logo */}
          <a href="#" className="flex justify-center lg:justify-start items-center gap-2 py-4 cursor-pointer">
            <FaCode className="text-3xl text-blue-600" />
            <span className="hidden lg:block text-lg font-bold text-gray-800 dark:text-gray-100">My Store</span>
          </a>
          {/* Menu */}
          <div className="flex flex-col flex-grow">
            <div className="space-y-2 mt-4">
              <div className="px-5">
                <span className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase">Menu</span>
              </div>
              {/* Links */}
              <NavLink to="#" onClick={() => handleMenuClick("dashboard")} className="flex items-center rounded-md h-12 px-4 font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                <AiOutlineAppstore className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Dashboard</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("profile")} className="flex items-center rounded-md h-12 px-4 font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                <RiAdminLine className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Profile</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("add-product")} className="flex items-center rounded-md h-12 px-4 font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                <FaPlus className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Add Product</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("edit-product")} className="flex items-center rounded-md h-12 px-4 font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                <FaEdit className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Edit Product</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("orders")} className="flex items-center rounded-md h-12 px-4 font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                <AiOutlineOrderedList className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Orders</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("customers")} className="flex items-center rounded-md h-12 px-4 font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                <FaUsers className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Customers</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("chart")} className="flex items-center rounded-md h-12 px-4 font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                <FaChartBar className="text-2xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Chart</span>
              </NavLink>
              <NavLink to="/" className="flex items-center rounded-md h-12 px-4 font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                <IoIosLogOut className="text-2xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">LogOut</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-0 lg:ml-64">
        <button className="lg:hidden absolute top-4 left-4 text-gray-600" onClick={toggleSidebar}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Conditional Rendering Based on Active Page */}
        {activePage === "dashboard" && (
          <div>
            <div className="bg-white rounded-xl shadow-2xl p-3 mb-4">
              <div className="bg-gray-200 rounded-xl shadow-2xl p-4">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
                  <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Add New Product</button>
                </div>
                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-blue-600 text-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <AiOutlineOrderedList className="text-2xl" />
                    <h3 className="text-xl font-semibold">Orders</h3>
                    <span className="text-4xl font-bold">250</span>
                    <p>Pending Orders</p>
                  </div>
                  <div className="bg-green-600 text-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <AiOutlineProduct className="text-2xl" />
                    <h3 className="text-xl font-semibold">Products</h3>
                    <span className="text-4xl font-bold">100</span>
                    <p>In Stock</p>
                  </div>
                  <div className="bg-orange-600 text-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <FaUsers className="text-2xl" />
                    <h3 className="text-xl font-semibold">Customers</h3>
                    <span className="text-4xl font-bold">120</span>
                    <p>Active Customers</p>
                  </div>
                  <div className="bg-red-600 text-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                    <FcSalesPerformance className="text-2xl" />
                    <h3 className="text-xl font-semibold">Sales</h3>
                    <span className="text-4xl font-bold">5,000</span>
                    <p>Total Sales</p>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white p-2 mt-4 rounded-lg shadow-md">
      <div className="bg-gray-200 p-4 rounded-xl shadow-2xl">
        <h2 className="text-xl font-semibold mb-4">Recently Orders</h2>
        <table className="min-w-full table-auto border-collapse border-x-2 border-y-2 border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3 border-r-2 border-b-2">Order ID</th>
              <th className="text-left p-3 border-r-2 border-b-2">Customer</th>
              <th className="text-left p-3 border-r-2 border-b-2">Product</th> {/* New Product Column */}
              <th className="text-left p-3 border-r-2 border-b-2">Status</th>
              <th className="text-left p-3 border-b-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 bg-white">
                <td className="text-left p-3 border-r-2 border-b-2">{order.orderId}</td>
                <td className="text-left p-3 border-r-2 border-b-2">{order.customer}</td>
                <td className="text-left p-3 border-r-2 border-b-2">
                  {/* Product Image */}
                  <img src={order.productImage} alt="Product" className="w-12 h-12 object-cover rounded-full" />
                </td>
                <td className="text-left p-3 border-r-2 border-b-2">
                  {/* Display the appropriate icon based on order status */}
                  {order.status === "Delivered" ? (
                    <div className="flex items-center space-x-2 text-green-600">
                      <FaCheckCircle />
                      <span>Delivered</span>
                    </div>
                  ) : order.status === "Pending" ? (
                    <div className="flex items-center space-x-2 text-yellow-500">
                      <FaHourglass />
                      <span>Pending</span>
                    </div>
                  ) : (
                    <span>{order.status}</span>
                  )}
                </td>
                <td className="text-left p-3 border-r-2 border-b-2">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            </div>
          </div>
        )}

        {activePage === "profile" && <Profile />}
        {activePage === "add-product" && <Product />}
        {activePage === "edit-product" && <EditProduct />}
        {activePage === "orders" && <Order />}
        {activePage === "customers" && <Custmor />}
        {activePage === "chart" && <Chart />}
      </div>
    </div>
  );
};

export default Dashboard;
