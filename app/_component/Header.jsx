import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between p-5 shadow-md">
      <div className="flex items-center">
        <span
          className="text-5xl font-bold mr-2"
          style={{ color: "#ff7917", fontFamily: "cursive" }}
        >
          Go
        </span>
        <span
          className="text-2xl font-bold"
          style={{ color: "#ff7917", fontFamily: "cursive" }}
        >
          Meet
        </span>
        <Image
          src="logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="w-[50px] md:w-[100px]"
        />
      </div>
      <ul className="hidden md:flex gap-14 font-medium text-lg">
        <li className="hover:text-primary transition-all duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-primary transition-all duration-300 cursor-pointer">
          About
        </li>
        <li className="hover:text-primary transition-all duration-300 cursor-pointer">
          Service
        </li>
        <li className="hover:text-primary transition-all duration-300 cursor-pointer">
          Contact Us
        </li>
      </ul>
      <div className="flex gap-5">
        <Button className="text-xl" variant="ghost">
          Login
        </Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
