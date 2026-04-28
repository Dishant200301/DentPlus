import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";

const ReTriggerCounter = ({ value, suffix }: { value: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smoother feel
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * numericValue;
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setCount(0); // Reset when out of view
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {value.includes('.') ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export function ServicesExpertise() {
  const stats = [
    { label: "Years of Experience", value: "10", suffix: "M+" },
    { label: "Completed Projects", value: "10", suffix: "+" },
    { label: "Reliability guaranteed", value: "10.7", suffix: "%" },
    { label: "Happy Homeowners", value: "10", suffix: "+" },
  ];

  return (
    <section className="py-0 px-0 bg-white">
      <div className="container mx-auto max-w-[1140px]">

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center px-4 md:px-6 lg:px-0">
          {/* Left Side: Dual Images (Desktop only) */}
          <div className="hidden lg:block relative order-1 lg:order-1">
            {/* Background Image (Top Left) */}
            <div className="rounded-[20px] overflow-hidden w-[85%] aspect-[410/550]">
              <img 
                src="/images/about/expertise/expertise-1.webp" 
                alt="Medical Professional" 
                className="w-full h-[532px] object-cover rounded-lg"
              />
            </div>
            {/* Overlay Image (Bottom Right) */}
            <div className="absolute -bottom-2 -right-4 w-[65%] aspect-[350/380] rounded-[20px] overflow-hidden shadow-sm border-4 border-white">
              <img 
                src="/images/about/expertise/expertise-2.webp" 
                alt="Patient Care" 
                className="w-full h-full object-cover"
              />
           
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col items-start order-2 lg:order-2">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-[#E7E7E7] bg-white text-[#1B123D] text-[16px] font-instrument-sans mb-6">
              Expertise
            </div>
            
            <h2 
            className="mb-4 text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px] xl:text-[72px] leading-[1.2] md:leading-[1.2] lg:leading-[72px] xl:leading-[88px] font-medium text-[#1b123d] tracking-[-1px] md:tracking-[-1.68px] font-poppins ">
              Trusted care for<br className="hidden md:block" />your health.
            </h2>

            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#636977] font-instrument-sans mb-8 max-w-[500px]">
              Count on us for trusted care that prioritizes your health. We provide personalized treatment plans, wellness consultations, and continuous support to make your health journey smooth and effective.
            </p>

            <h4 className="text-[18px] font-medium text-[#1B123D] font-poppins mb-6">
              To get Appointment, you should have
            </h4>

            <div className="w-full h-[1px] bg-[#E7E7E7] mb-8" />

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {[
                { label: "Many patients trust our services and expertise.", icon: "patients" },
                { label: "Recognized officially for our professional expertise.", icon: "recognized" },
                { label: "Proven success in delivering outstanding results.", icon: "success" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-[#FF623A] flex items-center justify-center flex-shrink-0">
                    {item.icon === "patients" ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M18 3.13C18.8604 3.35031 19.623 3.85071 20.1676 4.55232C20.7122 5.25392 21.0078 6.11683 21.0078 7.005C21.0078 7.89317 20.7122 8.75608 20.1676 9.45768C19.623 10.1593 18.8604 10.6597 18 10.88" stroke="#FF623A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : item.icon === "recognized" ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#FF623A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#FF623A" strokeWidth="2"/>
                        <path d="M8 12L11 15L16 9" stroke="#FF623A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-[16px] text-[#636977] font-instrument-sans">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <PrimaryButton to="/appointment" variant="blue" >Book Appointment</PrimaryButton>
          </div>

          {/* Mobile & Tablet: Single Image */}
          <div className="lg:hidden w-full col-span-1 order-2 mb-10 md:mb-16">
            <img 
              src="/images/about/expertise/expertise-1.webp" 
              alt="Medical Professional" 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-[20px]"
            />
          </div>
        </div>

         {/* Stats Row */}
        <div className="lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 md:px-6 lg:px-0 border-t border-[#E7E7E7] pt-8 md:pt-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-[28px] sm:text-[36px] md:text-[46px] font-semibold text-[#1B123D] font-poppins leading-tight">
                <ReTriggerCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[14px] md:text-[16px] text-[#636977] font-instrument-sans mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
