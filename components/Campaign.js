import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const skillCampaigns = [
  {
    title: "Skill India Digital",
    desc: "Skill India Digital aims to provide digital learning opportunities and certifications for youth.",
    img: "https://play-lh.googleusercontent.com/utGyxOUhke8poPmVlbx2UiEtLCsTqb0jhyvLd8ZVnU5Bjwq8auvkmQtjY0qoPmDJ3Bg",
  },
  {
    title: "PMKVY 4.0",
    desc: "The new phase of PMKVY focuses on industry-aligned skill training programs across India.",
    img: "https://nielit.gov.in/aurangabad/sites/default/files/Aurangabad/Pmkvy%20photo2_0.jpg",
  },
  {
    title: "National Apprenticeship Promotion Scheme",
    desc: "NAPS supports apprenticeships in various sectors, enhancing employability of youth.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdBzPiKAvo_caXBYIKeEdztVe1DBY_FdjdA&s",
  },
  {
    title: "SANKALP & STRIVE",
    desc: "These schemes are aimed at strengthening institutions and improving skilling infrastructure.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkm0ROl40BwtFLtC8yAR2bQ3T4i-NXy8uPw&s",
  },
];

export default function SkillCampaignSection() {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-white p-4 py-16"
      style={{
        backgroundImage:
          "url('https://www.msde.gov.in/assets/images/skill-india-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Heading */}
      <div className="relative flex items-left gap-2 mb-6 px-10">
        <div className="w-1 h-8 bg-orange-500"></div>
        <h2 className="text-green-400 text-3xl font-bold text-left">
          Skill India Campaigns
        </h2>
      </div>

      {/* Marquee Animation */}
      <div className="relative w-full overflow-hidden px-4 md:px-24">
        <Marquee speed={50} pauseOnHover={true}>
          {skillCampaigns.map((camp, index) => (
            <motion.div
              key={index}
              className="mx-4 bg-blue-900 h-72 text-white rounded-lg shadow-lg overflow-hidden w-80"
            >
              <img
                src={camp.img}
                alt={camp.title}
                className="w-full h-40 object-contain overflow-hidden"
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
