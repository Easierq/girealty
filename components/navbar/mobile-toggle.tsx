"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  FacebookLogo,
  InstagramLogo,
  QuickAccessIcon,
  TiktokLogo,
} from "../icons";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import Link from "next/link";

export const MobileToggle = ({ active }: { active: boolean }) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  if (!isClient)
    return (
      <div className="bg-none p-0">
        {/* <Menu className="h-9 w-9" /> */}
        <QuickAccessIcon
          className={cn(
            "h-6 w-6 ml-[2px] mb-1 cursor-pointer text-white",
            active && "text-sky-700",
            pathname !== "/" && "text-sky-700"
          )}
        />
      </div>
    );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-none p-0">
          {/* <Menu className="h-9 w-9" /> */}
          <QuickAccessIcon
            className={cn(
              "h-6 w-6 ml-[2px] mb-1 cursor-pointer text-white",
              active && "text-sky-700",
              pathname !== "/" && "text-sky-700"
            )}
          />
        </div>
      </SheetTrigger>
      <SheetContent className="pt-3 text-slate-800 px-0 bg-white border-none">
        <SheetHeader className="hidden">
          <SheetTitle>Sidebar</SheetTitle>
          <SheetDescription>Sidebar menu</SheetDescription>
        </SheetHeader>
        <div className="py-3 px-4">
          <Link href="/" className="">
            <h1 className={cn("font-zentry text-4xl text-sky-700")}>REALTY</h1>
          </Link>
          <div className="flex flex-col mt-8 text-slate-700 text-sm w-[90%]">
            <span>
              Discover the most outstanding new place you could imagine
            </span>

            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-5 text-brand-purple">
                <Link
                  href="https://www.tiktok.com/@creativedreyy?_t=ZS-8xfjLFcuiST&_r=1"
                  target="_blank"
                >
                  <TiktokLogo className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/18KXdfkRCw/"
                  target="_blank"
                >
                  <FacebookLogo className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/creativedrey1?igsh=MWc0enBqMGQ1cWV5eg=="
                  target="_blank"
                >
                  <InstagramLogo className="h-5 w-5" />
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <Separator className="w-full" />
        <div className="flex flex-col py-6 px-2 gap-y-1 text-slate-900 m-4 rounded-xl">
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-xl hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-xl hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/listings">Listings</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-xl hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/blogs">Blogs</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-xl hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/">Bookmarks</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-xl hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/">FAQs</Link>
          </SheetClose>
          <SheetClose
            className="text-start flex w-full px-3 font-medium text-xl hover:bg-slate-100/50 rounded-lg py-2"
            asChild
          >
            <Link href="/">Our Work</Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
