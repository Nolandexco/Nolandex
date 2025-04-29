import { ALL_FEATURES } from "@/config/feature";
import React from "react";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";

const Feature = ({
  id,
  locale,
}: {
  id: string;
  locale: { title: string };
}) => {
  const FEATURES = ALL_FEATURES.FEATURES_EN;

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 pt-16"
      aria-labelledby="features-title"
    >
      <h2
        id="features-title"
        className="text-center text-white text-3xl font-bold mb-10"
      >
        <RoughNotation type="highlight" show={true} color="#2563EB">
          {locale.title}
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES?.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="flex flex-col items-center text-center px-8 py-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            role="article"
            aria-labelledby={`feature-title-${index}`}
          >
            <div className="p-4 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              {feature.icon && typeof feature.icon === "string" ? (
                <span className="text-2xl">{feature.icon}</span>
              ) : (
                React.createElement(feature.icon, {
                  className: "text-2xl text-blue-600 dark:text-blue-300",
                  "aria-hidden": "true",
                })
              )}
            </div>
            <h3
              id={`feature-title-${index}`}
              className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
