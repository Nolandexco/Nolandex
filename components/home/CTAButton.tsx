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
    <Button onClick={handleScroll}>
      <RocketIcon className="mr-2 h-4 w-4" />
      {locale === "id" ? "Mulai Sekarang" : "Get Started"}
    </Button>
  );
};

export default CTAButton;
