"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "motion/react";

export default function About() {
  const images = [
    "/images/projects/babelstream-home.png",
    "/images/projects/babelstream-connect.png",
    "/images/projects/babelstream-intelligence.png",
    "/images/projects/cloud-migration.png",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          I’m Robin Treese, a solutions architect and AI systems builder based in Rochester, New York. I help customers turn complex technical requirements into systems they can actually use.
        </Paragraph>
        <Paragraph className=" mt-4">
          My background spans more than a decade in communications, networking, cloud infrastructure, and mission-critical systems. I’ve worked with enterprise, government, and defense customers through discovery, validation, and deployment.
        </Paragraph>

        <Paragraph className=" mt-4">
          As Principal Engineer at BabelStream, I lead work on a production multilingual voice AI platform, connecting carrier telephony, streaming speech, language models, and the commercial SaaS layer.
        </Paragraph>
        <Paragraph className=" mt-4">
          At REDCOM, I designed communications and cloud architectures, built proofs of concept and demonstration environments, and delivered workshops, executive briefings, and technical training.
        </Paragraph>
        <Paragraph className=" mt-4">
          I use AI-assisted development in my work. My strengths are architecture, systems integration, infrastructure, troubleshooting, and code review. I can read and reason through code and work with engineers to get a system delivered.
        </Paragraph>
        <Paragraph className=" mt-4">
          My selected work includes a zero-downtime cloud migration, repeatable AI call evaluation, customer onboarding, and commercial billing and entitlement systems.
        </Paragraph>
        <Paragraph className=" mt-4">
          I’m interested in remote solutions architecture, solutions engineering, technical implementation, and customer-facing AI roles. Email is the best way to reach me.
        </Paragraph>
      </div>
    </div>
  );
}
