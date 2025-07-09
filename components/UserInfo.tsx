"use client";

import { useUser } from "@clerk/nextjs";
import { USER_ROLES } from "@/constant/constant";
import { useUserStore } from "@/store/userStore";

export default function UserInfo({
  firstName,
  lastName,
  email,
  role,
}: {
  firstName: string;
  lastName: string;
  email: string;
  role: USER_ROLES;
}) {
  // const customData = user.publicMetadata?.customField as string;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
      <h3 className="text-lg font-semibold mb-3">User Information</h3>
      <div className="space-y-2 text-sm">
        <div>
          <span className="text-gray-400">Name:</span>{" "}
          <span className="text-white">
            {firstName} {lastName}
          </span>
        </div>
        <div>
          <span className="text-gray-400">Email:</span>{" "}
          <span className="text-white">{email}</span>
        </div>
        <div>
          <span className="text-gray-400">Role:</span>{" "}
          <span className="text-cyan-400">{role || "Not set"}</span>
        </div>
        {/* {customData && (
          <div>
            <span className="text-gray-400">Custom Data:</span>{" "}
            <span className="text-white">{customData}</span>
          </div>
        )} */}
      </div>
    </div>
  );
}
