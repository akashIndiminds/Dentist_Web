// src/components/ui/Card.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  spacing?: 'tight' | 'normal' | 'relaxed';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  spacing = 'normal',
  className,
  ...props
}) => {
  const baseClasses = cn(
    'bg-white rounded-xl transition-all duration-300',
    'overflow-hidden' // Prevents content overflow
  );

  const variants = {
    default: cn(
      'shadow-md hover:shadow-lg',
      'border border-gray-100 hover:border-gray-200'
    ),
    elevated: cn(
      'shadow-lg hover:shadow-xl',
      'hover:-translate-y-1'
    ),
    bordered: cn(
      'border-2 border-gray-200',
      'hover:border-blue-300 hover:shadow-md'
    ),
    gradient: cn(
      'bg-gradient-to-br from-white to-gray-50',
      'border border-blue-100 hover:border-blue-200',
      'shadow-md hover:shadow-lg'
    ),
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const spacingClasses = {
    tight: 'space-y-2',
    normal: 'space-y-4',
    relaxed: 'space-y-6',
  };

  return (
    <div 
      className={cn(
        baseClasses, 
        variants[variant], 
        paddingClasses[padding], 
        className
      )} 
      {...props}
    >
      <div className={spacingClasses[spacing]}>
        {children}
      </div>
    </div>
  );
};

// Card Header Component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('mb-4 pb-4 border-b border-gray-100', className)} {...props}>
      {children}
    </div>
  );
};

// Card Title Component
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  as: Component = 'h3',
  className,
  ...props
}) => {
  return (
    <Component 
      className={cn('font-semibold text-gray-900 leading-tight', className)} 
      {...props}
    >
      {children}
    </Component>
  );
};

// Card Content Component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('text-gray-600 leading-relaxed', className)} {...props}>
      {children}
    </div>
  );
};

// Card Footer Component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('mt-4 pt-4 border-t border-gray-100', className)} {...props}>
      {children}
    </div>
  );
};