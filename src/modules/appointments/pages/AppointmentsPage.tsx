import { useState } from "react";
import { BadgePill } from "@/modules/core/components/BadgePill";
import { useFadeIn } from "@/hooks/use-fade-in";
import DateSelector from "../components/DateSelector";
import TimeSlotGrid from "../components/TimeSlotGrid";
import BookingModal from "../components/BookingModal";
import { Helmet } from "react-helmet-async";

export default function AppointmentPage() {
  const fade = useFadeIn();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTime(null);
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment - DentPlus Dental Care</title>
      </Helmet>
      
      <section className="container-px mx-auto pt-10 pb-20 md:pb-28">
        {/* Hero Section */}
        <div ref={fade.ref} className={`text-center max-w-3xl mx-auto ${fade.className}`}>
          <div className="flex justify-center mb-6">
            <BadgePill variant="light">Limited Slots Available</BadgePill>
          </div>
          <h1 className="text-[32px] md:text-[64px] leading-[1.1] font-medium text-[#1b123d] mb-6 tracking-tight" style={{ fontFamily: "Poppins" }}>
            Easy Booking for<br />Premium Care
          </h1>
          <p className="text-[16px] md:text-[17px] text-[#636977] leading-relaxed max-w-2xl mx-auto">
            Experience world-class dental care. Select your preferred date and time below to schedule your visit with our expert specialists.
          </p>
        </div>

        {/* Calendar Selection Area */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white border border-[#e7e7e7] rounded-2xl p-4 md:p-8 shadow-sm">
            <div className="space-y-12">
              {/* Step 1: Date */}
              <DateSelector 
                selectedDate={selectedDate} 
                onSelectDate={(date) => {
                  setSelectedDate(date);
                  setSelectedTime(null);
                }} 
              />
              
              <div className="h-px bg-[#e7e7e7]"></div>

              {/* Step 2: Time */}
              <div className="animate-in fade-in duration-700">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-[18px] font-medium text-[#1b123d]" style={{ fontFamily: 'Poppins' }}>Select Available Time</h3>
                  <div className="hidden md:flex items-center gap-4 text-[13px] text-[#636977]">
                    
                    
                  </div>
                </div>
                
                <TimeSlotGrid 
                  selectedTime={selectedTime}
                  onSelectTime={handleTimeSelect}
                />
              </div>
            </div>
          </div>
        </div>

        <BookingModal 
          isOpen={isModalOpen}
          onClose={handleModalClose}
          date={selectedDate}
          time={selectedTime || ''}
        />
        
        {/* Info Note */}
        <div className="mt-12 text-center">
            <p className="text-[15px] text-[#636977]">
                <span className="font-bold text-[#1b123d]">Note:</span> For emergency cases, please call us directly at <span className="text-[#1344fe] font-medium">(555) 123-4567</span>
            </p>
        </div>
      </section>
    </>
  );
}
