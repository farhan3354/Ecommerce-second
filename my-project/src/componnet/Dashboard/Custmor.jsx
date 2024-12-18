import React from 'react';

// Dummy data for customers
const customerData = [
  {
    id: 1,
    username: 'john_doe',
    email: 'johndoe@example.com',
    profilePic: 'https://via.placeholder.com/100',
    role: 'Admin',
  },
  {
    id: 2,
    username: 'jane_smith',
    email: 'janesmith@example.com',
    profilePic: 'https://via.placeholder.com/100',
    role: 'User',
  },
  {
    id: 3,
    username: 'bob_jones',
    email: 'bobjones@example.com',
    profilePic: 'https://via.placeholder.com/100',
    role: 'User',
  },
  {
    id: 4,
    username: 'alice_williams',
    email: 'alicewilliams@example.com',
    profilePic: 'https://via.placeholder.com/100',
    role: 'Admin',
  },
];

const CustomerTable = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
        <div className='bg-gray-200 p-4 rounded-xl shadow-2xl'>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer List</h2>
      
      {/* Customer Table */}
      <table className="w-full table-auto border-collapse bg-gray-50 rounded-lg shadow-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-600">Profile</th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-600">Username</th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-600">Email</th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-600">Role</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer) => (
            <tr key={customer.id}>
              <td className="px-4 py-2 border text-center">
                <img
                  src={customer.profilePic}
                  alt={customer.username}
                  className="w-12 h-12 rounded-full mx-auto"
                />
              </td>
              <td className="px-4 py-2 border">{customer.username}</td>
              <td className="px-4 py-2 border">{customer.email}</td>
              <td className="px-4 py-2 border">
                <span
                  className={`px-2 py-1 text-sm font-medium rounded-lg ${
                    customer.role === 'Admin' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}
                >
                  {customer.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CustomerTable;
