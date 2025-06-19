"use client";

import React from "react";
import { cn } from "@/lib/utils"; // optional utility for merging class names

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  smallScreenShowIconOnly?: boolean;
  showIconOnly?: boolean;
}

export default function Button({
  label,
  icon,
  variant = "primary",
  className,
  type = "button",
  smallScreenShowIconOnly = false,
  showIconOnly = false,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-3 px-8 py-4 text-md md:text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300";

  const variants = {
    primary: "text-black bg-white hover:bg-gray-200",
    secondary:
      "text-white bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20",
  };

  const combined = cn(baseStyles, variants[variant], className);

  return (
    <button type={type} className={combined} {...rest}>
      {icon && <span className="h-6 w-6">{icon}</span>}
      <span
        className={`${icon && showIconOnly ? "hidden" : ""} ${smallScreenShowIconOnly && "hidden md:visible"}`}
      >
        {label}
      </span>
    </button>
  );
}
