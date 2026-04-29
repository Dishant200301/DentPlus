import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { User, Mail, Phone, Lock, Loader2, Info } from 'lucide-react';
import { useWebAuth } from '../context/WebAuthContext';
import { authService } from '../services/authService';
import { PrimaryButton } from '@/modules/core/components/PrimaryButton';
import { BadgePill } from '@/modules/core/components/BadgePill';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { user, login } = useWebAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { confirmPassword, ...registerData } = formData;
      const result = await authService.register(registerData);

      if (result.success && result.data) {
        login(result.data);
        navigate('/dashboard'); 
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Account - DentPlus Dental Care</title>
      </Helmet>
      
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center pt-28 pb-20 px-4">
        <div className="max-w-md w-full bg-white rounded-[24px] sm:rounded-[32px] border border-[#e7e7e7] p-6 sm:p-10 shadow-sm">
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <BadgePill variant="light">Join Us</BadgePill>
            </div>
            <h2 className="text-[#1b123d] text-2xl sm:text-3xl font-medium tracking-tight mb-2" style={{ fontFamily: "Poppins" }}>Create Account</h2>
            <p className="text-[#636977] text-[14px] sm:text-[15px]">Join our patient portal for easy booking.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 text-sm p-4 rounded-2xl flex items-center gap-3 mb-6 border border-red-100">
              <Info className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#636977] ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#636977]/40" />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full h-[56px] pl-12 pr-4 bg-white border border-[#e7e7e7] rounded-2xl focus:border-[#1344fe] focus:ring-1 focus:ring-[#1344fe] transition-all outline-none text-[#1b123d]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#636977] ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#636977]/40" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full h-[56px] pl-12 pr-4 bg-white border border-[#e7e7e7] rounded-2xl focus:border-[#1344fe] focus:ring-1 focus:ring-[#1344fe] transition-all outline-none text-[#1b123d]"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#636977] ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#636977]/40" />
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full h-[56px] pl-12 pr-4 bg-white border border-[#e7e7e7] rounded-2xl focus:border-[#1344fe] focus:ring-1 focus:ring-[#1344fe] transition-all outline-none text-[#1b123d]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#636977] ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#636977]/40" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full h-[56px] pl-12 pr-4 bg-white border border-[#e7e7e7] rounded-2xl focus:border-[#1344fe] focus:ring-1 focus:ring-[#1344fe] transition-all outline-none text-[#1b123d]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#636977] ml-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#636977]/40" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full h-[56px] pl-12 pr-4 bg-white border border-[#e7e7e7] rounded-2xl focus:border-[#1344fe] focus:ring-1 focus:ring-[#1344fe] transition-all outline-none text-[#1b123d]"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <PrimaryButton 
                type="submit" 
                variant="blue"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </PrimaryButton>
            </div>
          </form>

          <div className="mt-8 text-center text-[#636977] text-[15px]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#1344fe] font-semibold hover:underline">
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default RegisterPage;
