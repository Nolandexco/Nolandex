"use client";

import {
  Button,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { ALL_TIERS } from "@/config/tiers";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const TIERS = ALL_TIERS[`TIERS_${langName.toUpperCase()}`];

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-4xl items-center pt-16"
    >
      {/* Header Section */}
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

      {/* New Pricing Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-items-center">
        {TIERS?.map((tier, index) => (
          <div
            key={tier.key}
            style={{
              backgroundColor: "#4B5563", // Abu-abu elegan
              borderRadius: "12px", // Sudut melengkung
              padding: "16px",
              flex: 1,
              width: "90%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow mirip NextUI
            }}
          >
            {/* Card Header */}
            <div className="flex flex-col items-start gap-2 pb-4">
              <h2 className="text-lg font-medium text-white">{tier.title}</h2>
              <p className="text-base text-gray-300">{tier.description}</p>
            </div>
            <Divider className="bg-gray-400" />

            {/* Card Body */}
            <div className="flex flex-col gap-6 py-4">
              <p className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-white">
                  {tier.price}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-sm font-medium text-gray-300">
                    {tier.price}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FaCheck className="text-blue-500" />
                    <p className="text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer */}
            <div>
              <Button
                fullWidth
                as={Link}
                color={index === 1 ? TIERS[0].buttonColor : tier.buttonColor} // Tombol kartu kedua sama dengan pertama
                href={tier.href}
                variant={index === 1 ? TIERS[0].buttonVariant : tier.buttonVariant}
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{
                  borderRadius: "8px", // Tombol melengkung
                }}
              >
                {tier.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Spacer y={12} />

      {/* Footer Section */}
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
