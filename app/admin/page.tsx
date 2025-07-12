export const dynamic = "force-dynamic";
export const revalidate = 0; // Ensure no caching

import React from "react";
import Link from "next/link";
import { Add } from "@/components/icons";
import Container from "@/components/container";
// import { db } from "@/lib/db";

const listings = [{ id: 1, imageUrl: "/6.jpg", title: "name" }];
const AdminPage = async () => {
  // const listings = await db.listing.findMany({
  //   // where: {
  //   //   isPublished: true,
  //   // },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  return (
    <Container>
      <div className="pt-[90px] min-h-[100vh]">
        <div className="space-y-4">
          <div className="flex items-center font-semibold text-lg md:text-xl text-neutral-700 dark:text-slate-300">
            My Listings
          </div>
          <p className="font-semibold text-sm text-slate-500 dark:text-slate-200">
            Click the{" "}
            <span className="text-slate-800 dark:text-slate-300">
              "Create new Listing"
            </span>{" "}
            to add new listing/Click listing to edit it.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              href="/admin/create-listing"
              role="button"
              className="aspect-video text-white relative h-[200px] w-full bg-sky-700 rounded-[12px] flex flex-col gap-y-1 items-center justify-center hover:opacity-95 transition"
            >
              <Add className=" text-white h-[80px] w-[80px]" />
              <p className="text-sm font-bold">Create New listing</p>
            </Link>
            {listings.map((listing) => (
              <Link
                href={`/admin/l/${listing.id}`}
                key={listing.id}
                className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-[12px] h-[200px] w-full p-2 overflow-hidden"
                style={{ backgroundImage: `url(${listing.imageUrl})` }}
                // style={{ backgroundImage: `url(${course.image.src})` }}
                // style={{ backgroundImage: "url(/lap.jpg" }}
              >
                {/* <div className="bg-black/60 bottom-0 left-0 p-1 px-2 absolute w-full"> */}
                <div className="bg-[linear-gradient(to_top,black_0%,rgba(0,0,0,0)_100%)] bottom-0 left-0 p-2 px-2 absolute w-full h-auto">
                  <h2 className="text-base font-bold text-white drop-shadow-2xl line-clamp-3 xl:line-clamp-none">
                    {listing.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminPage;
