"use client";

import React, { useMemo } from "react";
import { useAuth, useClerk, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OverlayLoading from "@/components/Loading/OverlayLoading";
import { syncUserWithBackend } from "@/utils/apis/syncUser";
import { USER_ROLES } from "@/constant/constant";
import useSignOut from "@/hooks/useSignOut";

export default function DashboardPage() {
  const { user, isSignedIn, isLoaded } = useUser();
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

  const signOut = useSignOut();

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
      signOut();
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
      <OverlayLoading showLoader={isAppLoading} />
      Welcome to the Dashboard —{" "}
      <strong>
        {isSignedIn}
        {user?.firstName}
      </strong>
    </div>
  );
}
