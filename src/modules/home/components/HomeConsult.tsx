import { Mic, Video, PhoneOff, Maximize2, Heart, Plus } from "lucide-react";
import { motion } from "framer-motion";

export function HomeConsult() {
  return (
    <section className="px-0 lg:px-4">
      <div
        className="relative rounded-[20px] md:rounded-[32px] overflow-hidden py-8 md:py-10 lg:pb-24 px-4 shadow-sm"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F9 30%, #1344FE 100%)",
        }}
      >
               {/* Background SVG */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/common/profile/bg.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Section Header - h-[208px] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 md:pt-16 pb-6 md:pb-10 px-4 md:px-6 flex flex-col items-center"
        >
          {/* Caption Button Fill Color - white with border */}
          <span
            className="inline-flex items-center px-6 py-2.5 bg-white border border-[#E7E7E7] rounded-full text-[16px] text-[#1B123D] leading-[24px] tracking-[-0.16px] mb-6"
            style={{ fontFamily: "Instrument Sans" }}
          >
            Consult Online
          </span>

          {/* H2 - 56px Poppins */}
          <h2
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[64px] lg:leading-[72px] font-medium tracking-[-0.56px] sm:tracking-[-0.72px] md:tracking-[-1.2px] lg:tracking-[-1.68px] text-center"
            style={{ fontFamily: "Poppins" }}
          >
            <span className="text-[#636977]">Online Doctor</span><br />
            <span className="text-[#1B123D]">Support, Always Available</span>
          </h2>
        </motion.div>

        {/* Video Container */}
        <div className="relative mx-auto w-full md:max-w-[1140px] px-0 my-10 md:my-16 lg:my-0 h-[300px] sm:h-[450px] md:h-[600px] lg:h-[600px] rounded-[16px] md:rounded-[24px] overflow-hidden bg-black">
          {/* Local Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/home/consult.mp4" type="video/mp4" />
          </video>

          {/* Video Info Wrapper - Responsive bar */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-10 left-3 sm:left-4 md:left-10 right-3 sm:right-4 md:right-10 h-auto md:h-[60px] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            
            <div className="flex w-full md:w-auto items-center justify-between md:justify-start gap-4">
              {/* User Info Wrap */}
              <div
                className="flex items-center gap-2 md:gap-3 h-10 sm:h-12 md:h-[60px] px-2 md:px-2 rounded-full border border-white/20"
                style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(5px)" }}
              >
                <img
                  src="/images/home/doctor/Doctor's-002.webp"
                  alt="Dr. Samuel Kim"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-[56px] md:h-[56px] rounded-full object-cover"
                />
                <span
                  className="text-white text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] pr-2 md:pr-3"
                  style={{ fontFamily: "Instrument Sans" }}
                >
                  Dr. Samuel Kim
                </span>
              </div>

              {/* Right side icons (Mobile: Maximize/Heart) */}
              <div className="flex md:hidden items-center gap-2 sm:gap-3">
                <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Main Action Icons */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] rounded-full bg-white flex items-center justify-center">
                <Mic className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1B123D]" />
              </button>

              <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] rounded-full bg-white flex items-center justify-center">
                <Video className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1B123D]" />
              </button>

              <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] rounded-full bg-[#FF623A] flex items-center justify-center">
                <PhoneOff className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </button>
            </div>

            {/* Desktop only side icons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="w-[32px] h-[32px] flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white" />
              </button>
              <button className="w-[32px] h-[32px] flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </button>
              <button className="w-[32px] h-[32px] flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
