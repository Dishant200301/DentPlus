import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";

const accordionItems = [
  {
    id: 1,
    icon: "/images/home/why_choose_us/doctor_icon.svg",
    title: "Expert Doctors",
    desc: "Our qualified doctors are boardcertified in their specialty.",
  },
  {
    id: 2,
    icon: "/images/home/why_choose_us/hospital_icon.svg",
    title: "Patient Centered Care",
    desc: "Care focused on patients' needs and preferences always.",
  },
  {
    id: 3,
    icon: "/images/home/why_choose_us/24_icon.svg",
    title: "24/7 Support",
    desc: "Our qualified doctors are board certified in their specialty.",
  },
];

export function HomeWhyChoose() {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section className=" px-0 md:px-0 lg:px-4 py-8 md:py-12 lg:py-4 bg-white">
      {/* Background Container */}
      <div className="relative rounded-[20px] md:rounded-[28px] lg:rounded-[32px] overflow-hidden">
        {/* Background SVG Wrapper */}
        <div className=" absolute inset-0 pointer-events-none">
          <img
            src="/images/home/why_choose_us/why_choose_us_bg.svg"
            alt=""
            className=" w-full h-full object-cover opacity-100"
          />
        </div>

        {/* Content */}
        <div className=" container relative z-10 py-12 md:py-16 lg:py-20 flex flex-col items-center">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto flex flex-col items-center"
          >
            {/* Top Badge Pill */}
            <span 
              className="inline-flex items-center px-6 py-2.5 bg-white border border-[#E7E7E7] rounded-full text-[14px] text-[#1B123D] shadow-sm mb-6"
              style={{ fontFamily: "Instrument Sans", letterSpacing: "-0.14px" }}
            >
              Why Choose Us?
            </span>

            {/* Main Heading */}
            <h2
              className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.2] lg:leading-[72px] font-medium text-[#1b123d] tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.68px] mb-6 md:mb-8"
              style={{ fontFamily: "Poppins" }}
            >
              Leading with Heart<br className="hidden sm:block" />and Expertise
            </h2>

            {/* CTA Button */}
            <PrimaryButton to="/appointment" variant="blue">Book Appointment</PrimaryButton>
          </motion.div>

          {/* Detailed Content Card */}
          <div className="mt-12 md:mt-16 lg:mt-36 lg:mb-20 w-full px-0 md:px-0 lg:px-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[16px] md:rounded-[18px] lg:rounded-[20px] min-h-auto relative flex flex-col md:flex-row lg:flex-row items-center md:items-stretch lg:items-stretch overflow-visible border border-[#F5F6F9]"
            >
              
              {/* Left Side: Content */}
              <div className="flex-1 p-6 md:p-7 lg:px-8 lg:py-4 flex flex-col justify-center w-full order-2 md:order-1 lg:order-1">
                {/* MediNest Branding */}
                <div className="flex items-center gap-0">
                  <div className="w-[52px] h-[32px] rounded-[16px] bg-[#FF623A] flex items-center justify-center z-10">
                    <img
                      src="/images/home/why_choose_us/medical_icon.svg"
                      alt=""
                      className="w-5 h-5 brightness-0 invert"
                    />
                  </div>
                  <div 
                    className="h-[32px] pl-4 pr-3 flex items-center justify-center border border-[#FF623A] rounded-[100px] text-[#FF623A] text-[14px] leading-[20px] tracking-[-0.14px]"
                    style={{ fontFamily: "Instrument Sans" }}
                  >
                    MediNest
                  </div>
                </div>

                {/* Left Title */}
                <h3
                  className="mt-4 md:mt-6 lg:mt-8 text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] leading-tight md:leading-[40px] lg:leading-[44px] font-medium text-[#000000] tracking-[-0.6px] md:tracking-[-0.7px] lg:tracking-[-0.72px]"
                  style={{ fontFamily: "Poppins" }}
                >
                  Outstanding {" "}<br className="hidden lg:block" />Care for Every{" "}<br className="hidden lg:block" />Patient
                </h3>

                {/* Left Description */}
                <p
                  className="mt-3 md:mt-4 lg:mt-5 text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] text-[#636977] max-w-full md:max-w-[320px] lg:max-w-[340px] tracking-[-0.14px]"
                  style={{ fontFamily: "Instrument Sans" }}
                >
                  Experience personalized healthcare designed for your comfort. Our dedicated team focuses on your needs for optimal healing support.
                </p>
              </div>

              {/* Center Image - Responsive size */}
              <div className="hidden xl:block relative flex-shrink-0 z-20 my-6 md:my-0 md:-ml-8 lg:-my-20 order-1 md:order-2 lg:order-2">
                <div className="w-[316px] h-[524px] rounded-[500px] overflow-hidden border-[6px] border-white shadow-lg mx-auto md:mx-0">
                  <img
                    src="/images/home/why_choose_us/why_choose_us_center_image.webp"
                    alt="Female doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side: Accordion */}
              <div className="flex-1 p-6 md:p-7 lg:pl-12 lg:pr-8 lg:py-4 flex flex-col justify-center space-y-2 w-full order-3 md:order-3 lg:order-3">
                {accordionItems.map((item) => (
                  <div
                    key={item.id}
                    className={`border-b border-[#E7E7E7] last:border-b-0 transition-all duration-300 ${openItems.includes(item.id) ? 'pb-2' : 'pb-4'} pt-0`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between group/acc"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-[40px] md:w-[44px] h-[40px] md:h-[44px] rounded-full bg-[#1344FE] flex items-center justify-center flex-shrink-0 transition-transform">
                          <img
                            src={item.icon}
                            alt=""
                            className="w-5 md:w-6 h-5 md:h-6 brightness-0 invert"
                          />
                        </div>
                        <span
                          className="text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[30px] font-medium text-[#1B123D] tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] text-left"
                          style={{ fontFamily: "Instrument Sans" }}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div className="transition-transform duration-300" style={{ transform: openItems.includes(item.id) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                         <ChevronDown className="w-6 h-6 text-[#1B123D]" />
                      </div>
                    </button>
                    
                    {openItems.includes(item.id) && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden"
                      >
                         <p
                          className="mt-2 md:mt-3 ml-[48px] md:ml-[56px] lg:ml-[60px] text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] text-[#636977] tracking-[-0.14px]"
                          style={{ fontFamily: "Instrument Sans" }}
                        >
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
