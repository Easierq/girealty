// import { Button } from "@/components/ui/button";
// import { notFound } from "next/navigation";
import { Bath, Bed, Map } from "lucide-react";
import Container from "@/components/container";
import ImagesSlider from "./_components/images";
import { HeartButton } from "./_components/heart";
import { formatPrice } from "@/lib/format";
import { FullTab } from "./_components/full-tab";
import Related from "./_components/related";
import { Load } from "@/app/(main)/load";

interface Props {
  params: { propertyId: string };
}

const DetailsPage = ({ params: { propertyId } }: Props) => {
  return (
    <div className="min-h-screen w-full">
      <Container>
        <div className="pt-20 md:pt-24 pb-16">
          <div className="space-y-6">
            <h1 className="text-xl font-normal my-4 mb-5">
              400 18th St NW #233, Atlanta, GA 3033
            </h1>
            <div className="relative w-full h-[300px] md:h-auto overflow-hidden bg-slate-400 min-h-[300px] md:min-h-[380px]">
              <ImagesSlider />
              <div className="absolute top-5 right-3">
                <HeartButton />
              </div>
              <div className="absolute text-slate-700 bottom-6 left-1/2 -translate-x-1/2  w-fit px-3.5 py-1 font-inter text-xs border border-slate-700 font-semibold uppercase bg-white rounded-full">
                Free
              </div>
            </div>
            <p className="text-slate-600 text-[14px] font-semibold">
              Slide to left or right to see property pictures
            </p>
            <div className="relative flex flex-col lg:flex-row w-full gap-10 lg:gap-16 rounded-xl text-slate-800">
              <div className="basis-3/5">
                <div className="">
                  <div className="flex justify-between items-center">
                    <h1 className="text-3xl md:text-4xl font-semibold my-4 mb-5">
                      {formatPrice(40000)}
                    </h1>
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center gap-[2px]">
                        <p className="text-base font-semibold">1</p>
                        <Bed className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="flex items-center gap-[2px]">
                        <p className="text-base font-semibold">1</p>
                        <Bath className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="flex items-center gap-[2px]">
                        <p className="text-base font-semibold">1</p>
                        <Map className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                    </div>
                  </div>

                  <p className="text-xl text-slate-600 font-semibold">Condos</p>
                  <h1 className="text-xl font-semibold my-4 mb-5">
                    Spacious Three-Bedroom Bungalow in Maryland
                  </h1>
                  <FullTab />
                  <div className="mt-5">
                    <h1 className="text-base text-slate-800 font-semibold mb-2">
                      Property video
                    </h1>
                    <video controls width="100%" className="">
                      <source
                        // src="https://res.cloudinary.com/isiaqofficial/video/upload/v1721643538/codest_b4cuai.mp4"
                        src=""
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
              <div className="basis-2/5">
                <h1 className="text-base text-slate-800 font-semibold mb-2">
                  Listing Map
                </h1>
                <div className="border border-slate-300 w-full h-[400px]"></div>
              </div>
            </div>
            <Related />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailsPage;
