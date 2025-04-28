"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spacer,
} from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const [showPricing, setShowPricing] = useState(false);

  const TIERS = [
    {
      key: "basic",
      title: "BASIC",
      description: "Lorem ipsum dolor sit amet, omet consectetur adipiscing elit.",
      price: "$9.00 USD",
      features: [
        "Trading up to $100K per month",
        "Send and receive over 85 tokens",
        "Real time crypto trading",
        "iOS and Android App",
      ],
      buttonText: "BUY NOW",
      buttonColor: "primary",
      buttonVariant: "solid",
      href: "#",
    },
    {
      key: "pro",
      title: "PRO",
      description: "Lorem ipsum dolor sit amet, omet consectetur adipiscing elit.",
      price: "$18.00 USD",
      features: [
        "Everything included in Basic",
        "Trading up to $1M per month",
        "Windows & macOS App",
        "Premium Support",
      ],
      buttonText: "BUY NOW",
      buttonColor: "primary",
      buttonVariant: "solid",
      href: "#",
    },
    {
      key: "expert",
      title: "EXPERT",
      description: "Lorem ipsum dolor sit amet, omet consectetur adipiscing elit.",
      price: "$99.00 USD",
      features: [
        "Everything included in Pro",
        "Trading up to $10M per month",
        "Windows & macOS App",
        "Dedicated Support",
      ],
      buttonText: "BUY NOW",
      buttonColor: "primary",
      buttonVariant: "solid",
      href: "#",
    },
  ];

  const COMBINED_TIER = {
    key: "combined",
    title: "PREMIUM + EXPERT BUNDLE",
    description: "Get the best of both Pro and Expert plans in one package!",
    price: "$108.00 USD",
    features: [
      "Everything in Pro & Expert",
      "Unlimited Trading Volume",
      "Exclusive VIP Support",
      "Early Access to New Features",
    ],
    buttonText: "BUY NOW",
    buttonColor: "primary",
    buttonVariant: "solid",
    href: "#",
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 bg-gradient-to-b from-[#1E1E2F] to-[#2A2A40] text-white min-h-screen"
    >
      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-4xl font-bold tracking-tight">
          <RoughNotation type="highlight" show={true} color="#3B82F6">
            PRICING
          </RoughNotation>
        </h2>
        <Spacer y={4} />
        <p className="text-lg text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          nulla suspendisse tortor aenean dis placerat. Sollicitudin eu
        </p>
      </div>
      <Spacer y={8} />

      {/* Toggle Button for Price List */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setShowPricing(!showPricing)}
          className="bg-gradient-to-r from-[#3B82F6] to-[#7B3FE4] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {showPricing ? "Hide Pricing Plans" : "Discover Our Plans"}
        </Button>
      </motion.div>

      <Spacer y={8} />

      {/* Animated Price List */}
      <AnimatePresence>
        {showPricing && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4"
          >
            {TIERS.map((tier) => (
              <motion.div
                key={tier.key}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="p-4 flex-1 bg-gradient-to-br from-[#2A2A40] to-[#3B3F5A] border border-[#3B82F6]/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  shadow="none"
                >
                  <CardHeader className="flex flex-col items-start gap-2 pb-4">
                    <h2 className="text-xl font-semibold text-white">{tier.title}</h2>
                    <p className="text-sm text-gray-400">{tier.description}</p>
                  </CardHeader>
                  <Divider className="bg-gray-600" />
                  <CardBody className="gap-6">
                    <p className="flex items-baseline gap-1 pt-2">
                      <span className="text-3xl font-bold text-white">
                        {tier.price}
                      </span>
                    </p>
                    <ul className="flex flex-col gap-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <FaCheck className="text-[#3B82F6]" />
                          <p className="text-gray-300">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      fullWidth
                      color="primary"
                      href={tier.href}
                      variant="solid"
                      className="bg-gradient-to-r from-[#3B82F6] to-[#7B3FE4] text-white rounded-full py-3 font-semibold hover:bg-[#2563EB] transition-colors"
                    >
                      {tier.buttonText}
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Spacer y={12} />

      {/* Combined Price List (Pro + Expert) */}
      <AnimatePresence>
        {showPricing && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-5xl px-4"
          >
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="p-4 bg-gradient-to-br from-[#3B3F5A] to-[#4B4F70] border border-[#3B82F6]/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                shadow="none"
              >
                <CardHeader className="flex flex-col items-start gap-2 pb-4">
                  <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#7B3FE4] bg
