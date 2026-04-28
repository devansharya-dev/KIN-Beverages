import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home',    href: '/#hero' },
    { name: 'About',   href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-[100] flex items-center justify-center transition-all duration-700 pointer-events-none ${
          scrolled ? 'top-4 md:top-6' : 'top-0'
        }`}
      >
        <div
          className={`relative flex items-center justify-between px-6 md:px-10 transition-all duration-700 pointer-events-auto ${
            scrolled
              ? 'h-[64px] md:h-[74px] w-[92%] md:w-[90%] lg:w-[1100px] bg-white/95 backdrop-blur-xl border border-black/10 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.1)]'
              : 'h-[90px] md:h-[110px] w-full bg-[var(--color-bg)]/80 backdrop-blur-sm border-b border-black/5'
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/#hero"
            className="flex items-center gap-1 cursor-pointer hover:opacity-60 transition-opacity z-[110]"
          >
            <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.05em] text-[#0C0C0C] font-heading">
              KIN
            </h2>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2 relative">
            <AnimatePresence>
              {hoveredLink && (
                <motion.div
                  layoutId="nav-highlight"
                  className="absolute bg-black/[0.05] rounded-full h-10 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  style={{ left: hoveredLink.left, width: hoveredLink.width }}
                />
              )}
            </AnimatePresence>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onMouseEnter={(e) => {
                  const bounds = e.currentTarget.getBoundingClientRect();
                  const parentBounds = e.currentTarget.parentElement.getBoundingClientRect();
                  setHoveredLink({ left: bounds.left - parentBounds.left, width: bounds.width });
                }}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative z-10 px-6 py-2 cursor-pointer outline-none"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0C0C0C] font-body">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Hamburger */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="/partner"
              className="hidden md:inline-flex items-center justify-center px-8 py-3 rounded-full font-body text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 bg-black text-white hover:bg-[var(--color-primary)]"
            >
              Partner
            </Link>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative z-[110] flex flex-col justify-center items-center w-10 h-10 gap-1.5 outline-none"
            >
              <div className={`h-[2px] bg-black transition-all duration-500 ease-in-out ${
                isOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'
              }`} />
              <div className={`h-[2px] bg-black transition-all duration-500 ease-in-out ${
                isOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-6'
              }`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.2, 1, 0.2, 1] }}
            className="fixed inset-0 bg-[#F2F3EC] z-[90] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-[42px] md:text-[80px] font-bold tracking-tighter text-black transition-all duration-500 hover:italic cursor-pointer outline-none"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length }}
              >
                <Link
                  to="/partner"
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-[42px] md:text-[80px] font-bold tracking-tighter text-[var(--color-primary)] transition-all duration-500 hover:italic mt-4 block"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}