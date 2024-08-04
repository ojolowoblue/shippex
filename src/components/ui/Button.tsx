import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils';

import Spinner from '@/assets/icons/loader.svg?react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: 'primary' | 'outline' | 'plain';
  loading?: boolean;
}

export default function Button(props: Props) {
  const { fullWidth, children, className, variant, disabled, loading, ...rest } = props;

  return (
    <button
      className={cn(
        'h-[46px] px-4 bg-primary text-white text-base rounded-lg flex justify-center gap-2 items-center font-semibold text-[15px]',
        { 'bg-background border text-foreground border-border': variant === 'outline' },
        { 'bg-transparent text-primary border-0': variant === 'plain' },
        { 'w-full': fullWidth },
        { 'bg-[#60A5FA] text-[#EFF6FF] cursor-not-allowed': disabled },
        className,
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <span> {<Spinner width={14} height={14} className="animate-spin" />}</span>} {children}
    </button>
  );
}
