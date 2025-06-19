// components/HeaderActions.tsx
"use client";

import { useAuth, useClerk } from "@clerk/nextjs";
import Button from "../Button";
import { Loader, LogOutIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/appStore";

export default function HeaderActions() {
  const { signOut } = useClerk();
  const { userId } = useAuth();
  const router = useRouter();
  const { setAppLoading, app } = useAppStore();

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
        setAppLoading(true);
        signOut().finally(() => {
          setAppLoading(false);
          localStorage.removeItem("userId");
          router.replace("/");
        });
      }}
    />
  );
}
