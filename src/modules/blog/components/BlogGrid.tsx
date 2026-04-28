import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { blogPosts } from "@/lib/data";

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-[24px] md:rounded-[36px] bg-[#e7e7e7] p-[12px] md:p-[16px] lg:p-[20px] block"
    >
      {/* Card Image */}
      <div className="relative w-full h-full rounded-[12px] md:rounded-[16px] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Card Content Wrapper */}
      <div className="absolute bottom-[24px] md:bottom-[32px] left-[24px] md:left-[32px] right-[24px] md:right-[32px] h-auto min-h-[160px] md:h-[214px] bg-white rounded-[16px] p-4 md:p-5 flex flex-col justify-between shadow-lg">
        <div>
          <h3
            className="text-[18px] sm:text-[20px] md:text-[24px] leading-[1.2] md:leading-[32px] font-medium text-[#1B123D] tracking-[-0.48px] line-clamp-2 md:line-clamp-none font-poppins"
          >
            {post.title}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-10 h-10 md:w-[54px] md:h-[54px] rounded-full object-cover"
            />
            <div>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#1B123D] tracking-[-0.4px] font-instrument-sans">
                {post.author}
              </div>
              <div className="text-[12px] md:text-[14px] leading-[1.2] text-[#636977] tracking-[-0.14px] font-instrument-sans mt-0.5 md:mt-1">
                {post.authorRole}
              </div>
            </div>
          </div>

          <span className="w-10 h-10 md:w-[52px] md:h-[52px] rounded-full bg-[#1344FE] text-white flex items-center justify-center transition-all duration-300">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 transform group-hover:rotate-45"
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
  );
}

export function BlogGrid() {
  return (
    <section className="lg:mx-4 mt-4 rounded-2xl lg:rounded-t-[32px] relative py-10 md:py-20 px-4 md:px-0  overflow-hidden">
    <div 
        className="absolute inset-0 z-0 bg-cover bg-center rotate-180"
        style={{ backgroundImage: "url('/images/common/profile/bg.svg')" }}
      />
      
      
      <div className="md:container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
