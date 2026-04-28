import { useParams, Navigate } from "react-router-dom";
import { Quote } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { blogPosts } from "@/lib/data";
import { HomeCta } from "@/modules/home/components/HomeCta";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const fade = useFadeIn();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="container bg-white min-h-screen">
      <article className="pt-16 pb-10">
        {/* Header Section */}
        <div className="max-w-[1060px] mx-auto px-0 md:px-0">
          <div ref={fade.ref} className={`mb-10 ${fade.className}`}>
            <div className="flex mb-8">
              <span className="px-5 py-2 rounded-full bg-[#1344FE] text-white text-[16px] font-medium font-instrument-sans">
                {post.category}
              </span>
              <span className="px-5 py-2 rounded-full border border-[#1344fe] text-[#1B123D] text-[16px] font-medium font-instrument-sans">
                {post.subCategory}
              </span>
            </div>
            <h1
              className="text-[32px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-[1.1] font-medium text-[#1B123D] tracking-[-1px] md:tracking-[-1.2px] xl:tracking-[-1.68px]"
              style={{ fontFamily: "Poppins" }}
            >
              {post.title}
            </h1>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-0 py-6 border-y border-[#E7E7E7]">
            <div className="pr-4 md:pr-8 border-r border-[#E7E7E7]">
              <div className="text-[16px] md:text-[20px] xl:text-[24px] leading-[24px] md:leading-[28px] xl:leading-[32px] font-medium text-[#1B123D] font-poppins mb-1 md:mb-2">Editor</div>
              <div className="text-[14px] md:text-[16px] xl:text-[18px] leading-[20px] md:leading-[24px] xl:leading-[28px] text-[#636977] font-instrument-sans">{post.author}</div>
            </div>
            <div className="pl-4 md:px-8 border-[#E7E7E7] lg:border-r">
              <div className="text-[16px] md:text-[20px] xl:text-[24px] leading-[24px] md:leading-[28px] xl:leading-[32px] font-medium text-[#1B123D] font-poppins mb-1 md:mb-2">Date</div>
              <div className="text-[14px] md:text-[16px] xl:text-[18px] leading-[20px] md:leading-[24px] xl:leading-[28px] text-[#636977] font-instrument-sans">{post.date}</div>
            </div>
            <div className="pr-4 md:px-0 border-r lg:border-[#E7E7E7] mt-6 lg:mt-0">
              <div className="text-[16px] md:text-[20px] xl:text-[24px] leading-[24px] md:leading-[28px] xl:leading-[32px] font-medium text-[#1B123D] font-poppins mb-1 md:mb-2">Reading</div>
              <div className="text-[14px] md:text-[16px] xl:text-[18px] leading-[20px] md:leading-[24px] xl:leading-[28px] text-[#636977] font-instrument-sans">{post.reading}</div>
            </div>
            <div className="pl-4 md:pl-8 border-[#E7E7E7] mt-6 lg:mt-0">
              <div className="text-[16px] md:text-[20px] xl:text-[24px] leading-[24px] md:leading-[28px] xl:leading-[32px] font-medium text-[#1B123D] font-poppins mb-1 md:mb-2">Share</div>
              <div className="text-[14px] md:text-[16px] xl:text-[18px] leading-[20px] md:leading-[24px] xl:leading-[28px] text-[#636977] font-instrument-sans tracking-[1px] md:tracking-[2px] xl:tracking-[4px] truncate">FB. TW. IN. LN</div>
            </div>
          </div>

          {/* Main Cover Image */}
          <div className="mt-12 rounded-3xl overflow-hidden aspect-[1240/680]">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content Sections */}
          <div className="mt-10 lg:mt-16 space-y-10 lg:space-y-12">
            <div className="space-y-8">
              {post.sections.map((section, idx) => (
                <div key={idx} className="space-y-4 lg:space-y-6">
                  {section.title && (
                    <h2
                      className="text-[28px] md:text-[36px] xl:text-[44px] leading-[1.2] xl:leading-[52px] font-medium text-[#1B123D] tracking-[-0.88px]"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {section.title}
                    </h2>
                  )}
                  <p className="text-[16px] md:text-[18px] xl:text-[20px] text-[#636977] leading-[28px] xl:leading-[32px] font-instrument-sans">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="bg-[#F5F6F9] rounded-3xl p-4 sm:p-8 lg:px-10 lg:py-6 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col h-full justify-between py-2">
                  <div className="space-y-6 lg:space-y-9">
                    <img src="/images/blog/quote.svg" alt="" className="w-12 h-12 md:w-16 lg:h-16" />
                    <p
                      className="text-[20px] md:text-[24px] xl:text-[28px] leading-[1.4] md:leading-[36px] xl:leading-[42px] font-medium text-[#1B123D] tracking-[-0.56px]"
                      style={{ fontFamily: "Instrument Sans" }}
                    >
                      {post.quote.text}
                    </p>
                  </div>

                  <div className="mt-8 lg:mt-12 space-y-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div className="text-[18px] md:text-[20px] font-medium text-[#1B123D] font-instrument-sans">
                      {post.author}
                    </div>
                  </div>
                </div>
                <div className="w-full h-[280px] md:h-[400px] lg:w-full xl:w-[480px] xl:h-[540px] rounded-2xl lg:rounded-3xl overflow-hidden justify-self-end">
                  <img
                    src={post.quote.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Smart Tips Section */}
            <div className="space-y-8 lg:space-y-10">
              <div className="space-y-4 lg:space-y-6">
                <h2
                  className="text-[28px] md:text-[36px] xl:text-[44px] leading-[1.2] lg:leading-[52px] font-medium text-[#1B123D] tracking-[-0.88px]"
                  style={{ fontFamily: "Poppins" }}
                >
                  {post.smartTips.title}
                </h2>
                <p className="text-[16px] md:text-[18px] xl:text-[20px] text-[#636977] leading-[28px] xl:leading-[32px] font-instrument-sans">
                  {post.smartTips.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6">
                {post.smartTips.images.map((img, i) => (
                  <div key={i} className="h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-[20px] lg:rounded-3xl overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <p className="text-[16px] md:text-[18px] xl:text-[20px] text-[#636977] leading-[28px] xl:leading-[32px] font-instrument-sans">
              {post.conclusion}
            </p>
          </div>
        </div>
      </article>

      <HomeCta />
    </div>
  );
}
