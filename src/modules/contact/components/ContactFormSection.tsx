import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { useFadeIn } from "@/hooks/use-fade-in";

const ContactInfoItems = [
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

export function ContactFormSection() {
  const fade = useFadeIn();
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    patientType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Our team will get back to you shortly.");
    setForm({ name: "", number: "", email: "", patientType: "", message: "" });
  };

  return (
    <section className="pb-24">
      <div className="container">
        <div 
          ref={fade.ref} 
          className={`bg-white rounded-[32px] p-4 md:p-8 shadow-[0px_4px_40px_rgba(0,0,0,0.04)] border border-[#E7E7E7] grid md:grid-cols-2 gap-12 ${fade.className}`}
        >
          {/* Left Column: Info */}
          <div className="flex flex-col justify-between p-4 md:p-8">
            <div>
              <div className="inline-block px-5 py-2 rounded-full border border-[#E7E7E7] text-[#1B123D] text-[16px] font-medium font-instrument-sans mb-10">
                Get In Touch
              </div>
              <h2 
                className="text-[40px] md:text-[56px] leading-[1.1] font-medium text-[#1B123D] tracking-[-1.68px] mb-6" 
                style={{ fontFamily: "Poppins" }}
              >
                Stronger Together for Your Health
              </h2>
              <p className="text-[18px] leading-[28px] text-[#636977] font-instrument-sans mb-12 max-w-md">
                Begin your wellness journey today! Discover personalized support & vibrant living options tailored to enhance your loved one's health & happiness.
              </p>
            </div>

            <div className="space-y-6">
              {ContactInfoItems.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 p-6 rounded-[24px] border border-[#E7E7E7] hover:border-[#1344FE] transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#F5F6F9] flex items-center justify-center group-hover:bg-[#1344FE] transition-colors">
                    <item.icon className="w-6 h-6 text-[#1B123D] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[16px] text-[#636977] font-instrument-sans mb-0.5">{item.label}</div>
                    <div className="text-[20px] font-medium text-[#1B123D] font-instrument-sans">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#F5F6F9] rounded-[32px] p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[16px] font-medium text-[#1B123D] font-instrument-sans">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white rounded-[16px] border border-[#E7E7E7] px-6 py-4 text-[16px] font-instrument-sans focus:outline-none focus:border-[#1344FE]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[16px] font-medium text-[#1B123D] font-instrument-sans">Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="(888) 212 425 8617"
                    value={form.number}
                    onChange={(e) => setForm({ ...form, number: e.target.value })}
                    className="w-full bg-white rounded-[16px] border border-[#E7E7E7] px-6 py-4 text-[16px] font-instrument-sans focus:outline-none focus:border-[#1344FE]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[16px] font-medium text-[#1B123D] font-instrument-sans">Email</label>
                <input
                  required
                  type="email"
                  placeholder="information@office.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white rounded-[16px] border border-[#E7E7E7] px-6 py-4 text-[16px] font-instrument-sans focus:outline-none focus:border-[#1344FE]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[16px] font-medium text-[#1B123D] font-instrument-sans">Patient Type</label>
                <select
                  required
                  value={form.patientType}
                  onChange={(e) => setForm({ ...form, patientType: e.target.value })}
                  className="w-full bg-white rounded-[16px] border border-[#E7E7E7] px-6 py-4 text-[16px] font-instrument-sans focus:outline-none focus:border-[#1344FE] appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%231B123D%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m19%209-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:24px] bg-[right_1.5rem_center] bg-no-repeat"
                >
                  <option value="" disabled>Select Patient Type</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Nutrition">Nutrition</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[16px] font-medium text-[#1B123D] font-instrument-sans">Message</label>
                <textarea
                  required
                  placeholder="Write Your Message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white rounded-[16px] border border-[#E7E7E7] px-6 py-4 text-[16px] font-instrument-sans focus:outline-none focus:border-[#1344FE] resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 rounded-[12px] bg-[#1344FE] text-white text-[18px] font-medium transition-all hover:bg-[#1B123D] hover:text-white"
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
