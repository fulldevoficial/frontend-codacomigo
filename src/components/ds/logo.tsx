import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import logo from '../images/logo.png'

const logoVariants = cva('', {
  variants: {
    size: {
      sm: 'w-[60px] h-[60px]',
      lg: 'w-[135px] h-[119px]',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

type LogoProps = VariantProps<typeof logoVariants> & {
  className?: string
}

export function Logo({ size, className }: LogoProps) {
  return (
    <div className={cn(logoVariants({ size }), className)}>
      <img
        src={typeof logo === 'string' ? logo : logo.src}
        alt="Logo da aplicação"
        className="w-full h-full object-contain"
      />
    </div>
  )
}