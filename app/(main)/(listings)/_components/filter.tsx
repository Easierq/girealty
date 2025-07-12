"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const Filter = ({ value, setValue }: Props) => {
  const onClear = () => {
    setValue("");
  };

  return (
    <div className="w-full h-auto">
      <div className="relative w-full p-1 bg-background border border-gray-200 flex items-center rounded-full">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for properties"
          className="rounded-r-none h-9 text-base focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none"
        />
        {value && (
          <X
            className="absolute top-4.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
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
      </div>
    </div>
  );
};

export default Filter;
