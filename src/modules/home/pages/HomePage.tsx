import { HomeHero } from "../components/HomeHero";
import { HomeServices } from "../components/HomeServices";
import { HomeAbout } from "../components/HomeAbout";
import { HomeWhyChoose } from "../components/HomeWhyChoose";
import { HomeDoctors } from "../components/HomeDoctors";
import { HomeTestimonial } from "../components/HomeTestimonial";
import { HomeConsult } from "../components/HomeConsult";
import { HomeBlog } from "../components/HomeBlog";
import { HomeFaq } from "../components/HomeFaq";
import { HomeCta } from "../components/HomeCta";

const HomePage = () => {
  return (
    <>
    <div className="overflow-x-clip">
      <HomeHero />
      <HomeServices />
      <HomeAbout />
      <HomeWhyChoose />
      <HomeDoctors />
      <HomeTestimonial />
      <HomeConsult />
      <HomeBlog />
      <HomeFaq />
      <HomeCta />
      </div>
    </>
  );
};

export default HomePage;
