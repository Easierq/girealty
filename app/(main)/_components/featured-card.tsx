import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  label: string;
  img: string;
}

export const FeaturedCard = ({ label, img }: Props) => {
  return (
    <>
      <div className="hidden md:block w-[800px] h-[400px] bg-slate-100 rounded-2xl overflow-hidden">
        <div className="w-full h-full flex gap-10 relative">
          <div className="w-[700px] h-[600px] absolute -bottom-10 -left-10 z-[10]">
            <img
              src={img}
              //   src={course.imageUrl as string}
              alt="c-pic"
              className="object-fill h-full w-full min-h-full min-w-full grayscale -rotate-12 opacity-20"
            />
          </div>
          <div className="flex-1 p-8 z-[12]">
            <div className="flex flex-col justify-center gap-5 h-full">
              <h1 className="text-2xl font-semibold line-clamp-1">{label}</h1>
              <p className="text-base font-bold line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, fugit.
              </p>
              <p className="text-2xl font-bold line-clamp-1">
                {formatPrice(10000)}
              </p>
              <Button
                variant="primary"
                className="flex items-center gap-2 bg-slate-900 hover:opacity-90 w-max px-10 mt-2"
              >
                <Link href={`/listings/1`}>More Details</Link>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 py-8 z-[12]">
            <div className="w-full h-full">
              <img
                src={img}
                //   src={course.imageUrl as string}
                alt="c-pic"
                className="object-fill h-full w-full min-h-full min-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* small phone */}
      <div className="block md:hidden w-[520px] h-[280px] bg-slate-100 rounded-2xl overflow-hidden">
        <div className="w-full h-full flex gap-8 relative">
          <div className="w-[400px] h-[300px] absolute -bottom-10 -left-10 z-[10]">
            <img
              src={img}
              //   src={course.imageUrl as string}
              alt="c-pic"
              className="object-fill h-full w-full min-h-full min-w-full grayscale -rotate-12 opacity-20"
            />
          </div>
          <div className="flex-1 p-4 z-[12]">
            <div className="flex flex-col justify-center gap-4 h-full">
              <h1 className="text-2xl font-semibold line-clamp-1">Condos</h1>
              <p className="text-[14px] text-slate-800 font-bold line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, fugit.
              </p>
              <p className="text-2xl font-bold line-clamp-1">
                {formatPrice(10000)}
              </p>
              <Button
                variant="primary"
                className="lex items-center gap-2 bg-slate-900 hover:opacity-90 w-max px-6 mt-2"
              >
                <Link href={`/listings/1`}>More Details</Link>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 py-4 z-[12]">
            <div className="w-full h-full">
              <img
                src={img}
                //   src={course.imageUrl as string}
                alt="c-pic"
                className="object-fill h-full w-full min-h-full min-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// With background

// <div
//   style={{ backgroundImage: "url(/6.jpg" }}
//   className="mt-4 h-[300px] w-full flex sm:hidden rounded-[8px] group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-300 p-2 overflow-hidden"
// >
//   <div className="bg-black/60 bottom-0 left-0 p-1 px-2 absolute w-full h-10">
//     <h2 className="text-base md:text-lg font-black text-white drop-shadow-2xl line-clamp-3 xl:line-clamp-none">
//       Lorem, ipsum dolor.
//     </h2>
//   </div>
// </div>;
