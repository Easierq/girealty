"use client";

import Container from "@/components/container";
import { Card } from "../_components/card";
import Filter from "../_components/filter";
import Sorter from "../_components/sorter";
import { useState } from "react";

const items = [
  { id: 1, link: "/", title: "Condo", bg: "/3.jpg" },
  { id: 2, link: "/", title: "Building", bg: "/2.png" },
  { id: 3, link: "/", title: "Apartment", bg: "/1.jpg" },
  { id: 4, link: "/", title: "Flat", bg: "/7.png" },
  { id: 5, link: "/", title: "Condo", bg: "/3.jpg" },
  { id: 6, link: "/", title: "Building", bg: "/2.png" },
  { id: 7, link: "/", title: "Flat", bg: "/5.jpg" },
  { id: 8, link: "/", title: "Flat", bg: "/7.png" },
];
const SearchPage = () => {
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [park, setPark] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Container className="pt-24 pb-[100px]">
      <div className="mb-4">
        <Filter value={value} setValue={setValue} />
        <Sorter
          park={park}
          setPark={setPark}
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}
        />
        <h1 className="text-xl text-slate-600 font-bold my-4">
          Search results for blabla
        </h1>
      </div>
      <div className="mt-6">
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"> */}
        <div className="grid gap-8 gap-y-12 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {items.map((item, index) => (
            <Card img={item.bg} key={index} />
          ))}
        </div>
        {items.length === 0 && (
          <div className="text-center text-sm text-muted-foreground mt-10">
            No courses found
          </div>
        )}
      </div>
    </Container>
  );
};

export default SearchPage;
