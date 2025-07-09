import React from "react";
import { requireRole } from "@/lib/auth";
import { USER_ROLES } from "@/constant/constant";

export default async function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side role check
  await requireRole(USER_ROLES.CANDIDATE);

  return <>{children}</>;
}
