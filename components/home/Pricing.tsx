// components/home/Pricing.tsx
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
  langName: string;
}

const Pricing = ({ locale, langName }: PricingProps) => {
  const TIERS = ALL_TIERS[`TIERS_${langName.toUpperCase()}`];

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
        {TIERS?.map((tier: any, index: number) => (
          <div
            key={tier.key}
            className="flex flex-col bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md shadow-md"
          >
            <div className="flex flex-col items-start gap-2 pb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {tier.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tier.description}</p>
            </div>
            <Divider className="bg-gray-300 dark:bg-gray-600" />

            <div className="flex flex-col gap-6 p-4">
              <p className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {tier.price}
                </span>
                {typeof tier.price !== "string" && (
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {tier.price}
                  </span>
                )}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FaCheck className="text-blue-500" />
                    <p className="text-gray-600 dark:text-gray-400">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button
                fullWidth
                as={Link}
                color={index === 1 ? TIERS[0].buttonColor : tier.buttonColor}
                href={tier.href}
                variant={index === 1 ? TIERS[0].buttonVariant : tier.buttonVariant}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="rounded-lg text-white"
                style={{
                  backgroundColor: index === 1 ? TIERS[0].buttonColor : tier.buttonColor,
                }}
              >
                {tier.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Spacer y={12} />

      <div className="flex py-2">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          {locale.doYouLike} 
          <Link
            color="foreground"
            href={siteConfig.authors[0].twitter}
            underline="always"
            rel="noopener noreferrer nofollow"
            className="text-blue-600 dark:text-blue-400"
          >
            {locale.follow}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
