import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatFullDate } from '../utils/dateHelpers';
import { useWebAuth } from '@/modules/auth/context/WebAuthContext';
import { PrimaryButton } from '@/modules/core/components/PrimaryButton';
import { services, doctors } from '@/lib/data';
import { bookingService } from '../services/bookingService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: Date;
  time: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, date, time }) => {
  const { user } = useWebAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    doctor: '',
    message: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || ''
      }));
    }
  }, [user, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service || !formData.doctor || !formData.phone) {
        toast.error("Please fill in all required fields");
        return;
    }

    setLoading(true);
    try {
      const result = await bookingService.createBooking({
        userId: user?.id || 'guest',
        patientName: formData.name,
        patientEmail: formData.email,
        patientPhone: formData.phone,
        service: formData.service,
        doctor: formData.doctor,
        date: date.toISOString().split('T')[0],
        time: time,
        message: formData.message
      });

      if (result.success) {
        toast.success("Appointment booked successfully!");
        onClose();
        if (user) {
          navigate('/dashboard?tab=appointments');
        } else {
          // If guest, maybe just clear or stay
          navigate('/');
        }
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to book appointment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1b123d]/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1b123d] p-6 sm:p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4" style={{ fontFamily: 'Poppins' }}>Booking Details</h2>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[12px] sm:text-sm font-medium border border-white/10">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 h-4" />
                  {formatFullDate(date)}
                </div>
                <div className="flex items-center gap-2 bg-[#1344fe] px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[12px] sm:text-sm font-bold border border-[#1344fe]">
                  <Clock className="w-3.5 h-3.5 sm:w-4 h-4" />
                  {time}
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 max-h-[75vh] overflow-y-auto no-scrollbar">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="space-y-1.5">
                  <label className="text-[12px] sm:text-[13px] font-bold text-[#636977] uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-[#636977]/30" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      disabled={!!user}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 bg-white border border-[#e7e7e7] rounded-xl sm:rounded-2xl focus:border-[#1344fe] outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] sm:text-[13px] font-bold text-[#636977] uppercase tracking-wider ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-[#636977]/30" />
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      disabled={!!user}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 bg-white border border-[#e7e7e7] rounded-xl sm:rounded-2xl focus:border-[#1344fe] outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] sm:text-[13px] font-bold text-[#636977] uppercase tracking-wider ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-[#636977]/30" />
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 bg-white border border-[#e7e7e7] rounded-xl sm:rounded-2xl focus:border-[#1344fe] outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] sm:text-[13px] font-bold text-[#636977] uppercase tracking-wider ml-1">Select Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full h-12 sm:h-14 px-4 bg-white border border-[#e7e7e7] rounded-xl sm:rounded-2xl focus:border-[#1344fe] outline-none transition-all appearance-none text-sm sm:text-base"
                  >
                    <option value="">Select Service...</option>
                    {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[12px] sm:text-[13px] font-bold text-[#636977] uppercase tracking-wider ml-1">Prefered Specialist</label>
                  <select 
                    value={formData.doctor}
                    onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                    className="w-full h-12 sm:h-14 px-4 bg-white border border-[#e7e7e7] rounded-xl sm:rounded-2xl focus:border-[#1344fe] outline-none transition-all appearance-none text-sm sm:text-base"
                  >
                    <option value="">Select Doctor...</option>
                    {doctors.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[12px] sm:text-[13px] font-bold text-[#636977] uppercase tracking-wider ml-1">Notes (Optional)</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 w-4 sm:w-5 h-4 sm:h-5 text-[#636977]/30" />
                    <textarea 
                      placeholder="Any specific instructions..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-white border border-[#e7e7e7] rounded-xl sm:rounded-2xl focus:border-[#1344fe] outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              <PrimaryButton 
                type="submit" 
                variant="blue" 
                className="w-full py-4 sm:py-5 rounded-xl sm:rounded-[20px]"
                size="lg"
              >
                {loading ? (
                    <span className="flex items-center gap-2 text-sm sm:text-base"><Loader2 className="w-4 h-4 sm:w-5 h-5 animate-spin" /> Booking...</span>
                ) : "Confirm Appointment"}
              </PrimaryButton>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
