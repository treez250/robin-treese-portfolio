import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-14",
    },
    {
      title: "Azure",
      src: "/images/logos/azure.svg",

      className: "h-10 w-10",
    },
    {
      title: "Docker",
      src: "/images/logos/docker.svg",

      className: "h-10 w-8",
    },
    {
      title: "Python",
      src: "/images/logos/python.svg",

      className: "h-10 w-10",
    },
    {
      title: "Auth0",
      src: "/images/logos/auth0.svg",

      className: "h-10 w-10",
    },
    {
      title: "Stripe",
      src: "/images/logos/stripe.svg",

      className: "h-10 w-10",
    },
    {
      title: "GitHub",
      src: "/images/logos/github.svg",

      className: "h-10 w-10",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
