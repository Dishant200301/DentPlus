import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { doctors } from "@/lib/data";

function DoctorCard({ doctor }: { doctor: typeof doctors[0] }) {
  return (
    <Link
      to={`/doctors/${doctor.slug}`}
      className="group block w-full bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] p-[14px] relative transition-all duration-500 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]"
    >
      {/* Image Wrap */}
      <div className="relative rounded-[16px] bg-[#F5F6F9] h-[344px] overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-500 "
        />
        {/* Subtle bottom gradient */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 90%, #FFFFFF 100%)" }}
        />
      </div>

      {/* Content Info Wrap */}
      <div className="mt-[14px] h-[120px] rounded-[16px] bg-[#F5F6F9] p-[20px] transition-colors duration-500 group-hover:bg-[#1344FE] flex flex-col justify-between">
        {/* Name & Role */}
        <div>
          <h5
            className="text-[20px] leading-[28px] font-medium text-[#1B123D] tracking-[-0.4px] transition-colors duration-500 group-hover:text-white font-poppins"
          >
            {doctor.name}
          </h5>
          <p
            className="text-[14px] leading-[20px] text-[#636977] tracking-[-0.14px] transition-colors duration-500 group-hover:text-white/80 font-instrument-sans"
          >
            {doctor.role}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#FF623A] transition-colors duration-500 group-hover:bg-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white transition-colors duration-500 group-hover:text-[#1344FE]">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span
            className="text-[14px] leading-[20px] text-[#636977] tracking-[-0.14px] transition-colors duration-500 group-hover:text-white font-instrument-sans"
          >
            {doctor.consults.toLocaleString()} Consults Done
          </span>
        </div>
      </div>
    </Link>
  );
}

export function DoctorsHero() {
  return (
    <section className="relative lg:mx-4 mt-4 overflow-hidden rounded-2xl lg:rounded-b-[32px]">
      {/* Background Image & Gradient */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/common/profile/bg.svg')" }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,68,254,0) 40%, #1344FE 75%, #1344FE 100%)" }}
      />

      <div className="relative z-10 md:container py-20 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-6 flex flex-col items-center mb-12"
        >
          {/* Label */}
          <span
            className="inline-flex items-center px-6 py-2 rounded-full border border-[#e7e7e7] bg-white text-[#1b123d] text-[14px] font-instrument-sans mb-6"
          >
            Doctors
          </span>

          {/* Heading */}
          <h2
            className="text-[40px] md:text-[56px] leading-[1.2] font-medium text-[#1b123d] tracking-[-1.68px] font-poppins"
          >
            Expert Doctors You<br />Can Always Trust Most.
          </h2>
        </motion.div>

        {/* Doctor Cards Grid - 3x3 */}
        <div className="w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
