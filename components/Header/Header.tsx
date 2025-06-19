import { auth } from "@clerk/nextjs/server";
import Button from "../Button";
import HeaderActions from "./HeaderAction";

async function HeaderComponent() {
  return (
    <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-3 px-6 sm:px-6 sm:py-6 z-50">
      <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-white ">
        Avioo
      </h1>
      <HeaderActions />
    </nav>
  );
}

export default HeaderComponent;
