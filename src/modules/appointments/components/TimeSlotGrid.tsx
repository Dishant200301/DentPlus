import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotGridProps {
  onSelectTime: (time: string) => void;
  selectedTime: string | null;
}

const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({ onSelectTime, selectedTime }) => {
  const morningSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
  const afternoonSlots = ['01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'];

  const SlotButton = ({ time }: { time: string }) => {
    const isSelected = selectedTime === time;
    return (
      <button
        onClick={() => onSelectTime(time)}
        className={`
          h-12 rounded-xl border text-[14px] font-medium transition-all flex items-center justify-center gap-2
          ${isSelected
            ? 'bg-[#1344fe] border-[#1344fe] text-white shadow-md'
            : 'bg-white border-[#e7e7e7] text-[#636977] hover:border-[#1344fe] hover:text-[#1344fe]'
          }
        `}
      >
        <Clock className="w-4 h-4 opacity-70" />
        {time}
      </button>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[14px] font-bold text-[#636977] uppercase tracking-widest">Morning</span>
          <div className="h-px flex-1 bg-[#e7e7e7]"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {morningSlots.map(time => <SlotButton key={time} time={time} />)}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[14px] font-bold text-[#636977] uppercase tracking-widest">Afternoon</span>
          <div className="h-px flex-1 bg-[#e7e7e7]"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {afternoonSlots.map(time => <SlotButton key={time} time={time} />)}
        </div>
      </div>
    </div>
  );
};

export default TimeSlotGrid;
