// import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Loaderr = () => {
  const variants = {
    hidden: { y: -16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
    >
      <div className="h-full min-h-screen flex flex-col space-y-4 justify-center items-center">
        {/* <Loader className="h-10 w-10 text-muted-foreground animate-spin" /> */}
        <Image src="/lop.svg" alt="Mascot" height={160} width={160} />
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
          I am{" "}
          <span className="text-purple-700 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide-2 text-left leading-tight [&_li]:block">
              <li>Gazal</li>
              <li>Isiaq</li>
              <li aria-hidden="true">Gazal</li>
            </ul>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
