'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionProps } from 'framer-motion';

interface ScrollAnimationProps extends MotionProps {
  children: React.ReactNode;
}

export const ScrollAnimation = React.forwardRef<
  HTMLDivElement,
  ScrollAnimationProps
>(function ScrollAnimation({ children }, ref) {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // const x = useTransform(scrollYProgress, [0, 1], [-300, 200]);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [-2, 1.5]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [100, 0]);
  // const translate = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className='h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20'
      ref={containerRef}
    >
      <motion.div
        className='py-10 md:py-40 w-full relative'
        style={{
          // perspective: '1000px',
          transition: 'all 0.5s ease'
          // scale: scale
        }}
      >
        {children}
      </motion.div>
    </div>
  );
});

ScrollAnimation.displayName = 'ScrollAnimation';
