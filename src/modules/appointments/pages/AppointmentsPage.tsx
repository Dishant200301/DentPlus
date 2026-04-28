import { useState } from "react";
import { toast } from "sonner";
import { BadgePill } from "@/modules/core/components/BadgePill";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";
import { useFadeIn } from "@/hooks/use-fade-in";
import { services, doctors } from "@/lib/data";

export default function AppointmentPage() {
  const fade = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", doctor: "", date: "", time: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment requested! We'll confirm shortly.");
    setForm({ name: "", email: "", phone: "", service: "", doctor: "", date: "", time: "", message: "" });
  };

  return (
    <section className="container-px mx-auto pt-10 pb-20">
      <div ref={fade.ref} className={`text-center max-w-3xl mx-auto ${fade.className}`}>
        <BadgePill variant="light">Book Appointment</BadgePill>
        <h1 className="mt-5 text-[40px] md:text-[56px] leading-[1.1] font-medium text-[#1b123d]" style={{ fontFamily: "Poppins" }}>
          Schedule Your Visit<br />with Our Expert Team
        </h1>
        <p className="mt-4 text-[16px] text-[#636977]">Pick your preferred specialist and time. We'll get back to confirm within 24 hours.</p>
      </div>

      <form onSubmit={submit} className="mt-10 max-w-3xl mx-auto bg-white border border-[#e7e7e7] rounded-3xl p-6 md:p-10 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Full Name" value={form.name} onChange={(v) => setForm({...form, name: v})} required />
          <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({...form, email: v})} required />
          <Input label="Phone" value={form.phone} onChange={(v) => setForm({...form, phone: v})} required />
          <Select label="Service" value={form.service} onChange={(v) => setForm({...form, service: v})} options={services.map(s => s.name)} required />
          <Select label="Doctor" value={form.doctor} onChange={(v) => setForm({...form, doctor: v})} options={doctors.map(d => d.name)} required />
          <Input label="Preferred Date" type="date" value={form.date} onChange={(v) => setForm({...form, date: v})} required />
          <Input label="Preferred Time" type="time" value={form.time} onChange={(v) => setForm({...form, time: v})} required />
        </div>
        <div>
          <label className="text-[13px] text-[#636977]">Message</label>
          <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows={4} className="w-full mt-1 border border-[#e7e7e7] rounded-xl px-4 py-3 text-[15px]" />
        </div>
        <div className="pt-2">
          <PrimaryButton type="submit" variant="blue">Confirm Appointment</PrimaryButton>
        </div>
      </form>
    </section>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[13px] text-[#636977]">{label}</label>
      <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="w-full mt-1 border border-[#e7e7e7] rounded-xl px-4 py-3 text-[15px]" />
    </div>
  );
}

function Select({ label, value, onChange, options, required }: { label: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="text-[13px] text-[#636977]">{label}</label>
      <select required={required} value={value} onChange={(e) => onChange(e.target.value)} className="w-full mt-1 border border-[#e7e7e7] rounded-xl px-4 py-3 text-[15px] bg-white">
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
