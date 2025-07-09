"use client";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
export default function useSignOut() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Sign out from Clerk
      await signOut();

      // Redirect to home page
      router.push("/");
    } catch (error) {
      console.error("Error during sign out:", error);
      // Even if there's an error, try to redirect
      router.push("/");
    }
  };

  return handleSignOut;
}
