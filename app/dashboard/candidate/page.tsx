import React from "react";
import Link from "next/link";
import UserInfo from "@/components/UserInfo";
import { getServerUser } from "@/lib/auth";
import { USER_ROLES } from "@/constant/constant";
import { redirect } from "next/navigation";

export default async function CandidateDashboard() {
  const user = await getServerUser();

  if (!user) {
    return redirect("/sign-out");
  }

  const { firstName, lastName, email, role } = user;
  return (
    <div className="text-white p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-gray-400">
          Ready to ace your next AI-powered interview?
        </p>
        <div className="mt-4">
          <Link
            href="/dashboard/candidate/profile"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            View Profile →
          </Link>
        </div>
      </div>

      {/* User Info Component - Shows how to access metadata in client components */}
      <div className="mb-6">
        <UserInfo
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          role={user.role as USER_ROLES}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Completion Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Profile Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Profile Complete</span>
              <span className="text-red-400">Incomplete</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-cyan-400 h-2 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
            <Link href="/dashboard/candidate/profile">
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                Complete Profile
              </button>
            </Link>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Recent Applications</h3>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">No applications yet</div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              Browse Jobs
            </button>
          </div>
        </div>

        {/* Interview Practice */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Interview Practice</h3>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">
              Practice with AI to improve your skills
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Start Practice
            </button>
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Upcoming Interviews</h3>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">No scheduled interviews</div>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Resume</h3>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">
              Upload your resume to get started
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              Upload Resume
            </button>
          </div>
        </div>

        {/* Performance Analytics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Performance</h3>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">
              Track your interview performance
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors border border-white/20">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
