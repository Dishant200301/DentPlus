import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { useFadeIn } from "@/hooks/use-fade-in";

const InfoItems = [
  {
    icon: MapPin,
    label: "Medical Location",
    value: "Silk St, Barbican, London EC2Y",
    link: "https://www.google.com/maps/search/Silk+St,+Barbican,+London+EC2Y",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "(888) 1234 - 5675",
    link: "tel:+188812345675",
  },
  {
    icon: Mail,
    label: "DentPlus Email",
    value: "Info@DentPlusMedical.com",
    link: "mailto:Info@DentPlusMedical.com",
  },
];

export function ContactHero() {
  const fade = useFadeIn();
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    patientType: "Cardiology",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Our team will contact you shortly.");
    setForm({ name: "", number: "", email: "", patientType: "Cardiology", message: "" });
  };

  return (
    <section className="relative lg:mx-4 xl:my-4 rounded-2xl xl:rounded-[32px] overflow-hidden">
      {/* Background with Blue Gradient - Match Reference Image exactly */}
      <div 
        className="absolute inset-0 z-0 "
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

      <div className="container-px mx-auto relative z-10 pt-20 lg:pt-[104px] pb-12 md:pb-20">
        {/* Hero Top Wrapper */}
        <div ref={fade.ref} className={`text-center mb-[40px] md:mb-[62px] px-4 md:px-0 ${fade.className}`}>
          <div className="inline-block px-4 md:px-5 py-2 md:py-3 rounded-full border border-[#E7E7E7] bg-white text-[#1B123D] text-[14px] md:text-[16px] font-normal font-instrument-sans mb-6 md:mb-8 shadow-sm">
            Contact Us
          </div>
          <h1 
            className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[72px] leading-[1.1] md:leading-[1.1] lg:leading-[72px] xl:leading-[88px] font-medium text-[#1B123D] tracking-[-1px] md:tracking-[-2px] xl:tracking-[-3.6px] max-w-[800px] mx-auto text-center" 
            style={{ fontFamily: "Poppins" }}
          >
            Support & care<br className="hidden sm:block" />
            when they need it most.
          </h1>
        </div>

        {/* Content Wrapper Card */}
        <div className="bg-white rounded-[20px] shadow-[0px_35px_55px_rgba(27,18,61,0.1)] p-4 md:p-6 lg:p-4 flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1fr] gap-0 overflow-hidden container">
          {/* Left Wrapper */}
          <div className="pt-8 md:pt-10 lg:pt-3 lg:p-4 flex flex-col justify-between">
            <div>
                {/* Label */}
                <div className="inline-block px-5 py-3 rounded-full border border-[#E7E7E7] bg-white text-[#1B123D] text-[14px] md:text-[16px] font-normal font-instrument-sans mb-6 md:mb-10 shadow-sm">
                  Get In Touch
                </div>
                <h2 
                  className="text-[28px] sm:text-[32px] md:text-[36px] leading-[1.2] font-medium text-[#1B123D] tracking-[-0.72px] mb-4 md:mb-6" 
                  style={{ fontFamily: "Poppins" }}
                >
                  Stronger Together<br className="hidden sm:block" />for Your Health
                </h2>
              <p className="text-[15px] md:text-[16px] leading-[24px] text-[#636977] font-instrument-sans mb-8 md:mb-12 max-w-xl pr-0 md:pr-4">
                Begin your wellness journey today! Discover personalized support & vibrant living options tailored to enhance your loved one's health & happiness.
              </p>
            </div>

            <div className="space-y-3 bg-[#F5F6F9] p-3 rounded-[16px]">
              {InfoItems.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link}
                  className="bg-white rounded-[8px] p-4 md:p-5 flex items-center gap-4 md:gap-5 border border-[#E7E7E7] transition-all group hover:border-[#1344FE]"
                >
                  <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#F5F6F9] flex items-center justify-center border border-[#E7E7E7] shrink-0">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#1B123D]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] md:text-[16px] text-[#636977] font-instrument-sans leading-none mb-1.5 truncate">{item.label}</div>
                    <div className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#1B123D] font-instrument-sans leading-[1.2] md:leading-none break-all sm:break-normal">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Wrapper (Form) - Displays First on Mobile/Tablet */}
          <div className="bg-[#F5F6F9] rounded-[16px] p-5 sm:p-6 md:p-8 lg:p-6 lg:m-3">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 flex flex-col h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[15px] md:text-[16px] text-[#1B123D] font-instrument-sans">Full Name</label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white rounded-[12px] border border-[#E7E7E7] px-4 py-3 text-[14px] font-instrument-sans focus:outline-none focus:border-[#1344FE] text-[#636977]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] md:text-[16px] text-[#1B123D] font-instrument-sans">Number</label>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      placeholder="(888) 212 425 8617"
                      value={form.number}
                      onChange={(e) => setForm({ ...form, number: e.target.value })}
                      className="w-full bg-white rounded-[12px] border border-[#E7E7E7] px-4 py-3 text-[14px] font-instrument-sans focus:outline-none focus:border-[#1344FE] text-[#636977]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[15px] md:text-[16px] text-[#1B123D] font-instrument-sans">Email</label>
                <div className="relative">
                  <input
                    required
                    type="email"
                    placeholder="information@office.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white rounded-[12px] border border-[#E7E7E7] px-4 py-3 text-[14px] font-instrument-sans focus:outline-none focus:border-[#1344FE] text-[#636977]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[15px] md:text-[16px] text-[#1B123D] font-instrument-sans">Patient Type</label>
                <div className="relative">
                  <select
                    required
                    value={form.patientType}
                    onChange={(e) => setForm({ ...form, patientType: e.target.value })}
                    className="w-full bg-white rounded-[12px] border border-[#E7E7E7] px-4 py-3 text-[14px] font-instrument-sans focus:outline-none focus:border-[#1344FE] text-[#636977] appearance-none"
                  >
                    <option>Cardiology</option>
                    <option>Diabetes</option>
                    <option>Nutrition</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999] pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2 flex-grow">
                <label className="text-[15px] md:text-[16px] text-[#1B123D] font-instrument-sans">Message</label>
                <div className="relative h-full min-h-[120px] sm:min-h-[150px]">
                  <textarea
                    required
                    placeholder="Write Your Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full h-[150px] md:h-[200px] bg-white rounded-[12px] border border-[#E7E7E7] px-4 py-4 text-[14px] font-instrument-sans focus:outline-none focus:border-[#1344FE] text-[#636977] resize-none"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full h-[48px] md:h-[52px] rounded-[12px] bg-[#1344FE] text-white text-[16px] md:text-[18px] font-medium font-instrument-sans transition-all hover:bg-[#1B123D] flex items-center justify-center border border-[#E7E7E7]"
              >
                Send A Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
