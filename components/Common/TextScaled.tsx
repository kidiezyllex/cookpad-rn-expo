import React from 'react';

type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

interface TextScaledProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  size?: FontSize;
  children: React.ReactNode;
  className?: string;
}

const sizeToClassName: Record<FontSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

const TextScaled: React.FC<TextScaledProps> = ({
  as: Component = 'span',
  size = 'base',
  className = '',
  children,
  ...props
}) => {
  const sizeClass = sizeToClassName[size] ?? 'text-base';
  return (
    <Component className={`${sizeClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default TextScaled;
