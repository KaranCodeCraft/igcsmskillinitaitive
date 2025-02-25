import { motion } from "framer-motion";

const sectors = [
  { name: "Auto", icon: "\u2699\ufe0f", color: "text-orange-500" },
  { name: "E-Commerce", icon: "\ud83d\uded2", color: "text-blue-500" },
  { name: "Chemicals", icon: "\ud83d\udd2c", color: "text-indigo-500" },
  { name: "Pharmaceuticals", icon: "\ud83e\ude78", color: "text-red-500" },
];

export default function SectorCards() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen px-10 py-20 flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('https://www.ibef.org/assets/images/sector-report.jpg')" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-4xl font-bold mb-6"
      >
        Sector Report
      </motion.h1>
      <p className="text-gray-300 text-lg text-center max-w-3xl mb-10">
        India Brand Equity Foundation (IBEF) brings to you the amazing success
        stories of Brand India.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center space-y-3 cursor-pointer hover:shadow-xl transition"
          >
            <span className={`text-5xl ${sector.color}`}>{sector.icon}</span>
            <p className="text-gray-900 font-semibold text-lg">{sector.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
