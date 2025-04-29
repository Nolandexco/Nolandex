import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  const handleScroll = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href="#pricing" scroll={true} onClick={handleScroll}>
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="View Pricing"
      >
        <RocketIcon />
        {locale.pricingTitle || "View Pricing"}
      </Button>
    </Link>
  );
};

export default CTAButton;
