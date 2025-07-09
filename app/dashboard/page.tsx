"use client";

import React, { useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OverlayLoading from "@/components/Loading/OverlayLoading";
import { syncUserWithBackend } from "@/utils/apis/syncUser";
import { USER_ROLES } from "@/constant/constant";
import { useUserStore } from "@/store/userStore";

export default function DashboardPage() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { setUser } = useUserStore();
  const userDetails = useMemo(
    () => ({
      userId: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.emailAddresses[0]?.emailAddress,
      isUserLogin: user ? true : false,
    }),
    [user]
  );
  const router = useRouter();

  const [isAppLoading, setAppLoading] = useState(true);

  useEffect(() => {
    console.log("DashboardPage mounted");
    setAppLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    const userRole = localStorage.getItem("userRole");
    if (isSignedIn === false || (isSignedIn === true && !user)) {
      console.error("User is not signed in or userId is missing");
      router.replace("/sign-in");
      return;
    }
    if (
      isSignedIn &&
      ((userRole !== USER_ROLES.RECRUITER &&
        userRole !== USER_ROLES.CANDIDATE) ||
        !user)
    ) {
      console.error("User role or ID is missing");
      router.replace("/sign-out");
    }
    if (
      isSignedIn &&
      userRole &&
      user &&
      user &&
      userDetails.isUserLogin &&
      userDetails.email &&
      userDetails.firstName &&
      userDetails.lastName &&
      userDetails.userId
    ) {
      console.log("User is signed in with role:", userRole, "and ID:", user);
      syncUserWithBackend({
        clerkId: userDetails.userId,
        email: userDetails.email,
        firstName: userDetails.firstName || "",
        lastName: userDetails.lastName || "",
        role: userRole as USER_ROLES,
      })
        .then((response) => {
          console.log("User synced successfully:", response);
          setUser({
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            role: response.role,
          });
          // Set role in localStorage for client-side access
          localStorage.setItem("userRole", response.role);
          console.log("User role set in localStorage:", response.role);

          // Redirect based on role from backend
          if (response.role === USER_ROLES.CANDIDATE) {
            router.replace("/dashboard/candidate");
          } else if (response.role === USER_ROLES.RECRUITER) {
            router.replace("/dashboard/recruiter");
          } else {
            console.error("Invalid role from backend:", response.role);
            router.replace("/sign-out");
          }
        })
        .catch((error) => {
          console.error("Error syncing user with backend:", error);
          // signOut();
        })
        .finally(() => {
          setAppLoading(false);
        });
    }
  }, [
    isSignedIn,
    isLoaded,
    userDetails,
    userDetails.isUserLogin,
    userDetails.email,
    userDetails.firstName,
    userDetails.lastName,
    userDetails.userId,
  ]);

  return (
    <div className="text-white text-xl p-4">
      <OverlayLoading
        text="Redirecting to your dashboard..."
        showLoader={true}
      />
      {/* <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p>Redirecting to your dashboard...</p>
        </div>
      </div> */}
    </div>
  );
}
