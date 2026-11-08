import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Robin Treese",
  description:
    "Robin Treese is a solutions architect and AI systems builder based in Rochester, New York, with experience in voice AI, cloud infrastructure, and enterprise delivery.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Email me at rtreese250@gmail.com about remote solutions architecture, technical implementation, and customer-facing AI opportunities.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
