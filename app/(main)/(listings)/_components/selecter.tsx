"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Options = {
  label: string;
  value: string;
};

interface Props {
  newStyle?: string;
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: Options[];
}
export function Selecter({
  newStyle,
  title,
  placeholder,
  value,
  onChange,
  options,
}: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn("w-full", newStyle)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel className="text-sm text-slate-500 font-medium">
            {title}
          </SelectLabel>
          {options?.map((option) => (
            <SelectItem
              key={option.value}
              className="text-sm font-semibold"
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

// const options = [
//   { label: "Rent", value: "rent" },
//   { label: "Buy", value: "buy" },
// ];
