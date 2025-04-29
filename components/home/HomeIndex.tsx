import dynamic from "next/dynamic";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import SocialProof from "@/components/home/SocialProof";
import Testimonials from "@/components/home/Testimonials";
import { defaultLocale, getDictionary } from "@/lib/i18n";

// Dynamic import for Pricing to handle lazy loading
const Pricing = dynamic(() => import("@/components/home/Pricing"), {
  loading: () => <div>Loading Pricing...</div>,
});

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      <Hero locale={dict.Hero} langName={langName} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      <ScrollingLogos />

      {/* Feature section */}
      <Feature id="Features" locale={dict.Feature} langName={langName} />

      {/* Pricing section */}
      <Pricing locale={dict.Pricing} langName={langName} />

      {/* Testimonials */}
      <Testimonials id="Testimonials" locale={dict.Testimonials} />

      {/* FAQ */}
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />

      {/* CTA */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
