import OverlayLoading from "@/components/Loading/OverlayLoading";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClerkLoading>
        <OverlayLoading showLoader={true} text="Loading..." />
      </ClerkLoading>

      <ClerkLoaded>
        <div>{children}</div>
      </ClerkLoaded>
    </>
  );
}

export default AuthLayout;
