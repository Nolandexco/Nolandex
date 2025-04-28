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
    doYouLike: string;
    follow: string;
  };
  langName: string;
}

type ButtonVariant =
  | "solid"
  | "bordered"
  | "flat"
  | "faded"
  | "light"
  | "shadow"
  | "ghost";

interface Tier {
  key: string;
  title: string;
  description?: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
  buttonVariant: ButtonVariant; // <- Sekarang variant TYPENYA FIX
  href: string;
}

const Pricing: React.FC<PricingProps> = ({ id, locale, langName }) => {
  const TIERS: Tier[] =
    (ALL_TIERS[`TIERS_${langName.toUpperCase()}`] as Tier[]) || [];

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
          TIERS.map((tier) => (
            <Card
              key={tier.key}
              className="p-6 flex-1 w-[90%] transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                background: "#1E3A8A",
                borderRadius: "16px",
              }}
            >
              <CardHeader className="flex flex-col items-start gap-3 pb-6">
                <h2 className="text-2xl font-bold text-white">{tier.title}</h2>
                {tier.description && (
                  <p className="text-base text-gray-300">{tier.description}</p>
                )}
              </CardHeader>

              <Divider className="bg-gray-600" />

              <CardBody className="gap-8">
                <p className="flex items-baseline gap-1 pt-2">
                  <span className="text-3xl font-bold leading-7 tracking-tight text-white">
                    {tier.price}
                  </span>
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
                  variant={tier.buttonVariant ?? "solid"} // <= fallback ke "solid" kalau undefined
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="transition-all duration-300 hover:shadow-lg"
                  style={{
                    boxShadow:
                      "0 4px 15px rgba(59, 130, 246, 0.3), 0 2px 6px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No pricing tiers available for this language.
          </p>
        )}
      </div>

      <Spacer y={12} />
    </section>
  );
};

export default Pricing;
