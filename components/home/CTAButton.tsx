import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

const CTAButton = ({ locale }: { locale: { title: string } }) => {
  const handleScroll = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Pricing section not found in the DOM.");
      // Optional: Fallback to navigate to pricing section via URL hash
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
