import React from "react";
import { invoiceImage } from "../../assets/images";
import { invoiceImage2 } from "../../assets/images";
import { paidup2 } from "../../assets/images";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi
        quibusdam odio deleniti reprehenderit facilis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={invoiceImage}
            alt="About Us Image"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Lorem ipsum
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              excepturi quibusdam odio deleniti reprehenderit facilis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi
              quibusdam odio deleniti reprehenderit facilis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Hic excepturi quibusdam
              odio deleniti reprehenderit facilis.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Lorem ipsum
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              excepturi quibusdam odio deleniti reprehenderit facilis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi
              quibusdam odio deleniti reprehenderit facilis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Hic excepturi quibusdam
              odio deleniti reprehenderit facilis.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              excepturi quibusdam odio deleniti reprehenderit facilis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi
              quibusdam odio deleniti reprehenderit facilis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Hic excepturi quibusdam
              odio deleniti reprehenderit facilis.
            </p>
          </div>
          <img
            src={invoiceImage2}
            alt="About Us Image"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-16">
        Lorem ipsum dolor sit amet consectetur
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={paidup2}
            alt="Global Offices Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            12 Global Offices
          </h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Learn more
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={paidup2}
            alt="Employees Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            7,600+ Employees
          </h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Learn more
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={paidup2}
            alt="Customers Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            205,000+ Customers
          </h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
