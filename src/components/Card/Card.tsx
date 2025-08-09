import { twMerge } from 'tailwind-merge';
import type { DefaultComponentSize } from '../../types/common';

export interface CardProps {
  size?: DefaultComponentSize;
  children?: React.ReactNode;
}

function getSizeClasses(size: DefaultComponentSize): string {
  switch (size) {
    case 'sm':
      return 'h-32 p-4';
    case 'lg':
      return 'h-48 p-6';
    case 'md':
    default:
      return 'h-40 p-5';
  }
}

function Card({ size, children }: CardProps) {
  // `border border-line-default rounded-lg p-4 shadow-md ${
  //       size ? `h-${size}` : ''
  //     }`
  return (
    <div
      className={twMerge(
        'border border-line-default rounded-lg shadow-[var(--shadow-md)]',
        getSizeClasses(size || 'md')
      )}
    >
      {children}
    </div>
  );
}
export default Card;
