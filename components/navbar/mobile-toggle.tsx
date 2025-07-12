"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { QuickAccessIcon } from "../icons";
import { SidebarWrap } from "./sidebar-wrap";
import { usePathname } from "next/navigation";

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
      <SheetContent
        side="right"
        className="p-0 flex gap-0 bg-white border-none w-5/6"
      >
        <SheetHeader className="hidden">
          <SheetTitle>Sidebar</SheetTitle>
          <SheetDescription>Sidebar menu</SheetDescription>
        </SheetHeader>
        <SidebarWrap />
      </SheetContent>
    </Sheet>
  );
};
