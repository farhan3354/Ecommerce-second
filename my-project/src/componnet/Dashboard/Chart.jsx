import React, { useState } from 'react';
import { Bar, Line, PolarArea, Radar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, RadialLinearScale, Filler, ArcElement } from 'chart.js';
import { FaChartBar, FaChartLine, FaChartPie, FaChartArea } from 'react-icons/fa';
import { BiDoughnutChart } from 'react-icons/bi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler,
  ArcElement
);

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [
    {
      label: 'Sales',
      data: [112, 10, 225, 134, 101, 80, 50, 100, 200],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)', // Jan
        'rgba(255, 99, 132, 0.6)', // Feb
        'rgba(255, 159, 64, 0.6)', // Mar
        'rgba(255, 205, 86, 0.6)', // Apr
        'rgba(75, 192, 192, 0.6)', // May
        'rgba(153, 102, 255, 0.6)', // Jun
        'rgba(255, 159, 64, 0.6)', // Jul
        'rgba(54, 162, 235, 0.6)', // Aug
        'rgba(255, 99, 132, 0.6)'  // Sep
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)', // Jan
        'rgba(255, 99, 132, 1)', // Feb
        'rgba(255, 159, 64, 1)', // Mar
        'rgba(255, 205, 86, 1)', // Apr
        'rgba(75, 192, 192, 1)', // May
        'rgba(153, 102, 255, 1)', // Jun
        'rgba(255, 159, 64, 1)', // Jul
        'rgba(54, 162, 235, 1)', // Aug
        'rgba(255, 99, 132, 1)'  // Sep
      ],
      borderWidth: 1,
    },
  ],
};

const ProductSales = () => {
  const [chartType, setChartType] = useState('Bar');

  const renderChart = () => {
    switch (chartType) {
      case 'Line':
        return <Line data={chartData} />;
      case 'Polar':
        return <PolarArea data={chartData} />;
      case 'Radar':
        return <Radar data={chartData} />;
      case 'Doughnut':
        return <Doughnut data={chartData} />; // Render doughnut chart
      default:
        return <Bar data={chartData} />;
    }
  };

  return (
    <div className="antialiased text-black sans-serif">
      <div className="-mt-24">

        <div className="sm:w-2/3 py-24 ml-4 sm:ml-32"> {/* Increased width */}
          <div className="p-6 rounded-lg shadow-2xl bg-white">
            <h2 className="text-xl font-bold leading-tight text-gray-800">Product Sales</h2>
            <p className="mb-2 text-sm text-gray-600">Monthly Average</p>

            <div className="flex -ml-5 sm:ml-12 mt-6 gap-2 ">
              <button onClick={() => setChartType('Bar')} className="flex items-center px-3 sm:px-8 py-2 space-x-2 text-white bg-blue-500 rounded-lg">
                <FaChartBar />
                <span>Bar</span>
              </button>
              <button onClick={() => setChartType('Line')} className="flex items-center px-3 sm:px-8 py-2 space-x-2 text-white bg-green-500 rounded-lg">
                <FaChartLine />
                <span>Line</span>
              </button>
              <button onClick={() => setChartType('Doughnut')} className="flex items-center px-3 sm:px-8 py-2 space-x-2 text-white bg-orange-500 rounded-lg">
                <BiDoughnutChart />
                <span>Doughnut</span>
              </button>
              <button onClick={() => setChartType('Polar')} className="flex items-center px-3 sm:px-8 py-2 space-x-2 text-white bg-red-500 rounded-lg">
                <FaChartPie />
                <span>Polar</span>
              </button>
              <button onClick={() => setChartType('Radar')} className="flex items-center  px-3 sm:px-8 py-2 space-x-2 text-white bg-purple-500 rounded-lg">
                <FaChartArea />
                <span>Radar</span>
              </button>
            </div>

            <div className="my-8">
              {renderChart()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSales;
