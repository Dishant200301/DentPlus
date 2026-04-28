import { HomeCta } from "@/modules/home/components/HomeCta";
import { DoctorsHero } from "../components/DoctorsHero";

export default function TeamPage() {
  return (
    <>
      <div className="overflow-hidden">
        <DoctorsHero />
      </div>
      <HomeCta />
    </>
  );
}
