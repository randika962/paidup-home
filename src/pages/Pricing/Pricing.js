import { useState } from 'react';

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-blue-500 p-10">
      <h1 className="text-white text-3xl font-bold mb-8">
        Pick a plan to grow your brand and your business with video
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Free</h2>
          <p className="text-gray-700 mb-4">$0 per month</p>
          <p className="text-gray-500 mb-6">
            For businesses just getting started
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handlePlanSelect('Free')}
          >
            Start for free
          </button>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">
              All our standard features for videos and podcasts
            </h3>
            <ul className="list-disc ml-4 text-gray-700">
              <li>3 free videos or podcast episodes to embed anywhere</li>
              <li>1 Channel to share via public Wistia link</li>
              <li>Up to 250 Channel subscribers</li>
              <li>Wistia branding on the video player</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Pro</h2>
          <p className="text-gray-700 mb-4">$99 per month</p>
          <p className="text-gray-500 mb-6">
            For businesses investing in marketing with videos and podcasts
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handlePlanSelect('Pro')}
          >
            Get started
          </button>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">
              All our standard features for videos and podcasts
            </h3>
            <ul className="list-disc ml-4 text-gray-700">
              <li>
                10 free videos or podcast episodes to embed anywhere
              </li>
              <li>1 Channel to share via public Wistia link</li>
              <li>
                Up to 250 Channel subscribers with email notifications
              </li>
              <li>Add your own branding to the video player</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Advanced</h2>
          <p className="text-gray-700 mb-4">Contact us</p>
          <p className="text-gray-500 mb-6">
            For businesses looking to build a lasting brand and drive growth
          </p>
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handlePlanSelect('Advanced')}
          >
            Contact sales
          </button>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">
              All our standard features for videos and podcasts
            </h3>
            <ul className="list-disc ml-4 text-gray-700">
              <li>
                100 free videos or podcast episodes to embed anywhere
              </li>
              <li>
                Multiple video and podcast Channels to embed on your site
              </li>
              <li>
                250+ Channel subscribers with email notifications
              </li>
              <li>Add your own branding to the video player</li>
            </ul>
          </div>
        </div>
      </div>
      {selectedPlan && (
        <div className="mt-10">
          <h2 className="text-white text-2xl font-bold mb-4">
            You have selected: {selectedPlan}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Pricing;