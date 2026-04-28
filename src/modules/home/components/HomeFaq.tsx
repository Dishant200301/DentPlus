import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 py-12 md:py-24 bg-white">
      <div className="xl:container">
        
        {/* Top Header Section */}
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-flex items-center justify-center bg-white rounded-full px-4 md:px-6 py-2 border border-[#E7E7E7] mb-6 md:mb-8">
            <span 
              className="text-[14px] md:text-[16px] font-normal text-[#1B123D] tracking-[-0.16px]"
              style={{ fontFamily: 'Instrument Sans' }}
            >
              FAQ's
            </span>
          </div>
          <h2 
            className="text-[32px] md:text-[46px] lg:text-[56px] leading-[1.1] md:leading-[1.2] lg:leading-[72px] font-medium text-[#1B123D] tracking-[-1px] md:tracking-[-1.68px] max-w-4xl mx-auto"
            style={{ fontFamily: 'Poppins' }}
          >
            All Questions {" "}<br className="hidden sm:block" />Answered Right Here
          </h2>
        </div>

        {/* FAQ List Container */}
        <div className="container bg-[#F5F6F9] rounded-[20px] p-3 md:p-5">
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const active = open === i;
              return (
                <div 
                  key={i} 
                  className="bg-white rounded-[12px] border border-[#F5F6F9] transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="w-full flex items-start justify-between text-left p-4 sm:p-6 md:p-8 hover:bg-[#F5F6F9]/30 transition-colors"
                  >
                    <div className="flex items-start gap-2 relative pr-2 sm:pr-4">
                      {/* Numbering */}
                      <span 
                        className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] md:leading-[32px] font-medium text-[#636977] tracking-[-0.48px] w-[32px] sm:w-[48px] md:w-[66px] pt-1 md:pt-0 shrink-0"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        /{String(i + 1).padStart(2, "0")}
                      </span>
                      
                      <div className="flex flex-col">
                        {/* Question */}
                        <span 
                          className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[26px] md:leading-[32px] font-medium text-[#000000] tracking-[-0.32px] md:tracking-[-0.48px]"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {f.q}
                        </span>

                        {/* Answer */}
                        <AnimatePresence>
                          {active && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p 
                                className="mt-3 md:mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#636977] tracking-[-0.18px] max-w-[918.4px]"
                                style={{ fontFamily: 'Instrument Sans' }}
                              >
                                {f.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Icon Circle */}
                    <span
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 shrink-0 mt-0.5 md:mt-1 ${
                        active ? "bg-[#FF623A]" : "bg-[#1B123D]"
                      }`}
                    >
                      {active ? (
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4" strokeWidth={3} />
                      ) : (
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4" strokeWidth={3} />
                      )}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

