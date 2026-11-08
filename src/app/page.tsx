import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Robin</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a solutions architect focused on{" "}
        <Highlight>production voice AI</Highlight> and cloud systems that help people communicate and get work done
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I bring{" "}
        <Highlight>more than a decade of experience</Highlight> in communications, cloud infrastructure, and customer-facing technical delivery. Based in Rochester, NY, and open to remote roles.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
