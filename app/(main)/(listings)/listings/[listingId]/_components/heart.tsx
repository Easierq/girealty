"use client";

import { Heart, Share, Share2 } from "lucide-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  isFav?: string;
}

export const HeartButton: React.FC<HeartButtonProps> = ({ isFav }) => {
  return (
    <div className="flex gap-5">
      <div
        className="h-10 w-10 flex items-center justify-center bg-white rounded-full hover:opacity-80 transition cursor-pointer
      "
      >
        <Share2 className="w-6 h-6 text-slate-800" />
      </div>
      <div
        className="
        h-10 w-10 flex items-center justify-center
      bg-white rounded-full
        hover:opacity-80
        transition
        cursor-pointer
      "
      >
        <Heart className="w-6 h-6 text-slate-800" />
      </div>
    </div>
  );
};
