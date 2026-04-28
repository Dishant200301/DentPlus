import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const values = [
  {
    name: "Compassion",
    title: "Embracing Compassion: Honoring the distinct qualities and personal journeys of each resident in every interaction.",
    text: "We offer tailored services for you, including personalized treatment plans & wellness consultations to support your well-being.",
    image: "/images/about/our_values/value-1.webp",
  },
  {
    name: "Respect",
    title: "Embracing Respect: Honoring the distinct qualities and personal journeys of each resident in every interaction.",
    text: "We offer tailored services for you, including personalized treatment plans & wellness consultations to support your well-being.",
    image: "/images/about/our_values/value-2.webp",
  },
  {
    name: "Integrity",
    title: "Embracing Integrity: Honoring the distinct qualities and personal journeys of each resident in every interaction.",
    text: "We offer tailored services for you, including personalized treatment plans & wellness consultations to support your well-being.",
    image: "/images/about/our_values/value-3.webp",
  },
  {
    name: "Excellence",
    title: "Embracing Excellence: Honoring the distinct qualities and personal journeys of each resident in every interaction.",
    text: "We offer tailored services for you, including personalized treatment plans & wellness consultations to support your well-being.",
    image: "/images/about/our_values/value-4.webp",
  },
  {
    name: "Community",
    title: "Embracing Community: Honoring the distinct qualities and personal journeys of each resident in every interaction.",
    text: "We offer tailored services for you, including personalized treatment plans & wellness consultations to support your well-being.",
    image: "/images/about/our_values/value-5.webp",
  },
];

export function ServicesValues() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for down, -1 for up

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const el = document.getElementById(`value-card-${index}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section className="mt-4 relative lg:mx-4 mb-20 py-20 overflow-hidden rounded-2xl xl:rounded-[32px]">
      {/* Background Image & Gradient */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center rotate-180"
        style={{ backgroundImage: "url('/images/common/profile/bg.svg')" }}
      />
     
     <div className="mx-4 md:mx-6">
      <div className="relative z-10 container mx-auto bg-white rounded-3xl p-8 md:p-6 lg:p-10 shadow-lg max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#E7E7E7] bg-white text-[#1B123D] text-[14px] font-instrument-sans mb-4 lg:mb-6">
            Our values
          </div>
          <h2 className="text-[36px] md:text-[44px] lg:text-[56px] leading-[1.2] font-medium text-[#1B123D] tracking-[-1px] lg:tracking-[-1.68px] font-poppins">
            Values guide us
          </h2>
          <p className="mt-4 text-[16px] lg:text-[18px] text-[#636977] max-w-4xl mx-auto font-instrument-sans leading-[1.6]">
            Our core values shape our approach to providing customized services, such as individualized treatment plans, wellness consultations, and continuous support to ensure a smooth health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Tabs */}
          <div className="lg:col-span-3 space-y-4 pt-4">
             {/* Progress Bar (indicative) */}
             <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-40 bg-[#E7E7E7] relative">
                    <motion.div 
                        className="absolute left-0 top-0 h-full bg-[#1344FE]"
                        animate={{ width: `${((activeTab + 1) / values.length) * 100}%` }}
                        transition={{ duration: 0.2 }}
                    />
                </div>
                <span className="text-[14px] lg:text-[16px] text-[#636977] font-instrument-sans">
                    0{activeTab + 1} / 0{values.length}
                </span>
            </div>

            {values.map((v, i) => (
              <button
                key={v.name}
                onClick={() => handleTabClick(i)}
                className={cn(
                  "block w-full text-left text-[24px] lg:text-[32px] font-medium transition-all duration-300 font-poppins",
                  activeTab === i ? "text-[#1B123D]" : "text-[#636977] opacity-40 hover:opacity-100"
                )}
              >
                {v.name}
              </button>
            ))}
          </div>

          {/* Right Side: Desktop Content Animation */}
          <div className="hidden lg:block lg:col-span-9 relative min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeTab}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-2 gap-4 h-full"
              >
                <div className="bg-[#F5F6F9] rounded-[24px] p-8 flex flex-col relative overflow-hidden h-full">
                  <span className="text-[24px] text-[#636977] font-instrument-sans mb-6">/0{activeTab + 1}</span>
                  <h3 className="text-[20px] lg:text-[24px] font-medium text-[#1B123D] font-poppins leading-[1.4] mb-32">
                    {values[activeTab].title}
                  </h3>
                  <p className="mt-auto text-[14px] lg:text-[16px] text-[#636977] font-instrument-sans leading-[1.6]">
                    {values[activeTab].text}
                  </p>
                </div>

                <div className="rounded-[24px] overflow-hidden h-full min-h-[300px] relative">
                  <img
                    src={values[activeTab].image}
                    alt={values[activeTab].name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Mobile & Tablet Content List */}
          <div className="block lg:hidden col-span-1 space-y-4 mt-6">
            {values.map((v, i) => (
              <div id={`value-card-${i}`} key={v.name} className="bg-[#F5F6F9] rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col relative overflow-hidden">
                <span className="text-[16px] md:text-[20px] text-[#636977] font-instrument-sans mb-4 md:mb-6">/0{i + 1}</span>
                <h3 className="text-[18px] md:text-[22px] font-medium text-[#1B123D] font-poppins leading-[1.4] mb-4 md:mb-6">
                  {v.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#636977] font-instrument-sans leading-[1.6]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
