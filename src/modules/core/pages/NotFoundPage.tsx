import { useFadeIn } from "@/modules/core/hooks/use-fade-in";
import { PrimaryButton } from "./PrimaryButton";

export default function NotFoundPage() {
  const fade = useFadeIn();

  return (
    <section className="relative xl:mx-4 xl:my-4 xl:rounded-[32px] overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background with Blue Gradient - Match Reference Image exactly */}
      <div 
        className="absolute inset-0 z-0 h-[1212px]"
        style={{
          background: "linear-gradient(180deg, rgba(19, 68, 254, 0) 20%, #1344FE 100%)",
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: "url('/images/common/profile/bg.svg')",
          backgroundRepeat: "repeat",
          zIndex: 1,
        }} 
      />

      {/* Content Wrapper */}
      <div ref={fade.ref} className={`relative z-10 container mx-auto px-4 ${fade.className} w-full py-10 md:py-20 lg:py-20`}>
        {/* Top 404 Visual Section */}
        <div className="flex flex-col items-center justify-center mb-0">
          <div className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[600px] z-10">
            <img 
              src="/images/404/404.webp" 
              alt="404 Page Not Found" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* White Card Section */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-20 lg:p-20 text-center shadow-[0px_35px_55px_rgba(27,18,61,0.05)] border border-[#E7E7E7] relative z-20 -mt-4 md:-mt-8 lg:mt-0">
          <h1 
            className="text-[32px] md:text-[48px] lg:text-[64px] font-medium text-[#1B123D] leading-[1.1] tracking-[-1.5px] md:tracking-[-2.5px] mb-6 md:mb-8"
            style={{ fontFamily: "Poppins" }}
          >
            Oops! Medical Page Can't Be Found
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#636977] font-instrument-sans leading-[1.6] max-w-[720px] mx-auto mb-10 md:mb-12">
            Sorry, the page you're looking for isn't available. Please check the URL, return to our homepage, or contact us for assistance.
          </p>
          
          <div className="flex justify-center">
            <PrimaryButton to="/" variant="blue">Back To Home</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
