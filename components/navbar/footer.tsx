import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../container";

const FooterBig = () => {
  return (
    <Container>
      <div className="h-auto py-6 pb-[40px] pt-[40px] md:pb-[50px] text-slate-700 flex gap-8 flex-col md:flex-row border-t border-slate-400/10 mx-auto max-w-[1440px]">
        <div className="w-full md:w-1/2">
          <Link href="/" className="">
            <h1 className="font-zentry text-4xl text-sky-700">REALTY</h1>
          </Link>
          <p className="mt-4 text-2xl md:text-2xl w-[70%] md:w-2/3 font-bold">
            Finding home is about making choice, we will help you with that.
            {/* Where every bite is a taste of tradition, and every gathering is a
            chance to make memories. */}
          </p>
          <p className="hidden md:block mt-[50px] text-xs font-bold">
            © ALL RIGHTS RESERVED. <span className="font-semibold">(GI)</span>
          </p>
        </div>
        <div className="flex w-1/2 flex-col gap-8 md:flex-row justify-end">
          <div className="flex flex-col">
            <h1 className="font-bold mb-3 text-base">OUR LOCATION</h1>
            <p className="text-sm md:text-[15px] font-bold">
              1654 R. Don Road 304.
              <br /> Newyork, 8776 <br />
              (+1) 654 7896
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 text-base font-bold">WORKING HOURS</h1>
            <p className="text-sm md:text-[15px] font-bold">
              Monday - Friday <br /> 9:00 - 20:00
            </p>
          </div>
          <p className="block md:hidden mt-[-5px] text-xs font-bold">
            © ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default FooterBig;
