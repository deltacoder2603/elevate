import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Prizes', href: '/prizes' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/90 backdrop-blur-xl border border-border shadow-2xl rounded-2xl'
        : 'bg-background/80 backdrop-blur-lg border border-border/50 shadow-xl rounded-2xl'
        }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg sm:text-xl block">
              ELEVATE <span className="text-primary">2026</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.href.startsWith('/')) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              } else {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                );
              }
            })}
          </div>

          {/* CTA Buttons & Timer */}
          <div className="hidden md:flex items-center gap-4">
            <CountdownTimer variant="compact" />
            <Button variant="default" size="sm" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3URig7_0jHiEX2BZb0CxAvw4yBlzYcb64ouUp9sftBpBusg/viewform?usp=send_form" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => {
              if (link.href.startsWith('/')) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                );
              } else {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                );
              }
            })}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full">
                Login
              </Button>
              <Button variant="default" className="w-full" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3URig7_0jHiEX2BZb0CxAvw4yBlzYcb64ouUp9sftBpBusg/viewform?usp=send_form" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
