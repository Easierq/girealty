// import { cn } from "@/lib/utils";
// import Link from "@/node_modules/next/link";
import { Navbar } from "./_components/navbar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>

      <div className="py-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 font-semibold">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
}
