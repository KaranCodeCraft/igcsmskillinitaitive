"use client";

import React from "react";
import CountUp from "react-countup";
import { Package } from "lucide-react";

export default function ExportDataSection() {
  return (
    <section
      className="bg-orange-400 py-8 text-white"
      style={{
        backgroundImage:
          "url('https://www.ibef.org/assets/images/merchandise-trade-bg.jpg')",
      }}
    >
      <div className="container mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          India : Merchandise Export in USD billion
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4">
            <Package className="w-12 h-12 mb-2" />
            <p className="text-3xl font-bold">
              <CountUp start={0} end={38.01} duration={3} decimals={2} />B
            </p>
            <p className="text-md mt-4">December 2024</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4">
            <Package className="w-12 h-12 mb-2" />
            <p className="text-3xl font-bold">
              <CountUp start={0} end={321.71} duration={3} decimals={2} />B
            </p>
            <p className="text-md mt-4">April 2024 - December 2024</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4">
            <Package className="w-12 h-12 mb-2" />
            <p className="text-3xl font-bold">
              <CountUp start={0} end={437.06} duration={3} decimals={2} />B
            </p>
            <p className="text-md mt-4">April 2023 - March 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
