import React, { useState } from 'react';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Name:', name);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">
        Any questions or remarks? Just write us a message!
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter a valid email address"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          SUBMIT
        </button>
      </form>

      <div className="mt-16 grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="bg-cyan-500 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mt-4">ABOUT PaidUp</h3>
          <ul className="text-gray-600 mt-2">
            <li>Running Guide</li>
            <li>Workouts</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-cyan-500 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.28a1 1 0 01-1.948-.684l-1.498-4.493a1 1 0 01.502-1.21l2.257-1.13a11.042 11.042 0 00-5.516-5.516l-1.13 2.257a1 1 0 01-1.21.502l-4.493-1.498a1 1 0 01-.684-.949V7a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.28a1 1 0 01-1.948-.684l-1.498-4.493a1 1 0 01.502-1.21l2.257-1.13a11.042 11.042 0 00-5.516-5.516l-1.13 2.257a1 1 0 01-1.21.502l-4.493 1.498a1 1 0 01-.684.949V19a2 2 0 01-2 2H3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mt-4">PHONE (LANDLINE)</h3>
          <ul className="text-gray-600 mt-2">
            <li>+912 3 567 8987</li>
            <li>+912 5 252 3336</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-cyan-500 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 21.914a1 1 0 01-.141.141L10.586 19.414a1 1 0 01.143-.143L14.857 15.143m0 0l3 3m-3-3l-3-3"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mt-4">
            OUR OFFICE LOCATION
          </h3>
          <p className="text-gray-600 mt-2">
            The Paidup
            <br />
            The Courtyard, Al Quoz 1, Colorado, USA
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
