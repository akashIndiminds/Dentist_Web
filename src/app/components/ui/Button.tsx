// src/components/ui/Button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = cn(
    'font-semibold rounded-lg transition-all duration-300',
    'inline-flex items-center justify-center gap-2',
    'focus-ring active:scale-95',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'touch-manipulation' // Better mobile touch
  );
  
  const variants = {
    primary: cn(
      'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white',
      'shadow-md hover:shadow-lg active:shadow-sm',
      'border border-blue-600 hover:border-blue-700'
    ),
    secondary: cn(
      'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white',
      'shadow-md hover:shadow-lg active:shadow-sm',
      'border border-amber-500 hover:border-amber-600'
    ),
    outline: cn(
      'bg-white hover:bg-gray-50 active:bg-gray-100 text-blue-600',
      'border-2 border-blue-600 hover:border-blue-700',
      'shadow-sm hover:shadow-md'
    ),
  };
  
  const sizes = {
    sm: 'px-4 py-2.5 text-sm min-h-[40px] min-w-[80px]',
    md: 'px-6 py-3 text-base min-h-[48px] min-w-[100px]',
    lg: 'px-8 py-4 text-lg min-h-[56px] min-w-[120px]',
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};