import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

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
          "flex items-center justify-center cursor-pointer rounded-2xl disabled:pointer-events-auto disabled:cursor-not-allowed",
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

SubmitButton.displayName = "SubmitButton";
