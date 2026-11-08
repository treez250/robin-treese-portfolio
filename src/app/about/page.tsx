import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Robin Treese",
  description:
    "Robin Treese is a solutions architect and AI systems builder based in Rochester, New York, with experience in voice AI, cloud infrastructure, and enterprise delivery.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
