import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";

import { blogPosts } from "@/lib/data";

const featuredPosts = blogPosts.slice(0, 2);

export function HomeBlog() {
  return (
    <section className="px-0 md:px-4 py-8 md:py-12 lg:py-4">
      <div
        className="relative rounded-[20px] md:rounded-[24px] lg:rounded-[32px] min-h-auto md:min-h-[1196px] overflow-hidden"

      >
        {/* Background SVG */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/common/profile/bg.svg"
            alt=""
            className="w-full h-full object-cover rotate-180"
          />
        </div>

        {/* Section Header - h-[208px] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-8 lg:pb-10 px-4 md:px-6 lg:px-6 flex flex-col items-center"
        >
          {/* Caption Button Border */}
          <span
            className="inline-flex items-center px-6 py-2.5 border border-[#E7E7E7] rounded-full text-[16px] text-white leading-[24px] tracking-[-0.16px] mb-6"
            style={{ fontFamily: "Instrument Sans" }}
          >
            Blog & News
          </span>

          {/* H2 - 56px Poppins white */}
          <h2
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[64px] lg:leading-[72px] font-medium text-white tracking-[-0.56px] sm:tracking-[-0.72px] md:tracking-[-1.2px] lg:tracking-[-1.68px] text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Stay Informed With<br />DentPlus Updates
          </h2>
        </motion.div>
<div className ="mx-4 lg:mx-0">
        {/* Cards Container */}
        <div className="relative z-10 mx-auto w-full md:w-full lg:w-[calc(100%-32px)] px-4 md:px-6 lg:px-6 bg-white rounded-[16px] md:rounded-[20px] lg:rounded-[20px] p-4 md:p-5 lg:p-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group relative h-[360px] sm:h-[420px] md:h-[500px] lg:h-[600px] rounded-[12px] md:rounded-[16px] lg:rounded-[16px] overflow-hidden block"
            >
              {/* Card Image */}
              <div className="absolute inset-0 overflow-hidden rounded-[12px] md:rounded-[16px] lg:rounded-[16px]">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content Wrapper */}
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 h-auto min-h-[140px] sm:min-h-[160px] md:h-[200px] lg:h-[214px] bg-white rounded-[12px] md:rounded-[16px] p-3 sm:p-4 md:p-5 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[30px] lg:leading-[32px] font-medium text-[#1B123D] tracking-[-0.32px] sm:tracking-[-0.4px] md:tracking-[-0.48px] line-clamp-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {post.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-3 sm:mt-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-[54px] md:h-[54px] rounded-full object-cover"
                    />
                    <div>
                      <div
                        className="text-[14px] sm:text-[16px] md:text-[20px] font-medium text-[#1B123D] tracking-[-0.28px] sm:tracking-[-0.4px]"
                        style={{ fontFamily: "Instrument Sans" }}
                      >
                        {post.author}
                      </div>
                      <div
                        className="text-[11px] sm:text-[12px] md:text-[14px] leading-[1] text-[#636977] mt-0.5 sm:mt-1"
                        style={{ fontFamily: "Instrument Sans" }}
                      >
                        {post.authorRole}
                      </div>
                    </div>
                  </div>

                  <span className="w-8 h-8 sm:w-10 sm:h-10 md:w-[52px] md:h-[52px] rounded-full bg-[#1344FE] text-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 transform group-hover:rotate-45"
                    >
                      <path 
                        d="M7 17L17 7M17 7H8M17 7V16" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>

        {/* View All Button */}
        <div className="relative z-10 mt-6 md:mt-8 lg:mt-10 flex justify-center">
          <PrimaryButton to="/blog" variant="dark">View All Blog's</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
