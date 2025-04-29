import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

const CTAButton = ({ locale }: { locale: any }) => {
  const handleScroll = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={handleScroll}
      variant="default"
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
      aria-label="Scroll to Pricing"
    >
      <RocketIcon />
      {locale.title}
    </Button>
  );
};

export default CTAButton;
