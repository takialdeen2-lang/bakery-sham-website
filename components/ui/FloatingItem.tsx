'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingItemProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  xOffset?: number;
  yOffset?: number;
}

export default function FloatingItem({ 
  children, 
  delay = 0, 
  duration = 4, 
  className = "",
  xOffset = 10,
  yOffset = 20
}: FloatingItemProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, x: 0 }}
      animate={{ 
        y: [0, -yOffset, 0],
        x: [0, xOffset, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}
