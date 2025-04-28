"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";
import { Button } from "@nextui-org/react";

const PRICING = [
  {
    title: "Basic",
    price: "$9.00 USD",
    description: "Perfect for getting started with crypto trading.",
    features: [
      "Trading up to $100k per month",
      "Send and receive over 85 tokens",
      "Real-time crypto trading",
      "iOS and Android App",
    ],
  },
  {
    title: "Pro",
    price: "$18.00 USD",
    description: "Advanced features for growing traders.",
    features: [
      "Everything in Basic",
      "Trading up to $1M per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
  {
    title: "Expert",
    price: "$99.00 USD",
    description: "For high-volume traders with premium needs.",
    features: [
      "Everything in Pro",
      "Trading up to $10M per month",
      "Windows & macOS App",
      "Dedicated Support",
    ],
  },
];

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePricing = PRICING[activeIndex];

  return (
    <section id={id} className="min-h-screen bg-[#1E3A8A] flex flex-col items-center py-20 px-6 text-white">
      <div className="text-center mb-16">
        <h2 className="text-[#60A5FA] text-2xl font-semibold uppercase tracking-wider mb-4">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight">
          {locale.title2}
        </h1>
        <p className="text-default-400 text-xl mt-6">{locale.description}</p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-6 mb-12">
        {PRICING.map((item, index) => (
          <Button
            key={index}
            size="md"
            onClick={() => setActiveIndex(index)}
            className={`font-semibold px-6 py-3 rounded-full text-lg transition-all ${
              activeIndex === index
                ? "bg-[#3B82F6] text-white"
                : "bg-[#334155] text-default-400 hover:bg-[#475569]"
            }`}
          >
            {item.title}
          </Button>
        ))}
      </div>

      {/* Pricing Card */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-3xl shadow-2xl p-12 text-center transition-all duration-500 transform hover:scale-105">
        <h3 className="text-4xl sm:text-5xl font-extrabold mb-3">{activePricing.title}</h3>
        <p className="text-lg text-white/80 mb-8">{activePricing.description}</p>
        <div className="text-5xl font-extrabold text-white mb-10">{activePricing.price}</div>

        <div className="flex flex-col gap-5 items-start px-8">
          {activePricing.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-white/20 p-2 rounded-full">
                <FaCheck className="text-white" />
              </div>
              <span className="text-white text-lg">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className="mt-12 bg-white text-[#3B82F6] font-bold py-4 px-8 rounded-full text-lg hover:bg-[#dbeafe]"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Pricing;
