import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";

// Medical icons positioned around the ellipses - refined for mobile/tablet/desktop
const orbitIcons = [
  { src: "/images/home/cta/cta_icon-6.svg", pos: "-left-[26%] md:left-28 lg:-left-[4%] bottom-[120px] md:top-[90%]", size: "w-6 h-6 md:w-10 md:h-10" },
  { src: "/images/home/cta/cta_icon-1.svg", pos: "-left-[3%] md:left-52 lg:left-[10%] bottom-[220px] top-[34%] md:top-[64%] lg:top-[50%]", size: "w-6 h-6 md:w-10 md:h-10" },
  { src: "/images/home/cta/cta_icon-3.svg", pos: "left-[44%] -translate-x-1/2 bottom-[330px] top-[24%] md:top-[52%] lg:top-[27%]", size: "w-6 h-6 md:w-10 md:h-10" },
  { src: "/images/home/cta/cta_icon-4.svg", pos: "-right-[3%] md:right-52 lg:right-[10%] bottom-[220px] top-[34%] md:top-[64%] lg:top-[50%]", size: "w-6 h-6 md:w-10 md:h-10" },
  { src: "/images/home/cta/cta_icon-2.svg", pos: "-right-[26%] md:right-28 lg:-right-[4%] bottom-[120px] md:top-[90%]", size: "w-6 h-6 md:w-10 md:h-10" },
];

export function HomeCta() {
  return (
    <section className="lg:px-4 py-16 md:py-20 bg-white">
      <div className="relative w-full min-h-[680px] md:min-h-[1048px] rounded-b-2xl xl:rounded-[32px] overflow-hidden flex flex-col items-center bg-[url('/images/home/cta/cta_bg.svg')] bg-cover bg-center">
        {/* Top Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-20 px-6 pt-0"
        >
          <div className="inline-flex items-center justify-center bg-white rounded-full px-6 py-2.5 border border-[#E7E7E7] mb-8">
            <span
              className="text-[14px] md:text-[16px] font-normal text-[#1B123D] tracking-[-0.16px]"
              style={{ fontFamily: 'Instrument Sans' }}
            >
              Get in touch
            </span>
          </div>
          <h2
            className="text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2] font-medium text-[#1B123D] tracking-[-1px] md:tracking-[-1.68px] mb-8 md:mb-10"
            style={{ fontFamily: 'Poppins' }}
          >
            Health Support from {" "}<br className="hidden md:block" />Expert Doctors
          </h2>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <PrimaryButton to="/doctors" variant="blue">
              <span className="inline ">Find A Doctor</span>
            </PrimaryButton>

          </div>
        </motion.div>

        {/* CTA Content Wrapper - Scaled on mobile/tablet */}
        <div className="absolute inset-x-0 bottom-0 h-[500px] sm:h-[600px] md:h-[948px] flex items-end justify-center pointer-events-none scale-[0.65] sm:scale-[0.8] md:scale-100 origin-bottom transition-transform duration-500 z-10">

          {/* Outer Ellipse */}
          <div
            className="absolute -bottom-[200px] w-[600px] h-[600px] md:bottom-[-550px] md:w-[750px] md:h-[950px]  lg:w-[1144px] lg:h-[1144px] rounded-full border border-dashed border-white bg-white/10 shadow-[inset_0px_10px_100px_rgba(255,255,255,0.2)]"
          />

          {/* Middle Ellipse */}
          <div
            className="absolute -bottom-[200px] md:bottom-[-400px] w-[500px] h-[520px] md:w-[620px] md:h-[720px] lg:w-[864px] lg:h-[864px] rounded-full border border-dashed border-white bg-white/10 shadow-[inset_0px_10px_100px_rgba(255,255,255,0.2)]"
          />

          {/* Inner Ellipse */}
          <div
            className="absolute -bottom-[250px] w-[400px] h-[500px] md:w-[480px] md:h-[500px] lg:w-[584px] lg:h-[584px] rounded-full overflow-hidden border border-dashed border-white shadow-[inset_0px_10px_100px_rgba(255,255,255,0.2)]"
          >
            <img
              src="/images/home/cta/cta_image.png"
              alt="Surgical Procedure"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Orbiting Icons */}
          <div className="absolute bottom-[40px] md:bottom-[80px] w-full md:w-[864px] h-[400px] md:h-[580px] pointer-events-none">
            {orbitIcons.map(({ src, pos, size }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className={cn(
                  "absolute rounded-full bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-30 transition-all",
                  "w-12 h-12 md:w-16 md:h-16",
                  pos
                )}
              >
                <img src={src} alt="" className={cn("object-contain", size)} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
