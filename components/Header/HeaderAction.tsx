// components/HeaderActions.tsx
"use client";

import { useAuth } from "@clerk/nextjs";
import Button from "../Button";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeaderActions() {
  const { userId } = useAuth();
  const router = useRouter();

  if (!userId) {
    return (
      <div
        className={`${userId ? "flex items-center" : "hidden"} md:flex items-center space-x-6 text-gray-300`}
      >
        <a href="#features" className="hover:text-white transition-colors">
          Features
        </a>
        <a href="#howitworks" className="hover:text-white transition-colors">
          How It Works
        </a>
        <a href="#testimonials" className="hover:text-white transition-colors">
          Testimonials
        </a>
      </div>
    );
  }

  return (
    <Button
      showIconOnly={true}
      icon={<LogOutIcon />}
      className="h-4"
      variant="secondary"
      label="Logout"
      onClick={() => {
        router.replace("/sign-out");
      }}
    />
  );
}
