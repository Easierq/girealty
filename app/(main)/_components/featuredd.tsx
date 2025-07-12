import React from "react";

export const Fea = () => {
  return (
    <>
      <div className="hidden md:block w-[800px] h-[400px] bg-sky-300 rounded-2xl overflow-hidden">
        <div className="w-full h-full flex gap-10">
          <div className="flex-1 p-8">
            <div className="flex flex-col justify-center gap-4 h-full">
              <h1 className="text-2xl font-semibold">Condos</h1>
              <p className="text-base font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, fugit.
              </p>
            </div>
          </div>
          <div className="flex-1 py-8">
            <div className="w-full h-full">
              <img
                src="/6.jpg"
                //   src={course.imageUrl as string}
                alt="c-pic"
                className="object-fill h-full w-full min-h-full min-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* small phone */}
      <div className="block md:hidden w-[500px] h-[280px] bg-sky-300 rounded-2xl overflow-hidden">
        <div className="w-full h-full flex gap-8">
          <div className="flex-1 p-4">
            <div className="flex flex-col justify-center gap-4 h-full">
              <h1 className="text-2xl font-semibold">Condos</h1>
              <p className="text-base font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, fugit.
              </p>
            </div>
          </div>
          <div className="flex-1 py-4">
            <div className="w-full h-full">
              <img
                src="/6.jpg"
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
