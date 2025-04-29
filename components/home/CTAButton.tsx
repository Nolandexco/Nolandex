import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

interface CTAButtonProps {
  locale: {
    title: string;
  };
}

const CTAButton = ({ locale }: CTAButtonProps) => {
  const handleScroll = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Pricing section not found in the DOM.");
      // Fallback to URL hash navigation
      window.location.hash = "pricing";
    }
  };

  return (
    <Button
      onClick={handleScroll}
      variant="default"
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      aria-label={locale.title || "Scroll to Pricing Section"}
    >
      <RocketIcon aria-hidden="true" />
      <span>{locale.title}</span>
    </Button>
  );
};

export default CTAButton;
