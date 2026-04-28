import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-[40px] bg-white border border-[#E7E7E7] flex items-center justify-center text-[#1B123D] hover:bg-[#F5F6F9] hover:scale-105 transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full rounded-t-[20px] md:rounded-t-[28px] lg:rounded-t-[32px] overflow-hidden px-0 md:px-2 lg:px-0 pb-4 md:pb-6 lg:pb-6">
      <div
        className="relative w-full rounded-[20px] md:rounded-[28px] lg:rounded-[32px] bg-gradient-to-b from-[#1344FE] to-[#1344FE]/0 pt-20 md:pt-32 lg:pt-56 pb-4 md:pb-6 lg:pb-6"
        style={{ background: "linear-gradient(180deg, #1344FE 0%, rgba(19, 68, 254, 0) 80%)" }}
      >
        {/* Background "DentPlus" Text */}
        <div className="absolute inset-x-0 top-6 md:top-2 lg:top-14 xl:top-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
          <span
            className="text-[66px] sm:text-[140px] lg:text-[200px] xl:text-[260px] leading-none text-white/10 font-medium tracking-tight"
            style={{ fontFamily: "Poppins" }}
          >
            DentPlus
          </span>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full mx-auto px-4 md:pr-6 lg:px-0 lg:container bg-white rounded-[16px] md:rounded-[20px] lg:rounded-[20px] shadow-[0px_35px_55px_rgba(27,18,61,0.05)] overflow-hidden">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row relative">
            <div className="w-full md:w-[200px] lg:w-[288px] flex items-start justify-start py-6 md:py-10 md:pr-10 md:pl-4 lg:p-12">
              <img
                src="/images/common/profile/footer_logo.webp"
                alt="DentPlus Logo"
                className="w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32 object-contain"
              />
            </div>

            {/* Vertical Line Container */}
            <div className="hidden md:block absolute left-[200px] lg:left-[288px] top-0 bottom-0 w-[1px] bg-[#F5F6F9]" />

            <div className="flex-1 p-0 md:p-8 lg:p-12 flex flex-col justify-center">
              <h3
                className="text-[20px] sm:text-[26px] md:text-[28px] lg:text-[36px] font-medium text-[#1B123D] leading-[28px] sm:leading-[34px] md:leading-[40px] lg:leading-[44px] tracking-[-0.4px] sm:tracking-[-0.56px] md:tracking-[-0.64px] lg:tracking-[-0.72px] mb-4 md:mb-6 lg:mb-8"
                style={{ fontFamily: 'Poppins' }}
              >
                DentPlus: Your trusted<br className="hidden sm:block" />partner for Any health solutions
              </h3>
              {/* Dual-part Book Appointment button with arrow */}
              <PrimaryButton to="/appointment" variant="blue">Book Appointment</PrimaryButton>
            </div>
            {/* Horizontal Line - Full Width */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#F5F6F9] w-full" />
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 lg:gap-12 py-8 md:py-6 md:p-0 lg:p-12 relative items-center">
              <div className="col-span-2 md:col-span-2 lg:col-span-1 flex items-center md:flex-col md:items-start gap-2 md:gap-6 lg:gap-10">
                <img src="/images/common/profile/logo.png" alt="DentPlus" className="h-8 md:h-12 lg:h-16 lg:h-20 w-auto object-contain flex-shrink-0" />
                <span className="lg:-mt-10 lg:mb-10 text-[18px] md:text-[24px] lg:text-[42px] font-semibold text-[#1B123D]">DentPlus</span>
                <div className="hidden md:flex gap-3">
                  <SocialIcon Icon={Instagram} href="#" />
                  <SocialIcon Icon={Linkedin} href="#" />
                  <SocialIcon Icon={Facebook} href="#" />
                  <SocialIcon Icon={Twitter} href="#" />
                </div>
              </div>

              {/* Mobile Social Icons - Separate from logo group */}
              <div className="md:hidden flex gap-2 col-span-2">
                <SocialIcon Icon={Instagram} href="#" />
                <SocialIcon Icon={Linkedin} href="#" />
                <SocialIcon Icon={Facebook} href="#" />
                <SocialIcon Icon={Twitter} href="#" />
              </div>

              {/* Middle Vertical Line */}
              <div className="hidden md:block lg:hidden absolute left-[calc(50%-1px)] top-0 bottom-0 w-[1px] bg-[#F5F6F9]" />
              <div className="hidden lg:block absolute left-[288px] top-0 bottom-0 w-[1px] bg-[#F5F6F9]" />

              <FooterCol
                title="Utility Pages"
                items={[
                  { label: "About Page", to: "/about" },
                  { label: "Service Page", to: "/services" },
                  { label: "Doctor Page", to: "/doctors" },
                  { label: "Blog Page", to: "/blog" },
                  { label: "Contact Us", to: "/contact" },
                ]}
              />
              <FooterCol
                title="Getting Care"
                items={[
                  { label: "Dermatology", to: "/services/dermatology" },
                  { label: "Neurology", to: "/services/neurology" },
                  { label: "Orthopedics", to: "/services/orthopedics" },
                  { label: "Pediatrics", to: "/services/pediatrics" },
                  { label: "Oncology", to: "/services/oncology" },
                ]}
              />
            </div>
            {/* Bottom Copyright Divider - Full Width */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#F5F6F9] w-full" />
          </div>

          {/* Bottom Copyright Section */}
          <div className="px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <span
              className="text-[14px] md:text-[15px] lg:text-[16px] text-[#636977] tracking-[-0.14px] md:tracking-[-0.15px] lg:tracking-[-0.16px] text-center md:text-left"
              style={{ fontFamily: 'Instrument Sans' }}
            >
              &copy;Copyright {currentYear} DentPlus - All Rights Reserved.
            </span>
            <div
              className="text-[14px] md:text-[15px] lg:text-[16px] text-[#636977] tracking-[-0.14px] md:tracking-[-0.15px] lg:tracking-[-0.16px] text-center md:text-right"
              style={{ fontFamily: 'Instrument Sans' }}
            >
              Powered By{" "}
              <a
                href="https://tryzeniq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1344FE] transition-colors"
              >
                TryzenIQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div className="space-y-3 md:space-y-4 lg:space-y-6">
      <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[#1B123D] font-body tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px]">
        {title}
      </h4>
      <ul className="space-y-2 md:space-y-3 lg:space-y-4">
        {items.map((it) => (
          <li key={it.label}>
            <Link
              to={it.to}
              className="text-[14px] md:text-[15px] lg:text-[16px] text-[#636977] hover:text-[#1B123D] transition-colors tracking-[-0.14px] md:tracking-[-0.15px] lg:tracking-[-0.16px]"
              style={{ fontFamily: 'Instrument Sans' }}
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

