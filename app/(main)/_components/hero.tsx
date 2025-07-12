// "use client";

// import Link from "next/link";
// import { Info } from "lucide-react";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { DocumentIcon } from "../icons";
// import { HeroIcon } from "../hero-icon";
// import { motion } from "framer-motion";
import Container from "@/components/container";
import Search from "./search";

export const Hero = () => {
  return (
    <div
      id="video-frame"
      className="relative z-10 h-[80dvh] md:h-[90dvh] w-full overflow-hidden bg-sky-800 pt-20"
    >
      <video
        autoPlay
        src="/vidre.mp4"
        loop
        muted
        id="current-video"
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover object-center"
      />
      <Container className="">
        <div className="w-full h-[500px] text-white">
          <div className="w-full md:px-0 md:w-[60%] h-full flex flex-col gap-7 justify-center">
            <h2 className="text-3xl lg:text-5xl font-semibold shadow-lg text-sky-400">
              Find Your Dream House With Us And Make Unfogettable Memories.
            </h2>
            {/* <p className="text-lgtext-xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p> */}
            <Search />
          </div>
        </div>
      </Container>
    </div>
  );
};
