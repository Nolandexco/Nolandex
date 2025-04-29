// components/home/HomeIndex.tsx
import dynamic from "next/dynamic";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import Feature from "@/components/home/Feature";
import FAQ from "@/components/home/FAQ";

// Client components
const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });
const Pricing = dynamic(() => import("@/components/home/Pricing"), { ssr: false });
const CTA = dynamic(() => import("@/components/home/CTA"), { ssr: false });
const ScrollingLogos = dynamic(() => import("@/components/home/ScrollingLogos"), { ssr: false });
const SocialProof = dynamic(() => import("@/components/home/SocialProof"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), { ssr: false });

interface HomeIndexProps {
  params: { lang: string };
}

export default async function HomeIndex({ params }: HomeIndexProps) {
  const langName = params?.lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      <Hero locale={dict.Hero} langName={langName} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      <ScrollingLogos />
      <Feature id="Features" locale={dict.Feature} langName={langName} />
      <Pricing locale={dict.Pricing} langName={langName} />
      <Testimonials id="Testimonials" locale={dict.Testimonials} />
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
