"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/container";
import { FeaturedCard } from "./featured-card";

const featured = [
  { id: 1, label: "Condos", img: "/6.jpg" },
  { id: 2, label: "Buildings", img: "/3.jpg" },
  { id: 3, label: "Penthouse", img: "/5.jpg" },
];

export default function Featured() {
  return (
    <Container className="py-5">
      <div className="mb-4">
        <h1 className="text-lg md:text-xl text-slate-800 font-bold">
          Featured properties
        </h1>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 font-bold">
          Browse through our newly featured listings
        </p>
      </div>
      <div className="flex gap-5 overflow-scroll  hidden-scrollbar">
        {featured.map((f) => (
          <div key={f.id} className="">
            <FeaturedCard label={f.label} img={f.img} />
          </div>
        ))}
      </div>
    </Container>
  );
}
