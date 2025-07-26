"use client";

import React, { useState } from "react";
import { KeyTab } from "./key-tab";
import { DescriptionTab } from "./description-tab";

export const FullTab = () => {
  const [activeTab, setActiveTab] = useState("Key Details");

  return (
    <div className="w-full mt-10">
      <div className="flex gap-2 w-max bg-gray-100/50 rounded-md overflow-hidden mb-5">
        <button
          onClick={() => setActiveTab("Key Details")}
          className={`py-2 px-4 text-sm text-gray-600 rounded-md  focus:outline-none ${
            activeTab === "Key Details"
              ? "bg-gray-200 font-semibold text-gray-700"
              : ""
          }`}
        >
          Key Details
        </button>
        <button
          onClick={() => setActiveTab("Description")}
          className={`py-2 px-4 text-sm text-gray-600 rounded-md focus:outline-none ${
            activeTab === "Description"
              ? "bg-gray-200  font-semibold text-gray-700"
              : ""
          }`}
        >
          Description
        </button>
      </div>
      <div className="text-lg text-gray-700 border border-slate-300 rounded-xl">
        {activeTab === "Key Details" ? (
          <div className="p-4 w-full h-full">
            <KeyTab />
          </div>
        ) : (
          <div className="p-4 w-full h-full">
            <DescriptionTab />
          </div>
        )}
      </div>
    </div>
  );
};
