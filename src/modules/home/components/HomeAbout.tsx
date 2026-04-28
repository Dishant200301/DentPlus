import { PrimaryButton } from "@/modules/core/components/PrimaryButton";
import { motion } from "framer-motion";

const profileImages = [
  { src: "/images/common/profile/Profile Image-001.webp", size: 100, style: { left: "442px", top: "0px" } }, // Top Center
  { src: "/images/common/profile/Profile Image-002.webp", size: 100, style: { left: "442px", top: "700px" } }, // Bottom Center
  { src: "/images/common/profile/Profile Image-003.webp", size: 72, style: { left: "913px", top: "224px" } }, // Right Mid
  { src: "/images/common/profile/Profile Image-004.webp", size: 72, style: { left: "-1px", top: "224px" } }, // Left Mid
  { src: "/images/common/profile/Profile Image-005.webp", size: 72, style: { left: "870px", top: "606px" } }, // Right Bottom
  { src: "/images/common/profile/Profile Image-001.webp", size: 72, style: { left: "37px", top: "606px" } }, // Left Bottom
];

export function HomeAbout() {
  return (
    <section className="px-0 py-10 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto min-h-[400px] md:min-h-[1000px] bg-white rounded-[32px] relative flex items-center justify-center">
        
        {/* Background Circle SVG */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/images/common/profile/bg_circle.svg" 
            alt="" 
            className="w-full max-w-[984px] h-[600px] md:h-[800px] object-cover opacity-100"
          />
        </div>

        {/* Circular Arrangement Wrapper - Scaled on mobile/tablet */}
        <div className="relative w-full md:w-[1000px] h-[600px] md:h-[800px] z-10 scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-center transition-transform duration-500">
          
          {/* Photos */}
          {profileImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="absolute flex items-center justify-center"
              style={{ 
                width: img.size, 
                height: img.size,
                ...img.style
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden shadow-sm">
                <img 
                  src={img.src} 
                  alt="" 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
            </motion.div>
          ))}

          {/* Central Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {/* Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[152.77px] h-[48px] flex items-center justify-center bg-white border border-[#E7E7E7] rounded-full text-[16px] text-[#1B123D] mb-4 shadow-sm"
              style={{ fontFamily: "Instrument Sans", letterSpacing: "-0.16px" }}
            >
              About DentPlus
            </motion.div>

            {/* Heading */}
            <div className="h-auto md:h-[216px] flex flex-col items-center justify-center">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[#000000] text-[60px] sm:text-[56px] leading-[1.2] md:leading-[72px] font-medium tracking-[-1px] md:tracking-[-1.68px] flex flex-col items-center"
                    style={{ fontFamily: "Poppins" }}
                >
                    <span className="md:h-[72px] flex items-center">Trusted</span>
                    <span className="md:h-[72px] flex items-center">care, naturally</span>
                    <span className="md:h-[72px] flex items-center">delivered</span>
                </motion.h2>
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 md:mt-10"
            >
              <PrimaryButton to="/about" variant="blue">More About Us</PrimaryButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
