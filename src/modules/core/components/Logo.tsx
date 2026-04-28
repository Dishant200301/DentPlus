export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/images/common/profile/logo.png" 
        alt="DentPlus Logo" 
        className="w-auto h-12 lg:h-16 object-contain"
      />
      <span
        className={`text-[24px] md:text-[28px]  lg:text-[32px] leading-none ${light ? "text-white" : "text-[#1b123d]"}`}
        style={{ fontFamily: "Poppins", fontWeight: 400 }}
      >
        Dent<span style={{ fontWeight: 500 }}>Plus</span>
      </span>
    </div>
  );
}
