"use client";

import { siteConfig } from "@/config/site";
import { TestimonialsData } from "@/config/testimonials";
import { RoughNotation } from "react-rough-notation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialsProps {
  id: string;
  locale: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
  };
}

const Testimonials = ({ id, locale }: TestimonialsProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    centerPadding: "16px",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerPadding: "8px",
        },
      },
    ],
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-gray-900 dark:text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {locale.description1} {locale.description2} {locale.description3}
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <Slider {...settings}>
          {TestimonialsData.map((testimonial, index) => (
            <div key={index} className="px-2">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col items-start gap-4 border border-gray-200 dark:border-gray-700 shadow-md">
                <p className="font-bold text-lg text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
