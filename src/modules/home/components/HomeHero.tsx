import { useFadeIn } from "@/hooks/use-fade-in";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";
import { Link } from "react-router-dom";

// Profile images from public/images/common/profile
const profileImages = [
  "/images/common/profile/Profile Image-001.webp",
  "/images/common/profile/Profile Image-002.webp",
  "/images/common/profile/Profile Image-003.webp",
];

// Doctor data for the middle card list
const doctorList = [
  { name: "Dr. Samuel Kim", role: "Cardiology", img: "/images/common/profile/Profile Image-001.webp" },
  { name: "Dr. Ema Thomson", role: "Dermatologist", img: "/images/common/profile/Profile Image-002.webp" },
  { name: "Dr. Emily Davis", role: "Endocrinologist", img: "/images/common/profile/Profile Image-003.webp" },
  { name: "Dr. Samuel Kim", role: "Dermatologist", img: "/images/common/profile/Profile Image-004.webp" },
  { name: "Dr. Oliver Johnson", role: "Psychiatry", img: "/images/common/profile/Profile Image-005.webp", isLast: true },
];

// Arrow icon component
const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Plus icon for badge
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V14M2 8H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Single doctor card (left and right)
const DoctorCard = ({
  name,
  role,
  profileImg,
  doctorImg,
  hasImage = true,
  className = "",
}: {
  name: string;
  role: string;
  profileImg: string;
  doctorImg: string;
  hasImage?: boolean;
  className?: string;
}) => (
  <div className={`bg-white rounded-[20px] p-4 h-auto flex flex-col relative overflow-hidden ${className}`}>
    {/* Header */}
    <div className="flex items-center justify-between bg-[#F4F4F4] rounded-[20px] p-3 relative z-10">
      <div className="flex items-center gap-3">
        <img src={profileImg} alt={name} className="w-[45px] md:w-[60px] h-[45px] md:h-[60px] rounded-full object-cover" />
        <div className="text-left">
          <div className="text-[16px] md:text-[18px] font-medium text-[#1B123D] leading-tight md:leading-[30px] tracking-[-0.4px] font-heading">
            {name}
          </div>
          <div className="text-[12px] md:text-[14px] text-[#636977] leading-normal md:leading-[24px] tracking-[-0.16px] font-body">{role}</div>
        </div>
      </div>
      <div className="w-[45px] md:w-[60px] h-[45px] md:h-[60px] bg-white rounded-full flex items-center justify-center border border-[#E7E7E7] flex-shrink-0">
        <img src="/images/common/profile/facebook.svg" alt="Facebook" className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
      </div>
    </div>

    {/* Doctor Image */}
    {hasImage && (
      <div className="mt-4 flex-1 bg-[#F5F6F9] rounded-[20px] overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[366px] relative z-10">
        <img src={doctorImg} alt={name} className="w-full h-full object-cover object-top" />
      </div>
    )}

    {/* Global overlay for blending */}
    <div className="absolute inset-x-0 -bottom-10 h-[60%] bg-gradient-to-t from-[#1344FE] via-[#1344FE]/60 to-transparent z-[50] pointer-events-none" />
  </div>
);

