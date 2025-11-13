
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  glow?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  glow = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer whitespace-nowrap';
  
  const variants = {
    primary: `bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 hover:from-cyan-300 hover:to-cyan-400 ${glow ? 'shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70' : ''}`,
    secondary: `bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-300 hover:to-yellow-400 ${glow ? 'shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70' : ''}`,
    ghost: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
