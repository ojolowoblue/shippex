import * as React from 'react';
import { cn } from '@/utils';

import Eye from '@/assets/icons/eye.svg?react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  secondaryLabel?: React.ReactNode;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      name,
      startAdornment,
      endAdornment,
      secondaryLabel,
      fullWidth,
      error,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const [inputType, setInputType] = React.useState(type || 'text');

    const toggleType = () => {
      setInputType((prev) => (prev != 'password' ? 'password' : 'text'));
    };

    return (
      <div>
        {(label || secondaryLabel) && (
          <div className="mb-2.5 flex items-baseline justify-between">
            {label && (
              <label className="text-foreground font-semibold text-sm" htmlFor={name}>
                {label}
              </label>
            )}

            {secondaryLabel && <div>{secondaryLabel}</div>}
          </div>
        )}

        <div
          className={cn(
            'h-[46px] min-w-[280px] border focus-within:ring-1 focus-within:ring-primary rounded-lg border-border focus-within:shadow-input focus-within:border-primary transition-all duration-300 px-4 flex items-center gap-4 ',
            { 'w-full': fullWidth },
            {
              'focus-within:ring-destructive focus-within:border-destructive border-destructive focus-within:shadow-input-error':
                error,
            },
            className,
          )}
        >
          {startAdornment && <span>{startAdornment}</span>}

          <input
            type={inputType}
            name={name}
            ref={ref}
            {...props}
            className={cn(
              'outline-none flex-1 h-full border-0 bg-transparent tracking-normal placeholder:tracking-normal placeholder:text-placeholder',
              {
                'tracking-[8px]': inputType === 'password',
              },
            )}
          />

          {type === 'password' && <Eye width={16} height={17} onClick={toggleType} role="button" />}

          {endAdornment && <span>{endAdornment}</span>}
        </div>

        {errorMessage && <p className="mt-2.5 text-destructive text-sm font-medium">{errorMessage}</p>}
      </div>
    );
  },
);

export default Input;
