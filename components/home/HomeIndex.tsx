import dynamic from "next/dynamic";
import Feature from "@/components/home/Feature";
import FAQ from "@/components/home/FAQ";
import { defaultLocale, getDictionary } from "@/lib/i18n";

// Dynamic imports for Client Components
const Hero = dynamic(() => import("@/components/home/Hero"), {
  loading: () => <div>Loading Hero...</div>,
});
const Pricing = dynamic(() => import("@/components/home/Pricing"), {
  loading: () => <div>Loading Pricing...</div>,
});
const CTA = dynamic(() => import("@/components/home/CTA"), {
  loading: () => <div>Loading CTA...</div>,
});
const ScrollingLogos = dynamic(() => import("@/components/home/ScrollingLogos"), {
  loading: () => <div>Loading Scrolling Logos...</div>,
});
const SocialProof = dynamic(() => import("@/components/home/SocialProof"), {
  loading: () => <div>Loading Social Proof...</div>,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  loading: () => <div>Loading Testimonials...</div>,
});

export default async function HomeIndex({ params }: { params: { lang: string } }) {
  const langName = params.lang || defaultLocale;
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
