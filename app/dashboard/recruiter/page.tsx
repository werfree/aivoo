import React from "react";
import Link from "next/link";

export default function RecruiterDashboard() {
  return (
    <div className="text-white p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-gray-400">
          Streamline your hiring process with AI-powered interviews
        </p>
        <div className="mt-4">
          <Link
            href="/dashboard/recruiter/jobs"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            Manage Jobs →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Job Postings */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Active Jobs</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Total Jobs</span>
              <span className="text-cyan-400 text-2xl font-bold">0</span>
            </div>
            <Link href="/dashboard/recruiter/jobs">
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                Post New Job
              </button>
            </Link>
          </div>
        </div>

        {/* Pending Interviews */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Pending Interviews</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Awaiting Review</span>
              <span className="text-yellow-400 text-2xl font-bold">0</span>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              Review Interviews
            </button>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Recent Applications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">This Week</span>
              <span className="text-green-400 text-2xl font-bold">0</span>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              View All
            </button>
          </div>
        </div>

        {/* Company Profile */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Company Profile</h3>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">
              Complete your company profile
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-cyan-400 h-2 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              Update Profile
            </button>
          </div>
        </div>

        {/* Interview Templates */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Interview Templates</h3>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">
              Create custom interview questions
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Create Template
            </button>
          </div>
        </div>

        {/* Analytics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Hiring Analytics</h3>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">
              Track your hiring metrics
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              View Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/dashboard/recruiter/jobs">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Post New Job
            </button>
          </Link>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            Review Candidates
          </button>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            Schedule Interview
          </button>
        </div>
      </div>
    </div>
  );
}
