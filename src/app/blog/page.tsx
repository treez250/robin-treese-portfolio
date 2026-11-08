import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Robin Treese",
  description:
    "Robin Treese is a solutions architect and AI systems builder based in Rochester, New York, with experience in voice AI, cloud infrastructure, and enterprise delivery.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">Notes on my work</Heading>
      <Paragraph className="pb-10">
        A closer look at <Highlight>selected projects</Highlight>, my contributions, and the outcomes.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
