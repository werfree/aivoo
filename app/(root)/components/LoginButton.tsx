"use client";

import Button from "@/components/Button";
import { useSignIn } from "@clerk/nextjs";
import { Briefcase, User } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { USER_ROLES } from "@/constant/constant";

function LoginButton() {
  const { signIn } = useSignIn();
  const router = useRouter();

  const handleCandidateLogin = () => {
    localStorage.setItem("userRole", USER_ROLES.CANDIDATE);
    router.push("/sign-in");
  };

  const handleHRLogin = () => {
    localStorage.setItem("userRole", USER_ROLES.RECRUITER);
    router.push("/sign-in");
  };

  return (
    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
      <Button
        label="Candidate Login"
        icon={<User />}
        variant="primary"
        onClick={handleCandidateLogin}
      />
      <Button
        label="Recruiter Login"
        icon={<Briefcase />}
        variant="secondary"
        onClick={handleHRLogin}
      />
    </div>
  );
}

export default LoginButton;
