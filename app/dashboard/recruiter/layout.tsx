import React from "react";
import { requireRole } from "@/lib/auth";
import { USER_ROLES } from "@/constant/constant";

export default async function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side role check
  console.log("JobRootLayout mounted");
  await requireRole(USER_ROLES.RECRUITER);

  return <>{children}</>;
}
