import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BadgePill } from "@/modules/core/components/BadgePill";

const processSteps = [
  {
    title: "Book an Appointment",
    desc: "Choose the appointment time that best fits your busy schedule with our easy-to-use online booking system. Available 24/7, you can quickly and securely book your visit anytime, from anywhere, without waiting on the phone or visiting in person. It’s care made simple for you.",
    img: "/images/about/process-image-1.webp",
    icon: "/images/about/process-icon-1.svg",
    stats: [
      { label: "online booking", value: 24, suffix: "h" },
      { label: "Quick booking", value: 90, suffix: "%" },
      { label: "Secure booking", value: 100, suffix: "%" }
    ]
  },
  {
    title: "Meet Your Doctor",
    desc: "Receive personalized care designed just for you by our team of licensed medical professionals. We focus on understand your unique health needs, providing expert treatment, and offering continuous support to ensure you feel confident and cared for every step of your journey.",
    img: "/images/about/process-image-2.webp",
    icon: "/images/about/process-icon-2.svg",
    stats: [
      { label: "Expert Doctors", value: 15, suffix: "+" },
      { label: "Satisfaction Rate", value: 85, suffix: "%" },
      { label: "Watch Patients", value: 50, suffix: "m" }
    ]
  },
  {
    title: "Begin Your Treatment",
    desc: "Start your personalized care plan with us, receiving full support and expert guidance. Our team stays with you every step, offering regular updates and assistance to ensure your health journey is smooth, effective, and focused on your recovery and well-being.",
    img: "/images/about/process-image-3.webp",
    icon: "/images/about/process-icon-3.svg",
    stats: [
      { label: "Adherence Active", value: 92, suffix: "%" },
      { label: "Stay Fit Daily", value: 88, suffix: "%" },
      { label: "Support System", value: 110, suffix: "%" }
    ]
  }
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={nodeRef} className="font-poppins text-[32px] md:text-[36px] font-medium text-[#1B123D]">
      {count}{suffix}
    </span>
  );
};

export function AboutProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="mt-4 relative px-0 lg:px-4 py-12 md:py-16 lg:py-20 bg-[#1344FE] rounded-2xl lg:rounded-[32px] lg:mx-4 mb-20 min-h-auto lg:min-h-[2000px]">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 text-white text-[14px] md:text-[16px] font-instrument-sans mb-4 md:mb-6">
            Our Process
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.2] font-medium text-white tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.68px] font-poppins max-w-4xl mx-auto px-2">
            Our Easy & Effective<br className="hidden sm:block" />Medical Care Process.
          </h2>
        </div>

        <div ref={containerRef} className="relative space-y-6 md:space-y-8 lg:space-y-0">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="lg:sticky lg:top-[120px] pb-0 lg:pb-10 flex justify-center w-full"
            >
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-[16px] md:rounded-[20px] p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 w-full max-w-[1080px] h-auto min-h-auto lg:min-h-[400px] md:min-h-[500px]"
              >
                {/* Image Section */}
                <div className="w-full lg:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px] flex-shrink-0">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover rounded-[12px] md:rounded-[16px]"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col py-4 md:py-6 lg:py-6">
                  <div className="w-[40px] md:w-[48px] lg:w-[57px] h-[40px] md:h-[48px] lg:h-[57px] bg-[#1344FE] rounded-[8px] md:rounded-[10px] lg:rounded-[12px] flex items-center justify-center mb-3 md:mb-4 lg:mb-6">
                    <img src={step.icon} alt="" className="w-5 md:w-6 lg:w-10 h-5 md:h-6 lg:h-10" />
                  </div>
                  
                  <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-medium text-[#1B123D] font-poppins mb-3 md:mb-4 tracking-[-0.48px] md:tracking-[-0.648px]">
                    {step.title}
                  </h3>
                  
                  <p className="text-[13px] md:text-[15px] lg:text-[16px] leading-[1.5] text-[#666666] font-instrument-sans mb-6 md:mb-8 max-w-[500px] tracking-[-0.13px] md:tracking-[-0.144px]">
                    {step.desc}
                  </p>

                  <div className="mt-auto pt-4 md:pt-6 lg:pt-8 border-t border-[#F5F6F9] grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                    {step.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col text-center md:text-left">
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <span className="text-[9px] md:text-[12px] lg:text-[14px] text-[#636977] font-instrument-sans uppercase tracking-wider mt-1">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
