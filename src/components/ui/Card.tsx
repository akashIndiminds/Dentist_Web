// src/components/ui/Card.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const variants = {
    default: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100',
    elevated: 'bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6',
    bordered: 'bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 p-6',
  };

  return (
    <div className={cn(variants[variant], className)} {...props}>
      {children}
    </div>
  );
};

