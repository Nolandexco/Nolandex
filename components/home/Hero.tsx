"use client";

import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";

interface HeroProps {
  locale: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
  };
  CTALocale: {
    title: string;
  };
}

const Hero = ({ locale, CTALocale }: HeroProps) => {
  return (
    <>
      <section
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center"
      >
        <h1>
          {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {locale.description}
        </p>
      </section>
      <CTAButton locale={CTALocale} />
    </>
  );
};

export default Hero;
