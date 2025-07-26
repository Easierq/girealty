"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import Container from "@/components/container";

const NotFoundPage = () => {
  return (
    <Container className="h-full min-h-screen flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-7xl font-bold text-sky-700">404</h1>
      <p className="font-semibold text-slate-500">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Button variant="primary" className="hover:opacity-90" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </Container>
  );
};

export default NotFoundPage;
