import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/blog", label: "Blog" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e7e7e7]">
      <div className="container mx-auto px-2 md:px-4 lg:px-4 xl:px-0 flex items-center justify-between h-[70px] md:h-[90px] max-w-[1140px]">
        {/* Logo (Left Side) */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation Link (Center) - Only for XL+ screens */}
        <nav className="hidden xl:flex items-center gap-1 rounded-full border border-[#E7E7E7] bg-white p-1 h-12 backdrop-blur-[2.5px]">
          {links.map((l) => {
            const active = isActive(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-2 rounded-full text-[16px] transition-all duration-300 ease-in-out flex items-center h-full hover:scale-105",
                  active ? "bg-[#1B123D] text-white" : "text-[#636977] hover:text-[#1B123D] hover:bg-[#F5F6F9]"
                )}
                style={{ fontFamily: "Instrument Sans", letterSpacing: "-0.16px" }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className={cn(
              "px-4 py-2 rounded-full text-[16px] transition-all duration-300 ease-in-out flex items-center h-full hover:scale-105",
              pathname === "/contact" ? "bg-[#1B123D] text-white" : "text-[#636977] hover:text-[#1B123D] hover:bg-[#F5F6F9]"
            )}
            style={{ fontFamily: "Instrument Sans", letterSpacing: "-0.16px" }}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Appointment Button (Right) - Only for XL+ screens */}
        <Link
          to="/appointment"
          className="hidden xl:inline-flex group relative items-center rounded-full border border-[#F5F6F9] bg-white h-12 w-[185px] overflow-hidden transition-all duration-500 ease-in-out"
        >
          <span
            className="absolute left-[54px] text-[16px] text-[#1B123D] font-medium transition-all duration-500 ease-in-out group-hover:left-[16px]"
            style={{ fontFamily: "Instrument Sans", letterSpacing: "-0.16px" }}
          >
            Appointment
          </span>
          <span className="absolute left-[6px] w-9 h-9 rounded-full bg-[#1344FE] flex items-center justify-center transition-all duration-500 ease-in-out group-hover:-translate-x-12 group-hover:opacity-0">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </span>
          <span className="absolute left-[-40px] w-9 h-9 rounded-full bg-[#1344FE] flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 group-hover:left-[143px] group-hover:opacity-100">
            <span className="relative w-full h-full flex items-center justify-center">
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </span>
          </span>
        </Link>

        {/* Mobile/Tablet Menu Toggle (Right Side) */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden w-[42px] h-[42px] md:w-[50px] md:h-[50px] rounded-full bg-[#1344FE] flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-5 h-[2px] bg-white rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-5 h-[2px] bg-white rounded-full"
          />
        </button>
      </div>

      {/* High-Fidelity Mobile/Tablet Dropdown Menu - EXACTLY as reference image */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="xl:hidden fixed left-4 right-4 bottom-2 top-[80px] md:top-[100px] z-[100] bg-white rounded-xl overflow-hidden shadow-[0px_35px_55px_rgba(27,18,61,0.15)] border border-[#E7E7E7]"
          >
            <div className="p-10 flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-[24px] font-normal transition-all hover:text-[#1344FE]",
                      isActive(l.to) ? "text-[#1B123D] font-medium" : "text-[#7B818F]"
                    )}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              {/* High-Fidelity Explore More Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full mt-6"
              >
                <Link
                  to="/appointment"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 bg-white border border-[#F5F6F9] rounded-full p-2 pr-12 w-fit mx-auto shadow-[0px_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <div className="w-[50px] h-[50px] rounded-full bg-[#1344FE] flex items-center justify-center text-white">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                  <span
                    className="text-[20px] md:text-[24px] font-medium text-[#1B123D]"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Appointment
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
