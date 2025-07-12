import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const SearchForm = () => {
  return (
    <Button
      size="sm"
      variant="outline"
      className="w-auto text-white text-[14px] border-2 font-bold rounded-[5px]"
    >
      Search Home
    </Button>
  );
};

export default SearchForm;
