import React from "react";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-40 md:h-60 bg-teal-700">
        <img
          src="https://via.placeholder.com/1500x400" // Replace this with the actual banner image
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
          <div className="bg-teal-500 rounded-full h-24 w-24 flex items-center justify-center border-4 border-white">
            <span className="text-white font-bold text-xl">UN</span>
          </div>
        </div>
      </div>

      {/* Profile and Activity Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        {/* Left Side - Profile Info */}
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 mt-16 md:mt-0">
          <h1 className="text-xl font-bold">User Name</h1>
          <p className="text-gray-600">TS FullStack</p>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-sm text-gray-600 mt-2">
              Collum brevis pauci numquam eos certe. Deinde speciosus carmen
              corroboro illo strues tergum curo cohors votum. Vigilo depereo totus
              solus infit aedificium communis.
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Full Name:</strong> admin</p>
              <p><strong>Role:</strong> Developer</p>
              <p><strong>Country:</strong> India</p>
              <p><strong>Language:</strong> English</p>
              <p><strong>Contact:</strong> +(123)456-7890</p>
            </div>
          </div>
        </div>

        {/* Right Side - Activity Timeline */}
        <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6 mt-4 md:mt-0 md:ml-6">
          <h2 className="text-lg font-semibold">Activity Timeline</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between items-center">
              <div>
                <p className="text-sm text-red-600 font-semibold">8 Invoices have been paid</p>
                <p className="text-gray-600">Invoices have been paid to the company.</p>
              </div>
              <span className="text-gray-400 text-sm">Wednesday</span>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="text-sm text-green-600 font-semibold">Create a new project for client 😎</p>
                <p className="text-gray-600">Invoices have been paid to the company.</p>
              </div>
              <span className="text-gray-400 text-sm">April, 18</span>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Invoices have been paid on September</p>
                <p className="text-gray-600">Invoices have been paid to the company.</p>
              </div>
              <span className="text-gray-400 text-sm">January, 10</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
