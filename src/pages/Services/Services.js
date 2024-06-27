import React from 'react';
import { paidup2 } from "../../assets/images";

function Services() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-600 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">Explore All Our Services</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src={paidup2} alt="Enterprise Services" className="w-8 h-8 mr-2" />
            <h3 className="text-lg font-bold">Lorem Ipsum</h3>
          </div>
          <p className="text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src={paidup2} alt="Emerging Technologies" className="w-8 h-8 mr-2" />
            <h3 className="text-lg font-bold">Lorem Ipsum</h3>
          </div>
          <p className="text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src={paidup2} alt="Internet of Things" className="w-8 h-8 mr-2" />
            <h3 className="text-lg font-bold">Lorem Ipsum</h3>
          </div>
          <p className="text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src={paidup2} alt="Consulting & Discovery" className="w-8 h-8 mr-2" />
            <h3 className="text-lg font-bold">Lorem Ipsum</h3>
          </div>
          <p className="text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src={paidup2} alt="Cloud & DevOps" className="w-8 h-8 mr-2" />
            <h3 className="text-lg font-bold">Lorem Ipsum</h3>
          </div>
          <p className="text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src={paidup2} alt="Web / CMS & PWA" className="w-8 h-8 mr-2" />
            <h3 className="text-lg font-bold">Lorem Ipsum</h3>
          </div>
          <p className="text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
