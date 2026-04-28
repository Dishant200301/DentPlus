import { BadgePill } from "@/modules/core/components/BadgePill";
import { HomeWhyChoose } from "@/modules/home/components/HomeWhyChoose";
import { HomeFaq } from "@/modules/home/components/HomeFaq";
import { HomeCta } from "@/modules/home/components/HomeCta";
import { AboutHero } from "../components/AboutHero";
import { AboutProcess } from "../components/AboutProcess";
import { AboutCommitment } from "../components/AboutCommitment";
import { HomeDoctors } from "@/modules/home/components/HomeDoctors";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutProcess />
      <AboutCommitment />
      <HomeWhyChoose />
      <HomeDoctors />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
