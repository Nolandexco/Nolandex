"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const TIERS = [
    {
      key: "basic",
      title: "Basic",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Et nibh.",
      price: "$9.00 USDT",
      features: [
        "Trading up to $100k per month",
        "Send and receive over 85 tokens",
        "Real time crypto trading",
        "iOS and Android app",
      ],
      buttonText: "Buy Now",
      buttonColor: "primary",
      href: "#",
    },
    {
      key: "pro",
      title: "Pro",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Et nibh.",
      price: "$18.00 USDT",
      features: [
        "Everything included in Basic",
        "Trading up to $1MM per month",
        "Windows & macOS app",
        "Premium support",
      ],
      buttonText: "Buy Now",
      buttonColor: "primary",
      href: "#",
    },
    {
      key: "expert",
      title: "Expert",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Et nibh.",
      price: "$99.00 USDT",
      features: [
        "Everything included in Pro",
        "Trading up to $10MM per month",
        "Windows & macOS app",
        "Dedicated support",
      ],
      buttonText: "Buy Now",
      buttonColor: "primary",
      href: "#",
    },
  ];

  const [currentTierIndex, setCurrentTierIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentTierIndex((prev) => (prev < TIERS.length - 1 ? prev + 1 : 0));
  };

  const handleSwipeRight = () => {
    setCurrentTierIndex((prev) => (prev > 0 ? prev - 1 : TIERS.length - 1));
  };

  const currentTier = TIERS[currentTierIndex];

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-4xl items-center pt-16"
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
      <div className="relative w-full flex justify-center">
        <button
          onClick={handleSwipeRight}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 z-10"
        >
          &larr;
        </button>
        <Card className="p-3 w-[90%] max-w-sm" shadow="md">
          <CardHeader className="flex flex-col items-start gap-2 pb-6">
            <h2 className="text-large font-medium">{currentTier.title}</h2>
            <p className="text-medium text-default-500">
              {currentTier.description}
            </p>
          </CardHeader>
          <Divider />
          <CardBody className="gap-8">
            <p className="flex items-baseline gap-1 pt-2">
              <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-2xl font-semibold leading-7 tracking-tight text-transparent">
                {currentTier.price}
              </span>
            </p>
            <ul className="flex flex-col gap-2">
              {currentTier.features?.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <FaCheck className="text-blue-500" />
                  <p className="text-default-500">{feature}</p>
                </li>
              ))}
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              fullWidth
              as={Link}
              style={{ backgroundColor: "#3B82F6" }}
              href={currentTier.href}
              variant="solid"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {currentTier.buttonText}
            </Button>
          </CardFooter>
        </Card>
        <button
          onClick={handleSwipeLeft}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 z-10"
        >
          &rarr;
        </button>
      </div>
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400 text-center">
          {locale.doYouLike} 
          <Link
            color="foreground"
            href={siteConfig.authors[0].twitter}
            underline="always"
            rel="noopener noreferrer nofollow"
          >
            {locale.follow}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
