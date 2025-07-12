"use client";

// package
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

// ui

// css
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { data } from "@/data";
import Container from "@/components/container";

// interface Props {
//   courses: Course[];
// }

export default function ImagesSlider() {
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
      spacing: 0,
      perView: 1,
    },
    mode: "free-snap",
    breakpoints: {
      "(min-width: 840px)": {
        slides: {
          perView: 1.3,
          spacing: 0,
        },
        mode: "free-snap",
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 0,
        },
        mode: "free-snap",
      },
      "(min-width: 1124px)": {
        slides: {
          perView: 2.1,
          spacing: 0,
        },
        mode: "free-snap",
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 2.5,
          spacing: 0,
        },
        mode: "free-snap",
      },
      "(min-width: 1440px)": {
        slides: {
          perView: 2.7,
          spacing: 0,
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
      <Container className="py-10">
        <div className="mb-8 md:mb-20 py-1 h-full w-full"></div>
      </Container>
    );

  return (
    <div className="relative w-full h-full min-w-full">
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
      <div ref={slideRef} className="keen-slider min-w-full">
        {data.map((property) => (
          <div key={property.id} className="keen-slider__slide">
            <div className="h-[380px]">
              <img
                src={property.bg_image}
                //   src={course.imageUrl as string}
                alt="c-pic"
                className="object-fill h-full w-full min-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
