"use client";

// package
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

// ui

// css
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";
import { SliderSkeleton } from "@/app/(main)/_components/latest-skeleton";
// import { useCardModal } from "@/hooks/use-card-modal";
// import { Course } from "@prisma/client";
import { CardSlide } from "@/app/(main)/_components/card";
import { data } from "@/data";
import Container from "@/components/container";

// interface Props {
//   courses: Course[];
// }

// export default function Latest({ courses }: Props) {
export default function Related() {
  //   const onOpen = useCardModal((state) => state.onOpen);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      spacing: 12,
      perView: 1.2,
    },
    mode: "free-snap",
    breakpoints: {
      "(min-width: 460px)": {
        slides: {
          perView: 1.3,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 540px)": {
        slides: {
          perView: 1.4,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 620px)": {
        slides: {
          perView: 1.7,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 740px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 888px)": {
        slides: {
          perView: 2.4,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2.8,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1124px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3.7,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1360px)": {
        slides: {
          perView: 3.8,
          spacing: 16,
        },
        mode: "free-snap",
      },
    },
    renderMode: "performance",
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)
    return (
      <div className="py-10">
        <div className="mb-8 md:mb-20 py-1">
          <div className="mb-4">
            <h1 className="text-lg md:text-xl text-slate-800 dark:text-slate-300 font-bold">
              Related listings
            </h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 font-bold">
              Browse through related listings
            </p>
          </div>
          <SliderSkeleton />
        </div>
      </div>
    );

  return (
    <div className="py-10">
      <div className="relative mb-8 md:mb-10">
        {loaded && instanceRef.current && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"
            >
              <ChevronLeft className="h-6 w-6 dark:text-slate-600" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"
            >
              <ChevronRight className="h-6 w-6 dark:text-slate-600" />
            </button>
          </>
        )}
        <div className="mb-4">
          <h1 className="text-lg md:text-xl text-slate-800 dark:text-slate-300 font-bold">
            Related listings
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 font-bold">
            Browse through related listings
          </p>
        </div>

        <div ref={slideRef} className="keen-slider min-w-full">
          {data.map((property) => (
            <div key={property.id} className="keen-slider__slide">
              <CardSlide />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
