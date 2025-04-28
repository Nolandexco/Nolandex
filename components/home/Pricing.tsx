"use client";

import { Button, Divider, Link, Spacer } from "@nextui-org/react";
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
      style={{ backgroundColor: "transparent" }}
    >
      {/* Inline CSS to Prevent Overrides */}
      <style jsx>{`
        .pricing-card {
          background-color: #18181a !important;
          border-radius: 12px;
          padding: 16px;
          flex: 1;
          width: 90%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          color: white;
        }
        .pricing-card * {
          background-color: transparent !important;
        }
      `}</style>

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
        <p className="text-large text-gray-400">{locale.description}</p>
      </div>
      <Spacer y={8} />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-items-center">
        {TIERS?.map((tier, index) => (
          <div
            key={tier.key}
            className="pricing-card"
            style={{
              backgroundColor: "#18181a !important", // Abu-abu sangat gelap
              borderRadius: "12px",
              padding: "16px",
              flex: 1,
              width: "90%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              color: "white",
            }}
          >
            {/* Card Header */}
            <div className="flex flex-col items-start gap-2 pb-4">
              <h2 style={{ fontSize: "18px", fontWeight: 500 }}>{tier.title}</h2>
              <p style={{ fontSize: "14px", color: "#D1D5DB" }}>
                {tier.description}
              </p>
            </div>
            <Divider style={{ backgroundColor: "#6B7280" }} />

            {/* Card Body */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px 0" }}>
              <p style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "24px", fontWeight: 600 }}>
                  {tier.price}
                </span>
                {typeof tier.price !== "string" ? (
                  <span style={{ fontSize: "14px", color: "#D1D5DB" }}>
                    {tier.price}
                  </span>
                ) : null}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {tier.features?.map((feature) => (
                  <li
                    key={feature}
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <FaCheck style={{ color: "#3B82F6" }} />
                    <p style={{ color: "#D1D5DB" }}>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer */}
            <div>
              <Button
                fullWidth
                as={Link}
                color={index === 1 ? TIERS[0].buttonColor : tier.buttonColor}
                href={tier.href}
                variant={index === 1 ? TIERS[0].buttonVariant : tier.buttonVariant}
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{
                  borderRadius: "8px", // Tombol melengkung
                  backgroundColor: index === 1 ? undefined : tier.buttonColor,
                  color: "white",
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
        <p className="text-gray-400 text-center">
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
