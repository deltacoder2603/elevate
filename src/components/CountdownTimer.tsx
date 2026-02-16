import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  variant?: 'default' | 'compact';
}

const CountdownTimer = ({ variant = 'default' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to February 24, 2026
    const targetDate = new Date('2026-02-24T00:00:00');

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'D', value: timeLeft.days },
    { label: 'H', value: timeLeft.hours },
    { label: 'M', value: timeLeft.minutes },
    { label: 'S', value: timeLeft.seconds },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2">
        <span className="text-sm font-medium text-muted-foreground mr-2 hidden sm:inline">Begins in:</span>
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-baseline">
            <span className="font-mono text-lg sm:text-xl font-bold text-primary">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-xs text-muted-foreground ml-1">{unit.label}</span>
            {index < timeUnits.length - 1 && (
              <span className="mx-1.5 text-muted-foreground/50">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Default large variant (modified slightly to use the prop structure but keep original design)
  const defaultTimeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
      {defaultTimeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative group"
        >
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6 min-w-[70px] sm:min-w-[100px] text-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_hsl(45_100%_51%/0.2)]">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <motion.span
              key={unit.value}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative block text-3xl sm:text-5xl font-bold text-primary font-heading"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.span>
            <span className="relative text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-2 block">
              {unit.label}
            </span>
          </div>

          {/* Separator */}
          {index < defaultTimeUnits.length - 1 && (
            <span className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 text-2xl text-primary/50 font-bold">
              :
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
