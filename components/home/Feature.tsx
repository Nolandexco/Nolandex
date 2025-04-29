import { ALL_FEATURES } from "@/config/feature";
import React from "react";
import { RoughNotation } from "react-rough-notation";

const Feature = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: { title: string };
  langName: string;
}) => {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`];
  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 pt-16"
    >
      <h2 className="text-center text-white text-3xl font-bold mb-10">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          {locale.title}
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES?.map((feature, index) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center px-8 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <div className="p-4 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              {feature.icon && typeof feature.icon === "string" ? (
                <span className="text-2xl">{feature.icon}</span>
              ) : (
                React.createElement(feature.icon, {
                  className: "text-2xl text-blue-600 dark:text-blue-300",
                })
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
