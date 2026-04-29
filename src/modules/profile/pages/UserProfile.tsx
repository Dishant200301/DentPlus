import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2, User, Calendar, Mail, Phone, X, ArrowRight, LogOut, ClipboardList } from 'lucide-react';
import { useWebAuth } from '../../auth/context/WebAuthContext';
import { mockDb, Appointment } from '@/lib/api/mockDb';
import { BadgePill } from '@/modules/core/components/BadgePill';
import { PrimaryButton } from '@/modules/core/components/PrimaryButton';
import { toast } from 'sonner';

const formatDateDMY = (dateStr: string) => {
  const d = new Date(dateStr);
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
};

// ── Appointments Tab ──────────────────────────────────────────────────────────
const AppointmentsTab = ({ userId }: { userId: string }) => {
  const [bookings, setBookings] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      const data = mockDb.getUserAppointments(userId);
      setBookings(data);
      setLoading(false);
    };
    fetchBookings();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#1344fe]" />
        <p className="text-[#636977] font-medium">Loading your appointments...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {bookings.length === 0 ? (
        <div className="bg-white border border-[#e7e7e7] rounded-3xl p-12 text-center">
            <ClipboardList className="w-12 h-12 text-[#636977]/20 mx-auto mb-4" />
            <p className="text-[16px] font-medium text-[#636977]">No appointments found.</p>
            <div className="mt-6">
                <PrimaryButton to="/appointment" size="sm" variant="blue">Book Your First Visit</PrimaryButton>
            </div>
        </div>
      ) : (
        <div className="grid gap-4">
            {bookings.map((booking) => (
                <div key={booking.id} className="bg-white border border-[#e7e7e7] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#1344fe]/5 rounded-xl flex items-center justify-center text-[#1344fe]">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-[11px] sm:text-[13px] font-bold text-[#636977] uppercase tracking-wider">{booking.service}</p>
                            <h3 className="text-[16px] sm:text-[18px] font-medium text-[#1b123d]">{formatDateDMY(booking.date)} at {booking.time}</h3>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-[#e7e7e7]">
                        <div className="text-right hidden md:block">
                            <p className="text-[13px] text-[#636977]">Doctor</p>
                            <p className="text-[15px] font-medium text-[#1b123d]">{booking.doctor}</p>
                        </div>
                        
                        <div className={`px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider ${
                            booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                            booking.status === 'cancelled' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                            {booking.status}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

// ── Profile Tab ────────────────────────────────────────────────────────────
const ProfileTab = ({ user, logout, navigate }: { user: any, logout: any, navigate: any }) => (
  <div className="w-full bg-white border border-[#e7e7e7] rounded-3xl p-4 md:p-10">
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#1344fe]/10 flex items-center justify-center text-[#1344fe] font-bold text-2xl md:text-3xl border border-[#1344fe]/20 flex-shrink-0">
          {user.name?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-medium text-[#1b123d] tracking-tight" style={{ fontFamily: "Poppins" }}>{user.name}</h2>
          <p className="text-[#636977] break-all text-[14px] md:text-base">{user.email}</p>
        </div>
      </div>

        <div className="grid md:grid-cols-2 gap-4">
        {[
          { icon: <Mail className="w-5 h-5" />, label: 'Email Address', value: user.email },
          { icon: <Phone className="w-5 h-5" />, label: 'Phone Number', value: user.phone || 'Not provided' },
          { icon: <User className="w-5 h-5" />, label: 'Account ID', value: user.id },
          { icon: <Calendar className="w-5 h-5" />, label: 'Joined On', value: formatDateDMY(user.createdAt) },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-5 bg-[#F8F9FA] rounded-2xl border border-[#e7e7e7] overflow-hidden">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#1344fe] shadow-sm flex-shrink-0">
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#636977] uppercase tracking-widest mb-0.5">{item.label}</p>
              <p className="text-[15px] font-medium text-[#1b123d] break-all">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 flex justify-end">
        <button 
            onClick={() => { logout(); navigate('/'); toast.success("Logged out successfully"); }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-red-600 font-bold hover:bg-red-50 transition-colors"
        >
            <LogOut className="w-5 h-5" /> Sign Out
        </button>
      </div>
    </div>
  </div>
);

// ── Main UserProfile Page ────────────────────────────────────────────────────
const UserProfile = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, loading: authLoading, logout } = useWebAuth();

  const activeTab = (searchParams.get('tab') || 'appointments') as 'profile' | 'appointments';

  const setTab = (tab: 'profile' | 'appointments') => {
    setSearchParams({ tab });
  };

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
        <Loader2 className="h-10 w-10 animate-spin text-[#1344fe]" />
        <p className="text-[#636977] font-medium">Loading profile...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="pt-20 pb-20 min-h-screen bg-[#F8F9FA]">
      <div className="container mx-auto px-4 xl:px-0 max-w-[1140px]">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
                <BadgePill variant="light">Patient Portal</BadgePill>
                <h1 className="mt-4 text-[30px] md:text-[40px] font-medium text-[#1b123d] tracking-tight leading-none" style={{ fontFamily: "Poppins" }}>
                   Your Dashboard
                </h1>
            </div>
            
            <div className="flex items-center w-full md:w-auto bg-white p-1.5 rounded-2xl border border-[#e7e7e7] shadow-sm">
                {[
                    { key: 'appointments', label: 'Appointments' },
                    { key: 'profile', label: 'My Info' },
                ].map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setTab(key as any)}
                        className={`
                            flex-1 md:flex-none px-6 py-3 text-[14px] font-bold rounded-xl transition-all
                            ${activeTab === key
                                ? 'bg-[#1b123d] text-white shadow-md'
                                : 'text-[#636977] hover:text-[#1b123d]'
                            }
                        `}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === 'profile' && <ProfileTab user={user} logout={logout} navigate={navigate} />}
          {activeTab === 'appointments' && <AppointmentsTab userId={user.id} />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
