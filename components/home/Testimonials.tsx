/* eslint-disable react/no-unescaped-entities */
import { TwitterX } from "@/components/social-icons/icons";
import { siteConfig } from "@/config/site";
import { TestimonialsData } from "@/config/testimonials";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
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

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {TestimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-full bg-background">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start gap-2">
                  <Image
                    src={testimonial.user.image}
                    alt="maker"
                    height={40}
                    width={40}
                    className="w-12 h-12 rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-bold">{testimonial.user.name}</p>
                    <p className="dark:text-zinc-400">
                      @{testimonial.user.username}
                    </p>
                  </div>
                </div>
                <Link
                  href={`https://twitter.com/${testimonial.user.username}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <TwitterX className="w-8 h-8" />
                </Link>
              </div>
              <p className="dark:text-zinc-200 text-[14px]">
                {testimonial.content}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
