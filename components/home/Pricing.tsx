"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";
import { siteConfig } from "@/config/site";
import { ALL_TIERS } from "@/config/tiers";
import { useState } from "react";

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const TIERS = ALL_TIERS[`TIERS_${langName.toUpperCase()}`];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === TIERS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TIERS.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-4xl items-center pt-16"
    >
      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <h3 className="text-4xl font-medium tracking-tight mt-2">
          {locale.title2}
        </h3>
        <Spacer y={4} />
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Spacer y={8} />
      
      <div className="relative w-full max-w-md">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TIERS?.map((tier) => (
              <div key={tier.key} className="w-full flex-shrink-0 px-4">
                <Card className="p-3 w-full" shadow="md">
                  <CardHeader className="flex flex-col items-start gap-2 pb-6">
                    <h2 className="text-large font-medium">{tier.title}</h2>
                    <p className="text-medium text-default-500">{tier.description}</p>
                  </CardHeader>
                  <Divider />
                  <CardBody className="gap-8">
                    <p className="flex items-baseline gap-1 pt-2">
                      <span 
                        className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-2xl font-semibold leading-7 tracking-tight text-transparent"
                        style={{ color: '#3B82F6' }}
                      >
                        {tier.price}
                      </span>
                      {typeof tier.price !== "string" ? (
                        <span className="text-small font-medium text-default-400">
                          {tier.price}
                        </span>
                      ) : null}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {tier.features?.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <FaCheck className="text-blue-500" />
                          <p className="text-default-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button
                      fullWidth
                      as={Link}
                      color="primary"
                      href={tier.href}
                      variant="solid"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      BUY NOW
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md"
          aria-label="Previous pricing option"
        >
          &lt;
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md"
          aria-label="Next pricing option"
        >
          &gt;
        </button>
        
        <div className="flex justify-center mt-4 gap-2">
          {TIERS?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
              aria-label={`Go to pricing option ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400 text-center">
          {locale.doYouLike}&nbsp;
          <Link
            color="foreground"
            href={siteConfig.authors[0].twitter}
            underline="always"
            rel="noopener noreferrer nofollow"
          >
            {locale.follow}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
