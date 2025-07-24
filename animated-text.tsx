"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility from shadcn/ui

type AnimatedTextProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps;

/**
 * A component that applies an animated "highlight" effect to its children.
 * The animation triggers when the component scrolls into view.
 */
export const AnimatedHighlight = ({
  children,
  className,
  ...props
}: AnimatedTextProps) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
      variants={{
        hidden: { backgroundSize: "0% 100%" },
        visible: { backgroundSize: "100% 100%" },
      }}
      style={{
        backgroundImage: "linear-gradient(to top, #facc15 60%, transparent 60%)",
      }}
      className={cn("relative bg-left-bottom bg-no-repeat", className)}
      {...props}
    >
      {children}
    </motion.span>
  );
};

/**
 * A component that applies an animated "underline" effect to its children.
 * The animation triggers when the component scrolls into view.
 */
export const AnimatedUnderline = ({
  children,
  className,
  ...props
}: AnimatedTextProps) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      variants={{
        hidden: { backgroundSize: "0% 2px" },
        visible: { backgroundSize: "100% 2px" },
      }}
      className={cn(
        "relative bg-gradient-to-r from-yellow-400 to-yellow-400 bg-no-repeat bg-bottom",
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
};