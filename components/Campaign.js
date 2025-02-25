import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const campaigns = [
  {
    title: "Aatmanirbhar Bharat",
    desc: "Union Minister of External Affairs, Dr. S. Jaishankar and Union Commerce and Industry Minister...",
    img: "https://www.ibef.org/uploads/images/event1728469063discover_india_event.jpg",
  },
  {
    title: "Bharat Mobility 2025",
    desc: "Bharat Mobility Global Expo 2025 17th – 22nd Jan 2024, Bharat Mandapam,  New Delhi.. New Delhi..New Delhi...",
    img: "https://www.ibef.org/uploads/images/event1728469063discover_india_event.jpg",
  },
  {
    title: "Discover India 2024",
    desc: "APEDA is organizing participation in SIAL Paris 2024 scheduled to be held from 19-23 October, 2024...",
    img: "https://www.ibef.org/uploads/images/event1728469063discover_india_event.jpg",
  },
  {
    title: "Discover India 2024",
    desc: "APEDA is organizing participation in SIAL Paris 2024 scheduled to be held from 19-23 October, 2024...",
    img: "https://www.ibef.org/uploads/images/event1728469063discover_india_event.jpg",
  },
];

export default function CampaignSection() {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-white p-4 py-16"
      style={{
        backgroundImage:
          "url('https://www.ibef.org/assets/images/new-release-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Heading */}
      <div className="relative flex items-left gap-2 mb-6 px-10">
        <div className="w-1 h-8 bg-orange-500"></div>
        <h2 className="text-green-400 text-3xl font-bold text-left">IBEF CAMPAIGNS</h2>
      </div>

      {/* Marquee Animation */}
      <div className="relative w-full overflow-hidden px-24">
        <Marquee speed={50} pauseOnHover={true}>
          {campaigns.map((camp, index) => (
            <motion.div
              key={index}
              className="mx-4 bg-blue-900 text-white rounded-lg shadow-lg overflow-hidden w-80"
            >
              <img
                src={camp.img}
                alt={camp.title}
                className="w-full h-40 object-cover overflow-hidden"
              />
              <div className="p-4">
                <h3 className="text-orange-400 font-semibold">
                  {camp.title}...
                </h3>
                <p className="text-sm">{camp.desc}</p>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
