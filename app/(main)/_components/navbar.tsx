"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileToggle } from "@/components/navbar/mobile-toggle";
import { Search } from "lucide-react";
import { useModal } from "@/hooks/use-modal";

export const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const { onOpen } = useModal();

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
        "z-50 h-16 w-full fixed top-0 px-[3%] lg:px-[7%]",
        active && "bg-white backdrop-blur-md bg-opacity-70"
      )}
    >
      <div className="flex h-full items-center justify-between max-w-[1440px] mx-auto">
        <Link href="/" className="">
          <h1
            className={cn(
              "font-zentry text-4xl text-white",
              active && "text-sky-700",
              pathname !== "/" && "text-sky-700"
            )}
          >
            REALTY
          </h1>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link href="/listings" className="">
            <p
              className={cn(
                "hidden sm:block text-[14px] font-bold text-white",
                pathname !== "/" && "text-sky-700",
                active && "text-sky-700"
              )}
            >
              Listings
            </p>
          </Link>
          <Link href="/bookmarks" className="">
            <p
              className={cn(
                "hidden sm:block text-[14px] font-bold text-white",
                pathname !== "/" && "text-sky-700",
                active && "text-sky-700"
              )}
            >
              Bookmarks
            </p>
          </Link>
          <Link href="/contact" className="">
            <p
              className={cn(
                "hidden sm:block text-[14px] font-bold text-white",
                pathname !== "/" && "text-sky-700",
                active && "text-sky-700"
              )}
            >
              Contacts
            </p>
          </Link>

          {/* <Button
            // size="sm"
            variant="outline"
            className={cn(
              "hidden sm:block w-auto text-sky-700 text-[14px] font-bold rounded-full border-2 bg-white",
              active && "text-sky-700 border-sky-700"
            )}
          >
            Search Home
          </Button> */}

          {/* <Button
            size="sm"
            variant="outline"
            className={cn(
              "block sm:hidden w-auto px-[6px] text-sky-700 font-bold rounded-full border-2 bg-white",
              active && "text-sky-700 border-sky-700"
            )}
          >
            <Search className="h-5 w-5" />
          </Button> */}

          {/* <Button
            size="sm"
            variant="outline"
            className={cn(
              "block sm:hidden w-auto px-[6px] text-white font-semibold border-none rounded-full",
              active && "text-sky-700",
              pathname !== "/" && "text-sky-700"
            )}
          >
            <Search className="h-7 w-7" />
          </Button> */}

          {/* <LoginButton active={active} /> */}
          <Button
            variant="outline"
            className={cn(
              "w-auto px-6 text-white text-[14px] font-semibold border-none bg-sky-700 rounded-full",
              active && "text-white"
            )}
            onClick={() => onOpen("login")}
          >
            Login
          </Button>
          <MobileToggle active={active} />
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
};
