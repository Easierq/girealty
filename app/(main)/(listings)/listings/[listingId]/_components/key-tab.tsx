import React from "react";

export const KeyTab = () => {
  return (
    <div className="">
      <h4 className="text-lg text-slate-800 font-semibold mb-4">Key Details</h4>
      <div className="text-sm text-slate-500 divide-y divide-slate-100">
        <div className="flex flex-col lg:flex-row h-auto gap-6">
          <div className="basis-1/2">
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">Type</span>
              <span className="text-slate-800 font-medium d">Condos</span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">Category</span>
              <span className="text-slate-800 font-medium d">Residential</span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold mr-2">Address: </span>
              <span className="text-slate-800 font-medium text-right">
                3605 Leland St, San Diego, California
              </span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">Size</span>
              <span className="text-slate-800 font-medium d">frame MLS®</span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">Taxes</span>
              <span className="text-slate-800 font-medium d">frame MLS®</span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">Lot size</span>
              <span className="text-slate-800 font-medium d">frame MLS®</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">
                Avg. Price Per Sqft{" "}
              </span>
              <span className="text-slate-800 font-medium dark:text-slate-200">
                frame
              </span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">Garage</span>
              <span className="text-slate-800 font-medium dark:text-slate-200">
                Yes
              </span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">Days Active</span>
              <span className="text-slate-800 font-medium dark:text-slate-200">
                7
              </span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">Approx. Age</span>
              <span className="text-slate-800 font-medium dark:text-slate-200">
                1999
              </span>
            </div>
            <div className="flex justify-between py-2 w-full">
              <span className="text-slate-800 font-bold">MLS® Number </span>
              <span className="text-slate-800 font-medium dark:text-slate-200">
                25002315
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
