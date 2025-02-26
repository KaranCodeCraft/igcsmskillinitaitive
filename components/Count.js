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
          भारत में कौशल विकास पहल (Skill India Mission)
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4">
            <Package className="w-12 h-12 mb-2" />
            <p className="text-3xl font-bold">
              <CountUp start={0} end={150} duration={3} decimals={0} />M
            </p>
            <p className="text-md mt-4">प्रशिक्षित युवा (2024 तक)</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4">
            <Package className="w-12 h-12 mb-2" />
            <p className="text-3xl font-bold">
              <CountUp start={0} end={3000} duration={3} decimals={0} />+
            </p>
            <p className="text-md mt-4">कौशल विकास केंद्</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4">
            <Package className="w-12 h-12 mb-2" />
            <p className="text-3xl font-bold">
              <CountUp start={0} end={500} duration={3} decimals={0} />+
            </p>
            <p className="text-md mt-4">प्रधानमंत्री कौशल विकास योजना केंद्र</p>
          </div>
        </div>
      </div>
    </section>
  );
}
