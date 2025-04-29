import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { useEffect } from "react";

const CTAButton = ({ locale }: { locale: any }) => {
  const handleScroll = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Pricing section not found. Ensure there is a section with id='pricing' on this page.");
    }
  };

  useEffect(() => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      console.log("Pricing section found on mount:", pricingSection);
    }
  }, []);

  return (
    <Button
      variant="default"
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
      aria-label="View Pricing"
      onClick={handleScroll}
    >
      <RocketIcon />
      {locale.pricingTitle || "View Pricing"}
    </Button>
  );
};

export default CTAButton;
