"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { ALL_TIERS } from "@/config/tiers";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

interface PricingProps {
  id: string;
  locale: {
    title: string;
    title2: string;
    description: string;
    doYouLike: string;
    follow: string;
  };
  langName: string;
}

interface Tier {
  key: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
  buttonVariant: string;
  href: string;
}

const Pricing: React.FC<PricingProps> = ({ id, locale, langName }) => {
  const TIERS: Tier[] =
    ALL_TIERS[`TIERS_${langName.toUpperCase()}`] || ([] as Tier[]);

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
        <h3 className="text-4xl font-medium tracking-tight mt-2 text-white">
          {locale.title2}
        </h3>
        <Spacer y={4} />
        <p className="text-large text-gray-400">{locale.description}</p>
      </div>

      <Spacer y={8} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-items-center">
        {TIERS.length > 0 ? (
          TIERS.map((tier, index) => (
            <Card
              key={tier.key}
              className={`p-6 flex-1 w-[90%] transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
              style={{
                background: "#111827",
                borderRadius: "16px",
                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardHeader className="flex flex-col items-start gap-2 pb-4">
                <h2 className="text-2xl font-bold text-white">{tier.title}</h2>
                <p className="text-medium text-gray-400">{tier.description}</p>
              </CardHeader>
              <Divider className="bg-gray-600" />
              <CardBody className="gap-6 pt-4">
                <p className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold leading-7 tracking-tight text-white">
                    {tier.price}
                  </span>
                </p>
                <ul className="flex flex-col gap-2">
                  {tier.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <FaCheck className="text-blue-400" />
                      <p className="text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  fullWidth
                  as={Link}
                  href={tier.href}
                  color="primary"
                  variant={tier.buttonVariant}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="transition-all duration-300 hover:shadow-lg"
                  style={{
                    boxShadow:
                      "0 4px 15px rgba(0, 112, 240, 0.3), 0 2px 6px rgba(0, 112, 240, 0.2)",
                  }}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No pricing tiers available for this language.
          </p>
        )}
      </div>

      <Spacer y={12} />

      {/* Removed the "Do you like..." and "Follow my Twitter" section */}
    </section>
  );
};

export default Pricing;
