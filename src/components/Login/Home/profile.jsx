import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-40 md:h-60 bg-[#4c5d34]">
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
          <h1 className="text-xl font-bold">@username</h1>
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
              <p><strong>Phone:</strong> +(123)456-7890</p>
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

      {/* User Profile Settings Section */}
      <UserProfileSettings />

      {/* Update Password Section */}
      <UpdatePassword />
    </div>
  );
};

const UserProfileSettings = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* User Profile Section */}
        <div className="flex flex-col items-center justify-center p-5 border rounded-lg shadow-md">
          <Upload
            name="avatar"
            listType="picture-circle"
            className="mb-5"
            showUploadList={false}
            action="/upload.do"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
          <p className="text-sm text-center mb-1">Allowed: *.jpeg, *.jpg, *.png, *.gif</p>
          <p className="text-sm text-center">Max size of 3.1 MB</p>
          <div className="flex items-center mt-2">
            <label htmlFor="public-profile" className="mr-2">Public Profile</label>
          </div>
          <button className="mt-4 px-4 py-2 text-white bg-[#4c5d34] rounded-lg">
            Save Image
          </button>
        </div>
        {/* User Info Form Section */}
        <div className="bg-white p-5 border rounded-lg shadow-md flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Edit User Information</h2>
          <form>
            {/* User Information Fields */}
            {['Username', 'Full Name', 'Role', 'Country', 'Phone'].map((field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">{field}</label>
                <input
                  type="text"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
                  placeholder={field}
                />
              </div>
            ))}
            {/* About Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
              <textarea
                className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
                rows="3"
                placeholder="Tell us about yourself"
              />
            </div>
            {/* Save Changes Button */}
            <button className="w-full px-4 py-2 text-white bg-[#4c5d34] rounded-lg">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const UpdatePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for updating the password can be added here
    alert('Password updated successfully!');
  };

  return (
    <div className="max-w-full mx-auto p-5 bg-white border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-5">Update Password</h2>
      <form onSubmit={handleSubmit}>
        {/* Old Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
          <input
            type="password"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter your old password"
            required
          />
        </div>
        {/* New Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter new password"
            required
          />
        </div>
        {/* Confirm New Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
          <input
            type="password"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Confirm new password"
            required
          />
        </div>
        {/* Save Changes Button */}
        <button className="w-full px-4 py-2 text-white bg-[#4c5d34] rounded-lg hover:bg-green-600 focus:outline-none transition duration-200">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserProfile;