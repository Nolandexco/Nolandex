import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from "@/config/site";
import { TestimonialsData } from "@/config/testimonials";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

interface TestimonialProps {
  id: string;
  locale: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
  };
}

const Testimonials: React.FC<TestimonialProps> = ({ id, locale }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      // Force re-render on resize
      setCurrentIndex(prev => prev);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const visibleCount = getVisibleCount();
    const totalSlides = Math.ceil(TestimonialsData.length / visibleCount);
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleCount = getVisibleCount();
  const totalSlides = Math.ceil(TestimonialsData.length / visibleCount);

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%] overflow-hidden"
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
            href={siteConfig.authors[0].twitter}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary underline"
          >
            {locale.description2}
          </Link>
          {locale.description3}
        </p>
      </div>
      
      <div ref={containerRef} className="w-full relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            width: `${(TestimonialsData.length / visibleCount) * 100}%`
          }}
        >
          {TestimonialsData.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="border border-slate-200/10 rounded-lg p-4 flex flex-col items-start gap-3 h-full">
                <div className="flex items-start gap-2 w-full">
                  <Image
                    src={testimonial.user.image}
                    alt={testimonial.user.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-bold">{testimonial.user.name}</p>
                    <p className="text-zinc-400 dark:text-zinc-400">
                      @{testimonial.user.username}
                    </p>
                  </div>
                </div>
                <p className="text-zinc-700 dark:text-zinc-200 text-sm">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
