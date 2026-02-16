import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib/utils";
import { Input as UIInput } from "@/components/ui/input";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <UIInput type={type} className={cn("rounded-2xl", className)} ref={ref} {...props} />
    );
  },
);

Input.displayName = "Input";

export { Input };
