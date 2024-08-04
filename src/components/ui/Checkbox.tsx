import * as React from 'react';
import { cn } from '@/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(({ className, label, errorMessage, ...props }, ref) => {
  return (
    <div>
      <div className={cn('flex items-center gap-4', className)}>
        <input
          type="checkbox"
          ref={ref}
          {...props}
          className="outline-[#E5E7EB] accent-primary w-4 h-4 text-transparent"
        />

        <label className="text-base text-foreground font-medium">{label}</label>
      </div>

      {errorMessage && <p className="mt-1.5 text-destructive text-sm font-medium">{errorMessage}</p>}
    </div>
  );
});

export default Checkbox;
