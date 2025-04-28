// src/config/tiers.ts

export const ALL_TIERS = {
  TIERS_EN: [
    {
      key: "starter",
      title: "Starter",
      description: "Basic plan for individuals to get started.",
      monthlyPrice: "$19/mo",
      yearlyPrice: "$190/yr",
      lifetimePrice: "$299 one-time",
      features: [
        "Access to basic features",
        "Basic support",
        "Limited customization",
      ],
      buttonText: "Get Starter",
      buttonColor: "primary",
      buttonVariant: "solid",
      href: "https://yourlink.com/starter",
    },
    {
      key: "pro",
      title: "Pro",
      description: "Best for growing teams and startups.",
      monthlyPrice: "$39/mo",
      yearlyPrice: "$390/yr",
      lifetimePrice: "$499 one-time",
      features: [
        "All Starter features",
        "Advanced analytics",
        "Priority support",
        "Team collaboration",
      ],
      buttonText: "Upgrade to Pro",
      buttonColor: "primary",
      buttonVariant: "bordered",
      href: "https://yourlink.com/pro",
    },
    {
      key: "business",
      title: "Business",
      description: "Perfect for large businesses and enterprises.",
      monthlyPrice: "$79/mo",
      yearlyPrice: "$790/yr",
      lifetimePrice: "$899 one-time",
      features: [
        "All Pro features",
        "Dedicated Account Manager",
        "Custom integrations",
        "24/7 premium support",
      ],
      buttonText: "Start Business",
      buttonColor: "primary",
      buttonVariant: "shadow",
      href: "https://yourlink.com/business",
    },
  ],
};
