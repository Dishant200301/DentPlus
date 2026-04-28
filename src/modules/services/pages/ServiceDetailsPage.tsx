import { useParams, Navigate } from "react-router-dom";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";
import { useFadeIn } from "@/hooks/use-fade-in";
import { serviceDetails } from "@/data/serviceDetails";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = serviceDetails.find((s) => s.slug === slug);
  const fade = useFadeIn();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <article className=" container py-10">
      {/* Header Section */}
      <div ref={fade.ref} className={`grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 mb-16 ${fade.className}`}>
        <div className="lg:col-span-2">
          <h1 
            className="text-[40px] lg:text-[72px] font-medium text-[#1B123D] leading-[1.1] lg:leading-[88px] mb-8"
            style={{ fontFamily: "Poppins" }}
          >
            {service.title}
          </h1>
          <p 
            className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans max-w-[650px]"
          >
            {service.description}
          </p>
        </div>

        {/* Contact Sidebar */}
        <div className="bg-white border border-[#E7E7E7] rounded-3xl p-4 shadow-[0px_10px_40px_rgba(27,18,61,0.05)] h-fit">
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F5F6F9] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#1344FE]" />
              </div>
              <span className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans hover:text-[#1B123D] transition-colors cursor-default">
                {service.contactInfo.address}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F5F6F9] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#1344FE]" />
              </div>
              <a href={`tel:${service.contactInfo.phone}`} className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans hover:text-[#1B123D] transition-colors">
                {service.contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F5F6F9] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#1344FE]" />
              </div>
              <a href={`mailto:${service.contactInfo.email}`} className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans hover:text-[#1B123D] transition-colors">
                {service.contactInfo.email}
              </a>
            </div>
          </div>
                    <PrimaryButton to="/appointment" variant="blue" hideArrow>
            Book an Appointment
          </PrimaryButton>
        </div>
      </div>

      {/* Main Feature Image */}
      <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-[1140/560] mb-10 ">
        <img 
          src={service.mainImage} 
          alt={service.title} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Key Trends Section */}
      <div className="max-w-[1140px] mb-6">
        <h2 
          className="text-[24px] md:text-[36px] leading-[30px] md:leading-[44px] font-medium text-black mb-2 font-poppins"
        >
          {service.keyTrends.title}
        </h2>
        <p className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans mb-10 max-w-[1000px]">
          {service.keyTrends.description}
        </p>

        {/* Feature List Grid */}
        <div className="bg-[#F5F6F9] rounded-[24px] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-2 mb-10">
          {service.keyTrends.points.map((point, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1B123D] mt-[10px] shrink-0" />
              <span className="text-[18px] leading-[28px] font-medium text-[#1B123D] font-instrument-sans">
                {point}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans">
          {service.keyTrends.footerText}
        </p>
      </div>

      {/* Future Innovations Section */}
      <div className="mb-8">
        <h2 
          className="text-[24px] md:text-[36px] leading-[30px] md:leading-[44px] font-medium text-black mb-2 font-poppins"
        >
          {service.futureInnovations.title}
        </h2>
        <p className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans max-w-[1000px] mb-12">
          {service.futureInnovations.description}
        </p>

        {/* Sub Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {service.subImages.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-[360/420] shadow-sm">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Advances Section */}
      <div>
        <h2 
          className="text-[24px] md:text-[36px] leading-[30px] md:leading-[44px] font-medium text-black mb-2 font-poppins"
        >
          {service.advances.title}
        </h2>
        <p className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans mb-8 max-w-[1000px]">
          {service.advances.description}
        </p>
        <p className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans max-w-[1000px]">
          {service.advances.secondaryDescription}
        </p>
      </div>
    </article>
  );
}

