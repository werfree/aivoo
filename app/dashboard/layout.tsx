import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("Recruiter RootLayout mounted");
  return <>{children}</>;
}

export default RootLayout;
