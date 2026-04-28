import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";

import { doctors } from "@/lib/data";

// Select the first 4 doctors for the featured section
const featuredDoctors = doctors.slice(0, 4);

// Doubling the list for a seamless infinite loop
const marqueeItems = [...featuredDoctors, ...featuredDoctors, ...featuredDoctors];

function DoctorCard({ doctor }: { doctor: typeof featuredDoctors[0] }) {
  return (
    <Link
      to={`/doctors/${doctor.slug}`}
      className="group block w-[280px] sm:w-[320px] md:w-[380px] h-[400px] sm:h-[450px] md:h-[516px] bg-white rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] p-[12px] md:p-[14px] relative transition-all duration-500"
    >
      {/* 1. Image Wrap */}
      <div className="relative rounded-[16px] bg-[#F5F6F9] h-[240px] sm:h-[280px] md:h-[344px] overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
        {/* Subtle bottom gradient */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 90%, #FFFFFF 100%)" }}
        />
      </div>

      {/* 2. Content Info Wrap */}
      <div className="mt-4 md:mt-0 md:mb-[14px] h-[120px] md:h-[144px] rounded-[16px] bg-[#F5F6F9] p-4 md:p-[20px] transition-colors duration-500 group-hover:bg-[#1344FE] flex flex-col justify-between">
        <div>
          <h5
            className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-medium text-[#1B123D] tracking-[-0.48px] transition-colors duration-500 group-hover:text-white"
            style={{ fontFamily: "Poppins" }}
          >
            {doctor.name}
          </h5>
          <p
            className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#636977] tracking-[-0.16px] transition-colors duration-500 group-hover:text-white/80"
            style={{ fontFamily: "Instrument Sans" }}
          >
            {doctor.role}
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center bg-[#FF623A] transition-colors duration-500 group-hover:bg-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white transition-colors duration-500 group-hover:text-[#1344FE]">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span
            className="text-[12px] md:text-[14px] leading-[20px] text-[#636977] tracking-[-0.14px] transition-colors duration-500 group-hover:text-white"
            style={{ fontFamily: "Instrument Sans" }}
          >
            {doctor.consults} Consults Done
          </span>
        </div>
      </div>
    </Link>
  );
}

export function HomeDoctors() {
  return (
    <section className="bg-white overflow-hidden">
      <div
        className="relative rounded-[20px] sm:rounded-[28px] md:rounded-[32px] pt-8 md:pt-12 pb-12 lg:mx-4 sm:mx-0 px-0 sm:px-0 md:px-0"
        style={{
          background: "linear-gradient(180deg, #1344FE 0%, rgba(19, 68, 254, 0) 80%)",
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-4 md:px-6 flex flex-col items-center mb-6"
        >
          <span
            className="inline-flex items-center px-6 py-2 border border-white/20 rounded-full text-[14px] text-white leading-[24px] tracking-[-0.16px] mb-6 backdrop-blur-sm"
            style={{ fontFamily: "Instrument Sans" }}
          >
            Expert Doctor's
          </span>

          <h2
            className="text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2] lg:leading-[72px] font-medium text-white tracking-[-1px] md:tracking-[-1.68px]"
            style={{ fontFamily: "Poppins" }}
          >
            Online Doctor<br className="hidden sm:block" />Support, Always Available
          </h2>
        </motion.div>

        {/* Mobile & Tablet Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 md:gap-6 px-0 md:px-6 py-6 md:py-10">
          {featuredDoctors.map((doctor, i) => (
            <div key={i} className="flex justify-center">
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>

        {/* Desktop Infinite Marquee Wrapper with Gradients */}
        <div className="hidden lg:flex relative overflow-hidden py-10">
       
          <motion.div 
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 whitespace-nowrap pl-10"
          >
            {marqueeItems.map((doctor, i) => (
              <div key={i} className="inline-block">
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <PrimaryButton to="/doctors" variant="blue">View All Doctor's</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
