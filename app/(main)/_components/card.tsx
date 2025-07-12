import { WishlistIcon } from "@/public/assets/svg";

import { formatPrice } from "@/lib/format";
// import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Bath, Bed, Map } from "lucide-react";
import Link from "next/link";

export const CardSlide = ({ img }: { img?: string }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {/* thumbnail */}
      <div className="group relative aspect-video overflow-hidden bg-[#F3F5F7] rounded-[8px]">
        <div className=" absolute top-2 left-2 right-2 z-10 flex items-start justify-between">
          <div className="w-fit px-3.5 py-1 font-inter text-xs font-semibold uppercase bg-white rounded-full">
            Free
          </div>
          <button className="shadow-[rgba(15, 15, 15, 0.12)] flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-opacity duration-100 ease-out group-hover:opacity-100">
            <WishlistIcon className="h-5 w-5" />
          </button>
        </div>
        <Link href={`/listings/1`}>
          <img
            src={img}
            //   src={course.imageUrl as string}
            alt="c-pic"
            className="object-fill h-full w-full min-h-full min-w-full rounded-[8px]"
          />
        </Link>
      </div>

      {/* content */}
      <Link href={`/listings/1`} className="space-y-1">
        <div className="space-y-1">
          <p className="font-semibold text-[#141718]/90 text-sm line-clamp-1">
            Latest iphone 1
          </p>
          <p className="font-bold text-[#141718] text-sm line-clamp-1">
            {formatPrice(40000)}
          </p>
        </div>
        {/* <Separator className="bg-slate-200 mx-auto" /> */}
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-[2px]">
            <p className="text-sm">1</p>
            <Bed className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-[2px]">
            <p className="text-sm">1</p>
            <Bath className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-[2px]">
            <p className="text-sm">1</p>
            <Map className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  );
};
