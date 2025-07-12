"use client";

// import { signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
// import { Logo } from "../logo";
// import { Button, buttonVariants } from "../ui/button";
// import { cn } from "@/lib/utils";
// import { Separator } from "../ui/separator";

export const SidebarWrap = () => {
  // const { status, data: session } = useSession();

  return (
    <div className="p-6 pt-12 w-full">
      <div className="w-full flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          {/* <Logo /> */}
        </div>
        <div className="flex flex-col mt-4">
          <SheetClose asChild>
            <Link href="/about" className="">
              <p className="text-sky-700 font-semibold my-4">About Us</p>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/bookmarks" className="">
              <p className="text-sky-700 font-semibold my-4">Bookmarks</p>
            </Link>
          </SheetClose>
          {/* <Separator className="bg-sky-700" /> */}
          <SheetClose asChild>
            <Link href="/pricing" className="">
              <p className="text-sky-700 font-semibold my-4">Pricing plans</p>
            </Link>
          </SheetClose>
          {/* <Separator className="bg-sky-700" /> */}

          <SheetClose asChild>
            <Link href="/contact" className="text-sky-700 font-semibold my-4">
              <p className="">Contact Us</p>
            </Link>
          </SheetClose>
          {/* <Separator className="bg-sky-700" /> */}
        </div>
        <div className="mt-auto">
          {/* {status === "unauthenticated" && (
            <div className="flex w-full items-center justify-between gap-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="bg-primary flex-1 hover:bg-primary/75 hover:text-muted"
                asChild
              >
                <Link href={`/login`}>
                  <span className="text-muted">Sign in</span>
                </Link>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="bg-primary flex-1 hover:bg-primary/75 hover:text-muted"
                asChild
              >
                <Link href={`/login`}>
                  <span className="text-muted">Sign up</span>
                </Link>
              </Button>
            </div>
          )}
          {status === "authenticated" && (
            <Button
              size="sm"
              variant="ghost"
              className="bg-primary flex-1 w-full hover:bg-primary/75 hover:text-muted"
              asChild
              onClick={() => signOut()}
            >
              <span className="text-muted cursor-pointer">Logout</span>
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
};
