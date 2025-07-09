import React from "react";

export default function RecruiterJobs() {
  return (
    <div className="text-white p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Job Management</h1>
        <p className="text-gray-400">Create and manage your job postings</p>
      </div>

      <div className="mb-6">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors">
          + Post New Job
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Jobs */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Active Jobs</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Total Active</span>
              <span className="text-green-400 text-2xl font-bold">0</span>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              View All
            </button>
          </div>
        </div>

        {/* Draft Jobs */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Draft Jobs</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">In Draft</span>
              <span className="text-yellow-400 text-2xl font-bold">0</span>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              Continue Draft
            </button>
          </div>
        </div>

        {/* Closed Jobs */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Closed Jobs</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Total Closed</span>
              <span className="text-gray-400 text-2xl font-bold">0</span>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              View Archive
            </button>
          </div>
        </div>
      </div>

      {/* Recent Job Postings */}
      <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4">Recent Job Postings</h3>
        <div className="text-center py-8">
          <p className="text-gray-400 mb-4">No jobs posted yet</p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-6 rounded-lg transition-colors">
            Create Your First Job
          </button>
        </div>
      </div>
    </div>
  );
}
