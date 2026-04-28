import { useParams, Navigate } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { doctors } from "@/lib/data";
import { HomeCta } from "@/modules/home/components/HomeCta";

export default function TeamDetailsPage() {
  const { slug } = useParams();
  const doctor = doctors.find((d) => d.slug === slug);
  const fade = useFadeIn();

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      <article className=" pt-24 pb-10">
        {/* Doctor Name Section */}
        <div ref={fade.ref} className={`text-center mb-10 md:mb-20 px-4 md:px-0 ${fade.className}`}>
          <h1
            className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-medium text-[#1B123D] leading-[1.2] md:leading-[1.2] lg:leading-[88px] tracking-[-1px] md:tracking-[-1.6px]"
            style={{ fontFamily: "Poppins" }}
          >
            {doctor.name}
          </h1>
        </div>

        {/* Info Grid */}
        <div className="max-w-[1060px] mx-auto border-b border-[#E7E7E7] pb-10 md:pb-12 mb-10 px-4 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#636977] font-instrument-sans tracking-[0.5px]">Career Position</span>
              <span className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-medium text-[#1B123D] font-poppins">{doctor.role}</span>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#636977] font-instrument-sans tracking-[0.5px]">Experience</span>
              <span className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-medium text-[#1B123D] font-poppins">{doctor.experience}</span>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#636977] font-instrument-sans tracking-[0.5px]">Achieved</span>
              <span className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-medium text-[#1B123D] font-poppins">{doctor.consults.toLocaleString()} Consults Done</span>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#636977] font-instrument-sans tracking-[0.5px]">Social Media</span>
              <div className="flex gap-3 items-center mt-1">
                {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#1B123D] hover:border-[#1344FE] hover:text-[#1344FE] transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-[#1B123D] transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="max-w-[720px] mx-auto mb-20 px-4  pt-8 md:px-0">
          <div className="rounded-3xl bg-[#F5F6F9] overflow-hidden aspect-[720/800] flex justify-center items-end">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-contain pt-24 transform transition-transform duration-700"
            />
          </div>
        </div>

        {/* Bio Section */}
        <div className="max-w-[1060px] mx-auto px-4 md:px-0">
          <h2
            className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-[#000000] leading-[1.2] md:leading-[44px] tracking-[-0.88px] mb-6 md:mb-10"
            style={{ fontFamily: "Poppins" }}
          >
            More About {doctor.name}
          </h2>
          <div className="flex flex-col gap-8 max-w-[1000px]">
            {Array.isArray(doctor.bio) ? (
              doctor.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[18px] text-[#636977] leading-[28px] font-instrument-sans"
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-[18px] text-[#636977] leading-[28px] font-instrument-sans">
                {doctor.bio}
              </p>
            )}
          </div>
        </div>
      </article>

      <HomeCta />
    </div>
  );
}
