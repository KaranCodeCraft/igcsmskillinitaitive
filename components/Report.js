import { motion } from "framer-motion";

const initiatives = [
  {
    name: "PMKVY",
    icon: "🌟",
    color: "text-orange-500",
    description:
      "प्रधानमंत्री कौशल विकास योजना (PMKVY) के तहत लाखों युवाओं को प्रशिक्षित किया गया।",
  },
  {
    name: "NAPS",
    icon: "💼",
    color: "text-blue-500",
    description:
      "राष्ट्रीय शिक्षुता संवर्धन योजना (NAPS) उद्योगों में शिक्षुता को बढ़ावा देती है।",
  },
  {
    name: "Skill Hubs",
    icon: "🌍",
    color: "text-indigo-500",
    description: "देशभर में 3000+ कौशल हब्स युवाओं को प्रशिक्षण दे रहे हैं।",
  },
  {
    name: "RPL",
    icon: "🏆",
    color: "text-red-500",
    description:
      "Recognition of Prior Learning (RPL) के तहत अनौपचारिक क्षेत्र के श्रमिकों को प्रमाणन दिया जाता है।",
  },
];

export default function SkillIndiaInitiatives() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen px-10 py-20 flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.ibef.org/assets/images/sector-report.jpg')",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-4xl font-bold mb-6"
      >
        कौशल भारत पहलें
      </motion.h1>
      <p className="text-gray-300 text-lg text-center max-w-3xl mb-10">
        भारत सरकार की प्रमुख कौशल विकास पहलों की जानकारी प्राप्त करें।
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center space-y-3 cursor-pointer hover:shadow-xl transition"
          >
            <span className={`text-5xl ${initiative.color}`}>
              {initiative.icon}
            </span>
            <p className="text-gray-900 font-semibold text-lg">
              {initiative.name}
            </p>
            <p className="text-gray-600 text-center text-sm">
              {initiative.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
