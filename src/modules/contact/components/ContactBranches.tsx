import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/use-fade-in";

const branches = [
  { 
    city: "San Francisco", 
    img: "/images/contact/branch-1.webp", 
    email: "Sanfrancisco@DentPlus.com", 
    phone: "(888) 02456 56439",
    map: "https://www.google.com/maps/search/San+Francisco+Medical+Center"
  },
  { 
    city: "Dubai, UAE", 
    img: "/images/contact/branch-2.webp", 
    email: "DubaiUAE@DentPlus.com", 
    phone: "(888) 02456 56439",
    map: "https://www.google.com/maps/search/Dubai+Medical+Center"
  },
  { 
    city: "New Mexico", 
    img: "/images/contact/branch-3.webp", 
    email: "Newmexico@DentPlus.com", 
    phone: "(888) 02456 56439",
    map: "https://www.google.com/maps/search/New+Mexico+Medical+Center"
  },
];

export function ContactBranches() {
  const fade = useFadeIn();

  return (
    <section className="mt-4 relative px-4 pb-16 md:pb-16">
      {/* Blue Gradient Background with 32px Radius */}
      <div 
        className="absolute inset-x-0 lg:inset-x-4 top-0 z-0 h-[1042px]"
        style={{
          background: "linear-gradient(180deg, #1344FE 0%, rgba(19, 68, 254, 0) 80%)",
          borderRadius: "32px",
        }}
      />

      <div className="lg:container mx-auto relative z-10 pt-16 md:pt-32 px-0 lg:px-2">
        <div ref={fade.ref} className={`text-center mb-10 md:mb-[40px] ${fade.className}`}>
          {/* pill button wrapper */}
          <div className="inline-block px-4 md:px-[18px] py-2 md:py-3 rounded-full border border-[#E7E7E7] bg-transparent backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-white text-[14px] md:text-[16px] font-normal leading-6 font-instrument-sans tracking-[-0.16px]">
              Medical Branches
            </span>
          </div>
          
          <h2 
            className="text-[#F4F4F4] text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2] lg:leading-[72px] font-medium tracking-[-1px] md:tracking-[-1.68px] mx-auto max-w-3xl px-4 md:px-0" 
            style={{ fontFamily: "Poppins" }}
          >
            Explore Our Wide<br className="hidden sm:block" />
            Range of Medical Branches
          </h2>
        </div>

        {/* Medical Cards Wrapper */}
        <div className="bg-white rounded-[20px] shadow-[0px_35px_55px_rgba(27,18,61,0.05)] p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 container min-h-[630px]">
          {branches.map((b, idx) => (
            <motion.a
              key={b.city}
              href={b.map}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F5F6F9] rounded-[16px] p-4 flex flex-col group h-auto md:h-full lg:h-[630px] transition-all hover:bg-[#F5F6F9]/100"
            >
              {/* Image with 12px rounded */}
              <div className="w-full h-[250px] sm:h-[300px] rounded-[12px] overflow-hidden mb-3 shrink-0">
                <img src={b.img} alt={b.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              {/* Inner White Box Content Wrapper */}
              <div className="bg-white rounded-[12px] p-4 sm:p-5 pt-6 sm:pt-8 text-center flex flex-col flex-grow items-center h-full">
                <h3 
                  className="text-[20px] md:text-[24px] leading-[28px] md:leading-8 font-medium text-[#1B123D] tracking-[-0.48px] mb-4" 
                  style={{ fontFamily: "Poppins" }}
                >
                  {b.city}
                </h3>
                
                {/* Info wrap with top border */}
                <div className="w-full border-t border-[#E7E7E7] pt-4 sm:pt-5 space-y-1 mb-6 sm:mb-8 flex-grow">
                  <div className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 text-[#636977] font-instrument-sans tracking-[-0.16px]">
                    {b.email}
                  </div>
                  <div className="text-[14px] md:text-[16px] leading-[22px] md:leading-6 text-[#636977] font-instrument-sans tracking-[-0.16px]">
                    {b.phone}
                  </div>
                </div>

                <div className="mt-auto w-full pt-2">
                  <button className="w-full h-[50px] md:h-[60px] rounded-[12px] bg-[#F4F4F4] group-hover:bg-[#1344FE] group-hover:text-white text-[#1B123D] text-[16px] md:text-[18px] font-medium font-instrument-sans transition-all border border-[#E7E7E7]">
                    View In Map
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
