import { motion } from "framer-motion";

export function AboutCommitment() {
  return (
    <section className="relative py-10 px-0 overflow-hidden">
      <div className="container mx-auto max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-[#E7E7E7] bg-white text-[#1B123D] text-[16px] font-instrument-sans mb-6">
            Commitment To Care
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] leading-[1.2] font-medium text-[#1B123D] tracking-[-1px] md:tracking-[-1.68px] font-poppins max-w-4xl mx-auto text-center">
            Caring Healing<br className="hidden sm:block" />Serving Leading Inspiring
          </h2>
        </div>

        {/* Mission & Vision Content */}
        <div className="relative grid grid-cols-1 xl:grid-cols-2 gap-0 xl:border-y border-[#E7E7E7]">
          {/* Vertical Divider */}
          <div className="hidden xl:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E7E7E7] -translate-x-1/2 z-0" />

          {/* Our Mission (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="xl:pr-12 py-0 xl:pb-16"
          >
            <div className="flex items-center gap-4 md:gap-6 my-6">
              <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#1344FE] rounded-[10px] md:rounded-[12px] flex items-center justify-center flex-shrink-0">
                <img src="/images/about/mission.svg" alt="" className="w-8 h-8 md:w-11 md:h-11" />
              </div>
              <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-[#1B123D] font-poppins tracking-[-0.72px]">
                Our Mission
              </h3>
            </div>
            
            <p className="text-[16px] leading-[1.5] text-[#636977] font-instrument-sans mb-12 tracking-[-0.16px]">
              At our clinic, we are dedicated to providing personalized care that empowers our patients. Our mission focuses on delivering compassionate support and expert guidance, ensuring that everyone receives the attention and resources they need for a successful health journey.
            </p>

            <div className="rounded-[20px] overflow-hidden">
              <img 
                src="/images/about/mission.webp" 
                alt="Our Mission" 
                className="w-full aspect-[490/383] object-cover"
              />
            </div>
          </motion.div>

          {/* Our Vision (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="xl:pl-12 py-6"
          >
            <div className="rounded-[20px] overflow-hidden mb-12">
              <img 
                src="/images/about/vision.webp" 
                alt="Our Vision" 
                className="w-full aspect-[490/384] object-cover"
              />
            </div>

            <div className="flex items-center gap-4 md:gap-6 mb-6">
              <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#1344FE] rounded-[10px] md:rounded-[12px] flex items-center justify-center flex-shrink-0">
                <img src="/images/about/vision.svg" alt="" className="w-8 h-8 md:w-11 md:h-11" />
              </div>
              <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-[#1B123D] font-poppins tracking-[-0.72px]">
                Our Vision
              </h3>
            </div>

            <p className="text-[16px] leading-[1.5] text-[#636977] font-instrument-sans tracking-[-0.16px]">
              Our clinic aims for a future of personalized healthcare that empowers everyone. We offer compassionate support & innovative solutions, ensuring each patient feels valued. Together, we can foster a healthier tomorrow, emphasizing holistic recovery and well-being.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
