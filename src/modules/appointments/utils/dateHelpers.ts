export const formatDateToString = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const getNextNDays = (n: number): Date[] => {
  const days = [];
  const start = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
};

export const formatDayName = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
};

export const formatDayNumber = (date: Date): string => {
  return date.getDate().toString();
};

export const formatMonthName = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
};

export const formatFullDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  }).format(date);
};
