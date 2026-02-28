import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

type SubmitButtonProps = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ children, className, isLoading = false, disabled, ...rest }, ref) => {
    return (
      <Button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          'flex cursor-pointer items-center justify-center rounded-2xl disabled:pointer-events-auto disabled:cursor-not-allowed',
          className,
        )}
        {...rest}
      >
        {isLoading && <Spinner data-testid="spinner" />}
        {children}
      </Button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';
