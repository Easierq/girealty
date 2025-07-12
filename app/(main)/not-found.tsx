"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="h-full min-h-screen flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-7xl font-bold text-purple-400">404</h1>
      <p className="font-bold">
        We couldn&apos;t find the Project you were looking for.
      </p>
      <Button variant="primary" className="hover:bg-purple-500/90" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
