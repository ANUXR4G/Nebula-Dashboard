import React from 'react';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#818763] rounded-xl p-6 md:p-8">
      {/* Left Section */}
      <div className="flex-1 md:w-1/2 bg-white rounded-lg p-6 flex items-center">
        <div className="flex items-start">
          <div className="mr-4">
            <h2 className="text-xl font-bold text-[#4c5d34]">Welcome back 👋</h2>
            <h3 className="text-lg font-semibold">admin</h3>
            <p className="text-sm mt-2">Welcome to join the Discord channel to discuss everything about Slash Admin, or you can visit my blog:</p>
            <a href="https://blog.slashspaces.com" className="text-blue-500 mt-1">👉 https://blog.slashspaces.com</a>
            <button className="mt-4 bg-[#818763] text-white font-bold py-2 px-4 rounded flex items-center">
              <img src="https://cdn.iconscout.com/icon/free/png-512/discord-3-569463.png" alt="Discord" className="h-6 w-6 mr-2" />
              Join Discord
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://example.com/image.png" 
              alt="Illustration"
              className="w-28 h-28"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-4 mt-6 md:mt-0 md:ml-6 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex-1 bg-[#4c5d34] text-white rounded-lg p-4 flex flex-col items-center">
          <h4 className="text-lg font-semibold">38,566</h4>
          <p className="text-sm">Conversion</p>
          <div className="w-16 h-16 mt-4">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                className="stroke-current text-white"
                strokeWidth="3"
                strokeDasharray="48, 100"
                fill="none"
                cx="18"
                cy="18"
                r="16"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-[#a5a990] text-white rounded-lg p-4 flex flex-col items-center">
          <h4 className="text-lg font-semibold">45,566</h4>
          <p className="text-sm">Applications</p>
          <div className="w-16 h-16 mt-4">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                className="stroke-current text-white"
                strokeWidth="3"
                strokeDasharray="75, 100"
                fill="none"
                cx="18"
                cy="18"
                r="16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
