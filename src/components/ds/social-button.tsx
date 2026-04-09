import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SocialButtonProps = {
  label: string;
  icon: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ label, icon, className, ...rest }, ref) => {
    return (
      <Button
        variant="outline"
        ref={ref}
        className={cn(
          'border-color-[var(--border-button)] flex h-14 w-full cursor-pointer items-center justify-center rounded-2xl bg-[var(--background-button)] text-[var(--text-button)] hover:bg-transparent disabled:pointer-events-auto disabled:cursor-not-allowed',
          className,
        )}
        {...rest}
      >
        {icon}
        {label}
      </Button>
    );
  },
);

SocialButton.displayName = 'SocialButton';
