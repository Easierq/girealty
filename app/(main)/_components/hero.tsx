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
// import Image from "next/image";

export const Hero = () => {
  return (
    <div
      // id="video-frame"
      style={{ backgroundImage: "url(/bg.jpg" }}
      className="relative z-10 h-[70dvh] md:h-[80dvh] bg-cover w-full overflow-hidden bg-sky-800 pt-16 md:pt-32"
    >
      {/* <video
        autoPlay
        src="/hero-2.mp4"
        loop
        muted
        id="current-video"
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover object-center"
      /> */}
      {/* <Image
        src="/bg.jpg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="-z-10"
      /> */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>
      <Container className="h-full">
        <div className="w-full h-full text-white">
          <div className="w-full md:px-0 md:w-[60%] h-full flex flex-col gap-7 pt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-shadow">
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
