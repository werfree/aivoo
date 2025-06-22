"use client";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function useSignOut() {
  const { signOut } = useClerk();
  const router = useRouter();
  const signOutUser = () => {
    signOut().then(() => {
      localStorage.removeItem("userRole");
      router.replace("/");
    });
  };
  return signOutUser;
}

export default useSignOut;
