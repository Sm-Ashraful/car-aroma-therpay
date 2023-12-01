"use client";

import { ComponentProps } from "react";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  //   const { pending } = useFormStatus();
  return (
    <button {...props} type="submit" className={`btn btn-primary ${className}`}>
      {children}
    </button>
  );
}
