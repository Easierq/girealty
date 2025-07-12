"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid, List } from "lucide-react";
import React, { useState } from "react";
import { Selecter } from "./selecter";
import { FilterModal } from "./filter-modal";

const types = [
  { label: "Condo", value: "condo" },
  { label: "Flat", value: "flat" },
  { label: "Land", value: "land" },
  { label: "Apartment", value: "Apartment" },
];
const categories = [
  { label: "Rent", value: "rent" },
  { label: "Buy", value: "buy" },
];
const parks = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

interface Props {
  park: string;
  setPark: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  type: string;
  setType: (value: string) => void;
}

const Sorter = ({
  park,
  setPark,
  category,
  setCategory,
  type,
  setType,
}: Props) => {
  const onClear = () => {
    setPark("");
    setCategory("");
    setType("");
  };

  return (
    <div className="w-full py-3 my-2 h-auto">
      <div>
        <div className="hidden md:grid gap-4 gap-y-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          <Selecter
            placeholder="Type"
            onChange={setType}
            title="Type"
            value={type}
            options={types}
          />
          <Selecter
            placeholder="Category"
            onChange={setCategory}
            title="Category"
            value={category}
            options={categories}
          />
          <Selecter
            placeholder="Park"
            onChange={setPark}
            title="Park"
            value={park}
            options={parks}
          />
          <Button
            size="sm"
            variant="outline"
            className="w-auto h-10 text-white text-base font-bold bg-slate-800 rounded-full"
          >
            Submit
          </Button>
        </div>
        <div></div>
      </div>

      <div className="flex items-center justify-between md:hidden">
        {/* <Button
          size="sm"
          variant="outline"
          className="w-auto text-slate-600 text-base font-bold rounded-full border-2 border-slate-400 bg-transparent"
        >
          Filters
        </Button> */}
        <FilterModal
          park={park}
          setPark={setPark}
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}
        />
        {/* <div className="flex items-center gap-5">
          <div className="h-7 w-7 bg-slate-50/50 rounded-[4px] flex items-center justify-center">
            <Grid className="h-6 w-6 text-slate-600" />
          </div>
          <div className="h-7 w-7 bg-slate-50/50 rounded-[4px] flex items-center justify-center">
            <List className="h-6 w-6 text-slate-600" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sorter;
