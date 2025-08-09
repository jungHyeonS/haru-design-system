import { twMerge } from 'tailwind-merge';
import type {
  DefaultComponentSize,
  DefaultComponentVariant,
} from '../../types/common';
import { motion } from 'framer-motion'; // 추가

export interface ProgressBarProps {
  width?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: DefaultComponentSize;
  label?: string;
  value?: number;
  isPercent?: boolean;
}

function getVariantClasses(variant: DefaultComponentVariant): string {
  switch (variant) {
    case 'secondary':
      return 'bg-[var(--color-secondary)]';
    case 'outline':
      return 'bg-transparent border border-[var(--color-border)]';
    case 'primary':
    default:
      return 'bg-background';
  }
}

function getSizeClasses(size: DefaultComponentSize): string {
  switch (size) {
    case 'sm':
      return 'h-2';
    case 'lg':
      return 'h-4';
    case 'md':
    default:
      return 'h-3';
  }
}

function ProgressBar({
  variant = 'primary',
  size = 'md',
  width = 'w-[500px]',
  label = '',
  value = 50,
  isPercent = false,
}: ProgressBarProps) {
  const base = 'w-full rounded-full overflow-hidden';
  return (
    <div className='flex flex-col gap-2'>
      <div className='w-full flex flex-row items-center justify-between'>
        <p className='text-sm text-left'>{label}</p>
        <p className='text-sm text-right'>{isPercent ? `${value}%` : ''}</p>
      </div>

      <div
        className={twMerge(
          base,
          getSizeClasses(size),
          getVariantClasses(variant),
          width
        )}
      >
        <motion.div
          className='h-full bg-primary'
          animate={{ width: `${Math.max(0, Math.min(100, value))}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
