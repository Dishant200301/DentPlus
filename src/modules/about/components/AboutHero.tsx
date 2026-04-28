import { useFadeIn } from "@/hooks/use-fade-in";

export function AboutHero() {
  const fade = useFadeIn();
  
  return (
    <section className="relative lg:mx-4 mt-4 rounded-2xl lg:rounded-b-[32px] overflow-hidden min-h-[800px] md:min-h-[1106px] flex flex-col">
      {/* Background Image & Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,68,254,0) 40%, #1344FE 75%, #1344FE 100%)" }}
      />
    

      <div className="relative z-10 container mx-auto pt-10 md:pt-20 flex flex-col items-center">
        {/* Hero Badge */}
        <div ref={fade.ref} className={`flex flex-col items-center ${fade.className}`}>
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-[2px_4px_4px_rgba(27,18,61,0.04)] border border-[#F5F6F9]">
            <div className="flex items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                  style={{ marginLeft: i > 1 ? "-10px" : "0", zIndex: 4 - i }}
                >
                  <img src={`/images/common/profile/Profile Image-00${i}.webp`} alt="Patient" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-[#FF623A] flex items-center justify-center border-2 border-white ml-[-10px] z-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V14M2 8H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <span className="text-[16px] text-[#636977] leading-[24px] tracking-[-0.16px]" style={{ fontFamily: "Instrument Sans" }}>
              20k+ happy patients served!
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-[32px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[72px] leading-[1.2] md:leading-[1.2] lg:leading-[72px] xl:leading-[88px] font-medium text-[#1B123D] text-center tracking-[-1px] md:tracking-[-2px] xl:tracking-[-3.6px] font-poppins">
            Caring for You with{" "}<br className="hidden sm:block" />Expertise & Compassion
          </h1>
        </div>

        {/* Divider and Sub-content */}
        <div className="w-full max-w-[1140px] mt-10 md:mt-12 px-0 md:px-0 border-t border-[#E7E7E7] pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] md:leading-[44px] font-medium text-[#1B123D] tracking-[-0.72px] font-poppins">
            Begin Your Journey To{" "}<br className="hidden lg:block" />Health Freedom!
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] md:leading-[30px] font-medium text-[#636977] tracking-[-0.4px] opacity-90" style={{ fontFamily: "Instrument Sans" }}>
            Your health and comfort are our priorities. Our dedicated team offers expert care to support your recovery with advanced services.
          </p>
        </div>

        {/* Video Section */}
        <div className="my-10 w-full max-w-[1140px] h-[300px] sm:h-[400px] md:h-[560px] rounded-[20px] overflow-hidden bg-[#F5F6F9] relative">
          <video 
            src="/images/about/about_hero_video.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
