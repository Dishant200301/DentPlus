import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: "01",
    text: "“From the moment I walked in I felt welcomed and well cared for. The doctors and nurses were incredibly attentive, and I'm so grateful for their expertise.”",
    name: "Cynthia on Reiki",
    avatar: "/images/home/testimonial/avatar-1.webp",
    mainImage: "/images/home/testimonial/testimonial-1.webp",
    rating: 5,
  },
  {
    id: "02",
    text: "“The level of care and professionalism at DentPlus is unparalleled. My dental procedure was painless and the results are fantastic. Highly recommend!”",
    name: "Cynthia on Reiki",
    avatar: "/images/home/testimonial/avatar-2.webp",
    mainImage: "/images/home/testimonial/testimonial-2.webp",
    rating: 5,
  },
  {
    id: "03",
    text: "“Expert advice and a friendly atmosphere. I was worried about my orthodontic treatment, but the team made me feel at ease every step of the way.”",
    name: "Cynthia on Reiki",
    avatar: "/images/home/testimonial/avatar-3.webp",
    mainImage: "/images/home/testimonial/testimonial-3.webp",
    rating: 5,
  },
  {
    id: "04",
    text: "“DentPlus has transformed my smile. The modern technology and personal touch they provide made a world of difference for my health journey.”",
    name: "Cynthia on Reiki",
    avatar: "/images/home/testimonial/avatar-4.webp",
    mainImage: "/images/home/testimonial/testimonial-4.webp",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg 
          key={s} 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill={s <= Math.floor(rating) ? "#1B123D" : "#9B99AB"} 
          className="transition-colors duration-300"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}
    </div>
  );
}

export function HomeTestimonial() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  return (
    <section className="px-0 sm:px-4 py-8 md:py-16 lg:py-20 bg-white">
      {/* Mobile & Tablet View (Stacked List) */}
      <div className="flex xl:hidden flex-col gap-6 md:gap-8 px-4 sm:px-0">
        {/* Mobile/Tablet List - Exact matches Image 1 */}
        <div className="flex lg:hidden flex-col gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-[#F5F6F9] rounded-[24px] p-6 sm:p-8 flex flex-col">
              <div className="mb-6">
                <img src="/images/home/testimonial/quote.svg" alt="Quote" className="w-[60px] h-[60px]" />
              </div>
              <p
                className="text-[20px] sm:text-[22px] leading-[30px] sm:leading-[34px] font-normal text-[#1B123D] tracking-[-0.56px] mb-8"
                style={{ fontFamily: 'Poppins' }}
              >
                {item.text}
              </p>
              <div className="w-full border-t border-[#E7E7E7] mb-8" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-[44px] h-[44px] rounded-full object-cover" />
                  <span className="text-[16px] font-medium text-[#1B123D] font-instrument-sans">{item.name.split(' ')[0]} {item.name.split(' ')[1]}</span>
                </div>
                <StarRating rating={item.rating} />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex xl:hidden flex-col bg-[#F5F6F9] rounded-[32px] p-12 shadow-sm">
           <div className="flex flex-col">
              <div className="mb-10">
                <svg width="60" height="48" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4286 0C5.11429 0 0 5.11429 0 11.4286C0 17.7429 5.11429 22.8571 11.4286 22.8571H14.2857C14.2857 27.8857 10.2286 32 5.14286 32V27.4286C5.14286 26.1714 4.11429 25.1429 2.85714 25.1429C1.28 25.1429 0 26.4229 0 28C0 30.2057 1.79429 32 4 32C12.8343 32 20 24.8343 20 16V11.4286C20 5.11429 14.8857 0 8.57143 0H11.4286ZM31.4286 0C25.1143 0 20 5.11429 20 11.4286C20 17.7429 25.1143 22.8571 31.4286 22.8571H34.2857C34.2857 27.8857 30.2286 32 25.1429 32V27.4286C25.1429 26.1714 24.1143 25.1429 22.8571 25.1429C21.28 25.1429 20 26.4229 20 28C20 30.2057 21.7943 32 24 32C32.8343 32 40 24.8343 40 16V11.4286C40 5.11429 34.8857 0 28.5714 0H31.4286Z" fill="#FF623A"/>
                </svg>
              </div>
              <p
                className="text-[26px] leading-[38px] font-normal text-[#1B123D] mb-10"
                style={{ fontFamily: 'Poppins' }}
              >
                {testimonials[index].text}
              </p>
              <div className="w-full border-t border-[#E7E7E7] mb-10" />
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-[56px] h-[56px] rounded-full object-cover" />
                  <span className="text-[22px] font-medium text-[#1B123D] font-instrument-sans">{testimonials[index].name}</span>
                </div>
                <StarRating rating={testimonials[index].rating} />
              </div>

              {/* Navigation Pill */}
              <div className="bg-white rounded-full h-[88px] flex items-center justify-between px-6 mb-12 shadow-sm w-full">
                <button onClick={prev} className="w-14 h-14 bg-[#1344FE] text-white rounded-full flex items-center justify-center transition-all active:scale-95">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <div className="flex gap-10">
                  {testimonials.map((t, idx) => (
                    <span key={t.id} className={cn("text-[20px] font-medium font-instrument-sans transition-colors", index === idx ? "text-[#1B123D]" : "text-[#9B99AB]")}>
                      {t.id}
                    </span>
                  ))}
                </div>
                <button onClick={next} className="w-14 h-14 bg-[#F5F6F9] text-[#1B123D] rounded-full flex items-center justify-center transition-all hover:bg-[#1B123D] hover:text-white active:scale-95">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>

              {/* Large Image Below */}
              <div className="w-full h-[520px] rounded-[28px] overflow-hidden shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={testimonials[index].mainImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
           </div>
        </div>
      </div>

      {/* Desktop View (Side-by-Side) - Preserved */}
      <div className="hidden xl:flex container relative w-full min-h-[600px] bg-[#F5F6F9] rounded-[32px] overflow-hidden px-12 py-10 items-center gap-16">
        <div className="w-[55%] flex flex-col h-full justify-center">
          <div className="relative h-[480px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start"
              >
                <div className="mb-10">
                  <img src="/images/home/testimonial/quote.svg" alt="Quote" className="w-[80px] h-[80px]" />
                </div>
                <h4
                  className="text-[32px] leading-[44px] font-normal text-[#1B123D] tracking-[-0.64px] mb-10"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {testimonials[index].text}
                </h4>
                <div className="w-full border-t border-[#E7E7E7] mb-10" />
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-[56px] h-[56px] rounded-full object-cover" />
                    <span className="text-[20px] font-medium text-[#1B123D] font-instrument-sans">{testimonials[index].name}</span>
                  </div>
                  <StarRating rating={testimonials[index].rating} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Nav Pill */}
            <div className="mt-auto w-full h-[80px] bg-white rounded-full flex items-center justify-between px-6">
              <button onClick={prev} className="w-12 h-12 bg-[#1344FE] text-white rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <div className="flex gap-8">
                {testimonials.map((t, idx) => (
                  <span key={t.id} className={cn("text-[20px] font-medium font-instrument-sans", index === idx ? "text-[#1B123D]" : "text-[#9B99AB]")}>
                    {t.id}
                  </span>
                ))}
              </div>
              <button onClick={next} className="w-12 h-12 bg-[#F5F6F9] border border-[#E7E7E7] text-[#1B123D] rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[45%] h-[550px] relative rounded-[24px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={testimonials[index].mainImage}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

