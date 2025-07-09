// app/sign-in/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex mt-30 min-h-screen">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          variables: {
            // colorPrimary: "hsla(0, 0%, 100%, 0.1)", // white for buttons
            colorText: "#ffff", // light gray text
            colorBackground: "rgba(0, 0, 0,0.2)",

            // fontFamily: "Inter, sans-serif",
            // borderRadius: "0px",
            // colorInputBackground: "hsla(0, 0%, 100%, 0.7)", // light gray input background
          },
          // elements: {
          //   card: "bg-white/5 p-8 rounded-t-2xl border border-white/10 shadow-lg backdrop-blur-md transform hover:-translate-y-2 transition-transform duration-300",
          //   headerTitle: "text-3xl font-bold text-white text-center mb-2",
          //   headerSubtitle: "text-gray-400 text-sm text-center mb-6",
          //   socialButtonsBlockButton:
          //     "w-full flex items-center justify-center gap-3 px-8 py-4 text-md md:text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-white text-black hover:bg-red",
          //   formFieldInput:
          //     "bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400",
          //   formFieldLabel: "text-white font-medium text-sm mb-1",
          //   formFieldError: "text-red-500 text-xs mt-1",
          //   formButtonPrimary:
          //     "w-full flex items-center justify-center gap-3 px-8 py-4 text-md md:text-lg font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300",
          //   footerActionText: "text-gray-400 text-sm",
          //   footerActionLink: "text-cyan-400 hover:underline ml-1",
          // },
        }}
      />
    </div>
  );
}
