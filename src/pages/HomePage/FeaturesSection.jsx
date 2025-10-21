import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { motion } from "motion/react";
import { FiEdit, FiClock } from "react-icons/fi";
import { BsUpload } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

// Icon mapping
const iconMap = {
  FiEdit: FiEdit,
  FiClock: FiClock,
  BsUpload: BsUpload,
  FaRegComments: FaRegComments,
  MdOutlineLeaderboard: MdOutlineLeaderboard,
  RiTeamLine: RiTeamLine,
};

// Color mapping (hex from JSON)
const colorMap = {
  "#4F46E5": "#4F46E5",
  "#22C55E": "#22C55E",
  "#EAB308": "#EAB308",
  "#A855F7": "#A855F7",
  "#EC4899": "#EC4899",
  "#3B82F6": "#3B82F6",
};

// Light background mapping for feature cards
const bgColorMap = {
  "#4F46E5": "#EEF2FF",
  "#22C55E": "#ECFDF5",
  "#EAB308": "#FEF9C3",
  "#A855F7": "#F5F3FF",
  "#EC4899": "#FCE7F3",
  "#3B82F6": "#EFF6FF",
};

const FeaturesSection = () => {
  const [featuresData, setFeaturesData] = useState(null);

  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeaturesData(data.section))
      .catch((err) => console.error(err));
  }, []);

  if (!featuresData) return <Loading />;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-base-100 dark:bg-[#000000] py-20 px-5 md:px-10 max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-center pb-5">
        {featuresData.title}
      </h1>
      <p className="text-lg font-semibold text-center pb-10">
        {featuresData.subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuresData.features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          const baseColor = colorMap[feature.color] || "#3B82F6";
          const bgColor = bgColorMap[feature.color] || "#F3F4F6";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true}}
              transition={{ delay: index * 0.2 }}
              className={`relative text-center rounded-2xl shadow-md p-8 group border border-transparent`}
              style={{ backgroundColor: bgColor }}
            >
              {/* Glow border on hover */}
              {/* <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 20px 2px ${baseColor}66` }}
              ></div> */}

              {/* Icon circle */}
              <div className="flex justify-center mb-5 relative z-10">
                <div className="relative p-5 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  {/* <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500"
                    style={{ backgroundColor: `${baseColor}40` }}
                  ></div> */}
                  {Icon && (
                    <Icon
                      className="text-4xl relative z-10"
                      style={{ color: baseColor }}
                    />
                  )}
                </div>
              </div>

              {/* Title & description */}
              <h3
                className="text-xl font-bold mb-3 relative z-10"
                style={{ color: "#1E2939" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed relative z-10"
                style={{ color: "#4A5565" }}
              >
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
