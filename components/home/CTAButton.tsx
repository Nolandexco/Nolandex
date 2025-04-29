import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="#pricing" // Anchor link to the Pricing section
      scroll={true} // Enables smooth scrolling in Next.js
    >
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
