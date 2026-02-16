import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useSpring, useTransform, SpringOptions } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mouseX = useSpring(0, {
    stiffness: 50, // Reduced stiffness for smoother lag
    damping: 20,   // Increased damping for "heavier" feel
    mass: 1,
  });
  const mouseY = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      // Calculate position relative to the viewport or container?
      // Since the spotlight is usually fixed or absolute in a section, 
      // let's just use client coordinates but we typically want it to follow closely.
      // However, the original Aceternity effect is often a fixed animation or follows mouse.
      // Let's implement a nice subtle follow if desired, OR just the standard fixed spotlight animation.
      // BUT, the standard "Spotlight" component from Aceternity is actually an SVG animation.
      // Let's stick to the SVG animation as per standard Aceternity "Spotlight".
    },
    []
  );

  return (
    <motion.svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};
