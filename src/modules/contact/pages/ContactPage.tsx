import { ContactHero } from "../components/ContactHero";
import { ContactBranches } from "../components/ContactBranches";
import { HomeFaq } from "@/modules/home/components/HomeFaq";
import { HomeCta } from "@/modules/home/components/HomeCta";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <ContactHero />
      <ContactBranches />
      
      <HomeFaq />
      <div className="pb-10">
        <HomeCta />
      </div>
    </div>
  );
}
