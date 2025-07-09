import React from "react";

export default function CandidateProfile() {
  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Candidate Profile</h1>
        <p className="text-gray-400">
          Manage your candidate profile and preferences
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
        <h2 className="text-xl font-semibold mb-4">Profile Status</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Profile Complete</span>
            <span className="text-red-400">30%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-cyan-400 h-2 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
}
