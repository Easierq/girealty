"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <header
      className={cn(
        "z-50 h-16 w-full fixed top-0 px-[3%] lg:px-[7%] bg-white",
        active && "bg-white backdrop-blur-md bg-opacity-70"
      )}
    >
      <div className="flex h-full items-center justify-between max-w-[1440px] mx-auto">
        <Link href="/" className="">
          <h1
            className={cn(
              "font-zentry text-4xl text-sky-700",
              active && "text-sky-700"
            )}
          >
            REALTY
          </h1>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          {/* <Link href="/" className="">
         <p
           className={cn(
             "hidden sm:block text-[14px] font-bold text-white",
             pathname !== "/" && "text-sky-700",
             active && "text-sky-700"
           )}
         >
           Bookmarks
         </p>
       </Link> */}
        </div>
      </div>
    </header>
  );
};
