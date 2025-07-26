import Container from "@/components/container";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Heading from "./head";

const collections = [
  { id: 1, link: "/listings?type=condo", title: "Condo", bg: "/3.jpg" },
  { id: 2, link: "/listings?type=building", title: "Building", bg: "/1.jpg" },
  { id: 3, link: "/listings?type=apartment", title: "Apartment", bg: "/2.png" },
  { id: 4, link: "/listings?type=flat", title: "Flat", bg: "/7.png" },
];

const Collections = () => {
  return (
    <Container className="mb-[6rem] h-full">
      <div className="py-5 md:py-10">
        <div className="mb-4">
          <h1 className="text-lg md:text-xl text-slate-800 dark:text-slate-300 font-bold">
            Property categories
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 font-bold">
            Browse through properties by categories
          </p>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-[6px] sm:gap-2 sm:grid-cols-2 lg:grid-cols-3 min-h-[400px] hauto">
          {/* Main collection */}
          <div
            style={{ backgroundImage: "url(/6.jpg" }}
            className="relative min-h-[300px] sm:min-h-[360px] h-full w-full bg-[#F3F5F7] p-8 row-span-2 sm:min-w-0 bg-no-repeat bg-center bg-cover"
          >
            <div className="absolute bottom-5 left-5 flex flex-col justify-end gap-2">
              <Heading as="h3" intent="collection-card">
                Duplex
              </Heading>
              <Link href="/" className="w-fit">
                <span className="flex w-fit text-white items-center gap-1 border-b border-white">
                  Browse
                  <ArrowRightIcon stroke="#ffffff" className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Another collection */}

          {collections.map((m) => (
            <div
              key={m.id}
              style={{ backgroundImage: `url(${m.bg})` }}
              className="relative min-h-[150px] sm:min-h-[280px] h-full w-full bg-[#F3F5F7] p-8 sm:min-w-0 bg-no-repeat bg-center bg-cover"
            >
              <div className="absolute bottom-5 left-5 flex flex-col justify-end gap-1 sm:gap-2">
                <Heading as="h3" intent="collection-card">
                  {m.title}
                </Heading>
                <Link href={m.link} className="w-fit">
                  <span className="flex w-fit text-white items-center gap-1 border-b border-white">
                    Browse
                    <ArrowRightIcon stroke="#ffffff" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Collections;
