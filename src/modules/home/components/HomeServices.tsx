import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";

const serviceData = [
  {
    name: "Cardiology",
    short: "Our dedicated cardiology team focuses on your health & comfort, delivering expert services with genuine care.",
    slug: "cardiology",
    icon: "/images/home/service/service-icon-1.svg",
  },
  {
    name: "Dermatology",
    short: "Discover personalized dermatology services focused on your skin health, featuring expert treatments and a compassionate team.",
    slug: "dermatology",
    icon: "/images/home/service/service-icon-2.svg",
  },
  {
    name: "Orthopedics",
    short: "Get comprehensive musculoskeletal care tailored to enhance mobility and relieve pain for active lifestyles.",
    slug: "orthopedics",
    icon: "/images/home/service/service-icon-3.svg",
  },
  {
    name: "Pediatrics",
    short: "Access specialized pediatric services focused on the unique healthcare needs of children, ensuring a bright and healthy future.",
    slug: "pediatrics",
    icon: "/images/home/service/service-icon-4.svg",
  },
  {
    name: "Oncology",
    short: "Explore specialized oncology services crafted just for you, focusing on individualized treatment and successful healing.",
    slug: "oncology",
    icon: "/images/home/service/service-icon-5.svg",
  },
  {
    name: "Neurology",
    short: "Our neurology department provides advanced diagnostics and treatment for brain and nervous system disorders.",
    slug: "neurology",
    icon: "/images/home/service/service-icon-6.svg",
  },
];

const ArrowIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function HomeServices() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // x transform from 0% to a value that shows all cards.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-64%"]);

  return (
    <section ref={targetRef} className="relative h-auto lg:h-[400vh] ">
      <div className="relative lg:sticky top-0 h-auto xl:h-screen flex items-center overflow-hidden py-4 xl:py-0">
        <div className="w-full px-0 sm:px-0 lg:px-4 container-custom mx-auto">
          <div className="bg-[#1344FE] rounded-2xl xl:rounded-[32px] p-4 md:p-4 xl:p-14 min-h-[500px] md:min-h-[600px] lg:min-h-[650px] relative overflow-hidden flex flex-col justify-center">
            {/* Top Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 lg:mb-20 relative z-10 w-full container">
              <div className="max-w-[800px]">
                <h2
                  className="text-white mt-4 md:mt-0 text-[28px] sm:text-[40px] md:text-[56px] lg:text-[48px] xl:text-[56px] leading-[1.1] md:leading-[1.2] font-medium tracking-[-1px] md:tracking-[-1.68px]"
                  style={{ fontFamily: "Poppins" }}
                >
                  Complete Health {" "}<br className="hidden sm:block" />Care Solutions.
                </h2>
              </div>
              <div className="max-w-[450px]">
                <p
                  className="text-white text-[16px] md:text-[18px] leading-[1.4] md:leading-[28px] tracking-[-0.18px] mb-8 opacity-90"
                  style={{ fontFamily: "Instrument Sans" }}
                >
                  Modern medical services designed around your health, comfort, and recovery. Experience expert care from a team that puts you first.
                </p>
                <div className="flex justify-start">
                  <PrimaryButton to="/services" variant="white">View All Services</PrimaryButton>
                </div>
              </div>
            </div>

            {/* Scrolling Cards Section - Vertical on mobile/tablet, Horizontal on LG+ */}
            <div className="relative h-auto lg:h-[340px] w-full px-0">
              <div className="lg:hidden container mx-auto px-4 md:px-0">
                <div className="flex flex-col gap-6">
                  {serviceData.map((service) => (
                    <div
                      key={service.slug}
                      className="w-full min-h-[300px] bg-white rounded-[16px] p-3 flex flex-col group border border-[#E7E7E7] hover:shadow-2xl transition-all duration-500"
                    >
                      {/* Icon Side: Top */}
                      <div className="w-full h-[200px] sm:h-[250px] rounded-[12px] bg-gradient-to-b from-[#1344FE]/60 to-[#1344FE]/0 flex items-center justify-center relative overflow-hidden">
                        <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-[#1344FE] rounded-full flex items-center justify-center z-10 border-[3px] border-white transition-transform duration-500">
                          <img
                            src={service.icon}
                            alt={service.name}
                            className="w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] object-contain"
                          />
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <h3
                            className="text-[20px] md:text-[24px] font-medium text-[#1B123D] tracking-[-0.48px] mb-2"
                            style={{ fontFamily: "Poppins" }}
                          >
                            {service.name}
                          </h3>
                          <p
                            className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#636977] tracking-[-0.16px] line-clamp-3 md:line-clamp-4"
                            style={{ fontFamily: "Instrument Sans" }}
                          >
                            {service.short}
                          </p>
                        </div>

                        <Link
                          to={`/services/${service.slug}`}
                          className="mt-6 inline-flex items-center justify-between w-full h-[48px] bg-transparent hover:bg-[#1245ff] border border-[#E7E7E7] hover:border-transparent rounded-full pl-4 pr-2 transition-all duration-300 group/btn"
                        >
                          <span
                            className="text-[14px] md:text-[16px] font-medium text-[#1B123D] group-hover/btn:text-white transition-colors duration-300"
                            style={{ fontFamily: "Instrument Sans", letterSpacing: "-0.16px" }}
                          >
                            Explore More
                          </span>
                          <span className="w-8 h-8 rounded-full bg-[#1344FE] group-hover/btn:bg-white flex items-center justify-center transition-all duration-300">
                            <ArrowIcon className="w-4 h-4 text-white group-hover/btn:text-[#1B123D] transition-colors duration-300" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Sticky Scroll Content */}
              <motion.div
                style={{ x }}
                className="hidden lg:flex flex-row gap-10 relative lg:absolute top-0"
              >
                {serviceData.map((service) => (
                  <div
                    key={service.slug}
                    className="shrink-0 w-[521px] h-[340px] bg-white rounded-[16px] p-3 flex flex-row group border border-[#E7E7E7] hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Left Side: Icon */}
                    <div className="w-[220px] h-full rounded-[12px] bg-gradient-to-b from-[#1344FE]/60 to-[#1344FE]/0 flex items-center justify-center relative overflow-hidden">
                      <div className="w-[100px] h-[100px] bg-[#1344FE] rounded-full flex items-center justify-center z-10 border-[3px] border-white transition-transform duration-500">
                        <img
                          src={service.icon}
                          alt={service.name}
                          className="w-[60px] h-[60px] object-contain"
                        />
                      </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h3
                          className="text-[24px] font-medium text-[#1B123D] tracking-[-0.48px] mb-2"
                          style={{ fontFamily: "Poppins" }}
                        >
                          {service.name}
                        </h3>
                        <p
                          className="text-[16px] leading-[24px] text-[#636977] tracking-[-0.16px] line-clamp-4"
                          style={{ fontFamily: "Instrument Sans" }}
                        >
                          {service.short}
                        </p>
                      </div>

                      <Link
                        to={`/services/${service.slug}`}
                        className="mt-4 inline-flex items-center justify-between w-[162px] h-[48px] bg-transparent hover:bg-[#1245ff] border border-[#E7E7E7] hover:border-transparent rounded-full pl-4 pr-2 transition-all duration-300 group/btn"
                      >
                        <span
                          className="text-[16px] font-medium text-[#1B123D] group-hover/btn:text-white transition-colors duration-300"
                          style={{ fontFamily: "Instrument Sans", letterSpacing: "-0.16px" }}
                        >
                          Explore More
                        </span>
                        <span className="w-8 h-8 rounded-full bg-[#1344FE] group-hover/btn:bg-white flex items-center justify-center transition-all duration-300">
                          <ArrowIcon className="w-4 h-4 text-white group-hover/btn:text-[#1B123D] transition-colors duration-300" />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



