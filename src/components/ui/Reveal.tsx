'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
  immediate?: boolean;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  scale = false,
  immediate = false,
  className = '',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initialOffset =
    direction === 'up'
      ? { y: 30, x: 0 }
      : direction === 'down'
      ? { y: -30, x: 0 }
      : direction === 'left'
      ? { x: 24, y: 0 }
      : { x: -24, y: 0 };

  const initialState = {
    opacity: 0,
    ...initialOffset,
    ...(scale ? { scale: 0.95 } : {}),
  };

  const targetState = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale ? { scale: 1 } : {}),
  };

  if (immediate) {
    return (
      <motion.div
        initial={initialState}
        animate={targetState}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initialState}
      whileInView={targetState}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
