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

// Define types for props and tiers
interface PricingProps {
  id: string;
  locale: {
    title: string;
    title2: string;
    description: string;
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
        <h3 className="text-4xl font-medium tracking-tight mt-2">
          {locale.title2}
        </h3>
        <Spacer y={4} />
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Spacer y={8} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-items-center">
        {TIERS.length > 0 ? (
          TIERS.map((tier, index) => (
            <Card
              key={tier.key}
              className={`p-4 flex-1 w-[90%] transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
                index === 1 ? "price-on-hover" : ""
              }`}
              style={{
                boxShadow:
                  "0 8px 30px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                background: "#111827",
              }}
            >
              <CardHeader className="flex flex-col items-start gap-2 pb-6">
                <h2 className="text-large font-medium text-white">
                  {tier.title}
                </h2>
                <p className="text-medium text-gray-200">{tier.description}</p>
              </CardHeader>
              <Divider className="bg-gray-400" />
              <CardBody className="gap-8">
                <p
                  className={`flex items-baseline gap-1 pt-2 ${
                    index === 1
                      ? "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      : ""
                  }`}
                >
                  <span className="text-2xl font-semibold leading-7 tracking-tight text-white">
                    {tier.price}
                  </span>
                  {typeof tier.price !== "string" ? (
                    <span className="text-small font-medium text-gray-200">
                      {tier.price}
                    </span>
                  ) : null}
                </p>
                <ul className="flex flex-col gap-2">
                  {tier.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <FaCheck className="text-blue-400" />
                      <p className="text-gray-200">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  fullWidth
                  as={Link}
                  color="primary"
                  href={tier.href}
                  variant={tier.buttonVariant}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="transition-all duration-300 hover:shadow-lg"
                  style={{
                    boxShadow:
                      "0 4px 15px rgba(0, 112, 240, 0.3), 0 2px 6px rgba(0, 112, 240, 0.2)",
                  }}
                >
                  {index === 1 ? "Contact Us" : tier.buttonText}
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
    </section>
  );
};

export default Pricing;
