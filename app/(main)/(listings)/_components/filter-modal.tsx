"use client";

import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Selecter } from "./selecter";
import { Input } from "@/components/ui/input";
import { DollarSign, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const types = [
  { label: "Condo", value: "condo" },
  { label: "Flat", value: "flat" },
  { label: "Land", value: "land" },
  { label: "Apartment", value: "Apartment" },
];
const parks = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];
// const categories = ["buy", "rent"];
const categories = [
  { label: "Rent", value: "rent" },
  { label: "Buy", value: "buy" },
];

interface Props {
  park: string;
  setPark: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  type: string;
  setType: (value: string) => void;
}

export const FilterModal = ({
  park,
  setPark,
  category,
  setCategory,
  type,
  setType,
}: Props) => {
  const [query, setQuery] = useState({
    cat: "buy",
    keyword: "",
  });
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const onClear = () => {
    setTitle("");
  };

  const switchCategory = (val: string) => {
    setQuery((prev) => ({ ...prev, cat: val }));
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  if (!isClient)
    return (
      <Button
        size="sm"
        variant="outline"
        className="w-auto text-sky-700 text-base font-semibold rounded-full border-2 border-gray-300 bg-transparent"
      >
        Filters
      </Button>
    );

  if (!isDesktop) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <div className="bg-none p-0">
            <Button
              size="sm"
              variant="outline"
              className="w-auto text-sky-700 text-sm font-semibold rounded-full border border-gray-300 bg-transparent"
            >
              Filters
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="px-8 py-4 bg-white w-full h-full border-none"
        >
          <SheetHeader className="hidden">
            <SheetTitle>Filter modal</SheetTitle>
            <SheetDescription>Filter modal</SheetDescription>
          </SheetHeader>
          <div className="w-full flex flex-col gap-3 mt-4">
            <h1 className="text-2xl font-semibold text-sky-700 mb-1">
              Filter Search
            </h1>
            <Separator className="bg-slate-300" />
          </div>

          <div className="relative h-[82vh] overflow-y-scroll hidden-scrollbar">
            <div className="w-full flex flex-col gap-6 pt-4 pb-14">
              <div>
                <p className="text-slate-600 text-[14px] font-semibold mb-2">
                  Listing Title
                </p>
                <div className="relative w-full p-[2px] bg-background border border-gray-200 flex items-center rounded-full">
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Search for properties"
                    className="rounded-r-none h-9 pr-10 text-base focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none"
                  />
                  {title && (
                    <X
                      className="absolute top-4.5 right-3 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
                      onClick={onClear}
                    />
                  )}
                </div>
              </div>
              <div>
                <p className="text-slate-600 text-[14px] font-semibold mb-2">
                  Listing Category
                </p>
                <div className="overflow-hidden rounded-full border border-slate-300 w-max p-[1px]">
                  {categories.map((cat) => (
                    <Button
                      key={cat.label}
                      variant="primary"
                      size="sm"
                      onClick={() => switchCategory(cat.value)}
                      className={cn(
                        "w-auto min-w-[100px] capitalize rounded-full bg-white text-sky-700 hover:bg-slate-50",
                        cat.value === query.cat &&
                          "bg-sky-700 text-white hover:bg-sky-700/90"
                      )}
                    >
                      {cat.value}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-slate-600 text-[14px] font-semibold mb-2">
                  Price
                </p>
                <div className="flex gap-3 items-center">
                  <div className="relative w-full p-[2px] pl-5 bg-background border border-gray-200 flex items-center rounded-full">
                    <DollarSign
                      className="absolute top-4.5 left-2 h-4 w-4 text-slate-300 cursor-pointer hover:opacity-75 transition"
                      onClick={onClear}
                    />
                    <Input
                      type="number"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Price(min)"
                      className="rounded-r-none h-9 pr-3 text-base focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none placeholder:text-gray-500 placeholder:font-medium"
                    />
                  </div>
                  <div className="text-slate-500">-</div>
                  <div className="relative w-full p-[2px] pl-5 bg-background border border-gray-200 flex items-center rounded-full">
                    <DollarSign
                      className="absolute top-4.5 left-2 h-4 w-4 text-slate-300 cursor-pointer hover:opacity-75 transition"
                      onClick={onClear}
                    />
                    <Input
                      type="number"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Price(max)"
                      className="rounded-r-none h-9 pr-3 text-base focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none placeholder:text-gray-500 placeholder:font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* <div className="relative w-full p-[2px] bg-background border border-gray-200 flex items-center rounded-full">
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Search for properties"
                  className="rounded-r-none h-9 pr-10 text-base focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none"
                />
                {title && (
                  <X
                    className="absolute top-4.5 right-3 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
                    onClick={onClear}
                  />
                )}
              </div> */}
              {/* <Selecter /> */}
              <Selecter
                placeholder="Type"
                onChange={setType}
                title="Type"
                value={type}
                options={types}
              />
              <Selecter />
              <div className="flex gap-5 items-center">
                <Selecter
                  placeholder="Category"
                  onChange={setCategory}
                  title="Category"
                  value={category}
                  options={categories}
                />
                <Selecter
                  placeholder="Type"
                  onChange={setType}
                  title="Type"
                  value={type}
                  options={types}
                />
              </div>
              {/* <Button
                size="sm"
                variant="outline"
                className="w-auto h-12 text-white text-base font-bold bg-sky-700 rounded-[8px]"
              >
                Submit
              </Button> */}
            </div>
            <div className="h-auto px-5 py-3 w-full bg-white fixed bottom-0 left-0">
              <Button
                size="sm"
                variant="outline"
                className="w-full h-10 text-white text-base font-bold bg-sky-700 rounded-full"
              >
                Submit
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
};
