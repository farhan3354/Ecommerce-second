import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaShippingFast } from 'react-icons/fa'; // Payment & Shipping status icons

const OrderDetails = () => {
  const [loading, setLoading] = useState(true);

  // Static order data array
  const orderDetails = [
    {
      id: '123456',
      customer: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: '123 Main St, Springfield, IL 62701',
        phone: '+1 (555) 123-4567',
      },
      paymentStatus: 'Completed',
      shippingStatus: 'Shipped',
      items: [
        { id: '1', name: 'Product 1', quantity: 2, price: 25.0, image: 'https://via.placeholder.com/100' },
        { id: '2', name: 'Product 2', quantity: 1, price: 15.0, image: 'https://via.placeholder.com/100' },
      ],
      totalPrice: 65.0,
      date: '2024-12-06T14:30:00Z',
    },
    {
      id: '654321',
      customer: {
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        address: '456 Elm St, Springfield, IL 62701',
        phone: '+1 (555) 987-6543',
      },
      paymentStatus: 'Pending',
      shippingStatus: 'Processing',
      items: [
        { id: '1', name: 'Product 3', quantity: 1, price: 30.0, image: 'https://via.placeholder.com/100' },
        { id: '2', name: 'Product 4', quantity: 3, price: 10.0, image: 'https://via.placeholder.com/100' },
      ],
      totalPrice: 60.0,
      date: '2024-12-07T10:15:00Z',
    },
  ];

  useEffect(() => {
    setLoading(false); // Simulating loading state
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-3 bg-white shadow-lg rounded-lg">
      {orderDetails.map((order) => {
        const orderDate = new Date(order.date);
        const formattedDate = orderDate.toLocaleDateString();
        const formattedTime = orderDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return (
          <div key={order.id} className='p-3 mb-6 bg-green-100 rounded-xl shadow-2xl'>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Order #{order.id}</h2>

            {/* Customer Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Customer Information</h3>
                <div className="mt-3">
                  <p><strong>Name:</strong> {order.customer.name}</p>
                  <p><strong>Email:</strong> {order.customer.email}</p>
                  <p><strong>Address:</strong> {order.customer.address}</p>
                  <p><strong>Phone:</strong> {order.customer.phone}</p>
                </div>
              </div>

              {/* Order Status */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Order Status</h3>
                <div className="flex flex-col space-y-4 mt-3">
                  {/* Payment Status */}
                  <div className="flex items-center space-x-2">
                    <p><strong>Payment Status:</strong></p>
                    <span className={order.paymentStatus === 'Completed' ? 'text-green-500' : 'text-red-500'}>
                      {order.paymentStatus === 'Completed' ? <FaCheckCircle /> : <FaTimesCircle />}
                      {order.paymentStatus}
                    </span>
                  </div>

                  {/* Shipping Status */}
                  <div className="flex items-center space-x-2">
                    <p><strong>Shipping Status:</strong></p>
                    <span className={order.shippingStatus === 'Shipped' ? 'text-blue-500' : 'text-gray-500'}>
                      {order.shippingStatus === 'Shipped' ? <FaShippingFast /> : <FaTimesCircle />}
                      {order.shippingStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items Table */}
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Order Items</h3>
            <table className="w-full table-auto border-collapse bg-gray-50 rounded-lg shadow-sm mb-6">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border text-left text-sm font-medium text-gray-600">Item</th>
                  <th className="px-4 py-2 border text-left text-sm font-medium text-gray-600">Quantity</th>
                  <th className="px-4 py-2 border text-left text-sm font-medium text-gray-600">Price</th>
                  <th className="px-4 py-2 border text-left text-sm font-medium text-gray-600">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.quantity}</td>
                    <td className="px-4 py-2 border">${item.price}</td>
                    <td className="px-4 py-2 border">${(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Order Summary */}
            <div className="flex justify-between mt-4">
              <p><strong>Total Price:</strong> ${order.totalPrice}</p>
              <p><strong>Order Date:</strong> {formattedDate} at {formattedTime}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetails;
