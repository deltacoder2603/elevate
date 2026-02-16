import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* PSIT Campus Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105"
      >
        <source src="/elevate2026/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Yellow glow effect */}
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-5xl mx-auto text-center transition-all duration-300 mt-0 sm:-mt-20 md:-mt-32">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center relative z-10"
            style={{ marginBottom: '0px' }}
          >
            <img
              src="/elevate2026/logo.png"
              alt="ELEVATE 2026"
              className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-muted-foreground/90 max-w-xl md:max-w-2xl mx-auto mb-8 relative z-20 px-6 leading-tight text-white mt-[-60px]"
          >
            The ultimate startup conclave bringing together the brightest minds for{' '}
            <span className="text-primary font-semibold">innovation</span>,{' '}
            <span className="text-primary font-semibold">creativity</span>, and{' '}
            <span className="text-primary font-semibold">competition</span>
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
          >
            <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3URig7_0jHiEX2BZb0CxAvw4yBlzYcb64ouUp9sftBpBusg/viewform?usp=send_form" target="_blank" rel="noopener noreferrer">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
              </a>
            </Button>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;