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
        {TIERS?.map((tier, index) => (
          <Card
            key={tier.key}
            className={`p-4 flex-1 w-[90%] transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              index === 1 ? "price-on-hover" : ""
            }`} // Tambahkan class khusus untuk Card kedua
            style={{
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              background: "#111827",
            }}
          >
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium text-white">{tier.title}</h2>
              <p className="text-medium text-gray-200">{tier.description}</p>
            </CardHeader>
            <Divider className="bg-gray-400" />
            <CardBody className="gap-8">
              <p
                className={`flex items-baseline gap-1 pt-2 ${
                  index === 1 ? "price-hidden" : ""
                }`} // Sembunyikan harga pada Card kedua secara default
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
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer y={12} />
      <div className="flex flex-col items-center py-2">
        <Button
          as={Link}
          color="primary"
          href={siteConfig.authors[0].twitter}
          variant="solid"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="transition-all duration-300 hover:shadow-lg"
          style={{
            boxShadow:
              "0 4px 15px rgba(0, 112, 240, 0.3), 0 2px 6px rgba(0, 112, 240, 0.2)",
          }}
        >
          Contact Us
        </Button>
        <Spacer y={2} />
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

      {/* Tambahkan CSS untuk efek hover */}
      <style jsx>{`
        .price-on-hover .price-hidden {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .price-on-hover:hover .price-hidden {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
