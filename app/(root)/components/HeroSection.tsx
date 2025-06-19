import Button from "@/components/Button";
import { Briefcase, User } from "lucide-react";
import React from "react";
import LoginButton from "./LoginButton";

function HeroSection() {
  return (
    <main className="flex flex-col items-center text-center mt-20 sm:mt-40">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 leading-tight">
        Interview{" "}
        <span className=" bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300">
          Smarter
        </span>
      </h2>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 leading-tight">
        Hire{" "}
        <span className=" bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300">
          Faster
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-md md:text-xl text-gray-400">
        Avioo leverages cutting-edge AI to create fair, efficient, and
        insightful video interviews. Revolutionize your hiring process today.
      </p>

      {/* --- UPDATED CTA Buttons --- */}
      <LoginButton />
    </main>
  );
}

export default HeroSection;
