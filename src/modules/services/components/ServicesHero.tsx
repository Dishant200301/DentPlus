import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/use-fade-in";

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
    name: "Neurology",
    short: "Discover tailored neurology services designed for you, ensuring personalized care and effective recovery.",
    slug: "neurology",
    icon: "/images/home/service/service-icon-6.svg",
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
];

const ArrowIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ServicesHero() {
  const fade = useFadeIn();

  return (
    <section className="relative lg:mx-4 mt-4 rounded-2xl lg:rounded-b-[32px] overflow-hidden min-h-[900px] md:min-h-[1000px] flex flex-col pb-16 md:pb-20">
      {/* Background Image & Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/common/profile/bg.svg')" }}
      />
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,68,254,0) 40%, #1344FE 75%, #1344FE 100%)" }}
      />

      <div className="relative z-10 container mx-auto pt-16 md:pt-20 px-4 md:px-0 flex flex-col items-center">
        {/* Hero Label */}
        <div ref={fade.ref} className={`flex flex-col items-center ${fade.className}`}>
          <div className="inline-flex items-center px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-[#E7E7E7] bg-white text-[#1B123D] text-[14px] md:text-[16px] font-instrument-sans mb-6">
            Services
          </div>
          {/* Heading */}
          <h1 
            className="text-center text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px] xl:text-[72px] leading-[1.2] md:leading-[1.2] lg:leading-[72px] xl:leading-[88px] font-medium text-[#1b123d] tracking-[-1px] md:tracking-[-1.68px] font-poppins ">
            Quality Medical {" "}<br className="hidden sm:block"/>Services For Every Patient
          </h1>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1140px]">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[16px] p-3 flex flex-col lg:flex-row group border border-[#E7E7E7] hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon Section: Top for mobile/tablet, Left for desktop */}
              <div className="w-full lg:w-[220px] h-[200px] sm:h-[300px] lg:h-full rounded-[12px] bg-gradient-to-b from-[#1344FE]/60 to-[#1344FE]/0 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-[#1344FE] rounded-full flex items-center justify-center z-10 border-[3px] border-white transition-transform duration-500">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-4 lg:p-6 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-[20px] md:text-[24px] font-medium text-[#1B123D] tracking-[-0.48px] mb-2 font-poppins"
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-[14px] md:text-[16px] leading-[1.5] text-[#636977] tracking-[-0.16px] line-clamp-4 font-instrument-sans"
                  >
                    {service.short}
                  </p>
                </div>

                <Link 
                  to={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center justify-between w-full sm:w-[162px] h-[48px] bg-transparent hover:bg-[#1245ff] border border-[#E7E7E7] hover:border-transparent rounded-full pl-4 pr-2 transition-all duration-300 group/btn"
                >
                  <span 
                    className="text-[15px] md:text-[16px] font-medium text-[#1B123D] group-hover/btn:text-white transition-colors duration-300 font-instrument-sans"
                    style={{ letterSpacing: "-0.16px" }}
                  >
                    Explore More
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#1344FE] group-hover/btn:bg-white flex items-center justify-center transition-all duration-300">
                    <ArrowIcon className="w-4 h-4 text-white group-hover/btn:text-[#1B123D] transition-colors duration-300" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
