import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="/pricing" // Updated to pricing page URL
      rel="noopener noreferrer"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="View Pricing" // Updated for accessibility
      >
        <RocketIcon />
        {locale.pricingTitle || "View Pricing"} // Fallback text if locale.pricingTitle is not provided
      </Button>
    </Link>
  );
};

export default CTAButton;
