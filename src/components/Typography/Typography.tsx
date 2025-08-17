import React, { type ElementType, type HTMLAttributes } from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'label';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  children: React.ReactNode;
  as?: ElementType; // To allow rendering as a different HTML element
}

const getVariantClasses = (variant: TypographyVariant) => {
  switch (variant) {
    case 'h1':
      return 'text-5xl font-bold'; // Example Tailwind classes
    case 'h2':
      return 'text-4xl font-bold';
    case 'h3':
      return 'text-3xl font-bold';
    case 'h4':
      return 'text-2xl font-bold';
    case 'h5':
      return 'text-xl font-bold';
    case 'h6':
      return 'text-lg font-bold';
    case 'body':
      return 'text-base';
    case 'label':
      return 'text-sm font-medium';
    default:
      return 'text-base';
  }
};

const getVariantElement = (variant: TypographyVariant): ElementType => {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    case 'body':
      return 'p';
    case 'label':
      return 'label';
    default:
      return 'p';
  }
};

const Typography = ({
  variant = 'body',
  children,
  as,
  className = '',
  ...rest
}: TypographyProps) => {
  const Component = as || getVariantElement(variant);
  const variantClasses = getVariantClasses(variant);

  return (
    <Component className={`${variantClasses} ${className}`} {...rest}>
      {children}
    </Component>
  );
};

export default Typography