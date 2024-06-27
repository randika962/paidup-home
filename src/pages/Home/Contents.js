import React from "react";
import "./Contents.css";
import { content1 } from "../../assets/images";
import { content2 } from "../../assets/images";
import { content3 } from "../../assets/images";
import { content4 } from "../../assets/images";
import { bulb } from "../../assets/images";

const Contents = () => {
  return (
    <div>
      <div>
        <div className="content-container">
          <div className="section left-align">
            <div className="text-container">
              <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>
                Streamline Your Business Operations
              </h1>
              <div className="image-container">
                <img src={content1} width={250} height={250} alt="Sample" />
              </div>
              <p>
                Automate routine tasks to reduce manual effort, minimize errors,
                and increase
              </p>
              <p>
                efficiency. Our tool is user friendly, ensuring that you can
                create and manage invoices
              </p>
              <p>
                and quotations effortlessly, regardless of your skill level.
              </p>
            </div>
          </div>

          <div className="section right-align">
            <div className="text-container">
              <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>
                Save Time and Reduce Errors
              </h1>
              <div className="image-container">
                <img src={content2} width={250} height={250} alt="Sample" />
              </div>
              <p>
                Manual invoicing can be time-consuming and prone to errors. Our
                tool automates
              </p>
              <p>
                calculations for total, taxes, and discounts, ensuring accuracy
                and speed. Generate
              </p>
              <p>
                documents quickly, freeing up time for other important business
                activities.
              </p>
            </div>
          </div>

          <div className="section left-align">
            <div className="text-container">
              <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>
                Professional and Customizable Template
              </h1>
              <div className="image-container">
                <img src={content3} width={250} height={250} alt="Sample" />
              </div>
              <p>
                First impressions matter. Our generator offers a variety of
                professional templates
              </p>
              <p>
                that can be customized to match your brand's look and feel. Add
                your company
              </p>
              <p>
                logo, adjust colors, and include personalized messages to
                maintain a consistent
              </p>
              <p>
                brand image and leave a positive impression on your clients.
              </p>
            </div>
          </div>

          <div className="section right-align">
            <div className="text-container">
              <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>
                Easy Sharing and Tracking
              </h1>
              <div className="image-container">
                <img src={content4} width={250} height={250} alt="Sample" />
              </div>
              <p>
                Generate shareable links or directly email documents to clients
                with ease. Track
              </p>
              <p>
                When invoices quotations are viewed and when payments are made,
                ensuring
              </p>
              <p>better communication and follow-up.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#386DB4] min-h-screen flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold mb-4">
              Introducing Our Invoice and Quotation Generator
            </h1>
            <p className="mb-8">
              Our cutting-edge Invoice and Quotation Generator is designed to
              streamline your business operations. With an intuitive interface,
              it simplifies and optimizes the billing and quotation processes,
              allowing you to focus on growing your business.
            </p>
            <button className="bg-white hover:bg-white text-orange-500 font-bold py-2 px-4 rounded">
              READ MORE
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="container mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <img
                  src={bulb}
                  width={250}
                  height={250}
                  alt="light bulb"
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 p-4">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Get Right Solution For Your Business
                </h2>
                <p className="text-gray-600 mb-6">
                  We revolutionize how business manage billing and quotations.
                  Our innovative Invoice and Quotation Generator simplifies and
                  enhance your operations, providing precision, efficiency, and
                  professionalism.
                </p>
                <div className="bg-gray-200 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To simplify and optimize billing and quotation processes
                    worldwide, enhancing efficiency, professionalism, and
                    seamless communication for business growth.
                  </p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading provider of innovative billing and
                    quotation solutions, empowering business with unparalleled
                    efficiency, accuracy, and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          What We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3..org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5-3H8v3"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-800 ml-2">
                Client Management
              </h3>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button>Read More</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5-3H8v3"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-800 ml-2">
                Automated Generation
              </h3>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button>Read More</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5-3H8v3"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-800 ml-2">
                Creation and Management:
              </h3>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3..org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5-3H8v3"
                  />
                </svg>
                <h3 className="text-lg font-bold text-gray-800 ml-2">
                  Automated Reminders
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button>Read More</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5-3H8v3"
                  />
                </svg>
                <h3 className="text-lg font-bold text-gray-800 ml-2">
                  Customizable Templates
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button>Read More</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5-3H8v3"
                  />
                </svg>
                <h3 className="text-lg font-bold text-gray-800 ml-2">
                  Tracking and Receipts
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-500 rounded-md p-4 flex items-center">
            <div className="h-16 w-16 rounded-full bg-gray-200 mr-4"></div>
            <div>
              <h3 className="text-white font-bold text-lg">Mark Lowell</h3>
              <p className="text-white text-sm">Software Engineer for Life</p>
            </div>
          </div>
          <div className="bg-orange-500 rounded-md p-4 flex items-center">
            <div className="h-16 w-16 rounded-full bg-gray-200 mr-4"></div>
            <div>
              <h3 className="text-white font-bold text-lg">Jane Doe</h3>
              <p className="text-white text-sm">Content & Marketing Expert</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Innovative Solution For Business
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Collaborate seamlessly on shared documents and projects with a
            dedicated group of experts. Get informed and make confident
            decisions by leveraging real-time data and insights.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white rounded-md p-4 shadow-md">
              <h3 className="text-xl font-bold text-blue-500 mb-2">81%</h3>
              <p className="text-gray-600">Better Team</p>
            </div>
            <div className="bg-white rounded-md p-4 shadow-md">
              <h3 className="text-xl font-bold text-blue-500 mb-2">65%</h3>
              <p className="text-gray-600">Faster Work</p>
            </div>
            <div className="bg-white rounded-md p-4 shadow-md">
              <h3 className="text-xl font-bold text-blue-500 mb-2">79%</h3>
              <p className="text-gray-600">Increased Value</p>
            </div>
          </div>
        </div>

        <div className="mt-8 relative w-96 h-96 rounded-lg bg-gray-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#386DB4] rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#386DB4] rotate-45"></div>
        </div>
      </div>
      <div className="bg-[#386DB4] p-8 rounded-md">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-16h-5v16zm-3 2V6a4 4 0 0 0-3-3.87 4 4 0 0 0-1.13 0 4 4 0 0 0-3.87 3 4 4 0 0 0 0 3.87 4 4 0 0 0 1.13 0 4 4 0 0 0 3 3.87V20h5"
              />
            </svg>
            <p className="text-white font-bold text-xl">1400</p>
            <p className="text-white">New Users</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-16h-5v16zm-3 2V6a4 4 0 0 0-3-3.87 4 4 0 0 0-1.13 0 4 4 0 0 0-3.87 3 4 4 0 0 0 0 3.87 4 4 0 0 0 1.13 0 4 4 0 0 0 3 3.87V20h5"
              />
            </svg>
            <p className="text-white font-bold text-xl">1400</p>
            <p className="text-white">New Users</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-16h-5v16zm-3 2V6a4 4 0 0 0-3-3.87 4 4 0 0 0-1.13 0 4 4 0 0 0-3.87 3 4 4 0 0 0 0 3.87 4 4 0 0 0 1.13 0 4 4 0 0 0 3 3.87V20h5"
              />
            </svg>
            <p className="text-white font-bold text-xl">1400</p>
            <p className="text-white">New Users</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-16h-5v16zm-3 2V6a4 4 0 0 0-3-3.87 4 4 0 0 0-1.13 0 4 4 0 0 0-3.87 3 4 4 0 0 0 0 3.87 4 4 0 0 0 1.13 0 4 4 0 0 0 3 3.87V20h5"
              />
            </svg>
            <p className="text-white font-bold text-xl">1400</p>
            <p className="text-white">New Users</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8">
        <h2 className="text-center text-2xl font-bold mb-8">News Feeds</h2>
        <div className="flex justify-center gap-4">
          <div className="w-64 rounded-lg bg-gradient-to-b from-gray-200 to-gray-300 p-4 shadow-md">
            <div className="bg-orange-400 text-white font-bold py-1 px-2 rounded-full mb-2">
              Jan 15
            </div>
            <h3 className="text-lg font-semibold mb-2">
              We Introduce our brand new food items
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 text-sm mt-2">Jan 15, 2023, 11:00 AM</p>
          </div>
          <div className="w-64 rounded-lg bg-gradient-to-b from-gray-200 to-gray-300 p-4 shadow-md">
            <div className="bg-orange-400 text-white font-bold py-1 px-2 rounded-full mb-2">
              Jan 15
            </div>
            <h3 className="text-lg font-semibold mb-2">
              We Introduce our brand new food items
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 text-sm mt-2">Jan 15, 2023, 11:00 AM</p>
          </div>
          <div className="w-64 rounded-lg bg-gradient-to-b from-gray-200 to-gray-300 p-4 shadow-md">
            <div className="bg-orange-400 text-white font-bold py-1 px-2 rounded-full mb-2">
              Jan 15
            </div>
            <h3 className="text-lg font-semibold mb-2">
              We Introduce our brand new food items
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 text-sm mt-2">Jan 15, 2023, 11:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
