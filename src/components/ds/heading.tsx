import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const headingVariants = cva('tracking-tight', {
  variants: {
    size: {
      h1: 'text-5xl',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: 'text-2xl',
    },
    weight: {
      bold: 'font-semibold',
      regular: 'font-normal',
    },
  },
  defaultVariants: {
    weight: 'bold',
  },
});

type HeadingSize = NonNullable<VariantProps<typeof headingVariants>['size']>;

type HeadingWeight = NonNullable<VariantProps<typeof headingVariants>['weight']>;

type HeadingProps = {
  size: HeadingSize;
  weight?: HeadingWeight;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement>;

export function Heading({ size, weight, as = 'h1', className, ...props }: HeadingProps) {
  const Component = as;

  return <Component className={cn(headingVariants({ size, weight }), className)} {...props} />;
}
