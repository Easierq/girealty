"use client";

import type { PropsWithChildren } from "react";
import { Navbar } from "./_components/navbar";
import FooterBig from "@/components/navbar/footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="">{children}</main>
      <FooterBig />
    </div>
  );
};

export default Layout;
