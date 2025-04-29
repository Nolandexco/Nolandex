"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LOGOS = [
  { name: "Next.js", image: "/images/techStack/logo1.png" },
  { name: "React", image: "/images/techStack/logo2.png" },
  { name: "Tailwind", image: "/images/techStack/logo3.png" },
  { name: "Framer", image: "/images/techStack/logo4.png" },
  { name: "Shadcnui", image: "/images/techStack/logo5.png" },
  { name: "Nextui", image: "/images/techStack/logo6.png" },
  { name: "TS", image: "/images/techStack/logo7.png" },
  { name: "Vercel", image: "/images/techStack/logo8.png" },
];

const ScrollingLogos = () => {
  return (
    <section className="mx-auto w-full md:max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 pt-16">
      <Marquee direction="left" autoFill pauseOnHover>
        {LOGOS.map((image, index) => (
          <div className="mx-1 text-gray-500" key={index}>
            <Image
              src={image.image}
              alt={image.name}
              width={90}
              height={90}
              style={{ objectFit: "contain" }}
              className="transition-all duration-300 cursor-pointer text-gray-500"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingLogos;
