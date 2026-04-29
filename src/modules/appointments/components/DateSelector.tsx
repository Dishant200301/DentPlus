import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  getNextNDays, 
  formatDayName, 
  formatDayNumber, 
  formatMonthName,
  formatDateToString
} from '../utils/dateHelpers';

interface DateSelectorProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onSelectDate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dates = getNextNDays(30);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[18px] font-medium text-[#1b123d]" style={{ fontFamily: 'Poppins' }}>Select Date</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-[#e7e7e7] flex items-center justify-center text-[#636977] hover:bg-[#1344fe] hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-[#e7e7e7] flex items-center justify-center text-[#636977] hover:bg-[#1344fe] hover:text-white transition-all shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex items-center gap-3 overflow-x-auto py-2 pb-4 no-scrollbar scroll-smooth"
      >
        {dates.map((date, i) => {
          const isSelected = formatDateToString(date) === formatDateToString(selectedDate);
          return (
            <button
              key={i}
              onClick={() => onSelectDate(date)}
              className={`
                flex-shrink-0 w-[80px] h-[100px] rounded-2xl border transition-all flex flex-col items-center justify-center gap-1
                ${isSelected 
                  ? 'bg-[#1b123d] border-[#1b123d] text-white shadow-lg lg:scale-105' 
                  : 'bg-white border-[#e7e7e7] text-[#636977] hover:border-[#1344fe] hover:text-[#1344fe]'
                }
              `}
            >
              <span className="text-[12px] font-bold uppercase tracking-wider">{formatDayName(date)}</span>
              <span className="text-[24px] font-medium leading-none" style={{ fontFamily: 'Poppins' }}>{formatDayNumber(date)}</span>
              <span className="text-[12px] opacity-70">{formatMonthName(date)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DateSelector;
