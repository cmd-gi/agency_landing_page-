"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

interface BannerProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  className?: string;
}

interface FloatingShapeProps {
  type: 'circle' | 'square' | 'triangle' | 'hexagon';
  size: number;
  color: string;
  duration: number;
  delay: number;
  x: number;
  y: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ 
  type, 
  size, 
  color, 
  duration, 
  delay, 
  x, 
  y 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const shapeX = useTransform(mouseX, [-100, 100], [-20, 20]);
  const shapeY = useTransform(mouseY, [-100, 100], [-20, 20]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const getShapeStyles = () => {
    const baseStyles = {
      width: size,
      height: size,
      background: color,
      position: 'absolute' as const,
      left: `${x}%`,
      top: `${y}%`,
      opacity: 0.7,
      filter: 'blur(0.5px)',
    };

    switch (type) {
      case 'circle':
        return { ...baseStyles, borderRadius: '50%' };
      case 'square':
        return { ...baseStyles, borderRadius: '4px' };
      case 'triangle':
        return {
          ...baseStyles,
          width: 0,
          height: 0,
          background: 'transparent',
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
        };
      case 'hexagon':
        return {
          ...baseStyles,
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        };
      default:
        return baseStyles;
    }
  };

  return (
    <motion.div
      style={{
        ...getShapeStyles(),
        x: shapeX,
        y: shapeY,
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      onMouseMove={handleMouseMove}
      whileHover={{
        scale: 1.5,
        opacity: 1,
        transition: { duration: 0.3 },
      }}
    />
  );
};

export const InteractiveBanner: React.FC<BannerProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  className = '',
}) => {
  const [gradientIndex, setGradientIndex] = useState(0);
  const controls = useAnimation();

  const gradients = [
    'linear-gradient(135deg, #1E3A8A 0%, #0891B2 50%, #10B981 100%)',
    'linear-gradient(135deg, #0891B2 0%, #10B981 50%, #F59E0B 100%)',
    'linear-gradient(135deg, #10B981 0%, #F59E0B 50%, #1E3A8A 100%)',
    'linear-gradient(135deg, #F59E0B 0%, #1E3A8A 50%, #0891B2 100%)',
  ];

  const shapes = [
    { type: 'circle' as const, size: 80, color: '#10B981', duration: 8, delay: 0, x: 10, y: 20 },
    { type: 'square' as const, size: 60, color: '#F59E0B', duration: 12, delay: 2, x: 85, y: 15 },
    { type: 'triangle' as const, size: 70, color: '#0891B2', duration: 10, delay: 4, x: 75, y: 70 },
    { type: 'hexagon' as const, size: 50, color: '#1E3A8A', duration: 15, delay: 1, x: 20, y: 80 },
    { type: 'circle' as const, size: 40, color: '#10B981', duration: 9, delay: 3, x: 60, y: 30 },
    { type: 'square' as const, size: 35, color: '#F59E0B', duration: 11, delay: 5, x: 30, y: 60 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [gradients.length]);

  useEffect(() => {
    controls.start({
      background: gradients[gradientIndex],
      transition: { duration: 2, ease: 'easeInOut' },
    });
  }, [gradientIndex, controls, gradients]);

  return (
    <motion.section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="banner"
      aria-label="Interactive hero banner"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={controls}
        initial={{ background: gradients[0] }}
      />

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            type={shape.type}
            size={shape.size}
            color={shape.color}
            duration={shape.duration}
            delay={shape.delay}
            x={shape.x}
            y={shape.y}
          />
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-primary)' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-secondary)' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={onPrimaryClick}
              className="bg-gradient-to-r from-teal-500 to-bright-green-500 hover:from-teal-600 hover:to-bright-green-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
              size="lg"
              aria-label={`${primaryButtonText} - Primary action`}
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={onSecondaryClick}
              variant="outline"
              className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 text-lg group"
              size="lg"
              aria-label={`${secondaryButtonText} - Secondary action`}
            >
              <Target className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              {secondaryButtonText}
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="mt-12 flex justify-center space-x-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[Zap, Sparkles, Target].map((Icon, index) => (
            <motion.div
              key={index}
              className="text-white/70 hover:text-white transition-colors duration-300"
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                color: '#10B981' 
              }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};