"use client";
import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Selecter } from "../(listings)/_components/selecter";

const options = [
  { label: "Rent", value: "rent" },
  { label: "Buy", value: "buy" },
];

const Search = () => {
  const router = useRouter();
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/listings",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full text-slate-900 rounded-[10px] bg-gray-100/50 border-2 border-gray-300 lg:w-full p-1 flex items-center bg-white"
    >
      <div className="w-[150px]">
        <Selecter
          newStyle="border border-gray-400 rounded-[10px]"
          placeholder="Rent"
          onChange={setType}
          title="Type"
          value={type}
          options={options}
        />
      </div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for properties"
        className="rounded-r-none text-lg lg:text-lg focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none"
      />
      {value && (
        <X
          className="absolute top-4.5 right-12 md:right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
          onClick={onClear}
        />
      )}
      <Button
        type="submit"
        variant="secondary"
        size="sm"
        className="rouded-l-none"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
