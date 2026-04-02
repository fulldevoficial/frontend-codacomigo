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
          'flex h-14 w-full cursor-pointer items-center justify-center rounded-2xl bg-[#F6F6F6] text-gray-500 disabled:pointer-events-auto disabled:cursor-not-allowed',
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