// Middle card with doctor list
const DoctorListCard = () => (
  <div className="bg-white rounded-[20px] p-4 h-full flex flex-col relative overflow-hidden">
    {/* Atmospheric gradient overlay for the list card - more aggressive to match ref */}
    <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#1344FE] via-[#1344FE]/40 to-transparent z-10 pointer-events-none" />

    {/* First doctor - featured */}
    <div className="h-[74px] md:h-[84px] flex items-center justify-between bg-[#F4F4F4] rounded-full p-2.5 md:p-3 mb-[10px] relative z-10 transition-all hover:bg-[#EEF1FF]">
      <div className="flex items-center gap-[10px] md:gap-[14px]">
        <img
          src="/images/common/profile/Profile Image-001.webp"
          alt="Dr. Samuel Kim"
          className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="text-[16px] md:text-[20px] font-medium text-[#1B123D] leading-tight md:leading-[30px] tracking-[-0.4px] font-heading">
            Dr. Samuel Kim
          </div>
          <div className="text-[14px] md:text-[16px] text-[#636977] leading-normal md:leading-[24px] tracking-[-0.16px] font-body">Cardiology</div>
        </div>
      </div>
      <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-white rounded-full flex items-center justify-center border border-[#E7E7E7] flex-shrink-0">
        <img src="/images/common/profile/facebook.svg" alt="Facebook" className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
      </div>
    </div>

    {/* Doctor list */}
    {doctorList.slice(1, 4).map((doctor, index) => (
      <div key={index} className="h-[84px] flex items-center justify-between bg-[#F4F4F4]/00 lg:backdrop-blur rounded-full p-3 mb-[10px] transition-all hover:bg-[#EEF1FF]">
        <div className="flex items-center gap-[14px]">
          <img src={doctor.img} alt={doctor.name} className="w-[60px] h-[60px] rounded-full object-cover" />
          <div className="flex flex-col">
            <div className="text-[20px] font-medium text-[#1B123D] leading-[30px] tracking-[-0.4px] font-heading">
              {doctor.name}
            </div>
            <div className="text-[16px] text-[#636977] leading-[24px] tracking-[-0.16px] font-body">{doctor.role}</div>
          </div>
        </div>
        <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center border border-[#E7E7E7] flex-shrink-0">
          <img src="/images/common/profile/facebook.svg" alt="Facebook" className="w-[24px] h-[24px]" />
        </div>
      </div>
    ))}
    

    {/* Last doctor - Oliver Johnson */}
    <div className="h-[74px] md:h-[84px] flex items-center justify-between bg-[#F4F4F4] rounded-full p-2.5 md:p-3 relative transition-all hover:bg-[#EEF1FF]">
      <div className="flex flex-col pl-2">
        <div className="text-[16px] md:text-[20px] font-medium text-[#1B123D] leading-tight md:leading-[30px] tracking-[-0.4px] font-heading">
          Dr. Oliver Johnson
        </div>
        <div className="text-[14px] md:text-[16px] text-[#636977] leading-normal md:leading-[24px] tracking-[-0.16px] font-body">Psychiatry</div>
      </div>
      <div className="flex items-center gap-[10px] md:gap-[14px]">
        <img
          src="/images/common/profile/Profile Image-005.webp"
          alt="Dr. Oliver Johnson"
          className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full object-cover"
        />
        <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-white rounded-full flex items-center justify-center border border-[#E7E7E7] flex-shrink-0">
          <img src="/images/common/profile/facebook.svg" alt="Facebook" className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
        </div>
      </div>
    </div>
    
  </div>
);

export function HomeHero() {
  const fade = useFadeIn();

  return (
    <section className="relative lg:mx-4 xl:mx-4 xl:my-4 rounded-2xl xl:rounded-[32px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/home/hero_bg.webp')" }}
      />

      {/* Improved Gradient overlay to match reference image 1 */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,68,254,0) 25%, #1344FE 75%, #1344FE 100%)" }}
      />

      {/* Content */}
      <div ref={fade.ref} className={`relative z-10 ${fade.className}`}>
        {/* Hero Content - Top Section */}
        <div className="pt-12 md:pt-20 pb-8 px-4 sm:px-6 lg:px-4 xl:px-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 md:gap-3 bg-white rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-[2px_4px_4px_rgba(27,18,61,0.04)] border border-[#F5F6F9]">
            {/* Avatar stack */}
            <div className="flex items-center">
              {profileImages.map((img, index) => (
                <div
                  key={index}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden"
                  style={{ marginLeft: index > 0 ? "-8px" : "0", zIndex: profileImages.length - index }}
                >
                  <img src={img} alt="Patient" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#FF623A] flex items-center justify-center border-2 border-white ml-[-8px] z-0">
                <PlusIcon />
              </div>
            </div>
            <span className="text-[12px] md:text-[14px] text-[#636977] leading-normal md:leading-[24px] tracking-[-0.16px] font-body">
              20,000+ happy patients served!
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-[32px] sm:text-[40px] lg:text-[72px] leading-[1.2] lg:leading-[1.2] md:leading-[1.2] xl:leading-[88px] tracking-[-1px] md:tracking-[-2px] xl:tracking-[-3.6px] text-[#1B123D] font-medium font-poppins" >
            Wellness starts with care {" "}
            <br className="hidden md:block"/>
            that really listens.
          </h1>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <PrimaryButton to="/appointment" variant="blue">Book Appointment</PrimaryButton>
          </div>
        </div>

        {/* Hero Cards - Bottom Section */}
        <div className="container px-4 sm:px-6 pb-12 my-6 md:my-10 overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Left Card - Dr. Samuel Kim with Doctor's-001 */}
            <DoctorCard
              name="Dr. Samuel Kim"
              role="Dermatologist"
              profileImg="/images/common/profile/Profile Image-001.webp"
              doctorImg="/images/home/Doctor's-001.webp"
            />

            {/* Middle Card - Doctor List */}
            <DoctorListCard />

            {/* Right Card - Dr. Emily Davis with Doctor's-002 */}
            <DoctorCard
              name="Dr. Emily Davis"
              role="Dermatologist"
              profileImg="/images/common/profile/Profile Image-003.webp"
              doctorImg="/images/home/Doctor's-002.webp"
              className="hidden xl:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
