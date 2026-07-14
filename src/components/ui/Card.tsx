import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    glass?: boolean;
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', children, glass = true, hoverEffect = true, ...props }, ref) => {
        const baseStyle = "rounded-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden";
        const glassStyle = glass ? "glass" : "bg-surface border border-borderColor";

        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
                className={`${baseStyle} ${glassStyle} ${className}`}
                {...props}
            >
                {/* Subtle top glare/gradient for depth */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                {children}
            </motion.div>
        );
    }
);
Card.displayName = 'Card';
