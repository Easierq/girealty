import React from "react";
import { CardB } from "./_components/card";
import Container from "@/components/container";
// import { Separator } from "@/components/ui/separator";

const items = [1, 2, 3, 4];

const Bookmarks = () => {
  return (
    <Container className="pt-24 pb-[100px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-800 mb-1">
            Bookmarks
          </h1>
          <p className="text-slate-700">My bookmarked listings</p>
        </div>
        {/* <Separator className="bg-slate-200" /> */}
        <div className="grid gap-8 gap-y-12 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {items.map((item, index) => (
            <CardB key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Bookmarks;
