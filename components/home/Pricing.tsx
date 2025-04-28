"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

const PRICING_LIST = [
  {
    title: "Basic",
    price: "$9.00 USD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Trading up to $100k per month",
      "Send and receive over 85 tokens",
      "Real time crypto trading",
      "iOS and Android App",
    ],
  },
  {
    title: "Pro",
    price: "$18.00 USD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
  {
    title: "Expert",
    price: "$99.00 USD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Everything included in Pro",
      "Trading up to $10MM per month",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + PRICING_LIST.length) % PRICING_LIST.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PRICING_LIST.length);
  };

  const currentTier = PRICING_LIST[currentIndex];

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16"
    >
      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <h3 className="text-4xl font-medium tracking-tight mt-2">
          {locale.title2}
        </h3>
        <Spacer y={4} />
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Spacer y={8} />

      <Card className="w-[90%] max-w-md bg-gradient-to-b from-[#1E1B4B] to-[#111827] border border-[#3B82F6] text-white">
        <CardHeader className="flex flex-col items-center gap-2 pb-6">
          <h2 className="text-2xl font-semibold">{currentTier.title}</h2>
          <p className="text-medium text-default-400 text-center">{currentTier.description}</p>
        </CardHeader>
        <CardBody className="flex flex-col items-center gap-6">
          <p className="text-4xl font-bold text-[#3B82F6]">{currentTier.price}</p>
          <ul className="flex flex-col gap-3">
            {currentTier.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <FaCheck className="text-[#3B82F6]" />
                <span className="text-default-400">{feature}</span>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="flex justify-between gap-4">
          <Button
            onClick={handlePrev}
            className="bg-[#3B82F6] text-white font-semibold"
            fullWidth
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="bg-[#3B82F6] text-white font-semibold"
            fullWidth
          >
            Next
          </Button>
        </CardFooter>
      </Card>

      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400 text-center">
          {locale.doYouLike}&nbsp;
          <a
            className="text-[#3B82F6] underline"
            href="#"
            rel="noopener noreferrer nofollow"
          >
            {locale.follow}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
