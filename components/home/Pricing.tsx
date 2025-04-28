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
    <section id={id} className="min-h-screen bg-[#0F172A] flex flex-col items-center py-20 px-6 text-white">
      <div className="text-center mb-10">
        <h2 className="text-white text-lg font-semibold uppercase tracking-wide">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold mt-2">{locale.title2}</h1>
        <p className="text-default-400 text-base mt-4">{locale.description}</p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8">
        {PRICING.map((item, index) => (
          <Button
            key={index}
            size="sm"
            onClick={() => setActiveIndex(index)}
            className={`font-semibold px-4 py-2 rounded-full transition-all ${
              activeIndex === index ? "bg-[#3B82F6] text-white" : "bg-[#1E293B] text-default-400"
            }`}
          >
            {item.title}
          </Button>
        ))}
      </div>

      {/* Pricing Card */}
      <div className="w-full max-w-md bg-[#1E293B] border border-[#3B82F6] rounded-2xl shadow-lg p-8 text-center transition-all duration-500">
        <h3 className="text-2xl font-bold mb-2">{activePricing.title}</h3>
        <p className="text-sm text-default-400 mb-6">{activePricing.description}</p>
        <div className="text-4xl font-bold text-[#3B82F6] mb-8">{activePricing.price}</div>

        <ul className="space-y-4 text-left">
          {activePricing.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <FaCheck className="text-[#3B82F6]" />
              <span className="text-default-400">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
