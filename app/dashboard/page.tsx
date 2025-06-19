"use client";

import React from "react";
import { useAuth, useClerk, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import OverlayLoading from "@/components/Loading/OverlayLoading";

export default function DashboardPage() {
  const { userId, isSignedIn } = useAuth();
  const { user } = useUser();
  useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const [isAppLoading, setAppLoading] = useState(true);

  useEffect(() => {
    console.log("DashboardPage mounted");
    setAppLoading(true);
  }, []);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (isSignedIn === false || (isSignedIn === true && !userId)) {
      console.error("User is not signed in or userId is missing", userId);
      router.replace("/sign-in");
      return;
    }
    if (isSignedIn && (!userRole || !userId)) {
      console.error("User role or ID is missing", userId, userRole);
      signOut().then(() => {
        setAppLoading(false);
        localStorage.removeItem("userRole");
        router.replace("/");
      });
    }
    if (isSignedIn && userRole && userId) {
      console.log("User is signed in with role:", userRole, "and ID:", userId);
    }
  }, [isSignedIn, userId, router]);

  return (
    <div className="text-white text-xl p-4">
      <OverlayLoading showLoader={isAppLoading} />
      Welcome to the Dashboard —{" "}
      <strong>
        {isSignedIn}
        {userId}
      </strong>
    </div>
  );
}
