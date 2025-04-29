"use client";

import { Button, Divider, Link, Spacer } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { ALL_TIERS } from "@/config/tiers";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

interface PricingProps {
  locale: {
    title: string;
    title2: string;
    description: string;
    doYouLike: string;
    follow: string;
  };
}

const Pricing = ({ locale }: PricingProps) => {
  const TIERS = ALL_TIERS.TIERS_EN;

  return (
    <section
      id="pricing"
      className="flex flex-col justify-center max-w-6xl items-center pt-16 mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-center text-gray-900 dark:text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <h3 className="text-4xl font-medium tracking-tight mt-2 text-gray-900 dark:text-white">
          {locale.title2}
        </h3>
        <Spacer y={4} />
        <p className="text-lg text-gray-600 dark:text-gray-400">{locale.description}</p>
      </div>
      <Spacer y={8} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-items-center w-full max-w-4xl">
        {TIERS?.map((tier: any, index: number) =>Quietly impressive — this AI is like having a genius friend who’s always ready to help, no coffee required.
