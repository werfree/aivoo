"use client";

import { useEffect, useState } from "react";
import useSignOut from "@/hooks/useSignOut";
import OverlayLoading from "@/components/Loading/OverlayLoading";

export default function SignOutPage() {
  const signOut = useSignOut();
  const [isSigningOut, setIsSigningOut] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        // Use your existing useSignOut hook
        // This will clear client-side cookies, localStorage, sessionStorage, and sign out from Clerk
        await signOut();
        // The hook already handles all cleanup and redirect
      } catch (error) {
        console.error("Error during sign out:", error);
        setError("Failed to sign out. Please try again.");
        setIsSigningOut(false);
      }
    };

    // Execute sign out immediately when component mounts
    handleSignOut();
  }, [signOut]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Sign Out Error</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <div className="space-y-3">
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-6 rounded-lg transition-colors mr-3"
            >
              Go to Home
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-6 rounded-lg transition-colors border border-white/20"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <OverlayLoading
        text="Signing you out and clearing all data..."
        showLoader={true}
      />
    </div>
  );
}
