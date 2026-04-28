import { BlogHero } from "../components/BlogHero";
import { BlogGrid } from "../components/BlogGrid";
import { HomeCta } from "@/modules/home/components/HomeCta";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <HomeCta />
    </>
  );
}
