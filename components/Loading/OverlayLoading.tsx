"use client";
import React from "react";
import "./OverlayLoading.css";
import { useAppStore } from "@/store/appStore";
function OverlayLoading({ showLoader = false }: { showLoader?: boolean }) {
  const {
    app: { isLoading },
  } = useAppStore();

  if (!isLoading && !showLoader) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D1117]/60 backdrop-blur-md">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Orbit Path 1 (Fastest) */}
        <div
          className="absolute inset-0 orbit"
          style={{ animationDuration: "1.5s" }}
        >
          <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full orb-1"></div>
        </div>

        {/* Orbit Path 2 (Medium) */}
        <div
          className="absolute inset-2 orbit"
          style={{ animationDuration: "2.5s" }}
        >
          <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full orb-2"></div>
        </div>

        {/* Orbit Path 3 (Slowest) */}
        <div
          className="absolute inset-4 orbit"
          style={{ animationDuration: "3.5s" }}
        >
          <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full orb-3"></div>
        </div>
      </div>
      <p className="mt-6 text-lg tracking-widest text-gray-300">ANALYZING...</p>
    </div>
  );
}

export default OverlayLoading;
