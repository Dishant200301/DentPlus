import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="relative lg:mx-4 mt-4 rounded-2xl lg:rounded-b-[32px] overflow-hidden">
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/common/profile/bg.svg')" }}
      />
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,68,254,0) 40%, #1344FE 75%, #1344FE 100%)" }}
      />

      <div className="relative z-10 container mx-auto py-20 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-0 flex flex-col items-center mb-2"
        >
          {/* Label */}
          <span
            className="inline-flex items-center px-6 py-2 rounded-full border border-[#e7e7e7] bg-white text-[#1b123d] text-[14px] font-instrument-sans mb-6"
          >
            Blog & News
          </span>

          {/* Heading */}
          <h1
            className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[72px] leading-[1.2] lg:leading-[72px] xl:leading-[88px] font-medium text-[#1b123d] text-center tracking-[-1px] md:tracking-[-2px] xl:tracking-[-3.6px] font-poppins"
          >
            Latest Health Tips {" "}<br className="hidden sm:block"/>News & Medical Insights
          </h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 lg:container"
        >
          <div className="relative rounded-2xl overflow-hidden ">
            <img 
              src="/images/blog/blog_hero.webp" 
              alt="Healthcare Insights" 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
