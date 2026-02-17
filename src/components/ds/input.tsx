import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

import { Input as UIInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(({ className, type, ...props }, ref) => {
  return <UIInput type={type} className={cn('rounded-2xl', className)} ref={ref} {...props} />;
});

Input.displayName = 'Input';

export { Input };
