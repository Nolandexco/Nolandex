"use client";

import { TwitterX } from "@/components/social-icons/icons";
import { siteConfig } from "@/config/site";
import { TestimonialsData } from "@/config/testimonials";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  const [current, setCurrent] = useState(0);
  const total = TestimonialsData.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%]"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">
          {locale.description1}{" "}
          <Link
            href={siteConfig.authors[0].twitter as string}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary underline"
          >
            {locale.description2}
          </Link>
          {locale.description3}
        </p>
      </div>

      <div className="w-full max-w-xl relative">
        <div className="border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-fit bg-background transition-all duration-300">
          <div className="flex items-start justify-between w-full">
            <div className="flex items-start gap-2">
              <Image
                src={TestimonialsData[current].user.image}
                alt="maker"
                height={40}
                width={40}
                className="w-12 h-12 rounded-full object-cover object-top"
              />
              <div className="flex flex-col items-start">
                <p className="font-bold">{TestimonialsData[current].user.name}</p>
                <p className="dark:text-zinc-400">
                  @{TestimonialsData[current].user.username}
                </p>
              </div>
            </div>
            <Link
              href={`https://twitter.com/${TestimonialsData[current].user.username}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <TwitterX className="w-8 h-8" />
            </Link>
          </div>
          <p className="dark:text-zinc-200 text-[14px]">
            {TestimonialsData[current].content}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/80 transition flex items-center justify-center shadow"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/80 transition flex items-center justify-center shadow"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
